import axios from 'axios'

async function obtenerTokenfachada( body ,semilla, tiempo){
    return obtenerToken(body, semilla, tiempo);
}


async function obtenerToken(body, semillaT, tiempoT){
    const objUser={
        semilla: semillaT,
        tiempo: tiempoT
    }
    console.log(body)
    const tok =  axios.get("http://localhost:8083/API/1.0/Autorizacion/tokens/obtener",body).then(r=>r.data)

    return tok
}

export default obtenerTokenfachada