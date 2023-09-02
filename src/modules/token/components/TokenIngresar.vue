<template>
  <div class="contain">

    <label for=""> semilla</label>
    <input v-model="semilla" type="text">
    <label for="">tiempo</label>
    <input v-model="tiempo" type="text">
    <label  for="">token</label>
    <input v-model="tokens" type="text">
    <button @click="mostarToken" >obtener token</button>

  </div>
</template>

<script>

import obtenerTokenfachada from "../helpers/TokenCliente.js"
export default {
    data(){
        return{

            semilla: "",
            tiempo: 0,
            tokens: "",
            body:null
        }
    },

    methods:{
        async mostarToken(){
                this.body={
                    userName:"and",
                    password:"pass1"
                }
                console.log(this.body)
            const token =  obtenerTokenfachada(this.body, this.semilla, this.tiempo)
            this.tokens=token
        }
    }
}
</script>

<style>

.contain{
    display: grid;
    align-items: center;
    justify-content: center;
    background: grey;
    width: 500px;
}

label{
    padding: 15px;
}
button{
    margin-top: 20px;
    width: 70px;
}

</style>