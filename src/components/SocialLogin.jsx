import React from 'react'
import { Box, Button, Divider, Typography, Stack } from '@mui/material'
import { FaGoogle, FaGithub, FaFacebook, FaLinkedin } from 'react-icons/fa'
import { useTranslation } from 'react-i18next'

export default function SocialLogin() {
  const { t } = useTranslation()

  const socialLinks = {
    google: 'https://accounts.google.com',
    github: 'https://github.com/login',
    facebook: 'https://www.facebook.com/login',
    linkedin: 'https://www.linkedin.com/login'
  }

  const handleSocialClick = (url) => {
    window.open(url, '_blank')
  }

  return (
    <Box sx={{ my: 3 }}>
      <Divider sx={{ my: 2 }}>
        <Typography variant="body2" color="text.secondary">
          {t('signup.or_continue')}
        </Typography>
      </Divider>

      <Stack spacing={2}>
        <Button
          fullWidth
          variant="outlined"
          startIcon={<FaGoogle />}
          onClick={() => handleSocialClick(socialLinks.google)}
          sx={{ py: 1.2, textTransform: 'none', fontWeight: 500 }}
        >
          {t('social.google')}
        </Button>

        <Stack direction="row" spacing={1.5}>
          <Button
            fullWidth
            variant="outlined"
            startIcon={<FaGithub />}
            onClick={() => handleSocialClick(socialLinks.github)}
            sx={{ py: 1, textTransform: 'none', fontWeight: 500 }}
          >
            {t('social.github')}
          </Button>
          <Button
            fullWidth
            variant="outlined"
            startIcon={<FaFacebook />}
            onClick={() => handleSocialClick(socialLinks.facebook)}
            sx={{ py: 1, textTransform: 'none', fontWeight: 500, color: '#1877F2', borderColor: '#1877F2' }}
          >
            {t('social.facebook')}
          </Button>
          <Button
            fullWidth
            variant="outlined"
            startIcon={<FaLinkedin />}
            onClick={() => handleSocialClick(socialLinks.linkedin)}
            sx={{ py: 1, textTransform: 'none', fontWeight: 500, color: '#0A66C2', borderColor: '#0A66C2' }}
          >
            {t('social.linkedin')}
          </Button>
        </Stack>
      </Stack>
    </Box>
  )
}
