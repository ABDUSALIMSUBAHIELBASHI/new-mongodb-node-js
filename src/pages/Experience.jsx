import React from 'react'
import { Typography, Paper, List, ListItem, ListItemText } from '@mui/material'
import { useTranslation } from 'react-i18next'

export default function Experience() {
  const { t } = useTranslation()
  return (
    <Paper sx={{ p: 4 }}>
      <Typography variant="h4" gutterBottom>{t('experience.title')}</Typography>
      <Typography sx={{ mb: 2 }}>{t('experience.description')}</Typography>
      <List>
        <ListItem>
          <ListItemText primary="2025–2026 — Senior Developer" secondary="Worked on modern web apps" />
        </ListItem>
        <ListItem>
          <ListItemText primary="2025–2026 — Developer" secondary="Built scalable services" />
        </ListItem>
      </List>
    </Paper>
  )
}
