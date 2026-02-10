import React, { useState, useEffect } from 'react'
import { Typography, TextField, Button, Box, IconButton, InputAdornment, Link, Stack, Alert } from '@mui/material'
import { Visibility, VisibilityOff } from '@mui/icons-material'
import { useTranslation } from 'react-i18next'
import validator from 'validator'
import SocialLogin from '../components/SocialLogin'

export default function Login() {
  const { t } = useTranslation()
  const [showPassword, setShowPassword] = useState(false)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  // Clear form on component load and after render
  useEffect(() => {
    setEmail('')
    setPassword('')
    setShowPassword(false)
    // Also clear after a brief delay to prevent password managers from refilling
    const timer = setTimeout(() => {
      setEmail('')
      setPassword('')
    }, 100)
    return () => clearTimeout(timer)
  }, [])
  const [errors, setErrors] = useState({})
  const [successMsg, setSuccessMsg] = useState('')

  const validateForm = () => {
    const newErrors = {}
    
    if (!email) {
      newErrors.email = t('login.validation.email_required')
    } else if (!validator.isEmail(email)) {
      newErrors.email = t('login.validation.email_invalid')
    }
    
    if (!password) {
      newErrors.password = t('login.validation.password_required')
    } else if (password.length < 6) {
      newErrors.password = t('login.validation.password_min')
    }
    
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleLogin = (e) => {
    e.preventDefault()
    
    if (validateForm()) {
      setSuccessMsg(t('login.success'))
      setEmail('')
      setPassword('')
      setTimeout(() => setSuccessMsg(''), 3000)
      // TODO: Send login request to backend
      console.log('Login attempt with:', { email, password })
    }
  }

  return (
    <Box sx={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', p: 2 }}>
      <Box sx={{ maxWidth: 400, width: '100%', textAlign: 'center' }}>
        <Typography variant="h4" sx={{ fontWeight: 800, mb: 1 }}>{t('login.welcome_back')}</Typography>
        <Typography variant="body2" color="text.secondary" sx={{ mb: 4 }}>{t('login.description')}</Typography>
        
        {successMsg && <Alert severity="success" sx={{ mb: 2 }}>{successMsg}</Alert>}
        
        <Stack spacing={2.5} component="form" onSubmit={handleLogin} autoComplete="off">
          <TextField
            fullWidth
            label={t('login.email')}
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            error={!!errors.email}
            helperText={errors.email}
            variant="filled"
            hiddenLabel
            autoComplete="email"
          />
          <TextField
            fullWidth
            label={t('login.password')}
            type={showPassword ? 'text' : 'password'}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            error={!!errors.password}
            helperText={errors.password}
            variant="filled"
            autoComplete="new-password"
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton onClick={() => setShowPassword(!showPassword)} edge="end">
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
            sx={{ py: 1.5, borderRadius: 2, textTransform: 'none', fontWeight: 600 }}
          >
            {t('login.sign_in')}
          </Button>
          <Typography variant="body2">
            {t('login.dont_have_account')} <Link href="/signup" underline="hover">{t('login.sign_up_link')}</Link>
          </Typography>
        </Stack>

        <SocialLogin />
      </Box>
    </Box>
  )
}