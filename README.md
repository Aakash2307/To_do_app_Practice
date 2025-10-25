# To_do_app_Practice

# Todo List Backend - MERN Stack Learning Journey

A comprehensive backend project for mastering the MERN stack, starting with Node.js fundamentals and progressing to a full-featured REST API.

## 🎯 Project Goal

Build a todo list application backend that serves as a playground for learning and implementing backend concepts. Each new topic learned will be integrated into this project.

## 📚 Learning Path

### Phase 1: Backend Fundamentals
- ✅ Project structure setup
- ✅ Node.js core modules (fs, http)
- ✅ Callbacks, Promises, Async/Await
- ⏳ Express.js framework
- ⏳ MongoDB & Mongoose
- ⏳ RESTful API design
- ⏳ Authentication & Authorization
- ⏳ Error handling & validation
- ⏳ Middleware concepts

### Phase 2: Advanced Backend
- Database relationships
- File uploads
- Pagination & filtering
- API security best practices
- Testing (Jest/Mocha)

### Phase 3: Frontend Integration
- React frontend
- State management
- API integration
- Full MERN stack deployment

## 🗂️ Project Structure

```
todo-backend/
├── server.js              # Main entry point
├── package.json           # Dependencies and scripts
├── .gitignore            # Git ignore file
├── README.md             # Project documentation
├── config/               # Configuration files
│   └── db.js            # Database connection
├── models/              # Database models
│   └── Todo.js          # Todo schema
├── routes/              # API routes
│   └── todoRoutes.js    # Todo endpoints
├── controllers/         # Business logic
│   └── todoController.js # Todo CRUD operations
├── middleware/          # Custom middleware
│   └── errorHandler.js  # Error handling
├── utils/               # Utility functions
│   └── helpers.js       # Helper functions
└── data/                # JSON file storage (temporary)
    └── todos.json       # File-based todo storage
```

## 🚀 Getting Started

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn
- MongoDB (for later phases)

### Installation

1. **Initialize the project:**
```bash
mkdir todo-backend
cd todo-backend
npm init -y
```

2. **Create folder structure:**
```bash
mkdir controllers routes models middleware utils config data
```

3. **Create initial files:**
```bash
touch server.js
touch data/todos.json
```

4. **Add empty array to todos.json:**
```bash
echo "[]" > data/todos.json
```

### Running the Server

```bash
node server.js
```

Server will run on `http://localhost:3000`

### Testing the API

**Get all todos:**
```bash
curl http://localhost:3000/todos
```

**Homepage:**
```bash
curl http://localhost:3000
```

## 📖 Current Learning Focus

### Topic 1: Node.js HTTP Module
- Creating a basic HTTP server
- Understanding request and response objects
- Routing based on URL and HTTP methods
- Setting headers and status codes

### Topic 2: File System (fs) Module
- Reading from files (callbacks)
- Writing to files (callbacks)
- Converting to Promises
- Using async/await for cleaner code

### Topic 3: Asynchronous JavaScript
- **Callbacks** - Traditional async pattern
- **Promises** - Modern async pattern
- **Async/Await** - Syntactic sugar over promises

## 🛠️ Technologies Used

- **Node.js** - Runtime environment
- **HTTP Module** - Built-in server creation
- **File System (fs)** - File operations
- Express.js (coming soon)
- MongoDB (coming soon)

## 📝 API Endpoints (Current)

| Method | Endpoint | Description | Status |
|--------|----------|-------------|--------|
| GET | / | Homepage | ✅ Working |
| GET | /todos | Get all todos | ✅ Working |
| POST | /todos | Create todo | ⏳ Coming |
| PUT | /todos/:id | Update todo | ⏳ Coming |
| DELETE | /todos/:id | Delete todo | ⏳ Coming |

## 🎓 Key Concepts Learned

### HTTP Module
- `require('http')` - Import HTTP module
- `http.createServer(callback)` - Create server
- `req.url` - Request URL path
- `req.method` - HTTP method (GET, POST, etc.)
- `res.setHeader()` - Set response headers
- `res.statusCode` - HTTP status codes
- `res.end()` - Send response and close connection

### Status Codes
- **200** - OK
- **201** - Created
- **404** - Not Found
- **500** - Internal Server Error

## 🔄 Learning Approach

This project follows an incremental learning approach:

1. **Learn a concept** (e.g., callbacks)
2. **Implement it** in the todo list
3. **Refactor** as we learn better patterns
4. **Document** the learning

Each topic builds upon the previous one, creating a solid foundation.

## 📅 Progress Tracking

- [x] Day 1: Project setup and HTTP module
- [ ] Day 2: File System with callbacks
- [ ] Day 3: Promises and async/await
- [ ] Day 4: Express.js basics
- [ ] Week 2: MongoDB integration
- [ ] Week 3: Authentication

## 🤝 Contributing

This is a personal learning project, but suggestions and feedback are welcome!

## 📄 License

This project is for educational purposes.

## 🎯 Next Steps

1. Implement file-based CRUD operations using fs module
2. Learn callbacks with practical examples
3. Refactor to promises
4. Convert to async/await
5. Migrate to Express.js framework

---

**Happy Learning! 🚀**

*Building one feature at a time, mastering one concept at a time.*