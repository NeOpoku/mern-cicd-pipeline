# MERN CI/CD Pipeline
This project demonstrates the setup of a CI/CD pipeline for a full-stack MERN application using GitHub Actions, Cypress component testing, and Render deployment.

## 📋 Overview

The application is a React Tech Quiz that:
- Fetches random programming questions from a MongoDB database
- Presents them to users in an interactive quiz format
- Tracks user score and allows retaking the quiz

The project implements:
- **TypeScript** for both frontend and backend
- **Vitest** for unit testing
- **Cypress** for component testing
- **GitHub Actions** for CI/CD pipeline
- **Render** for deployment

## 🚀 Live Demo

[View Live Demo](#)

## 🔧 Setup Instructions

### Prerequisites
- Node.js (v18 or higher)
- MongoDB installed locally or a MongoDB Atlas account
- Git

### Installation

1. Clone the repository
   ```bash
   git clone https://github.com/yourusername/mern-cicd-pipeline.git
   cd mern-cicd-pipeline
   ```

2. Install dependencies
   ```bash
   npm install
   ```

3. Set up environment variables
   ```bash
   cd server
   cp .env.EXAMPLE .env
   # Edit .env with your MongoDB connection string
   ```

4. Seed the database
   ```bash
   npm run seed
   ```

5. Start the development server
   ```bash
   cd ..
   npm run develop
   ```

## 🧪 Testing

This project uses multiple testing strategies:

### Unit Tests (Vitest)
```bash
cd client
npm run test
```

### Component Tests (Cypress)
```bash
npm run test-component
```

### End-to-End Tests (Cypress)
```bash
npm run test
```

### GUI Testing Mode
```bash
npm run test-gui
```

## 🔄 CI/CD Pipeline

The CI/CD pipeline is implemented using GitHub Actions and configured in `.github/workflows/main.yml`. It performs:

1. **Continuous Integration**
   - Runs linting
   - Executes component tests
   - Executes unit tests

2. **Continuous Deployment** (on `main` branch only)
   - Deploys to Render when tests pass

### Required GitHub Secrets

To enable the deployment to Render, add these secrets to your GitHub repository:
- `RENDER_API_KEY`: Your Render API key
- `RENDER_SERVICE_ID`: The ID of your Render service

## 📁 Project Structure

```
├── client/                 # React frontend
│   ├── public/             # Public assets
│   ├── src/                # Source files
│   │   ├── components/     # React components
│   │   ├── services/       # API services
│   │   ├── models/         # TypeScript interfaces
│   │   └── mocks/          # MSW mocks for testing
├── server/                 # Express backend
│   ├── src/
│   │   ├── controllers/    # Route controllers
│   │   ├── models/         # Mongoose models
│   │   ├── routes/         # Express routes
│   │   └── seeds/          # Database seeds
├── .github/workflows/      # GitHub Actions workflows
├── cypress/                # Cypress tests
└── render.yaml             # Render deployment config
```

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👥 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request