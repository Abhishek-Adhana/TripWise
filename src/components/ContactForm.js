import React from 'react'
import "../components/ContactForm.css"

function ContactForm() {
  return (
    <div>
        <div className="form-container">
            <h1>Send a message to us!</h1>
            <form action="">
                <input placeholder="Name" />
                <input placeholder="Email" />
                <input placeholder="Subject" />
                <textarea placeholder='Message' rows="4"></textarea>
                <button>Send Message</button>
            </form>
        </div>
    </div>
  )
}

export default ContactForm
