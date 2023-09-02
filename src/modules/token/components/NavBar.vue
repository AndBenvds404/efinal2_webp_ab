<template>
<div>
    <li>
    <router-link class="btn" to="/guardar">Guardar token</router-link>
      <router-link class="btn" to="/insertar">Insertar Estudiante</router-link>
  </li>
</div>

  
</template>

<script>


export default {

}
</script>

<style scoped>

div{
  background: skyblue;
}

li{
  display: flex;
  align-items: end;
}
.btn{
  padding: 30px;
}
</style>