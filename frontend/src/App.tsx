import { Routes, Route } from 'react-router-dom'
import type { CSSProperties } from 'react'
import Navbar from './components/Navbar'
import HomePage from './pages/HomePage'
import ProjectsPage from './pages/ProjectsPage'

function App() {
  return (
    <div className="app-shell">
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/projects" element={<ProjectsPage />} />
      </Routes>
      <footer className="footer">
        <p>Kriscel Tech - built with a section-wise palette for a premium frontend showcase.</p>
      </footer>
      <div
        className="palette-swatch"
        aria-hidden="true"
        style={
          {
            '--pearl': '#EAF0F4',
            '--slate': '#2F3D4E',
            '--steel': '#5F7F9C',
            '--gold': '#C7A86C',
          } as CSSProperties
        }
      >
        <span title="Pearl" />
        <span title="Slate" />
        <span title="Steel" />
        <span title="Gold" />
      </div>
    </div>
  )
}

export default App
