import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'

const ContactDetails = () => {
  const {id} = useParams();
  const navigate = useNavigate();

  const handleContact = ()=>{
    console.log("contato evinado");
    return navigate("/")
  }
  return (
    <div>
        <h1>Exibindo mais contatos do :{id}</h1>
        <button onClick={handleContact}>enviar mensagem</button>
       
    </div>
  )
}

export default ContactDetails