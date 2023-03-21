import React from 'react'
import './Container.css'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'



const Container = () => {
  return (
    <div className='container'>
      <div className='xxt'>
        <h1>deu 1</h1>
      </div>
      <div>
        <section id="transform-world">
          <p>TRANSFORME O MUNDO COM A GENTE</p>
        </section>
      </div>
      <div className='xxt'>
        <h1>deu 3</h1>
      </div>
      <div>
        <section id="transform-world1">
          <p>TRANSFORME O MUNDO COM A GENTE</p>
        </section>
      </div>
      <div className='xxt xxt2'>
        <div id="map">
          <MapContainer className='left' center={[-15.774314204480694, -48.2823397892441]} zoom={15} scrollWheelZoom={false}>
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker className='pop'  position={[-15.774314204480694, -48.2823397892441]}>
              <Popup>
                Igreja cátia
              </Popup>
            </Marker>
          </MapContainer>
        </div>
      </div>
    </div>
  )
}

export default Container
