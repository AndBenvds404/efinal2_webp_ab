import axios from 'axios'

async function guardarEstudianteFachada(bodyEstudiante){
    guardarEstudiante(bodyEstudiante)
}

async function guardarEstudiante(bodyEstudiante){

axios.post("http://localhost:8081/API/1.0/Inscripcion/estudiantes",bodyEstudiante).then(r=>r.data)
}

async function listarEstudiante(){
    return axios.get("http://localhost:8081/API/1.0/Inscripcion/estudiantes").then(r=>r.data)
}

export async function listarEstudiantefachada(){
    return listarEstudiante();
}


export default guardarEstudianteFachada
