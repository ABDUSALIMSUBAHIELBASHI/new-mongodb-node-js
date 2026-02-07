import React from 'react'
import { Typography, Paper } from '@mui/material'
import { useTranslation } from 'react-i18next'

export default function About() {
  const { t } = useTranslation()
  return (
    <Paper sx={{ p: 4 }}>
      <Typography variant="h4" gutterBottom>{t('about.title')}</Typography>
      <Typography>{t('about.description')}</Typography>
    </Paper>
  )
}
