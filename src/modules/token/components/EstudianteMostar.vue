<template>
  <li v-for="est in lista" :key="est.id"> </li>
</template>

<script>
import listarEstudiantefachada from "../helpers/EstudianteCliente.js"

export default {
    data(){
        return{
            lista:[]
        }

    },
    methods:{
        async mostrarEstudiante(){
             const listaEst =  listarEstudiantefachada()
             this.lista = listaEst;
        }
    }

}
</script>

<style>

</style>