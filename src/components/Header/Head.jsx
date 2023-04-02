import layerMiddleImage from "./assets/layer-middle.png"
import layerBaseImage from "./assets/layer-base.png"
import layerFrontImage from "./assets/layer-front.png"
import dungeonImage from "./assets/dungeon.jpg"
import { useEffect } from 'react';
import './Head.css'



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
                <div className="caption">welcome to </div>
                <div className="title">Church Cátia</div>
              </div>
              <div className="img-layer layer-base" style={{ backgroundImage: `url(${layerBaseImage})` }}></div>
              <div className="img-layer layer-mid" style={{ backgroundImage: `url(${layerMiddleImage})` }}></div>
              <div className="img-layer layer-front" style={{ backgroundImage: `url(${layerFrontImage})` }}></div>
            </div>
          </header>
          <article className="article-main" style={{ backgroundImage: `url(${dungeonImage})` }}>
            <div className="m-article-content">
              <h2 className="m-header">story to be continued</h2>
              <p className="m-paragraph">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corrupti sequi perspiciatis vitae veritatis natus repellendus ad illo itaque architecto quisquam ipsa, maxime rem, perferendis molestiae, quibusdam voluptatum iste molestias quod! Delectus iusto quae quos, quis aliquam consequuntur facere soluta repudiandae quisquam commodi vel sapiente quia in sed deleniti aliquid est? Debitis in provident eaque ut saepe esse accusamus eos commodi optio consectetur, ratione assumenda, laudantium aut? Aliquid a eum nostrum similique porro blanditiis, fuga repellat aliquam quo dolores? Laborum, tempora? Qui vitae porro excepturi cum in quaerat quia. Facilis, illo nulla? Animi voluptates consectetur doloremque facere tempore. Deserunt nam delectus aut minus laudantium eos laborum maxime, rem sequi temporibus dignissimos at voluptatibus omnis fuga nobis eveniet ipsum culpa in ratione.</p>
            </div>
            <div className="copy">NOD YT</div>
          </article>
        </div>
      </div>
    </>
  )
}

export default Head
