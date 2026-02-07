import React from 'react'
import { Box, Typography, Stack, Link } from '@mui/material'
import { FaMapMarkerAlt, FaEnvelope } from 'react-icons/fa'
import { useTranslation } from 'react-i18next'

export default function Footer() {
  const { t } = useTranslation()

  return (
    <Box
      component="footer"
      sx={{
        py: 3,
        px: 2,
        mt: 'auto',
        textAlign: 'center',
        borderTop: '1px solid',
        borderColor: 'divider',
        bgcolor: 'background.paper',
      }}
    >
      <Stack spacing={1.5} alignItems="center">
        <Stack direction="row" spacing={2} alignItems="center" justifyContent="center">
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
            <FaMapMarkerAlt size={14} />
            <Typography variant="body2">{t('footer.location')}</Typography>
          </Box>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
            <FaEnvelope size={14} />
            <Link
              href={`mailto:${t('footer.email')}`}
              underline="hover"
              sx={{ cursor: 'pointer', fontSize: '0.875rem' }}
            >
              {t('footer.email')}
            </Link>
          </Box>
        </Stack>
        <Typography variant="caption" color="text.secondary">
          {t('footer.copyright')}
        </Typography>
      </Stack>
    </Box>
  )
}
