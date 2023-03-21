import React, { useState, useEffect } from 'react';
import "./Head.css"
const Typewriter = () => {
  
  return (
     <div id="home" className='container_Head'>
      <video autoPlay muted loop>
        <source src="src\assets\video.mp4" type="video/mp4" />
        <p>Seu navegador não suporta a tag de vídeo.</p>
      </video>
      <div className='wrapper'>
        <p className="typewriter">
          <p>Por isso não tema, pois estou com você;não tenha medo, pois sou o seu Deus.Eu o fortalecerei e o ajudarei;eu o segurareicom a minha mão direita vitoriosa. Isaías 41:10</p>
        </p>
      </div>
    </div>

  );
};

export default Typewriter;
