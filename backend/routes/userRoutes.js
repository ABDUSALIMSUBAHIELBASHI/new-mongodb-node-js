import express from 'express'
import jwt from 'jsonwebtoken'
import User from '../models/User.js'

const router = express.Router()

// Middleware to verify token
const verifyToken = (req, res, next) => {
  const token = req.headers.authorization?.split(' ')[1]

  if (!token) {
    return res.status(401).json({ error: 'No token provided' })
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET)
    req.userId = decoded.id
    next()
  } catch (error) {
    res.status(401).json({ error: 'Invalid or expired token' })
  }
}

// Get User Profile
router.get('/profile', verifyToken, async (req, res) => {
  try {
    const user = await User.findById(req.userId).select('-password')

    if (!user) {
      return res.status(404).json({ error: 'User not found' })
    }

    res.status(200).json({
      success: true,
      user,
    })
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
})

// Get All Users
router.get('/', async (req, res) => {
  try {
    const users = await User.find().select('-password').limit(50)

    res.status(200).json({
      success: true,
      count: users.length,
      users,
    })
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
})

// Get User by ID
router.get('/:id', async (req, res) => {
  try {
    const user = await User.findById(req.params.id).select('-password')

    if (!user) {
      return res.status(404).json({ error: 'User not found' })
    }

    res.status(200).json({
      success: true,
      user,
    })
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
})

// Update User Profile
router.put('/profile', verifyToken, async (req, res) => {
  try {
    const { fullName, phone, location, bio, profileImage, socialLinks } = req.body

    const user = await User.findByIdAndUpdate(
      req.userId,
      {
        fullName,
        phone,
        location,
        bio,
        profileImage,
        socialLinks,
      },
      { new: true, runValidators: true }
    ).select('-password')

    if (!user) {
      return res.status(404).json({ error: 'User not found' })
    }

    res.status(200).json({
      success: true,
      message: 'Profile updated successfully',
      user,
    })
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
})

// Update Password
router.put('/change-password', verifyToken, async (req, res) => {
  try {
    const { currentPassword, newPassword, confirmPassword } = req.body

    if (!currentPassword || !newPassword || !confirmPassword) {
      return res.status(400).json({ error: 'Please provide all password fields' })
    }

    if (newPassword !== confirmPassword) {
      return res.status(400).json({ error: 'New passwords do not match' })
    }

    const user = await User.findById(req.userId).select('+password')

    const isPasswordValid = await user.comparePassword(currentPassword)
    if (!isPasswordValid) {
      return res.status(401).json({ error: 'Current password is incorrect' })
    }

    user.password = newPassword
    await user.save()

    res.status(200).json({
      success: true,
      message: 'Password changed successfully',
    })
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
})

// Delete User
router.delete('/:id', verifyToken, async (req, res) => {
  try {
    // Only allow users to delete their own account or admins
    if (req.userId !== req.params.id) {
      const user = await User.findById(req.userId)
      if (user.role !== 'admin') {
        return res.status(403).json({ error: 'Not authorized to delete this user' })
      }
    }

    const user = await User.findByIdAndDelete(req.params.id)

    if (!user) {
      return res.status(404).json({ error: 'User not found' })
    }

    res.status(200).json({
      success: true,
      message: 'User deleted successfully',
    })
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
})

export default router
