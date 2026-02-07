import React, { useState } from 'react'
import { AppBar, Toolbar, Typography, Button, Box, Container, Drawer, List, ListItem, ListItemButton, ListItemText, IconButton } from '@mui/material'
import { Link as RouterLink, useLocation } from 'react-router-dom'
import MenuIcon from '@mui/icons-material/Menu'
import CloseIcon from '@mui/icons-material/Close'
import { useTranslation } from 'react-i18next'
import LanguageSelector from './LanguageSelector'

export default function Navbar() {
  const { t } = useTranslation()
  const [mobileOpen, setMobileOpen] = useState(false)
  const location = useLocation()

  const navLinks = [
    { label: t('nav.home'), path: '/' },
    { label: t('nav.about'), path: '/about' },
    { label: t('nav.experience'), path: '/experience' },
    { label: t('nav.education'), path: '/education' },
    { label: t('nav.languages'), path: '/languages' },
  ]

  const authLinks = [
    { label: t('nav.login'), path: '/login' },
    { label: t('nav.signup'), path: '/signup' },
    { label: '👥 Admin', path: '/admin/dashboard' },
  ]

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen)
  }

  const isActive = (path) => location.pathname === path

  const drawer = (
    <Box sx={{ width: 250, p: 2 }}>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
        <Typography variant="h6" sx={{ fontWeight: 800 }}>Menu</Typography>
        <IconButton onClick={handleDrawerToggle}>
          <CloseIcon />
        </IconButton>
      </Box>
      <List>
        {navLinks.map((link) => (
          <ListItem key={link.path} disablePadding sx={{ mb: 1 }}>
            <ListItemButton
              component={RouterLink}
              to={link.path}
              onClick={handleDrawerToggle}
              sx={{
                borderRadius: 1,
                bgcolor: isActive(link.path) ? 'primary.light' : 'transparent',
                color: isActive(link.path) ? 'primary.main' : 'inherit',
              }}
            >
              <ListItemText primary={link.label} sx={{ fontWeight: isActive(link.path) ? 600 : 400 }} />
            </ListItemButton>
          </ListItem>
        ))}
        <Box sx={{ my: 2, borderTop: '1px solid', borderColor: 'divider' }} />
        {authLinks.map((link) => (
          <ListItem key={link.path} disablePadding sx={{ mb: 1 }}>
            <ListItemButton
              component={RouterLink}
              to={link.path}
              onClick={handleDrawerToggle}
              sx={{
                borderRadius: 1,
                bgcolor: isActive(link.path) ? 'primary.light' : 'transparent',
                color: isActive(link.path) ? 'primary.main' : 'inherit',
              }}
            >
              <ListItemText primary={link.label} sx={{ fontWeight: isActive(link.path) ? 600 : 400 }} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Box sx={{ mt: 3 }}>
        <LanguageSelector />
      </Box>
    </Box>
  )

  return (
    <AppBar position="sticky" sx={{ boxShadow: 2 }}>
      <Container maxWidth="lg">
        <Toolbar disableGutters sx={{ justifyContent: 'space-between', py: 1 }}>
          {/* Logo */}
          <Typography
            variant="h6"
            component={RouterLink}
            to="/"
            sx={{
              fontWeight: 900,
              fontSize: { xs: '1.2rem', md: '1.5rem' },
              color: 'inherit',
              textDecoration: 'none',
              letterSpacing: 1,
            }}
          >
            2026
          </Typography>

          {/* Desktop Navigation */}
          <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: 0.5, alignItems: 'center', flex: 1, justifyContent: 'center' }}>
            {navLinks.map((link) => (
              <Button
                key={link.path}
                component={RouterLink}
                to={link.path}
                sx={{
                  color: isActive(link.path) ? '#fff' : 'rgba(255, 255, 255, 0.7)',
                  fontWeight: isActive(link.path) ? 600 : 400,
                  fontSize: '0.95rem',
                  borderBottom: isActive(link.path) ? '2px solid #fff' : 'none',
                  borderRadius: 0,
                  '&:hover': {
                    bgcolor: 'rgba(255, 255, 255, 0.1)',
                  },
                }}
              >
                {link.label}
              </Button>
            ))}
          </Box>

          {/* Right Side: Auth + Language + Mobile Menu */}
          <Box sx={{ display: 'flex', gap: 1.5, alignItems: 'center' }}>
            {/* Desktop Auth Links */}
            <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: 1 }}>
              {authLinks.map((link) => (
                <Button
                  key={link.path}
                  component={RouterLink}
                  to={link.path}
                  variant={link.label === t('nav.signup') ? 'contained' : 'outlined'}
                  size="small"
                  sx={{
                    color: link.label === t('nav.signup') ? '#fff' : 'inherit',
                    borderColor: 'rgba(255, 255, 255, 0.5)',
                    fontWeight: 600,
                  }}
                >
                  {link.label}
                </Button>
              ))}
            </Box>

            {/* Language Selector */}
            <Box sx={{ display: { xs: 'none', md: 'block' } }}>
              <LanguageSelector />
            </Box>

            {/* Mobile Menu Icon */}
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="end"
              onClick={handleDrawerToggle}
              sx={{ display: { xs: 'flex', md: 'none' } }}
            >
              <MenuIcon />
            </IconButton>
          </Box>
        </Toolbar>
      </Container>

      {/* Mobile Drawer */}
      <Drawer anchor="right" open={mobileOpen} onClose={handleDrawerToggle}>
        {drawer}
      </Drawer>
    </AppBar>
  )
}
