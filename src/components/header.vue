<template>
  <div class="header  shadow-2xl px-8 py-2 mb-4 inline-block  w-full">
      <router-link to="/"><img src="../assets/logo.png" alt="logo image" width="54px" height="54px" class="logoImage pr-2"></router-link>
      <router-link to="/" class="m-2 float-left order-1">صفحه اصلی</router-link>
      <router-link to="/contactUs" class="m-2 float-left order-2">تماس با ما</router-link>
      <router-link to="/aboutUs" class="m-2 float-left order-3">درباره ما</router-link>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.header{
    background-color: #ececec;
    box-shadow: rgba(48, 41, 41, 0.527);
    display: inline-block;
}
.logoImage{
    margin: 0;
    float: right;
    vertical-align: auto;
}
a{
    font-weight: bold;
    color: #0e1c75 !important;
}
a.router-link-exact-active{
    font-weight: bold;
    color: #c71123 /*rgba(13, 42, 207, 0.849)*/ !important;
}


@media screen and (max-width: 600px){
    .header{
        display: grid;
    }
    .logoImage{
       margin: auto;
    }
}

</style>