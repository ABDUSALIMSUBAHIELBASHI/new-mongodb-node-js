import React from 'react'
import { MenuItem, Select, FormControl } from '@mui/material'
import { useTranslation } from 'react-i18next'

export default function LanguageSelector() {
  const { i18n } = useTranslation()
  const handleChange = (event) => {
    i18n.changeLanguage(event.target.value)
  }
  return (
    <FormControl variant="standard" sx={{ minWidth: 100 }}>
      <Select value={i18n.language || 'en'} onChange={handleChange} size="small">
        <MenuItem value="en">ENGLISH</MenuItem>
        <MenuItem value="es">FRANCAIS</MenuItem>
        <MenuItem value="ar">ARABIC</MenuItem>
      </Select>
    </FormControl>
  )
}
