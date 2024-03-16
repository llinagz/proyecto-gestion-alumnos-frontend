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