import React, { useState, useEffect } from 'react';
import "./Head.css"
const Typewriter = () => {
  const phrases = [    "O amor é paciente, o amor é bondoso. ",    "Eu disse essas coisas para que em mim vocês tenham paz. ",    "Por isso não tema, pois estou com você;não tenha medo, pois sou o seu Deus.Eu o fortalecerei e o ajudarei eu o segurareicom a minha mão direita vitoriosa. Isaías 41:10"  ];
  const [currentPhrase, setCurrentPhrase] = useState('');
  const [typingComplete, setTypingComplete] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      let nextPhraseIndex = phrases.indexOf(currentPhrase) + 1;
      if (nextPhraseIndex >= phrases.length) {
        nextPhraseIndex = 0;
      }
      setCurrentPhrase(phrases[nextPhraseIndex]);
      setTypingComplete(false);
    }, 5000);

    return () => clearInterval(interval);
  }, [currentPhrase]);

  useEffect(() => {
    let currentPhraseIndex = 0;
    let currentPhraseText = '';
    let isDeleting = false;
    let typingTimeout;
    
    const animateTyping = () => {
      const currentPhraseLength = phrases[currentPhraseIndex].length;
      currentPhraseText = isDeleting
        ? phrases[currentPhraseIndex].substring(0, currentPhraseText.length - 1)
        : phrases[currentPhraseIndex].substring(0, currentPhraseText.length + 1);

      setCurrentPhrase(currentPhraseText);

      if (isDeleting) {
        typingTimeout = setTimeout(animateTyping, 50);
      } else if (currentPhraseText.length === currentPhraseLength) {
        setTypingComplete(true);
        clearTimeout(typingTimeout);
      } else {
        typingTimeout = setTimeout(animateTyping, 100);
      }

      if (isDeleting && currentPhraseText === '') {
        isDeleting = false;
        currentPhraseIndex = (currentPhraseIndex + 1) % phrases.length;
      } else if (typingComplete) {
        isDeleting = true;
        typingTimeout = setTimeout(animateTyping, 1000);
      }
    };

    animateTyping();
    return () => clearTimeout(typingTimeout);
  }, []);

  return (
     <div id="home" className='container_Head'>
      <video autoPlay muted loop>
        <source src="src\assets\video.mp4" type="video/mp4" />
        <p>Seu navegador não suporta a tag de vídeo.</p>
      </video>
      <div className='wrapper'>
        <p className="typewriter">
          <p>{currentPhrase}</p>
        </p>
      </div>
    </div>

  );
};

export default Typewriter;
