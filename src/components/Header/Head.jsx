import React, { useState, useEffect } from 'react';
import './Head.css';

const Head = () => {
  const [verse, setVerse] = useState('Mas o fruto do Espírito é amor, alegria, paz, paciência, amabilidade, bondade, fidelidade, Gálatas 5:22');
  const phrases = [
    "O amor é paciente, o amor é bondoso. Não inveja, não se vangloria, não se orgulha. Não maltrata, não procura seus interesses, não se ira facilmente, não guarda rancor. O amor não se alegra com a injustiça, mas se alegra com a verdade. Tudo sofre, tudo crê, tudo espera, tudo suporta. 1 Coríntios 13:4-7",
    "Eu disse essas coisas para que em mim vocês tenham paz. Neste mundo vocês terão aflições; contudo, tenham ânimo! Eu venci o mundo.João 16:33",
    "Por isso não tema, pois estou com você;não tenha medo, pois sou o seu Deus.Eu o fortalecerei e o ajudarei;eu o segurareicom a minha mão direita vitoriosa. Isaías 41:10"
  ];

  const animateText = (phrase, i, isDeleting) => {
    const letters = phrase.split('');

    if (isDeleting) {
      setVerse(phrase.substring(0, i - 1));
      i--;

      if (i === 0) {
        isDeleting = false;
        phrase = phrases[Math.floor(Math.random() * phrases.length)];
      }
    } else {
      setVerse(phrase.substring(0, i + 1));
      i++;

      if (i === letters.length) {
        isDeleting = true;
        setTimeout(() => animateText(phrase, i, isDeleting), 3000);
        return;
      }
    }

    setTimeout(() => animateText(phrase, i, isDeleting), 100);
  }

  useEffect(() => {
    const phrase = phrases[Math.floor(Math.random() * phrases.length)];
    animateText(phrase, 0, false);
  }, []);

  return (
    <div id="home" className='container_Head'>
      <video autoPlay muted loop>
        <source src="src\assets\video.mp4" type="video/mp4" />
        <p>Seu navegador não suporta a tag de vídeo.</p>
      </video>
      <div className='wrapper'>
        <p className="typewriter">
          {verse}
        </p>
      </div>
    </div>
  )
}

export default Head;
