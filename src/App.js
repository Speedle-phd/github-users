import React from 'react'
import { Dashboard, Login, AuthWrapper, Error } from './pages'
import PrivateRoute from './pages/PrivateRoute'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

function App() {
  return (
    <AuthWrapper>
      <Router>
        <Routes>
          <Route path="/" end element={
            <PrivateRoute>
              <Dashboard />
            </PrivateRoute>
          }>
          </Route>
          <Route path="/login" element={<Login />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </Router>
    </AuthWrapper>
  )
}

export default App
