<template>
  <div>
  <img alt="Vue logo" src="./assets/logo.png">
  <br />
  <HomeComponent />
  </div>
</template>

<script>
import HomeComponent from './components/HomeComponent.vue'


export default {
  name: 'App',
  components: {
    HomeComponent,
  },
  created() {
    console.log("created");
  },
  mounted() {
    console.log("mounted");
  },
  updated() {
    console.log("uptade");
  },
  errorCaptured() {
    console.log("errorCaptured");
  },
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
