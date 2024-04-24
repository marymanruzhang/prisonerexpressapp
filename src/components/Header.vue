<template>
  <div class="global-content-padding">
    <b-sidebar>
      <b-container fluid>
        <b-row class="header">
          <b-col cols="2" class="sidebar-toggle">
            <img src="/public/images/menu.png" alt="Sidebar Toggle" @click="toggleSidebar">
          </b-col>
          <b-col cols="8" class="text-center">
            <img src="/public/images/PrionerExpressBGR.png" alt="Logo" class="logo">
          </b-col>
          <b-col cols="2" class="text-right settings-toggle">
            <img src="/public/images/settings.png" alt="Settings" @click="openSettings">
          </b-col>
        </b-row>

        <div v-if="isSidebarOpen" class="sidebar">
          <p>Sidebar Content</p>
          <b-button @click="toggleSidebar">Close Sidebar</b-button>
        </div>
        <div v-if="isSettingsOpen" class="settings-modal">
          <div class="settings-modal">
            <p>You can change the page to dark mode!!!</p>
            <b-button @click="toggleAppDarkMode" class="mb-3">
              {{ darkMode ? 'Disable Dark Mode' : 'Enable Dark Mode' }}
            </b-button>
            <b-button @click="closeSettings" class="mb-3">Close Settings</b-button>
          </div>
        </div>
      </b-container>
    </b-sidebar>
  </div>
</template>


<script>
import { ref } from 'vue';

export default {
  setup() {
    const isSidebarOpen = ref(false);
    const isSettingsOpen = ref(false);
    const darkMode = ref(false);

    function toggleSidebar() {
      isSidebarOpen.value = !isSidebarOpen.value;
      console.log("Sidebar toggled", isSidebarOpen.value);
    }

    function openSettings() {
      isSettingsOpen.value = true;
      console.log("Settings opened");
    }

    function closeSettings() {
      isSettingsOpen.value = false;
      console.log("Settings closed");
    }

    function toggleAppDarkMode() {
      darkMode.value = !darkMode.value;
      localStorage.setItem('darkMode', darkMode.value);
      document.body.classList.toggle('dark-theme', darkMode.value);
    }

    return {
      isSidebarOpen,
      isSettingsOpen,
      darkMode,
      toggleSidebar,
      openSettings,
      closeSettings,
      toggleAppDarkMode
    };
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Jacquard+12+Charted&family=Noto+Serif:ital,wght@0,100..900;1,100..900&display=swap');

body {
  font-family: "Noto Serif", serif;
  background-color: #F0F8FF;
}

.h1 {
  color: #000000;
  text-shadow: 1px 1px 2px #FFFACD;
  animation: fadeIn 3s ease-out;
}

.h_text{
  font-size: 70px;
  text-shadow:
    -2px -2px 0 #000,
    2px -2px 0 #000,
    -2px 2px 0 #000,
    2px 2px 0 #000,
    -1px -2px 0 #000,
    1px -2px 0 #000,
    -1px 2px 0 #000,
    1px 2px 0 #000,
    -2px -1px 0 #000,
    2px -1px 0 #000,
    -2px 1px 0 #000,
    2px 1px 0 #000
}

.logo {
  width: 200px;
  transition: transform 0.3s ease;
  transform: translateY(-30px);
}

.logo:hover {
  transform: scale(1.05) translateY(-30px);
}

.sidebar-toggle img, .settings-toggle img {
  cursor: pointer;
  width: 30px;
  transition: transform 0.3s ease;
}

.sidebar-toggle img:hover, .settings-toggle img:hover {
  transform: scale(1.2);
}

.tiles {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
  justify-content: center;
  width: 100%;
  max-width: 1200px;
  margin: 20px auto;
}

.tile {
  background-color: #FFFFFF;
  color: #333333;
  border: 2px solid #FFA500;
  border-radius: 15px;
  padding: 20px;
  cursor: pointer;
  text-align: center;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, background-color 0.3s ease, box-shadow 0.3s ease;
}
b-card.highlight{
  height:30%;
}

.tile:hover, .highlight:hover {
  transform: translateY(-5px);
  background-color: #007BFF;
  color: #FFFFFF;
  box-shadow: 0 12px 24px rgba(0, 0, 0, 0.2);
}

.sidebar {
  left: 0;
  top: 0;
  width: 250px;
  height: 100%;
  background: #FFFFFF;
  box-shadow: 4px 0 15px rgba(0,0,0,0.1);
  position: fixed;
  z-index: 1001;
}

.settings-modal {
  right: 0;
  top: 0;
  width: 300px;
  height: 100%;
  background: #FFFFFF;
  box-shadow: -4px 0 15px rgba(0,0,0,0.1);
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  padding: 50px;
  position: fixed;
  z-index: 1001;
}

.settings-toggle {
  text-align: right;
  justify-content: flex-end;
  padding-right: 20px;
  margin-bottom: 40px;
  z-index: 1000;
}

.settings-toggle img {
  cursor: pointer;
  width: 30px;
  transition: transform 0.3s ease;
  z-index: 1000;
}

.settings-toggle img:hover {
  transform: scale(1.2);
}

@keyframes fadeIn {
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
}
.tile-image {
  width: 100%;
  border-top-left-radius: 15px;
  border-top-right-radius: 15px;
}

.tile-header {
  position: relative;
}

.menu-dots {
  position: absolute;
  top: 10px;
  right: 10px;
  width: 20px;
  cursor: pointer;
}

.tile-content {
  padding-top: 10px;
}

.header {
  background-color: #EEEEEE;
  padding: 2px 0;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  animation: fadeIn 0.5s ease-out;
  margin-bottom: -10%;

}

.sidebar-toggle img, .settings-toggle img {
  cursor: pointer;
  transition: transform 0.3s ease;
  width: 35px;
}

.sidebar-toggle img:hover, .settings-toggle img:hover {
  transform: scale(1.2);
}

.logo {
  width: 100px;
  transition: transform 0.3s ease;
  transform: translateY(-5px);
}

.logo:hover {
  transform: scale(1.05) translateY(-5px);
}

.b-col {
  padding: 0;
}

.header .text-center {
  display: flex;
  justify-content: center;
  align-items: center;
}

.highlight img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  padding: -10%;
}

.highlight {
  height: 300px;
  position: relative;
  overflow: hidden;
  padding: 5px;
  transition: transform 0.3s ease, background-color 0.3s ease, box-shadow 0.3s ease;
  box-shadow: 40px 40px 40px rgba(0, 0, 0, 0.25);
}

.h_text {
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  font-size: 2em;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1;
}

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
.global-content-padding{
  position: sticky;
}


</style>
