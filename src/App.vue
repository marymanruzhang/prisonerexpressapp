<script setup>
import { RouterLink, RouterView } from 'vue-router'
import NavBar from './components/Navigation.vue'
import Header from './components/Header.vue'
</script>

<template>

  <Header />


  <RouterView />
  <NavBar />
</template>

<style scoped>

</style>
