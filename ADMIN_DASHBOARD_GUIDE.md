# 📊 Admin Dashboard & User Management Guide

## Overview

Your website now has a fully functional **Admin Dashboard** where you can see all registered users with their information stored in MongoDB.

---

## 🎯 Features

### 1. **View All Users**
- See all registered users in a beautiful table
- Columns: Name, Email, Phone, Location, Status, Role, Join Date
- Real-time data from MongoDB

### 2. **Search & Filter**
- Search users by name or email
- Instantly filter results

### 3. **User Statistics**
- Total registered users
- Verified users count
- Users with social profile links
- Number of administrators

### 4. **View User Details**
- Click "View" button to see complete user information
- See all social media links (Google, GitHub, Facebook, LinkedIn)
- View bio, phone, location, and registration date

### 5. **Manage Users**
- Delete user accounts
- User verification status
- Admin role assignment

---

## 🌐 Access the Dashboard

**URL:** http://localhost:3000/admin/dashboard

Click the **👥 Admin** button in the navbar to access it.

---

## 📊 Data Stored in MongoDB

When users register or update their profile, the following information is stored in MongoDB:

```javascript
{
  _id: ObjectId,                    // Unique MongoDB ID
  fullName: String,                 // User's full name
  email: String,                    // Email address (unique)
  password: String,                 // Encrypted password
  phone: String,                    // Phone number
  location: String,                 // City/Country
  bio: String,                      // User biography
  profileImage: String,             // Profile picture URL
  socialLinks: {
    google: String,                 // Google account link
    github: String,                 // GitHub profile link
    facebook: String,               // Facebook profile link
    linkedin: String                // LinkedIn profile link
  },
  isVerified: Boolean,              // Email verification status
  role: String,                     // 'user' or 'admin'
  createdAt: Date,                  // Registration timestamp
  updatedAt: Date                   // Last update timestamp
}
```

---

## 🔍 View MongoDB Data Directly

You can also view the MongoDB data directly using these commands:

### 1. **Open MongoDB Shell**
```bash
mongosh
```

### 2. **Connect to Database**
```bash
use react_app
```

### 3. **View All Users**
```bash
db.users.find().pretty()
```

### 4. **View Specific User**
```bash
db.users.findOne({ email: "test@example.com" })
```

### 5. **Count Total Users**
```bash
db.users.countDocuments()
```

### 6. **Find Users by Location**
```bash
db.users.find({ location: "New York" }).pretty()
```

### 7. **Find Verified Users**
```bash
db.users.find({ isVerified: true }).pretty()
```

---

## 📱 API Endpoints for User Data

### Get All Users
```bash
GET http://localhost:5001/api/users
```

**Response:**
```json
{
  "success": true,
  "count": 5,
  "users": [
    {
      "_id": "69871cf5eab7f92b871db582",
      "fullName": "John Doe",
      "email": "john@example.com",
      "phone": "+1234567890",
      "location": "New York",
      "bio": "Software Developer",
      "isVerified": true,
      "role": "user",
      "createdAt": "2026-02-07T10:45:42.123Z"
    }
  ]
}
```

### Get Specific User
```bash
GET http://localhost:5001/api/users/:id
```

### Get User Profile (Protected - Requires Token)
```bash
GET http://localhost:5001/api/users/profile
Authorization: Bearer <JWT_TOKEN>
```

---

## 🚀 How It Works

### Step 1: User Registration
When a user signs up, their data is saved to MongoDB automatically.

### Step 2: Admin Dashboard Loads
When you visit the Admin Dashboard, it fetches all users from the backend API.

### Step 3: Real-time Display
All user information is displayed in a formatted table with search functionality.

### Step 4: MongoDB Storage
All data persists in MongoDB even after the server restarts.

---

## 🔐 Security Features

- ✅ JWT Authentication for protected endpoints
- ✅ Password hashing using bcryptjs
- ✅ Email validation
- ✅ Admin-only operations
- ✅ User can only delete their own account (unless admin)

---

## 📊 Dashboard Screenshots

### Main Dashboard
- User statistics cards showing total, verified, and admin users
- Search bar to find specific users
- Refresh button to reload data
- Full table with all user information

### User Details View
- Click "View" to see complete user profile
- All social media links
- Bio and location information
- Registration date and verification status

---

## 🛠️ Testing the Dashboard

### Test Data
A test user is already created:
- **Name:** Test User
- **Email:** test@example.com
- **Password:** test123456

### Test it Now
1. Go to http://localhost:3000/login
2. Login with test credentials
3. Navigate to http://localhost:3000/admin/dashboard
4. See your user listed in the table

---

## 💡 Use Cases

1. **Website Owner** - Monitor user registrations and engagement
2. **Support Team** - Find user contact information quickly
3. **Marketing Team** - Analyze user locations and demographics
4. **Administrator** - Manage user accounts and permissions

---

## ❓ Troubleshooting

| Issue | Solution |
|-------|----------|
| No users showing | Make sure backend is running on port 5001 |
| Can't search | Check that users have email addresses |
| Delete not working | Make sure you're logged in with admin account |
| MongoDB connection error | Verify MongoDB is running: `mongod` |

---

## 📝 Next Steps

1. ✅ Admin Dashboard created
2. ✅ MongoDB integration complete
3. 🔜 Add role-based access control
4. 🔜 Add user filtering by date range
5. 🔜 Add user export to CSV
6. 🔜 Add user activity logs

---

**Status:** ✅ Ready to use!

Visit http://localhost:3000/admin/dashboard to see all your users now!
