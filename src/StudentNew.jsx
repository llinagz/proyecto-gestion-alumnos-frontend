import { useState } from "react"
import { Header } from "./Header"
import * as API from "./services/data"

export function StudentNew(){

    const [student, setStudent] = useState({dni:'', nombre:'', direccion:'',edad:'', email:'', asignatura:'1'})
    
    function handleSubmit(event){
        event.preventDefault()
        API.createStudent(student).then(result =>{
            if(result =="true"){
                alert("Alumno insertado con exito")
                document.getElementById("formulario").reset()
            }
            else{
                alert("Error al insertar el alumno")
                document.getElementById("formulario").reset()
            }
        })
    }

    return(
        <>
            <Header />
            <p>Nuevo alumno</p>
            <form id="formulario" onSubmit={handleSubmit}>
                Dni<input type="text" id="dni" required onChange={event => setStudent({...student, dni:event.target.value})} /> <br />
                Nombre<input type="text" id="nombre" required onChange={event => setStudent({...student, nombre:event.target.value})} /> <br />
                Direccion<input type="text" id="direccion" required onChange={event => setStudent({...student, direccion:event.target.value})} /> <br />
                Edad<input type="number" id="edad" required onChange={event => setStudent({...student, edad:event.target.value})} /> <br />
                Email<input type="text" id="email" required onChange={event => setStudent({...student, email:event.target.value})} /> <br />
                Asignatura<select id="asignatura" required onChange={event => setStudent({...student, asignatura:event.target.value})}> 
                    <option value="1">Matemáticas</option>
                    <option value="2">Informática</option>
                    <option value="3">Ingles</option>
                    <option value="4">Lengua</option>
                </select>
                <input type="submit" id="editar" value="Nuevo" />
            </form>
        </>
    )
}