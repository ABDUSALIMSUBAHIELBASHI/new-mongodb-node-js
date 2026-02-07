# 👥 Complete User Management Guide

## See All Registered Users - 3 Methods

Your website now has **3 ways** to see who registers on your website!

---

## Method 1: 🌐 Admin Dashboard (Easiest)

### Access via Web Browser
1. Open http://localhost:3000/admin/dashboard
2. See all users in a beautiful table
3. Search by name or email
4. View detailed user information
5. See statistics (total users, verified users, etc.)

### Features
- ✅ Real-time user list
- ✅ Search functionality
- ✅ User statistics
- ✅ View full profile details
- ✅ Delete user accounts
- ✅ See registration dates
- ✅ See social media links

### User Information Displayed
```
Name       | Email              | Phone       | Location    | Status     | Role  | Joined     | Actions
-----------|-------------------|-------------|-------------|------------|-------|------------|----------
John Doe   | john@example.com   | +123456789  | New York    | Verified   | user  | 2/7/2026   | View/Delete
Jane Smith | jane@example.com   | +987654321  | Los Angeles | Verified   | admin | 2/7/2026   | View/Delete
```

---

## Method 2: 🔌 Backend API (For Developers)

### Get All Users via API
```bash
curl http://localhost:5001/api/users
```

### Response Example
```json
{
  "success": true,
  "count": 2,
  "users": [
    {
      "_id": "69871cf5eab7f92b871db582",
      "fullName": "John Doe",
      "email": "john@example.com",
      "phone": "+1234567890",
      "location": "New York",
      "bio": "Software Developer",
      "profileImage": "https://example.com/image.jpg",
      "socialLinks": {
        "google": "https://google.com/john",
        "github": "https://github.com/john",
        "facebook": "https://facebook.com/john",
        "linkedin": "https://linkedin.com/in/john"
      },
      "isVerified": true,
      "role": "user",
      "createdAt": "2026-02-07T10:45:42.123Z",
      "updatedAt": "2026-02-07T10:45:42.123Z"
    }
  ]
}
```

### More API Examples
```bash
# Get specific user
curl http://localhost:5001/api/users/69871cf5eab7f92b871db582

# Get your profile (requires JWT token)
curl -H "Authorization: Bearer <YOUR_TOKEN>" \
     http://localhost:5001/api/users/profile

# Get API health check
curl http://localhost:5001/api/health
```

---

## Method 3: 💾 MongoDB Database (Direct Access)

### Access MongoDB
```bash
# Step 1: Open MongoDB shell
mongosh

# Step 2: Select your database
use react_app

# Step 3: View all users
db.users.find().pretty()
```

### View All Users
```javascript
db.users.find().pretty()
```

**Output:**
```json
[
  {
    "_id": ObjectId("69871cf5eab7f92b871db582"),
    "fullName": "John Doe",
    "email": "john@example.com",
    "phone": "+1234567890",
    "location": "New York",
    "bio": "Software Developer",
    "profileImage": "https://example.com/image.jpg",
    "socialLinks": {
      "google": "https://google.com/john",
      "github": "https://github.com/john",
      "facebook": "https://facebook.com/john",
      "linkedin": "https://linkedin.com/in/john"
    },
    "isVerified": true,
    "role": "user",
    "createdAt": ISODate("2026-02-07T10:45:42.123Z"),
    "updatedAt": ISODate("2026-02-07T10:45:42.123Z")
  }
]
```

### Useful MongoDB Queries

#### Count Total Users
```bash
db.users.countDocuments()
# Output: 5
```

#### Find User by Email
```bash
db.users.findOne({ email: "john@example.com" })
```

#### Find All Verified Users
```bash
db.users.find({ isVerified: true }).pretty()
```

#### Find All Admin Users
```bash
db.users.find({ role: "admin" }).pretty()
```

#### Find Users by Location
```bash
db.users.find({ location: "New York" }).pretty()
```

#### Find Users Registered Today
```bash
db.users.find({
  createdAt: {
    $gte: new Date("2026-02-07T00:00:00Z")
  }
}).pretty()
```

#### Find Users with Social Links
```bash
db.users.find({ 
  "socialLinks.github": { $exists: true } 
}).pretty()
```

#### Update User Information
```bash
db.users.updateOne(
  { email: "john@example.com" },
  { $set: { phone: "+9876543210" } }
)
```

#### Delete a User
```bash
db.users.deleteOne({ email: "john@example.com" })
```

---

## 🎯 Comparison Table

| Feature | Admin Dashboard | Backend API | MongoDB Direct |
|---------|-----------------|-------------|----------------|
| User-Friendly UI | ✅ Yes | ❌ No | ❌ No |
| Search/Filter | ✅ Yes | ➖ Partial | ✅ Advanced |
| Delete Users | ✅ Yes | ✅ Via API | ✅ Direct |
| View Details | ✅ Yes | ✅ Full JSON | ✅ Full Document |
| Real-time | ✅ Yes | ✅ Yes | ✅ Yes |
| Requires Auth | ❌ No | ❌ No* | ✅ Local Access |
| Best For | Management | Integration | Development |

*Some endpoints may require authentication

---

## 📊 User Data Fields Explained

```javascript
{
  _id: MongoDB unique identifier,
  fullName: "User's full name",
  email: "Unique email address",
  password: "Encrypted/hashed password",
  phone: "+1234567890 format optional",
  location: "City or country information",
  bio: "User's biography/about section",
  profileImage: "URL to user's profile picture",
  socialLinks: {
    google: "Google profile link",
    github: "GitHub profile link",
    facebook: "Facebook profile link",
    linkedin: "LinkedIn profile link"
  },
  isVerified: "Boolean - email verified or not",
  role: "user or admin",
  createdAt: "Timestamp when user registered",
  updatedAt: "Timestamp of last update"
}
```

---

## 🚀 Quick Start

### Start Everything (Recommended)
```bash
# Make backend and frontend run together
cd ~/react

# Terminal 1: Start backend
cd backend && npm run dev

# Terminal 2: Start frontend
npm run dev

# Terminal 3: Open MongoDB shell
mongosh
use react_app
db.users.find().pretty()
```

### Visit Admin Dashboard
```
http://localhost:3000/admin/dashboard
```

---

## 📝 Test Workflow

### Step 1: Create Test User
```bash
curl -X POST http://localhost:5001/api/auth/register \
  -H "Content-Type: application/json" \
  -d '{
    "fullName": "Test User",
    "email": "test@example.com",
    "password": "test123456",
    "confirmPassword": "test123456"
  }'
```

### Step 2: Check in Admin Dashboard
Go to http://localhost:3000/admin/dashboard to see the user

### Step 3: Verify in MongoDB
```bash
mongosh
use react_app
db.users.find({ email: "test@example.com" }).pretty()
```

### Step 4: Update User Profile
```bash
# Get JWT token first (from register response)
TOKEN="your_jwt_token_here"

curl -X PUT http://localhost:5001/api/users/profile \
  -H "Authorization: Bearer $TOKEN" \
  -H "Content-Type: application/json" \
  -d '{
    "phone": "+1234567890",
    "location": "New York",
    "bio": "My bio here",
    "socialLinks": {
      "github": "https://github.com/testuser",
      "linkedin": "https://linkedin.com/in/testuser"
    }
  }'
```

### Step 5: See Updated Data
- Go to Admin Dashboard → Click View
- Or check MongoDB: `db.users.findOne({ email: "test@example.com" })`

---

## 🔐 Security Notes

- ✅ Passwords are encrypted with bcryptjs
- ✅ JWT tokens expire in 7 days
- ✅ API endpoints use CORS for security
- ✅ User data is validated before saving
- ✅ MongoDB ID is unique per user
- ✅ Email addresses are unique (no duplicates)

---

## 💾 Database Backup

### Backup MongoDB Data
```bash
# Export all users to JSON file
mongoexport --db react_app --collection users --out users_backup.json

# Or backup entire database
mongodump --db react_app --out ./backup
```

### Restore MongoDB Data
```bash
# Restore from JSON
mongoimport --db react_app --collection users --file users_backup.json

# Or restore entire database
mongorestore ./backup
```

---

## ❓ FAQ

**Q: Where is my user data stored?**
A: In MongoDB at `mongodb://localhost:27017/react_app` in the `users` collection

**Q: Can I export user data?**
A: Yes! Use `mongoexport` or the Admin Dashboard

**Q: How do I delete a user?**
A: Click the "Delete" button in Admin Dashboard or use MongoDB

**Q: Is user data secure?**
A: Yes! Passwords are encrypted and JWT tokens provide authentication

**Q: Can I see real-time updates?**
A: Yes! Click "Refresh" in Admin Dashboard or query MongoDB directly

---

## 🎉 You're All Set!

Your website now:
- ✅ Collects user information
- ✅ Stores it in MongoDB
- ✅ Displays it in Admin Dashboard
- ✅ Provides API access
- ✅ Allows direct MongoDB access

**Start managing your users now!**

Visit: **http://localhost:3000/admin/dashboard**
