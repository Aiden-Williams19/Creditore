import { useState } from 'react'
import './CallbackForm.css'

const CallbackForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    contactNumber: '',
    email: '',
    preferredTime: ''
  })

  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
    setSubmitted(true)
    setTimeout(() => {
      setSubmitted(false)
      setFormData({
        name: '',
        contactNumber: '',
        email: '',
        preferredTime: ''
      })
    }, 3000)
  }

  return (
    <section id="callback-form" className="callback-form-section">
      <div className="container">
        <div className="form-header">
          <h2>Quick. Secure. Confidential.</h2>
          <p>Request a callback and one of our debt counsellors will contact you at your preferred time.</p>
        </div>
        <form onSubmit={handleSubmit} className="callback-form">
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="name">Name & Surname *</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                placeholder="Enter your full name"
              />
            </div>
            <div className="form-group">
              <label htmlFor="contactNumber">Contact Number *</label>
              <input
                type="tel"
                id="contactNumber"
                name="contactNumber"
                value={formData.contactNumber}
                onChange={handleChange}
                required
                placeholder="021 123 4567"
              />
            </div>
          </div>
          <div className="form-group">
            <label htmlFor="email">Email Address *</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              placeholder="your.email@example.com"
            />
          </div>
          <div className="form-group">
            <label htmlFor="preferredTime">Preferred Time to Be Contacted *</label>
            <select
              id="preferredTime"
              name="preferredTime"
              value={formData.preferredTime}
              onChange={handleChange}
              required
            >
              <option value="">Select preferred time</option>
              <option value="morning">Morning (8:00 - 12:00)</option>
              <option value="afternoon">Afternoon (12:00 - 16:00)</option>
              <option value="evening">Evening (16:00 - 19:00)</option>
            </select>
          </div>
          <button type="submit" className="btn-submit" disabled={submitted}>
            {submitted ? 'Thank You! We\'ll Contact You Soon.' : 'Submit'}
          </button>
        </form>
      </div>
    </section>
  )
}

export default CallbackForm
