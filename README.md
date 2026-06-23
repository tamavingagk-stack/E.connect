# e.connect

A comprehensive platform where people meet online to work, trade, and build opportunities.

## 📋 Overview

e.connect is a full-featured web application that combines professional networking, job opportunities, marketplace functionality, and business growth tools—all in one platform.

## ✨ MVP Features

- 👤 **User Profiles** - LinkedIn-style professional profiles
- 💼 **Job Posting System** - Post and discover job opportunities
- 🛒 **Marketplace** - Buy and sell services/products
- 💬 **Messaging System** - Real-time communication between users
- 📢 **Business Advertising Space** - Promote businesses and services
- 🎨 **Portfolio Showcase** - Behance-like portfolio display
- 📊 **Dashboard** - Analytics and business growth insights

## 🛠 Tech Stack

### Frontend
- **React 18** with Vite
- **TailwindCSS** for styling
- **Axios** for API calls
- **React Router** for navigation
- **Socket.io-client** for real-time messaging

### Backend
- **FastAPI** - Modern, fast Python web framework
- **MongoDB** - NoSQL database
- **Pydantic** - Data validation
- **JWT** - Authentication
- **Socket.io** - Real-time communication

### DevOps & Tools
- **Docker** - Containerization
- **Docker Compose** - Multi-container orchestration
- **Poetry** - Python dependency management
- **npm** - Node package manager

## 📁 Project Structure

```
e.connect/
├── frontend/                 # React application
│   ├── src/
│   │   ├── components/       # Reusable React components
│   │   ├── pages/            # Page components
│   │   ├── context/          # Context API for state management
│   │   ├── hooks/            # Custom hooks
│   │   ├── services/         # API services
│   │   ├── styles/           # Global styles
│   │   └── App.jsx
│   ├── public/
│   ├── package.json
│   ├── vite.config.js
│   └── tailwind.config.js
├── backend/                  # Python FastAPI application
│   ├── app/
│   │   ├── main.py           # Application entry point
│   │   ├── config.py         # Configuration settings
│   │   ├── api/
│   │   │   ├── routes/       # API route handlers
│   │   │   ├── dependencies.py
│   │   │   └── utils.py
│   │   ├── models/           # Pydantic models
│   │   ├── db/
│   │   │   ├── database.py   # MongoDB connection
│   │   │   └── schemas.py    # MongoDB schemas
│   │   ├── auth/             # Authentication logic
│   │   ├── websockets/       # WebSocket handlers
│   │   └── services/         # Business logic
│   ├── tests/
│   ├── requirements.txt
│   ├── pyproject.toml
│   └── Dockerfile
├── docker-compose.yml
├── .env.example
└── docs/                     # Documentation
```

## 🚀 Getting Started

### Prerequisites
- Node.js 16+ and npm
- Python 3.9+
- MongoDB (local or Atlas)
- Docker & Docker Compose (optional)

### Quick Start (Development)

#### Option 1: Using Docker Compose (Recommended)
```bash
# Start all services
docker-compose up -d

# View logs
docker-compose logs -f

# Stop services
docker-compose down
```

#### Option 2: Manual Setup

**Backend:**
```bash
cd backend
pip install -r requirements.txt
uvicorn app.main:app --reload --port 8000
```

**Frontend:**
```bash
cd frontend
npm install
npm run dev
```

### Access Points
- Frontend: `http://localhost:5173`
- Backend API: `http://localhost:8000`
- API Docs: `http://localhost:8000/docs`

## 📚 Documentation

- [Development Guide](docs/DEVELOPMENT.md) - Setup & best practices
- [API Documentation](docs/API.md) - FastAPI endpoints
- [Database Schema](docs/DATABASE.md) - MongoDB collections
- [Frontend Architecture](docs/FRONTEND.md) - React structure
- [Authentication Flow](docs/AUTH.md) - JWT implementation
- [Project Roadmap](docs/ROADMAP.md) - Feature timeline

## 🎯 MVP Development Phases

### Phase 1: Foundation (Week 1-2)
- [x] Project setup
- [ ] User authentication (register/login)
- [ ] User profiles CRUD
- [ ] Database schemas

### Phase 2: Core Features (Week 3-4)
- [ ] Job posting system
- [ ] Marketplace listings
- [ ] Search functionality

### Phase 3: Communication (Week 5-6)
- [ ] Messaging system
- [ ] Real-time notifications
- [ ] Socket.io integration

### Phase 4: Enhancement (Week 7-8)
- [ ] Portfolio showcase
- [ ] Business dashboard
- [ ] Analytics

## 🤝 Contributing

Since this is a solo project, follow these guidelines:

1. Create a feature branch: `git checkout -b feature/your-feature`
2. Make your changes
3. Commit with clear messages: `git commit -m 'feat: add user authentication'`
4. Push to branch: `git push origin feature/your-feature`
5. Merge to main when ready

## 📝 License

MIT License

## 👨‍💻 Author

[tamavingagk-stack](https://github.com/tamavingagk-stack)

---

**Let's build the future of online collaboration! 🚀**