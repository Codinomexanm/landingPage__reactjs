import React from 'react'
import './Container.css'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import Gallery from './Galery'



const Container = () => {
  return (
    <div className='containery'>
      <div className='xxt'>
        <div className='xs_content'>
          <h1>Bem-vindo à Igreja da Comunhão Divina!</h1>
          <p>É com grande alegria que lhe damos as boas-vindas à nossa comunidade de fé. Somos uma igreja dedicada a glorificar a Deus e a compartilhar o amor de Jesus Cristo com todos aqueles que nos visitam. Nossa igreja é um lugar acolhedor, onde você pode encontrar companheirismo, encorajamento espiritual e oportunidades de crescimento pessoal.</p>
          <p>Nossa igreja é fundamentada nos ensinamentos da Bíblia, considerada por nós como a Palavra inspirada de Deus. Acreditamos que a Bíblia é a base para nossa fé e prática, e é o guia para nossas vidas. Nossos cultos são centrados em Deus, com ênfase na adoração, ensino da Palavra e oração. Buscamos criar um ambiente de adoração inspirador e inclusivo, onde todas as pessoas são bem-vindas, independentemente de sua origem, história ou bagagem de fé.</p>
          <p>Nossa comunidade é formada por pessoas de diversas idades, origens e histórias de vida. Acreditamos que todos são preciosos aos olhos de Deus e são amados por Ele incondicionalmente. Nosso objetivo é criar um ambiente onde as pessoas possam se sentir amadas, aceitas e valorizadas, independentemente de suas circunstâncias ou experiências anteriores.</p>
          <p>Além dos cultos de adoração, oferecemos uma variedade de ministérios e atividades para atender às diferentes necessidades espirituais e emocionais das pessoas. Temos ministérios para crianças, adolescentes, adultos, famílias e idosos, com programas de ensino bíblico, discipulado, grupos de estudo, atividades de serviço comunitário e eventos especiais para fortalecer os relacionamentos e crescer em nossa fé.</p>
          <p>Nossa igreja também é comprometida com a missão de servir à comunidade local e além. Acreditamos que devemos ser agentes de transformação em nossa cidade e em nosso mundo, compartilhando o amor de Deus através de ações concretas de compaixão, justiça social e ajuda aos necessitados. Procuramos ser uma igreja ativa e relevante em nossa comunidade, buscando fazer a diferença na vida das pessoas ao nosso redor.</p>
          <p>Se você está buscando um lugar para crescer espiritualmente, se conectar com outras pessoas de fé e se envolver em uma comunidade que busca viver os ensinamentos de Jesus, convidamos você a visitar nossa igreja. Esperamos recebê-lo de braços abertos e compartilhar com você a alegria de seguir a Deus juntos. Venha nos conhecer e fazer parte de nossa comunidade de fé na Igreja da Comunhão Divina!</p>
        </div>

      </div>
      <div>
        <section id="transform-world">
          <p>TRANSFORME O MUNDO COM A GENTE</p>
        </section>
      </div>
      <div className='xxt'>
        <div className='xs_content'>
          <h1>Queridos irmãos e irmãs em Cristo</h1>
          <p style={{ marginBottom: 50 }}>É com grande alegria que compartilhamos com vocês os eventos religiosos emocionantes que ocorrerão em nossa Igreja Evangélica "Vida Abundante" nas próximas semanas. Nós convidamos vocês a se juntarem a nós e participarem dessas oportunidades significativas de crescimento espiritual e comunhão.</p>
          <ul style={{ marginBottom: 50 }}>
            <li>Cultos de Adoração: Todos os domingos, às 10h e 18h, teremos nossos cultos de adoração na igreja. É um tempo especial de louvor, oração e ensino da Palavra de Deus. Nossos pastores e líderes estarão ministrando mensagens poderosas para fortalecer sua fé e ajudá-lo a crescer em seu relacionamento com Deus.</li>
            <li>Estudos Bíblicos: Durante a semana, teremos estudos bíblicos em pequenos grupos, onde você pode aprofundar seu conhecimento das Escrituras e compartilhar comunhão com outros crentes. Teremos estudos para diferentes faixas etárias, desde crianças até adultos, abordando diversos temas relevantes para a vida cristã.</li>
            <li>Programa de Jovens: Nossos jovens terão encontros especiais aos sábados à tarde, com atividades dinâmicas, louvor, compartilhamento de testemunhos e estudo bíblico. É uma oportunidade incrível para os jovens se conectarem, crescerem em sua fé e se envolverem em ministérios específicos para sua faixa etária.</li>
            <li>Eventos Especiais: Além dos cultos regulares e estudos bíblicos, teremos eventos especiais, como conferências, retiros espirituais, acampamentos e atividades de serviço comunitário. Esses eventos são momentos preciosos para se aprofundar em sua fé, se relacionar com outros membros da igreja e impactar a comunidade ao nosso redor.</li>
            <li>Ministérios de Ação Social: Nossa igreja também está envolvida em ministérios de ação social, como visitas a hospitais, orfanatos, lares de idosos e comunidades carentes. Se você tem um coração voltado para o serviço ao próximo, esses ministérios oferecem oportunidades significativas para compartilhar o amor de Deus através de ações práticas de compaixão e serviço.</li>
          </ul>
          <p style={{ marginBottom: 50 }} >Estes são apenas alguns dos eventos religiosos que teremos em nossa Igreja Evangélica "Vida Abundante". Estamos animados em compartilhar essas oportunidades de crescimento espiritual e comunhão com vocês. Todos são bem-vindos para se juntar a nós em nossa jornada de fé e descobrir o amor incondicional de Deus. Venha participar e fazer parte de nossa comunidade de fé! Esperamos recebê-los de braços abertos.</p>
          <strong>Deus abençoe,
            Pastores e líderes da Igreja Evangélica "Vida Abundante"</strong>
        </div>

      </div>
      <div>
        <section id="transform-world1">
        </section>
      </div>
      <div className='gals'>
        <Gallery />
      </div>
      <div className='xxt2'>
        <div id="map">
          <MapContainer className='left' center={[-15.774314204480694, -48.2823397892441]} zoom={15} scrollWheelZoom={false}>
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker className='pop' position={[-15.774314204480694, -48.2823397892441]}>
              <Popup>
                Igreja Cátia
              </Popup>
            </Marker>
          </MapContainer>
        </div>
      </div>
    </div>
  )
}

export default Container
