<template>
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
    <b-row class="d-flex justify-content-center">

      <b-card
      tag="router-link"
      to="/highlight"
      v-for="(item) in fixtures.highlight"
      img-src="/public/images/highlight.png"
      img-alt="Card image"
      class=" highlight mt-5 w-75"
      img-top
      overlay

    >
        <span class="text-white font-weight-bold h_text d-flex"
        style="align-items: center; justify-content: center; height: 100%;">Highlighted Work</span>

    </b-card>

    </b-row>
    <b-row  class="d-flex justify-content-center h1 mt-3"> Explore </b-row>
    <b-row>
      <div class="tiles">
        <b-button v-for="(item, work_type) in fixtures.explore" :key="item.name" class="tile" @click="goToDetail(item.name)"
        :to="`/works/${work_type}`">
          <div class="tile-header">
            <img :src="`/public/images/${work_type}/${item.image}`" alt="Tile Image" class="tile-image">
            <img src="/public/images/menu-dots.png" alt="Options" class="menu-dots">
          </div>
          <div class="tile-content">
            <h3>{{ item.name }}</h3>
            <p>{{ item.description }}</p>
          </div>
        </b-button>
      </div>
    </b-row>
    <div v-if="isSidebarOpen" class="sidebar">
      <p>Sidebar Content</p>
      <b-button @click="toggleSidebar">Close Sidebar</b-button>
    </div>
    <div v-if="isSettingsOpen" class="settings-modal">
      <p>Settings Content</p>
      <b-button @click="closeSettings">Close Settings</b-button>
    </div>
  </b-container>

  <div class = newsletters>
  <b-button v-for="(pdf, index) in pdfSources" :key="index" @click="selectPdf(index)">
      {{ pdfNames[index] }}
  </b-button>


  <b-modal v-model="showPdfViewer" title="PDF Viewer" @hidden="closePdfViewer"> <VuePdfEmbed :source="selectedPdf" /> </b-modal>
  </div>

</template>

<script setup>
import { useRoute, useRouter } from 'vue-router';
import { ref } from 'vue';
const router = useRouter();
const isSidebarOpen = ref(false);
const isSettingsOpen = ref(false);

import { ref } from 'vue';
import VuePdfEmbed from 'vue-pdf-embed';
import 'vue-pdf-embed/dist/style/index.css';

const slide = ref(0);

const pdfSources = [
  "/pdfs/winter24.pdf",
  "/pdfs/summer23.pdf",
  "/pdfs/winter23.pdf",
  "/pdfs/summer22.pdf",
  "/pdfs/winter22.pdf"
];

const pdfNames = [
  "Winter 2024",
  "Summer 2023",
  "Winter 2023",
  "Summer 2022",
  "Winter 2022",
];

const selectedPdf = ref(null);
const showPdfViewer = ref(false);

const selectPdf = (index) => {
  selectedPdf.value = pdfSources[index];
  showPdfViewer.value = true;
};

const closePdfViewer = () => {
  selectedPdf.value = null;
  showPdfViewer.value = false;
};

function goToDetail(name) {
  router.push({ name: 'detail', params: { itemName: name } });
  console.log("Navigated to:", name);
}

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

</script>


<style>
body {
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  background-color: #F0F8FF;
}

.h1 {
  color: #000000;
  text-shadow: 1px 1px 2px #FFFACD;
  animation: fadeIn 3s ease-out;
}

.header {
  background-color: #FFFFFF;
  padding: 10px 0;
  box-shadow: 0 4px 8px rgba(0,0,0,0.1);
  animation: fadeIn 0.5s ease-out;
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

.highlight{
  background-color: #FFFFFF;
  color: #333333;
  border: 2px solid #FFA500;
  border-radius: 15px;
  padding: 5px;
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
  position: fixed;
  left: 0;
  top: 0;
  width: 250px;
  height: 100%;
  background: #FFFFFF;
  box-shadow: 4px 0 15px rgba(0,0,0,0.1);
  z-index: 1000;
}

.settings-modal {
  position: fixed;
  right: 0;
  top: 0;
  width: 300px;
  height: 100%;
  background: #FFFFFF;
  box-shadow: -4px 0 15px rgba(0,0,0,0.1);
  z-index: 1000;
}

.settings-toggle {
  text-align: right;
  justify-content: flex-end;
  padding-right: 20px;
}

.settings-toggle img {
  cursor: pointer;
  width: 30px;
  transition: transform 0.3s ease;
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
</style>
