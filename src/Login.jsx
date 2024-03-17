import { useState } from "react"
import * as API from '../src/services/data'
import imageLogin from './assets/login.png'
import { useNavigate } from "react-router-dom"

export function Login(){
    const [teacher, setTeacher] = useState({usuario: '', password: ''})
    const navigate = useNavigate()

    async function handleSubmit(event){
      event.preventDefault()
      const response = await API.login(teacher.usuario, teacher.password)
      if(response.length != 0){
        sessionStorage.setItem("usuario", response)
        navigate('/dashboard')
      }
      else{
        alert("Error")
      }
    }
  
    return (
      <>
        <img src={imageLogin} alt="Imagen de login"  />
        <h1>Iniciar sesión</h1>
        <form id="formulario" onSubmit={handleSubmit}>
          Usuario <input type="text" id="usuario" onChange={event => setTeacher({...teacher, usuario: event.target.value})}/><br/>
          Password <input type="password" id="pass" onChange={event => setTeacher({...teacher, password: event.target.value})}/><br/>
          <input type="submit" id="enviar"/>
        </form>
      </>
    )
}