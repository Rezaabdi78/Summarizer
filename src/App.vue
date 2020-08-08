<template>
  <v-app>
  <div id="app">
    <Header/>
    <router-view/>
  </div>
  </v-app>
</template>

<script>
import './assets/full.css'
import Header from "./components/header"
export default {
  components:{
    Header
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
  font-family: IranSansRegular;

  /* background-image: linear-gradient(to top, #0084ff, #7fffd4); */
  /* background-image: linear-gradient(to top, #0084ff, #ffa480); */
  /* background-image: linear-gradient(to top, #0084ff, #ff4480); */
  /* background-image: linear-gradient(to top, #ff4500, #00ff2a); */
  /* background-image: linear-gradient(to top, #ec4a0f, #d5eb11); */
  /* background-image: linear-gradient(to top, #2b309f, #ece7e7); */

  background-color: #dee3e7; 
  background-size: 100%;
  background-attachment: fixed;
  background-repeat: no-repeat;
  height: 100%;
}

</style>
