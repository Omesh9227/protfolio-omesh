import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import { Toaster } from 'react-hot-toast'

const App = () => {
  return (
    <div>
      <Toaster
        position="top-right"
        reverseOrder={false}
        toastOptions={{
          style: {
            background: '#0f172a',
            color: '#fff',
            border: '1px solid #8B5CF6',
          },
          success: {
            iconTheme: {
              primary: '#7aff46',
              secondary: '#3a3333',
            },
          },
        }}
      />
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App