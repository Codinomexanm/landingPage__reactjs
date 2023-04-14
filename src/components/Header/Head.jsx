import layerMiddleImage from "./assets/layer-middle.png"
import layerBaseImage from "./assets/layer-base.png"
import layerFrontImage from "./assets/layer-front.png"
import dungeonImage from "./assets/biblia.jpg"
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
              <h2 className="m-header">Palavra do dia</h2>
              <p className="m-paragraph">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos nesciunt ut cum sed, perferendis dolore earum debitis error asperiores tempora optio provident soluta? Reiciendis aperiam ipsa minima distinctio provident neque! Dolorem officia quos at nisi necessitatibus laudantium omnis earum, tenetur voluptatibus doloribus recusandae quaerat possimus illo! A repellendus repudiandae necessitatibus quidem vero provident officiis harum, cum excepturi sit ipsam pariatur laudantium ex tempora, soluta voluptatibus maiores fugit voluptas exercitationem. Laudantium voluptas reiciendis ut illum aspernatur placeat, alias facere iusto rerum possimus. Ullam fugit incidunt, ad optio labore qui necessitatibus cumque doloremque quibusdam fuga. Itaque aspernatur, perferendis iusto, enim atque tenetur expedita vero a adipisci, error molestiae exercitationem reprehenderit repudiandae voluptatibus iste sequi natus quo ratione voluptatem quam excepturi eligendi voluptate pariatur. Alias, illum omnis perferendis voluptates officia dolore sed facere laudantium, molestias voluptatum magnam commodi consequatur velit blanditiis ad voluptate provident laboriosam accusantium. Eaque maxime, odio temporibus ex laboriosam, mollitia quo velit consequuntur sint itaque rem alias quia quae aliquam animi enim. Pariatur quo tenetur debitis explicabo enim, accusamus voluptates ad harum ratione earum vitae atque, iusto illo similique perspiciatis veniam impedit itaque modi ipsam cumque sit deleniti vel minima nemo! Nesciunt commodi, id incidunt nemo sed natus eaque blanditiis!</p>
            </div>
            <div className="copy">NOD YT</div>
          </article>
        </div>
      </div>
    </>
  )
}

export default Head
