import { Link, Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage'
import ProjectsPage from './pages/ProjectsPage'

function App() {
  return (
    <div className="app-shell">
      <header className="brand-top">
        <Link to="/" className="brand-top__link" aria-label="Kriscel Tech home">
          <img className="brand-top__logo" src="/kriscel-logo-navbar.jpeg" alt="Kriscel Tech" />
        </Link>
      </header>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/projects" element={<ProjectsPage />} />
      </Routes>
      <footer className="footer">
        <p>Kriscel Tech - built with a section-wise palette for a premium frontend showcase.</p>
      </footer>
    </div>
  )
}

export default App
