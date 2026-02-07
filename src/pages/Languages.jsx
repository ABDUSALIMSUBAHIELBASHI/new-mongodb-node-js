import React from 'react'
import { Typography, Paper, List, ListItem, ListItemText } from '@mui/material'
import { useTranslation } from 'react-i18next'

export default function Languages() {
  const { t } = useTranslation()
  return (
    <Paper sx={{ p: 4 }}>
      <Typography variant="h4" gutterBottom>{t('languages.title')}</Typography>
      <Typography sx={{ mb: 2 }}>{t('languages.description')}</Typography>
      <List>
        <ListItem>
          <ListItemText primary="English" secondary="Native / Fluent" />
        </ListItem>
        <ListItem>
          <ListItemText primary="Spanish" secondary="Conversational" />
        </ListItem>
      </List>
    </Paper>
  )
}
