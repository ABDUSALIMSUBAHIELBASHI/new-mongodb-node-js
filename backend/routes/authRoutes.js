import express from 'express'
import jwt from 'jsonwebtoken'
import User from '../models/User.js'

const router = express.Router()

// Generate JWT Token
const generateToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: '7d',
  })
}

// Register User
router.post('/register', async (req, res) => {
  try {
    const { fullName, email, password, confirmPassword } = req.body

    // Validation
    if (!fullName || !email || !password || !confirmPassword) {
      return res.status(400).json({ error: 'Please provide all required fields' })
    }

    if (password !== confirmPassword) {
      return res.status(400).json({ error: 'Passwords do not match' })
    }

    if (password.length < 6) {
      return res.status(400).json({ error: 'Password must be at least 6 characters' })
    }

    // Check if user already exists
    const existingUser = await User.findOne({ email: email.toLowerCase() })
    if (existingUser) {
      return res.status(409).json({ error: 'Email already registered' })
    }

    // Create new user
    const user = new User({
      fullName,
      email: email.toLowerCase(),
      password,
    })

    await user.save()

    // Generate token
    const token = generateToken(user._id)

    res.status(201).json({
      success: true,
      message: 'User registered successfully',
      token,
      user: {
        id: user._id,
        fullName: user.fullName,
        email: user.email,
        profileImage: user.profileImage,
      },
    })
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
})

// Login User
router.post('/login', async (req, res) => {
  try {
    const { email, password } = req.body

    // Validation
    if (!email || !password) {
      return res.status(400).json({ error: 'Please provide email and password' })
    }

    // Check if user exists
    const user = await User.findOne({ email: email.toLowerCase() }).select('+password')
    if (!user) {
      return res.status(401).json({ error: 'Invalid email or password' })
    }

    // Compare password
    const isPasswordValid = await user.comparePassword(password)
    if (!isPasswordValid) {
      return res.status(401).json({ error: 'Invalid email or password' })
    }

    // Generate token
    const token = generateToken(user._id)

    res.status(200).json({
      success: true,
      message: 'Login successful',
      token,
      user: {
        id: user._id,
        fullName: user.fullName,
        email: user.email,
        profileImage: user.profileImage,
        role: user.role,
      },
    })
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
})

// Social Login
router.post('/social-login', async (req, res) => {
  try {
    const { email, fullName, profileImage, provider } = req.body

    if (!email) {
      return res.status(400).json({ error: 'Email is required' })
    }

    let user = await User.findOne({ email: email.toLowerCase() })

    if (!user) {
      user = new User({
        fullName: fullName || 'User',
        email: email.toLowerCase(),
        password: Math.random().toString(36).slice(-12),
        profileImage: profileImage || 'https://via.placeholder.com/150',
        isVerified: true,
      })
      await user.save()
    }

    const token = generateToken(user._id)

    res.status(200).json({
      success: true,
      message: `${provider} login successful`,
      token,
      user: {
        id: user._id,
        fullName: user.fullName,
        email: user.email,
        profileImage: user.profileImage,
      },
    })
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
})

export default router
