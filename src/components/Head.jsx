import React from 'react'
import './Head.css'

const Head = () => {
  return (
    <div className='container'>
      <video autoPlay muted loop >
        <source src="src\assets\video.mp4" type="video/mp4" />
        <p>Seu navegador não suporta a tag de vídeo.</p>
      </video>
      <div className='wrapper'>
        <p>Mas o fruto do Espírito é amor, alegria, paz, paciência, amabilidade, bondade, fidelidade,
Gálatas 5:22</p>
      </div>
    </div>
  )
}

export default Head