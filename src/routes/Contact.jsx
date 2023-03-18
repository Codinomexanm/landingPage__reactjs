import React from 'react'
import { Link } from 'react-router-dom'

const Contact = () => {
  return (
    <div>
      <h2>contact</h2>
       <p><Link to="/contact/1"> Forma contato 1</Link></p>
        <p><Link to="/contact/2">Forma contato 3</Link></p>
        <p><Link to="/contact/3">Forma contato 2</Link></p>
    </div>
  )
}

export default Contact
