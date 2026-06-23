# Development Guide

## Local Development Setup

### Prerequisites
- Node.js 16+ and npm
- Python 3.9+
- MongoDB (Local or MongoDB Atlas)
- Git

### Step 1: Clone the Repository

```bash
git clone https://github.com/tamavingagk-stack/e.connect.git
cd e.connect
```

### Step 2: Setup Backend

```bash
cd backend

# Create virtual environment
python -m venv venv

# Activate virtual environment
# On Windows:
venv\Scripts\activate
# On macOS/Linux:
source venv/bin/activate

# Install dependencies
pip install -r requirements.txt

# Create .env file
cp ../.env.example .env

# Update .env with your MongoDB credentials
```

### Step 3: Setup Frontend

```bash
cd ../frontend

# Install dependencies
npm install

# Create .env file (if needed)
cp ../.env.example .env
```

### Step 4: Start Development Servers

**Terminal 1 - Backend:**
```bash
cd backend
source venv/bin/activate  # On Windows: venv\Scripts\activate
uvicorn app.main:app --reload --port 8000
```

Backend runs on: `http://localhost:8000`
API Docs: `http://localhost:8000/docs`

**Terminal 2 - Frontend:**
```bash
cd frontend
npm run dev
```

Frontend runs on: `http://localhost:5173`

### Using Docker Compose

```bash
# From project root
docker-compose up -d

# View logs
docker-compose logs -f

# Stop services
docker-compose down
```

## Project Structure

```
e.connect/
├── frontend/
│   ├── src/
│   │   ├── components/     # Reusable components
│   │   ├── pages/          # Page components
│   │   ├── services/       # API services
│   │   ├── hooks/          # Custom React hooks
│   │   ├── context/        # Context API
│   │   ├── App.jsx
│   │   └── main.jsx
│   ├── index.html
│   ├── package.json
│   └── vite.config.js
├── backend/
│   ├── app/
│   │   ├── main.py         # FastAPI app
│   │   ├── config.py       # Configuration
│   │   ├── api/            # API routes
│   │   ├── models/         # Pydantic models
│   │   ├── db/             # Database
│   │   ├── auth/           # Authentication
│   │   └── services/       # Business logic
│   ├── requirements.txt
│   └── Dockerfile
├── docker-compose.yml
├── .env.example
└── docs/
```

## Coding Standards

### Frontend (React/JavaScript)

- Use functional components with hooks
- Use ESLint and Prettier for code formatting
- Follow React naming conventions
- Use absolute imports where possible
- Keep components focused and reusable

```bash
# Format code
npm run format

# Lint code
npm run lint
```

### Backend (Python)

- Follow PEP 8 style guide
- Use type hints
- Write docstrings for functions and classes
- Keep functions focused and testable
- Use async/await for I/O operations

### Commit Message Format

```
[type]: Brief description

Longer description if needed.

Example types:
- feat: New feature
- fix: Bug fix
- docs: Documentation
- style: Code style changes
- refactor: Code refactoring
- perf: Performance improvements
- test: Adding tests
- chore: Build, dependencies, etc.
```

## Common Commands

### Frontend

```bash
cd frontend

# Start dev server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Format code
npm run format

# Lint code
npm run lint
```

### Backend

```bash
cd backend

# Activate venv
source venv/bin/activate

# Run development server
uvicorn app.main:app --reload

# Run tests
pytest

# Run specific test
pytest tests/test_auth.py -v

# Check code with pylint
pylint app/
```

## MongoDB Commands

```bash
# Connect to MongoDB (if running locally)
mongosh mongodb://localhost:27017

# Switch to database
use econnect

# List collections
show collections

# Find documents
db.users.find()

# Count documents
db.users.countDocuments()
```

## API Testing

### Using FastAPI Docs
- Visit `http://localhost:8000/docs` (Swagger UI)
- Visit `http://localhost:8000/redoc` (ReDoc)

### Using curl
```bash
# Health check
curl http://localhost:8000/health

# Get API info
curl http://localhost:8000/
```

## Troubleshooting

### MongoDB Connection Issues
- Ensure MongoDB is running
- Check MONGODB_URL in .env
- Verify credentials if using Atlas

### Port Already in Use
```bash
# Kill process on port 8000 (backend)
lsof -ti:8000 | xargs kill -9

# Kill process on port 5173 (frontend)
lsof -ti:5173 | xargs kill -9
```

### Dependencies Issues
```bash
# Clear npm cache
npm cache clean --force

# Reinstall dependencies
rm -rf node_modules package-lock.json
npm install

# Python: Create fresh venv
deactivate
rm -rf venv
python -m venv venv
source venv/bin/activate
pip install -r requirements.txt
```

## Resources

- [FastAPI Documentation](https://fastapi.tiangolo.com/)
- [React Documentation](https://react.dev/)
- [MongoDB Documentation](https://docs.mongodb.com/)
- [Vite Documentation](https://vitejs.dev/)
- [TailwindCSS Documentation](https://tailwindcss.com/)

---

Happy coding! 🚀