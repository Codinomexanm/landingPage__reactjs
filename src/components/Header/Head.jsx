import layerMiddleImage from "./assets/layer-middle.png"
import layerBaseImage from "./assets/layer-base.png"
import layerFrontImage from "./assets/layer-front.png"
import dungeonImage from "./assets/biblia.jpg"
import { useEffect } from 'react';
import './Head.css'
import Typing from './Typing';



function Head() {
  useEffect(() => {
    window.addEventListener('scroll', () => {
      let scrollY = window.scrollY;
      document.documentElement.style.setProperty('--scrollTop', `${scrollY}px`)
    })
  }, []);
  return (
    <>
      <div className="wrapper">
        <div className="content">
          <header className='header-main'>

            <div className="layers">
              <div className="layer-head">
                <div className="caption">Bem vindo a </div>
                <div className="title">Igreja de Nova Vida</div>
              </div>
              <div className="img-layer layer-base" style={{ backgroundImage: `url(${layerBaseImage})` }}></div>
              <div className="img-layer layer-mid" style={{ backgroundImage: `url(${layerMiddleImage})` }}></div>
              <div className="img-layer layer-front" style={{ backgroundImage: `url(${layerFrontImage})` }}></div>
            </div>
            <div className='header-top'></div>
          </header>
          <article className="article-main" style={{ backgroundImage: `url(${dungeonImage})` }}>
            <div className="m-article-content">

              <Typing />
            </div>
            <div className="copy">NOD YT</div>
          </article>
        </div>
      </div>
    </>
  )
}

export default Head
