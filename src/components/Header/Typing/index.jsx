import React, { useState, useEffect, useRef } from 'react';
import './style.css';

const Typing = () => {
  const [displayText, setDisplayText] = useState('');
  const text = `" Não fui eu que ordenei a você? Seja forte e corajoso! Não se apavore nem desanime, pois o Senhor, o seu Deus, estará com você por onde você andar". Josué 1:9`;
  const typingRef = useRef(null);

  useEffect(() => {
    let i = 0;
    let typingEffect;

    const handleTyping = () => {
      typingEffect = setInterval(() => {
        if (i < text.length) {
          setDisplayText(prevText => prevText + text.charAt(i));
          i++;
        } else {
          clearInterval(typingEffect);
        }
      }, 50);
    };

    // Verifica se o elemento está em foco usando a Intersection Observer API
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          handleTyping();
        } else {
          clearInterval(typingEffect);
        }
      });
    });

    observer.observe(typingRef.current);

    // Remova o observer quando o componente for desmontado
    return () => {
      observer.unobserve(typingRef.current);
    };
  }, []);

  return (
    <>
      <h2 className="m-header">
        Palavra do dia:
      </h2>
      <p className="m-paragraph Ffont" ref={typingRef}><span className='line lineAnimation'>{displayText}</span></p>
    </>
  );
};

export default Typing;
