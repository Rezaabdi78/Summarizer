<template>
  <v-app>
    <div id="app">
        <router-view/>
    </div>
  </v-app>
</template>

<script>
import './assets/full.css'

export default {
    beforeCreate () {
        document.title = "خلاصه‌ساز هوشمند متن";
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

.theme--light .v-icon{
  color: white  !important;
}
.theme--light.v-text-field--solo > .v-inputcontrol > .v-inputslot {
    background: rgba(255,255,255,0.5) !important;
}

textarea::-webkit-input-placeholder {
  color: rgba(255,255,255,0.5) !important;  
}

textarea:-moz-placeholder { /* Firefox 18- */
  color: rgba(255,255,255,0.5) !important;  
}

textarea::-moz-placeholder {  /* Firefox 19+ */
  color: rgba(255,255,255,0.5) !important;  
}

textarea:-ms-input-placeholder {
  color: rgba(255,255,255,0.5) !important;  
}

textarea::placeholder {
  color: rgba(255,255,255,0.5) !important;  
}

.theme--light .v-input textarea{
  color: #eaeaea !important;
}
.theme--light .v-input input{
  color: #eaeaea !important;
}
input::placeholder {
  color: rgba(255,255,255,0.5) !important;  
}
.v-btn__content{
    letter-spacing: initial !important;
    font-family: VazirBold !important;
    font-size: 1.1rem !important;
}

.theme--light .v-icon{
  color: white  !important;
  font-size: 16px !important;
}
</style>
