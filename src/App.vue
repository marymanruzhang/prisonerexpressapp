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
.dark-theme {
  background-color: #121212;
  color: #e0e0e0;
}

.dark-theme .header, .dark-theme .settings-modal, .dark-theme .sidebar {
  background-color: #333;
  color: #ffffff;
}

.dark-theme .tile, .dark-theme .highlight {
  background-color: #424242;
  color: #ffffff;
  border-color: #616161;
}

.dark-theme .tile:hover, .dark-theme .highlight:hover {
  background-color: #535353;
  color: #ffffff;
  box-shadow: 0 12px 24px rgba(255, 255, 255, 0.12);
}

.dark-theme img {
  filter: brightness(0.8);
}
</style>
