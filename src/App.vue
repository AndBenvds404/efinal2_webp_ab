<template>

<NavBar/>
<RouterView></RouterView>
</template>

<script>
import EstudianteGuardar from './modules/token/pages/EstudianteGuardarPage.vue';
import TokenGuardarPage from './modules/token/pages/TokenGuardarPage.vue';
import NavBar from './modules/token/components/NavBar.vue';

export default {
  name: 'App',
  components: {
    EstudianteGuardar,
    TokenGuardarPage,
    NavBar
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
