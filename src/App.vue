  
<script setup>
  import LandingPage from './components/LandingPage.vue'
  import NavBar from './components/NavBar.vue'
</script>

<template>

    <NavBar />
    <LandingPage />

</template>

<style>
  * {
    font-family: 'Poppins';
  }

  body {
    background: url('~@/assets/Home.svg') no-repeat top center scroll;
    background-size: cover;
  }

</style>
