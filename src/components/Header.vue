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
                  <p class="prompt-title">Today's Journal Prompt:</p>
                  <p class="prompt">{{ currentPrompt }}</p>
                  <b-button @click="generatePrompt" class="mb-3 prompt-button">New Prompt</b-button>
                  <b-button @click="toggleSidebar" class="close-button">Close Sidebar</b-button>
              </div>
              <div v-if="isSettingsOpen" class="settings-modal">
                  <p>You can change the page to dark mode!!!</p>
                  <b-button @click="toggleAppDarkMode" class="mb-3 toggle-button">
                      {{ darkMode ? 'Disable Dark Mode' : 'Enable Dark Mode' }}
                  </b-button>
                  <b-button @click="closeSettings" class="close-button">Close Settings</b-button>
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
const currentPrompt = ref("Click on 'New Prompt' to get started!");

const prompts = [
"What is something you learned this week?",
"Describe a moment today when you felt content.",
"Write about a person who has influenced your life.",
"What are three things you're grateful for today?",
"How do you feel about the current chapter of your life?",
"What is your most treasured memory?",
"What is something you're looking forward to?",
"What inspires you?",
"What do you hope to achieve in the next year?",
"Describe a book that has impacted your life.",
"Write about a time when you overcame a difficult challenge.",
"What are some things you're proud of accomplishing?",
"Describe a place that holds special meaning to you.",
"Write about a person you admire and why.",
"What are your goals for after release?",
"Describe a moment of kindness you've experienced.",
"Write about a skill you'd like to learn or improve.",
"What brings you peace?",
"Describe a favorite memory from childhood.",
"Write about a time when you helped someone else.",
"What do you value most in relationships?",
"Describe a personal strength you're working to develop.",
"Write about a book or movie that inspired you.",
"What are some things you're looking forward to doing after release?",
"Describe a time when you took responsibility for a mistake.",
"Write about a goal you're working towards.",
"What do you think is the key to a happy life?",
"Describe a moment of forgiveness or apologies that impacted your life.",
"What are some things you're grateful for today?",
"How do you feel about the progress you've made so far?"
];

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

function generatePrompt() {
currentPrompt.value = prompts[Math.floor(Math.random() * prompts.length)];
}

return {
isSidebarOpen,
isSettingsOpen,
darkMode,
toggleSidebar,
openSettings,
closeSettings,
toggleAppDarkMode,
currentPrompt,
generatePrompt
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
  position: fixed;
  width: 100%;
  z-index: 1000;
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

.b-sidebar {
  z-index: 1050;
}

.sidebar, .settings-modal {
  position: fixed;
  top: 0;
  width: 250px;
  max-height: 100vh;
  overflow-y: auto;
  box-shadow: 4px 0 15px rgba(0,0,0,0.1);
  background: #FFFFFF;
  z-index: 1051;
}

.settings-modal {
  width: 300px;
  right: 0;
  box-shadow: -4px 0 15px rgba(0,0,0,0.1);
  z-index: 1052;
}

.prompt-title {
font-size: 1.2em;
font-weight: bold;
margin-bottom: 10px;
color: #333;
}

.prompt {
font-size: 1em;
margin-bottom: 20px;
color: #555;
}

.prompt-button, .toggle-button, .close-button {
  display: block;
  width: 90%;
  margin: 10px auto;
  padding: 12px;
  font-size: 1em;
  color: white;
  background-color: #007BFF;
  border: none;
  border-radius: 5px;
  transition: background-color 0.3s ease;
}

.prompt-button:hover, .toggle-button:hover, .close-button:hover {
  background-color: #0056b3;
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.2);
}

.close-button {
  margin-top: 70vh;
  background-color: #FF6347;
}

.close-button:hover {
  background-color: #e05241;
}

.sidebar {
  right: 0;
  top: 0;
  width: 300px;
  height: 100%;
  background: #FFFFFF;
  box-shadow: -4px 0 15px rgba(0,0,0,0.1);
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  padding: 20px;
  position: fixed;
  z-index: 1001;
}


</style>
