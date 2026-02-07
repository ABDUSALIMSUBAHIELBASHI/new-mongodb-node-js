# React Backend API with MongoDB

This is a Node.js/Express backend for the React application with MongoDB integration.

## 📋 Prerequisites

- Node.js (v14 or higher)
- MongoDB (running locally on port 27017)
- npm or yarn

## 🚀 Setup Instructions

### 1. Install Dependencies

```bash
cd backend
npm install
```

### 2. Configure MongoDB

Make sure MongoDB is running locally:

```bash
# On Linux/Mac
mongod

# Or if MongoDB is installed as a service, start it:
sudo service mongod start
```

### 3. Environment Variables

The `.env` file is already configured with:
```
MONGODB_URI=mongodb://localhost:27017/react_app
PORT=5000
JWT_SECRET=your_jwt_secret_key_here_change_this_in_production
NODE_ENV=development
```

To change the JWT secret, edit `.env`:
```bash
JWT_SECRET=your_strong_secret_key_here
```

### 4. Start the Server

**Development mode (with auto-reload):**
```bash
npm run dev
```

**Production mode:**
```bash
npm start
```

The server will run on `http://localhost:5000`

## 📚 API Endpoints

### Authentication Routes (`/api/auth`)

#### Register User
- **POST** `/api/auth/register`
- **Body:**
```json
{
  "fullName": "John Doe",
  "email": "john@example.com",
  "password": "password123",
  "confirmPassword": "password123"
}
```
- **Response:** Returns JWT token and user data

#### Login User
- **POST** `/api/auth/login`
- **Body:**
```json
{
  "email": "john@example.com",
  "password": "password123"
}
```
- **Response:** Returns JWT token and user data

#### Social Login
- **POST** `/api/auth/social-login`
- **Body:**
```json
{
  "email": "user@example.com",
  "fullName": "User Name",
  "profileImage": "https://example.com/image.jpg",
  "provider": "Google"
}
```
- **Response:** Returns JWT token and user data

### User Routes (`/api/users`)

#### Get User Profile (Protected)
- **GET** `/api/users/profile`
- **Headers:** `Authorization: Bearer <token>`
- **Response:** Returns authenticated user's profile

#### Get All Users
- **GET** `/api/users`
- **Response:** Returns list of all users

#### Get User by ID
- **GET** `/api/users/:id`
- **Response:** Returns user data for specific ID

#### Update User Profile (Protected)
- **PUT** `/api/users/profile`
- **Headers:** `Authorization: Bearer <token>`
- **Body:**
```json
{
  "fullName": "John Doe",
  "phone": "+1234567890",
  "location": "New York, USA",
  "bio": "Software Developer",
  "profileImage": "https://example.com/image.jpg",
  "socialLinks": {
    "google": "https://google.com/profile",
    "github": "https://github.com/johndoe",
    "facebook": "https://facebook.com/johndoe",
    "linkedin": "https://linkedin.com/in/johndoe"
  }
}
```

#### Change Password (Protected)
- **PUT** `/api/users/change-password`
- **Headers:** `Authorization: Bearer <token>`
- **Body:**
```json
{
  "currentPassword": "oldpassword123",
  "newPassword": "newpassword123",
  "confirmPassword": "newpassword123"
}
```

#### Delete User (Protected)
- **DELETE** `/api/users/:id`
- **Headers:** `Authorization: Bearer <token>`
- **Note:** Users can only delete their own accounts. Admins can delete any account.

### Health Check
- **GET** `/api/health`
- **Response:** Server status

## 📊 MongoDB Collections

### User Collection
```javascript
{
  _id: ObjectId,
  fullName: String,
  email: String (unique),
  password: String (hashed),
  phone: String,
  location: String,
  bio: String,
  profileImage: String,
  socialLinks: {
    google: String,
    github: String,
    facebook: String,
    linkedin: String
  },
  isVerified: Boolean,
  role: String (enum: ['user', 'admin']),
  createdAt: Date,
  updatedAt: Date
}
```

## 🔐 Security Features

- **Password Hashing:** Passwords are hashed using bcryptjs
- **JWT Authentication:** Secure token-based authentication
- **CORS Enabled:** Cross-origin requests are allowed
- **Input Validation:** Email and password validation
- **Error Handling:** Comprehensive error handling

## 📝 Testing API with cURL

### Register a new user:
```bash
curl -X POST http://localhost:5000/api/auth/register \
  -H "Content-Type: application/json" \
  -d '{
    "fullName": "John Doe",
    "email": "john@example.com",
    "password": "password123",
    "confirmPassword": "password123"
  }'
```

### Login:
```bash
curl -X POST http://localhost:5000/api/auth/login \
  -H "Content-Type: application/json" \
  -d '{
    "email": "john@example.com",
    "password": "password123"
  }'
```

### Get Profile (replace TOKEN with actual token):
```bash
curl -X GET http://localhost:5000/api/users/profile \
  -H "Authorization: Bearer TOKEN"
```

## 📦 Dependencies

- **express:** Web framework
- **mongoose:** MongoDB object modeling
- **bcryptjs:** Password hashing
- **jsonwebtoken:** JWT authentication
- **cors:** Cross-origin resource sharing
- **dotenv:** Environment variables
- **validator:** Input validation

## 🛠️ Development

To add more models or routes:

1. Create a new model in `/models` folder
2. Create corresponding routes in `/routes` folder
3. Import and use in `server.js`

## 📞 Support

For issues or questions, check:
- MongoDB connection string in `.env`
- Port 5000 availability
- MongoDB service is running
- All dependencies are installed

Enjoy! 🎉
