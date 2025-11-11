import { useState } from 'react'
import { Link, useNavigate, useLocation } from 'react-router-dom'
import './Header.css'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const navigate = useNavigate()
  const location = useLocation()

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const handleCallbackClick = (e) => {
    e.preventDefault()
    setIsMenuOpen(false)
    if (location.pathname === '/') {
      const formElement = document.getElementById('callback-form')
      if (formElement) {
        formElement.scrollIntoView({ behavior: 'smooth' })
      }
    } else {
      navigate('/')
      setTimeout(() => {
        const formElement = document.getElementById('callback-form')
        if (formElement) {
          formElement.scrollIntoView({ behavior: 'smooth' })
        }
      }, 100)
    }
  }

  return (
    <header className="header">
      <div className="container">
        <div className="header-content">
          <Link to="/" className="logo">
            <h1>Creditoré</h1>
          </Link>
          <nav className={`nav ${isMenuOpen ? 'nav-open' : ''}`}>
            <Link to="/" onClick={() => setIsMenuOpen(false)}>Home</Link>
            <Link to="/how-it-works" onClick={() => setIsMenuOpen(false)}>How It Works</Link>
            <Link to="/faq" onClick={() => setIsMenuOpen(false)}>FAQ</Link>
            <Link to="/contact" onClick={() => setIsMenuOpen(false)}>Contact</Link>
            <a href="/#callback-form" className="btn-primary" onClick={handleCallbackClick}>
              Request Callback
            </a>
          </nav>
          <button className="menu-toggle" onClick={toggleMenu} aria-label="Toggle menu">
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </div>
    </header>
  )
}

export default Header
