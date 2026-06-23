import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';

// Temporary placeholder layout
function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <nav className="bg-white shadow">
          <div className="max-w-7xl mx-auto px-4 py-4">
            <h1 className="text-2xl font-bold text-primary-600">e.connect</h1>
          </div>
        </nav>

        <main className="max-w-7xl mx-auto px-4 py-8">
          <div className="text-center">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Welcome to e.connect
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              A place where people meet online to work, trade, and build opportunities
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <FeatureCard
                title="👤 User Profiles"
                description="Create professional profiles like LinkedIn"
              />
              <FeatureCard
                title="💼 Job Postings"
                description="Post and discover job opportunities"
              />
              <FeatureCard
                title="🛒 Marketplace"
                description="Buy and sell services and products"
              />
              <FeatureCard
                title="💬 Messaging"
                description="Real-time communication with other users"
              />
              <FeatureCard
                title="📢 Advertising"
                description="Promote your business to the community"
              />
              <FeatureCard
                title="🎨 Portfolio"
                description="Showcase your work like Behance"
              />
            </div>
          </div>
        </main>
      </div>
    </Router>
  );
}

function FeatureCard({ title, description }) {
  return (
    <div className="bg-white rounded-lg shadow p-6 text-left">
      <h3 className="text-lg font-semibold text-gray-900 mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
}

export default App;