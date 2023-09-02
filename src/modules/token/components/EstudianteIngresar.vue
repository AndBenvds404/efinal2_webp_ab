<template>
    <div></div>
  <div class="contain">

    <div class="formu">

            <h1>ESTUDIANTE</h1>
    <label >token</label>
    <input class="lbltoken" v-model="token" type="text">

    <label >Nombre</label>
    <input v-model="nombre" type="text">

    <label for="">Apellido</label>
    <input v-model="apellido" type="text">

    <label for="">cedula</label>
    <input v-model="cedula" type="text">

    <button @click="guardarEstud">insertar</button>
    </div>


  </div>
</template>

<script>
import guardarEstudianteFachada from "../helpers/EstudianteCliente.js"
export default {
    data(){
        return{
            nombre:"",
            apellido:"",
            cedula:"",
            token:""
        }
        
    },
    methods:{
        async guardarEstud(){
            const obj = {
                nombre: this.nombre,
                apellido: this.apellido,
                cedula: this.cedula
            } 
             await guardarEstudianteFachada(obj)
        }
    }

}
</script>

<style scoped>
.formu{
    display: grid;
    justify-content: center;
    align-items: center;
    
    
    
}
.lbltoken{
    height: 60px;
}
.contain{
    right: 70px;
    display: grid;
    align-items: center;
    justify-content: center;
    background: gray;
    width: 400px;
    
}
label{
    padding: 15px;
}
button{
    margin-top: 20px;
    width: 70px;
}


</style>