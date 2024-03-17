import { useEffect, useState } from "react"
import * as API from "./services/data"

export function StudentList(){

    let usuario = sessionStorage.getItem("usuario")

    //Creamos una variable para guardar todos los estudiantes que pertenecen al profesor que ha hecho login.
    //Nos creamos una variable llamada students y una función que los actualizará llamada setStudents.
    const [students, setStudents] = useState([])

    useEffect(()=>{
        API.getStudents(usuario).then(setStudents)
    })

    return(
        <>
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>DNI</th>
                        <th>Nombre</th>
                        <th>Dirección</th>
                        <th>Edad</th>
                        <th>Email</th>
                        <th>Asignatura</th>
                        <th></th>
                        <th></th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {
                        students?.map(student => (
                            <tr key={student.id}>
                                <td>{student.id}</td>
                                <td>{student.dni}</td>
                                <td>{student.nombre}</td>
                                <td>{student.direccion}</td>
                                <td>{student.edad}</td>
                                <td>{student.email}</td>
                                <td>{student.asignatura}</td>
                                <td>Editar</td>
                                <td>Modificar</td>
                                <td>Cancelar</td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </>
    )
}