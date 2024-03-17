const URL = 'https://localhost:7018/api/'

export function login(usuarioLogin, passLogin){
    let datos = {usuario: usuarioLogin, pass: passLogin}

    return fetch(URL + 'autenticacion', {
        method: 'POST',
        body: JSON.stringify(datos),
        headers:{
            'Content-Type': 'application/json'
        }
    })

    .then(data => data.text())
}

export function getStudents(usuarioProfesor){
    //return fetch(URL + 'alumnosProfesor?usuario=' + usuario)
    return fetch(`${URL}alumnosProfesor?usuarioProfesor=${usuarioProfesor}`,{
        headers:{
            'Content-Type':'application/json'
        }
    })
    .then(data => data.json());
}