import React from 'react'
import { Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage'
import NotFoundPage from './pages/NotFoundPage'
import CoursesPage from './pages/courses/CoursesPage'
import IeltsPage from './pages/courses/IeltsPage'
import SatPage from './pages/courses/SatPage'
import KidsPage from './pages/courses/KidsPage'

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />

      <Route path="/courses" element={<CoursesPage />}>
        <Route path="ielts" element={<IeltsPage />} />
        <Route path="sat" element={<SatPage />} />
        <Route path="kids" element={<KidsPage />} />
      </Route>

      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  )
}

export default App
