import React from 'react'
import { Typography, Paper, Box, Divider, Grid } from '@mui/material'
import { useTranslation } from 'react-i18next'

const EduItem = ({ year, title, school }) => (
  <Box sx={{ mb: 4 }}>
    <Typography variant="caption" sx={{ fontWeight: 'bold', color: 'primary.main' }}>{year}</Typography>
    <Typography variant="h6" sx={{ fontWeight: 700 }}>{title}</Typography>
    <Typography variant="body2" color="text.secondary">{school}</Typography>
  </Box>
)

export default function Education() {
  const { t } = useTranslation()
  return (
    <Box sx={{ p: { xs: 2, md: 8 }, bgcolor: 'hsl(38, 61%, 92%)' }}> {/* Warm paper background */}
      <Typography variant="h3" sx={{ mb: 6, fontWeight: 800 }}>{t('education.title')}</Typography>
      <Grid container spacing={4}>
        <Grid item xs={12} md={6}>
          <EduItem year="2024 - 2026" title="Master of AI" school="Tech University" />
          <Divider sx={{ my: 2 }} />
          <EduItem year="2021 - 2024" title="BSc Computer Science" school="Global Institute" />
        </Grid>
      </Grid>
    </Box>
  )
}