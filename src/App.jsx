import React from 'react'
import { BrowserRouter, Routes, Route, useNavigate } from 'react-router-dom'
import { Container, Box } from '@mui/material'
import { ThemeProvider, createTheme } from '@mui/material/styles'
import './App.css'
import './i18n'
import Navbar from './components/Navbar'

import Home from './pages/Home'
import About from './pages/About'
import Experience from './pages/Experience'
import Login from './pages/Login'
import Signup from './pages/Signup'
import Education from './pages/Education'
import Languages from './pages/Languages'
import AdminDashboard from './pages/AdminDashboard'

const theme = createTheme({
  palette: {
    mode: 'light',
    primary: { main: '#1976d2' },
  },
  typography: {
    fontFamily: 'Inter, Roboto, Arial',
  },
})

const routeOrder = [
  { path: '/', name: 'home' },
  { path: '/about', name: 'about' },
  { path: '/experience', name: 'experience' },
  { path: '/education', name: 'education' },
  { path: '/languages', name: 'languages' },
  { path: '/login', name: 'login' },
  { path: '/signup', name: 'signup' },
]

function NavButtons() {
  const navigate = useNavigate()
  const idx = routeOrder.findIndex((r) => r.path === window.location.pathname)
  const prev = idx > 0 ? routeOrder[idx - 1].path : null
  const next = idx < routeOrder.length - 1 ? routeOrder[idx + 1].path : null
  return (
    <Box sx={{ display: 'flex', gap: 1 }}>
      <button onClick={() => prev && navigate(prev)} disabled={!prev}>
        Prev
      </button>
      <button onClick={() => next && navigate(next)} disabled={!next}>
        Next
      </button>
    </Box>
  )
}

function AppContent() {
  return (
    <>
      <Navbar />

      <Container maxWidth="lg" sx={{ minHeight: 'calc(100vh - 200px)', py: 4 }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/education" element={<Education />} />
          <Route path="/languages" element={<Languages />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/admin/dashboard" element={<AdminDashboard />} />
        </Routes>
      </Container>

      <Box sx={{ position: 'fixed', bottom: 16, right: 16 }}>
        <NavButtons />
      </Box>
    </>
  )
}


export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <AppContent />
      </BrowserRouter>
    </ThemeProvider>
  )
}
