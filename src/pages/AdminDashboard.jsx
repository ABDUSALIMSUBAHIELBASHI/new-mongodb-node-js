import React, { useState, useEffect } from 'react'
import {
  Box,
  Container,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  CircularProgress,
  Chip,
  Button,
  Stack,
  TextField,
  Grid,
} from '@mui/material'
import { useTranslation } from 'react-i18next'
import { FaTrash, FaEye } from 'react-icons/fa'

export default function AdminDashboard() {
  const { t } = useTranslation()
  const [users, setUsers] = useState([])
  const [loading, setLoading] = useState(true)
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedUser, setSelectedUser] = useState(null)

  // Fetch all users
  useEffect(() => {
    fetchUsers()
  }, [])

  const fetchUsers = async () => {
    try {
      setLoading(true)
      const response = await fetch('http://localhost:5001/api/users')
      const data = await response.json()

      if (data.success) {
        setUsers(data.users)
      }
    } catch (error) {
      console.error('Error fetching users:', error)
      alert('Failed to load users. Make sure backend is running on http://localhost:5001')
    } finally {
      setLoading(false)
    }
  }

  // Filter users based on search
  const filteredUsers = users.filter(
    (user) =>
      user.fullName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      user.email.toLowerCase().includes(searchTerm.toLowerCase())
  )

  // Delete user
  const handleDeleteUser = async (userId) => {
    if (!window.confirm('Are you sure you want to delete this user?')) return

    try {
      const token = localStorage.getItem('token')
      const response = await fetch(`http://localhost:5001/api/users/${userId}`, {
        method: 'DELETE',
        headers: {
          'Authorization': `Bearer ${token}`,
        },
      })

      if (response.ok) {
        setUsers(users.filter((u) => u._id !== userId))
        alert('User deleted successfully')
      } else {
        alert('Failed to delete user')
      }
    } catch (error) {
      console.error('Error deleting user:', error)
      alert('Error deleting user')
    }
  }

  return (
    <Box sx={{ minHeight: '100vh', py: 6, background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)' }}>
      <Container maxWidth="lg">
        {/* Header */}
        <Box sx={{ mb: 6, color: 'white' }}>
          <Typography
            variant="h2"
            sx={{
              fontWeight: 900,
              mb: 2,
              fontSize: { xs: '2rem', md: '3rem' },
            }}
          >
            👥 Admin Dashboard
          </Typography>
          <Typography variant="h6" sx={{ opacity: 0.95, mb: 3 }}>
            View and manage all registered users
          </Typography>
        </Box>

        {/* Stats Cards */}
        <Grid container spacing={3} sx={{ mb: 4 }}>
          <Grid item xs={12} sm={6} md={3}>
            <Paper
              sx={{
                p: 3,
                background: 'rgba(255, 255, 255, 0.95)',
                borderRadius: 3,
                textAlign: 'center',
              }}
            >
              <Typography variant="h4" sx={{ fontWeight: 'bold', color: '#667eea', mb: 1 }}>
                {users.length}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Total Users
              </Typography>
            </Paper>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Paper
              sx={{
                p: 3,
                background: 'rgba(255, 255, 255, 0.95)',
                borderRadius: 3,
                textAlign: 'center',
              }}
            >
              <Typography variant="h4" sx={{ fontWeight: 'bold', color: '#764ba2', mb: 1 }}>
                {users.filter((u) => u.isVerified).length}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Verified Users
              </Typography>
            </Paper>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Paper
              sx={{
                p: 3,
                background: 'rgba(255, 255, 255, 0.95)',
                borderRadius: 3,
                textAlign: 'center',
              }}
            >
              <Typography variant="h4" sx={{ fontWeight: 'bold', color: '#f093fb', mb: 1 }}>
                {users.filter((u) => u.socialLinks).length}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Social Profile Links
              </Typography>
            </Paper>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Paper
              sx={{
                p: 3,
                background: 'rgba(255, 255, 255, 0.95)',
                borderRadius: 3,
                textAlign: 'center',
              }}
            >
              <Typography variant="h4" sx={{ fontWeight: 'bold', color: '#4facfe', mb: 1 }}>
                {users.filter((u) => u.role === 'admin').length}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Administrators
              </Typography>
            </Paper>
          </Grid>
        </Grid>

        {/* Search and Refresh */}
        <Paper sx={{ p: 3, mb: 4, borderRadius: 3 }}>
          <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2} sx={{ mb: 2 }}>
            <TextField
              placeholder="Search by name or email..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              sx={{ flex: 1 }}
              fullWidth
            />
            <Button
              variant="contained"
              onClick={fetchUsers}
              sx={{
                background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                px: 3,
              }}
            >
              Refresh
            </Button>
          </Stack>
        </Paper>

        {/* Users Table */}
        <Paper sx={{ borderRadius: 3, overflow: 'hidden' }}>
          {loading ? (
            <Box sx={{ p: 4, textAlign: 'center', minHeight: 300, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
              <CircularProgress sx={{ mb: 2 }} />
              <Typography>Loading users...</Typography>
            </Box>
          ) : filteredUsers.length === 0 ? (
            <Box sx={{ p: 4, textAlign: 'center' }}>
              <Typography color="text.secondary">
                {searchTerm ? 'No users found matching your search' : 'No users registered yet'}
              </Typography>
            </Box>
          ) : (
            <TableContainer>
              <Table>
                <TableHead>
                  <TableRow
                    sx={{
                      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                      color: 'white',
                      '& th': {
                        color: 'white',
                        fontWeight: 'bold',
                      },
                    }}
                  >
                    <TableCell sx={{ color: 'white' }}>Full Name</TableCell>
                    <TableCell sx={{ color: 'white' }}>Email</TableCell>
                    <TableCell sx={{ color: 'white' }}>Phone</TableCell>
                    <TableCell sx={{ color: 'white' }}>Location</TableCell>
                    <TableCell sx={{ color: 'white' }}>Status</TableCell>
                    <TableCell sx={{ color: 'white' }}>Role</TableCell>
                    <TableCell sx={{ color: 'white' }}>Joined</TableCell>
                    <TableCell sx={{ color: 'white' }}>Actions</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {filteredUsers.map((user, index) => (
                    <TableRow
                      key={user._id}
                      sx={{
                        '&:hover': {
                          backgroundColor: '#f5f5f5',
                        },
                        borderBottom: '1px solid #e0e0e0',
                      }}
                    >
                      <TableCell sx={{ fontWeight: 'bold' }}>{user.fullName}</TableCell>
                      <TableCell>{user.email}</TableCell>
                      <TableCell>{user.phone || '-'}</TableCell>
                      <TableCell>{user.location || '-'}</TableCell>
                      <TableCell>
                        <Chip
                          label={user.isVerified ? 'Verified' : 'Not Verified'}
                          color={user.isVerified ? 'success' : 'warning'}
                          size="small"
                        />
                      </TableCell>
                      <TableCell>
                        <Chip
                          label={user.role}
                          color={user.role === 'admin' ? 'error' : 'primary'}
                          variant="outlined"
                          size="small"
                        />
                      </TableCell>
                      <TableCell sx={{ fontSize: '0.85rem' }}>
                        {new Date(user.createdAt).toLocaleDateString()}
                      </TableCell>
                      <TableCell>
                        <Stack direction="row" spacing={1}>
                          <Button
                            size="small"
                            variant="outlined"
                            startIcon={<FaEye />}
                            onClick={() => setSelectedUser(user)}
                            sx={{ minWidth: 'auto', p: 0.5 }}
                          >
                            View
                          </Button>
                          <Button
                            size="small"
                            variant="outlined"
                            color="error"
                            startIcon={<FaTrash />}
                            onClick={() => handleDeleteUser(user._id)}
                            sx={{ minWidth: 'auto', p: 0.5 }}
                          >
                            Delete
                          </Button>
                        </Stack>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          )}
        </Paper>

        {/* User Details Modal */}
        {selectedUser && (
          <Paper
            sx={{
              mt: 4,
              p: 4,
              borderRadius: 3,
              background: 'white',
              border: '2px solid #667eea',
            }}
          >
            <Stack direction="row" justifyContent="space-between" alignItems="center" sx={{ mb: 3 }}>
              <Typography variant="h5" sx={{ fontWeight: 'bold' }}>
                User Details
              </Typography>
              <Button onClick={() => setSelectedUser(null)}>Close</Button>
            </Stack>

            <Grid container spacing={3}>
              <Grid item xs={12} sm={6}>
                <Typography variant="body2" color="text.secondary">
                  Full Name
                </Typography>
                <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
                  {selectedUser.fullName}
                </Typography>
              </Grid>
              <Grid item xs={12} sm={6}>
                <Typography variant="body2" color="text.secondary">
                  Email
                </Typography>
                <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
                  {selectedUser.email}
                </Typography>
              </Grid>
              <Grid item xs={12} sm={6}>
                <Typography variant="body2" color="text.secondary">
                  Phone
                </Typography>
                <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
                  {selectedUser.phone || 'Not provided'}
                </Typography>
              </Grid>
              <Grid item xs={12} sm={6}>
                <Typography variant="body2" color="text.secondary">
                  Location
                </Typography>
                <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
                  {selectedUser.location || 'Not provided'}
                </Typography>
              </Grid>
              <Grid item xs={12}>
                <Typography variant="body2" color="text.secondary">
                  Bio
                </Typography>
                <Typography variant="body1">
                  {selectedUser.bio || 'No bio provided'}
                </Typography>
              </Grid>
              <Grid item xs={12}>
                <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                  Social Links
                </Typography>
                <Stack spacing={1}>
                  {selectedUser.socialLinks && Object.entries(selectedUser.socialLinks).map(
                    ([platform, link]) =>
                      link && (
                        <Box key={platform}>
                          <Typography variant="body2" sx={{ fontWeight: 'bold', textTransform: 'capitalize' }}>
                            {platform}:
                          </Typography>
                          <Typography
                            component="a"
                            href={link}
                            target="_blank"
                            rel="noopener noreferrer"
                            sx={{ color: '#667eea', textDecoration: 'none', wordBreak: 'break-all' }}
                          >
                            {link}
                          </Typography>
                        </Box>
                      )
                  )}
                </Stack>
              </Grid>
              <Grid item xs={12}>
                <Typography variant="body2" color="text.secondary">
                  Registered On
                </Typography>
                <Typography variant="body1">
                  {new Date(selectedUser.createdAt).toLocaleString()}
                </Typography>
              </Grid>
            </Grid>
          </Paper>
        )}
      </Container>
    </Box>
  )
}
