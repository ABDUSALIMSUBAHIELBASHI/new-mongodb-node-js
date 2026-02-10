import React, { useState, useEffect } from 'react'
import { Typography, Paper, TextField, Button, Box, IconButton, InputAdornment, Stack, Alert, Link, Container } from '@mui/material'
import { Visibility, VisibilityOff } from '@mui/icons-material'
import { useTranslation } from 'react-i18next'
import validator from 'validator'
import SocialLogin from '../components/SocialLogin'
import Footer from '../components/Footer'

export default function Signup() {
  const { t } = useTranslation()
  const [showPassword, setShowPassword] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
  })

  // Clear form on component load and after render
  useEffect(() => {
    setFormData({ name: '', email: '', password: '' })
    setShowPassword(false)
    // Also clear after a brief delay to prevent password managers from refilling
    const timer = setTimeout(() => {
      setFormData({ name: '', email: '', password: '' })
    }, 100)
    return () => clearTimeout(timer)
  }, [])
  const [errors, setErrors] = useState({})
  const [successMsg, setSuccessMsg] = useState('')

  const handleTogglePassword = () => {
    setShowPassword(!showPassword)
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const validateForm = () => {
    const newErrors = {}

    if (!formData.name.trim()) {
      newErrors.name = t('signup.validation.name_required')
    } else if (formData.name.trim().length < 2) {
      newErrors.name = t('signup.validation.name_min')
    }

    if (!formData.email) {
      newErrors.email = t('signup.validation.email_required')
    } else if (!validator.isEmail(formData.email)) {
      newErrors.email = t('signup.validation.email_invalid')
    }

    if (!formData.password) {
      newErrors.password = t('signup.validation.password_required')
    } else if (formData.password.length < 6) {
      newErrors.password = t('signup.validation.password_min')
    } else if (!/(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/.test(formData.password)) {
      newErrors.password = t('signup.validation.password_strength')
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSignup = (e) => {
    e.preventDefault()

    if (validateForm()) {
      setSuccessMsg(t('signup.success', { name: formData.name }))
      setFormData({ name: '', email: '', password: '' })
      setTimeout(() => setSuccessMsg(''), 4000)
      // TODO: Send signup request to backend
      console.log('Signup attempt with:', formData)
    }
  }

  return (
    <Container maxWidth="sm" sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh', py: 4 }}>
      <Paper sx={{ p: 4, flex: 1 }}>
        <Typography variant="h4" gutterBottom sx={{ fontWeight: 800, mb: 1 }}>
          {t('signup.title')}
        </Typography>
        <Typography variant="body2" color="text.secondary" sx={{ mb: 3 }}>
          {t('signup.description')}
        </Typography>

        {successMsg && <Alert severity="success" sx={{ mb: 2 }}>{successMsg}</Alert>}

        <Box component="form" sx={{ display: 'grid', gap: 2 }} onSubmit={handleSignup} autoComplete="off">
          <TextField
            label={t('signup.full_name')}
            name="name"
            value={formData.name}
            onChange={handleChange}
            error={!!errors.name}
            helperText={errors.name}
            fullWidth
            autoComplete="name"
          />
          <TextField
            label={t('signup.email')}
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            error={!!errors.email}
            helperText={errors.email}
            fullWidth
            autoComplete="email"
          />
          <TextField
            label={t('signup.password')}
            type={showPassword ? 'text' : 'password'}
            name="password"
            value={formData.password}
            onChange={handleChange}
            error={!!errors.password}
            helperText={errors.password}
            fullWidth
            autoComplete="new-password"
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton onClick={handleTogglePassword} edge="end">
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />
          <Button
            variant="contained"
            fullWidth
            size="large"
            type="submit"
            sx={{ py: 1.5, borderRadius: 2, textTransform: 'none', fontWeight: 600, mt: 1 }}
          >
            {t('signup.title')}
          </Button>
          <Typography variant="body2" textAlign="center">
            {t('signup.already_have_account')} <Link href="/login" underline="hover">{t('signup.sign_in_link')}</Link>
          </Typography>
        </Box>

        <SocialLogin />
      </Paper>
      <Footer />
    </Container>
  )
}
