import React from 'react'
import { Typography, Container, Button, Box, Stack, Grid, Card, CardContent, Chip } from '@mui/material'
import { useTranslation } from 'react-i18next'
import { FaRocket, FaCode, FaPalette, FaUsers } from 'react-icons/fa'

export default function Home() {
  const { t } = useTranslation()

  const features = [
    { icon: FaRocket, title: 'Fast', description: 'Lightning quick performance' },
    { icon: FaCode, title: 'Modern', description: 'Latest technologies' },
    { icon: FaPalette, title: 'Beautiful', description: 'Stunning design' },
    { icon: FaUsers, title: 'Collaborative', description: 'Built for teams' },
  ]

  return (
    <Box sx={{ minHeight: '100vh' }}>
      {/* Hero Section with Gradient Background */}
      <Box
        sx={{
          background: 'linear-gradient(135deg, #667eea 0%, #764ba2 25%, #f093fb 50%, #4facfe 75%, #00f2fe 100%)',
          backgroundSize: '400% 400%',
          animation: 'gradient 15s ease infinite',
          color: 'white',
          py: { xs: 8, md: 12 },
          position: 'relative',
          overflow: 'hidden',
          '@keyframes gradient': {
            '0%': { backgroundPosition: '0% 50%' },
            '50%': { backgroundPosition: '100% 50%' },
            '100%': { backgroundPosition: '0% 50%' },
          },
          '&::before': {
            content: '""',
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: 'rgba(0, 0, 0, 0.3)',
            zIndex: 1,
          },
        }}
      >
        <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 2 }}>
          <Grid container spacing={6} alignItems="center">
            <Grid item xs={12} md={6}>
              <Chip
              label={t('home.welcome')}
                variant="outlined"
                sx={{
                  mb: 3,
                  color: 'white',
                  borderColor: 'rgba(255, 255, 255, 0.7)',
                  fontWeight: 'bold',
                  fontSize: '0.9rem',
                }}
              />
              <Typography
                variant="h1"
                sx={{
                  fontWeight: 900,
                  mb: 3,
                  fontSize: { xs: '2.5rem', md: '4rem' },
                  textShadow: '2px 2px 4px rgba(0, 0, 0, 0.3)',
                  lineHeight: 1.2,
                }}
              >
                {t('home.title')}
              </Typography>
              <Typography
                variant="h5"
                sx={{
                  mb: 4,
                  lineHeight: 1.8,
                  fontSize: { xs: '1rem', md: '1.25rem' },
                  opacity: 0.95,
                }}
              >
                {t('home.description')}
              </Typography>
              <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2}>
                <Button
                  variant="contained"
                  size="large"
                  sx={{
                    borderRadius: 8,
                    px: 4,
                    py: 1.5,
                    backgroundColor: 'white',
                    color: '#667eea',
                    fontWeight: 'bold',
                    fontSize: '1rem',
                    '&:hover': {
                      backgroundColor: '#f0f0f0',
                      transform: 'translateY(-2px)',
                      boxShadow: '0 10px 20px rgba(0, 0, 0, 0.2)',
                    },
                    transition: 'all 0.3s ease',
                  }}
                >
                  {t('home.get_started')}
                </Button>
                <Button
                  variant="outlined"
                  size="large"
                  sx={{
                    borderRadius: 8,
                    px: 4,
                    py: 1.5,
                    color: 'white',
                    borderColor: 'white',
                    borderWidth: 2,
                    fontWeight: 'bold',
                    fontSize: '1rem',
                    '&:hover': {
                      backgroundColor: 'rgba(255, 255, 255, 0.1)',
                      transform: 'translateY(-2px)',
                    },
                    transition: 'all 0.3s ease',
                  }}
                  onClick={() => window.open('https://gooodidae.netlify.app/', '_blank')}
                >
                  Visit Live Demo
                </Button>
              </Stack>
            </Grid>

            <Grid item xs={12} md={6}>
              <Box
                sx={{
                  width: '100%',
                  height: { xs: 300, md: 450 },
                  borderRadius: 6,
                  overflow: 'hidden',
                  boxShadow: '0 20px 60px rgba(0, 0, 0, 0.3)',
                  backgroundColor: 'rgba(255, 255, 255, 0.1)',
                  backdropFilter: 'blur(10px)',
                  border: '1px solid rgba(255, 255, 255, 0.2)',
                  transition: 'transform 0.3s ease',
                  '&:hover': {
                    transform: 'translateY(-10px)',
                  },
                }}
              >
                <img
                  src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=600&fit=crop"
                  alt="Hero"
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                  }}
                />
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Features Section */}
      <Container maxWidth="lg" sx={{ py: 10 }}>
        <Typography
          variant="h2"
          sx={{
            fontWeight: 900,
            mb: 2,
            textAlign: 'center',
            background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
            backgroundClip: 'text',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            fontSize: { xs: '2rem', md: '3rem' },
          }}
        >
          Why Choose Us
        </Typography>
        <Typography
          variant="h6"
          sx={{
            textAlign: 'center',
            mb: 6,
            color: 'text.secondary',
            maxWidth: 600,
            mx: 'auto',
            lineHeight: 1.6,
          }}
        >
          Discover the perfect blend of performance, design, and functionality
        </Typography>

        <Grid container spacing={3}>
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <Grid item xs={12} sm={6} md={3} key={index}>
                <Card
                  sx={{
                    height: '100%',
                    background: 'linear-gradient(135deg, rgba(102, 126, 234, 0.1) 0%, rgba(240, 147, 251, 0.1) 100%)',
                    border: '1px solid rgba(102, 126, 234, 0.2)',
                    borderRadius: 3,
                    transition: 'all 0.3s ease',
                    cursor: 'pointer',
                    '&:hover': {
                      transform: 'translateY(-10px)',
                      boxShadow: '0 20px 40px rgba(102, 126, 234, 0.2)',
                      borderColor: '#667eea',
                    },
                  }}
                >
                  <CardContent sx={{ textAlign: 'center' }}>
                    <Box
                      sx={{
                        fontSize: 48,
                        mb: 2,
                        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                        backgroundClip: 'text',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                      }}
                    >
                      <Icon />
                    </Box>
                    <Typography
                      variant="h6"
                      sx={{ fontWeight: 'bold', mb: 1, color: '#333' }}
                    >
                      {feature.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {feature.description}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            )
          })}
        </Grid>
      </Container>

      {/* CTA Section */}
      <Box
        sx={{
          background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
          color: 'white',
          py: 10,
          textAlign: 'center',
        }}
      >
        <Container maxWidth="md">
          <Typography variant="h2" sx={{ fontWeight: 900, mb: 3, fontSize: { xs: '2rem', md: '2.5rem' } }}>
            Ready to Get Started?
          </Typography>
          <Typography variant="h6" sx={{ mb: 4, opacity: 0.95, lineHeight: 1.6 }}>
            Join us today and experience the best in class features
          </Typography>
          <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2} justifyContent="center">
            <Button
              variant="contained"
              size="large"
              sx={{
                borderRadius: 8,
                px: 4,
                py: 1.5,
                backgroundColor: 'white',
                color: '#667eea',
                fontWeight: 'bold',
                '&:hover': {
                  backgroundColor: '#f0f0f0',
                  transform: 'translateY(-2px)',
                },
                transition: 'all 0.3s ease',
              }}
            >
              {t('home.get_started')}
            </Button>
            <Button
              variant="outlined"
              size="large"
              sx={{
                borderRadius: 8,
                px: 4,
                py: 1.5,
                color: 'white',
                borderColor: 'white',
                fontWeight: 'bold',
                '&:hover': {
                  backgroundColor: 'rgba(255, 255, 255, 0.1)',
                  transform: 'translateY(-2px)',
                },
                transition: 'all 0.3s ease',
              }}
              onClick={() => window.open('https://goodidae.netlify.app/', '_blank')}
            >
              View Demo
            </Button>
          </Stack>
        </Container>
      </Box>
    </Box>
  )
}