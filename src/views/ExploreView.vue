<template>

<!-- tag="router-link"
        to="/highlight" -->
  <div class="global-content-padding">
    <b-container fluid>
      <b-row class="d-flex justify-content-center">
        <b-card v-b-modal.my-modal
        v-for="(item) in fixtures.highlight"
        img-src="/public/images/highlight-image/highlight.png"
        img-alt="Card image"
        class="highlight mt-5 w-75"
        img-top
        overlay
        >
  <span class="text-white font-weight-bold h_text d-flex"
        style="align-items: center; justify-content: center; height: 100%;">Highlighted Work</span>

        <b-modal id="my-modal" hide-footer  class = "w-100">
          <h3 align = "center" v-if="item['title']" class="card-title mb-3">{{ item["title"] }}</h3>
                        <h6 align = "center" v-if="item['author']" class="card-text">by: {{ item["author"] }}</h6>
                        <h6 align = "center" v-if="item['date']">Published: {{ item["date"] }}</h6>
                        <h6 align = "center" v-if="item['newsletter']">Featured in {{ item["newsletter"] }}</h6>
                    <b-img
                    class = "w-100"
                        :src="`${baseDir}images/${item['img']}`">

                    </b-img>
                </b-modal>
      </b-card>



      </b-row>
      <b-row  class="d-flex justify-content-center h1 mt-3"> Explore </b-row>
      <b-row>

        <div class="tiles">
          <b-button v-for="(item, work_type) in fixtures.explore" :key="item.name" class="tile" @click="goToDetail(item.name)" :to="`/works/${work_type}`">
            <div class="tile-header">
              <b-card :img-src="`${baseDir}images/${item.img}`"> </b-card>
              <img src="/public/images/menu-dots.png" alt="Options" class="menu-dots">
            </div>
            <div class="tile-content">
              <h3>{{ item.name }}</h3>
              <p>{{ item.description }}</p>
            </div>
          </b-button>
        </div>
      </b-row>
    </b-container>

    <div class = newsletters>
    <b-button v-for="(pdf, index) in pdfSources" :key="index" @click="selectPdf(index)">
        {{ pdfNames[index] }}
    </b-button>

    <b-modal v-model="showPdfViewer" title="PDF Viewer" @hidden="closePdfViewer"> <VuePdfEmbed :source="selectedPdf" /> </b-modal>
    </div>
  </div>
</template>

<script setup>
import { useRoute, useRouter } from 'vue-router';
import { ref } from 'vue';
const router = useRouter();

import VuePdfEmbed from 'vue-pdf-embed';
import 'vue-pdf-embed/dist/style/index.css';

const slide = ref(0);

const pdfSources = [
  "/pdfs/newsletter-pdfs/winter24.pdf",
  "/pdfs/newsletter-pdfs/summer23.pdf",
  "/pdfs/newsletter-pdfs/winter23.pdf",
  "/pdfs/newsletter-pdfs/summer22.pdf",
  "/pdfs/newsletter-pdfs/winter22.pdf"
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
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  padding: 50px;
}

.settings-toggle {
  text-align: right;
  justify-content: flex-end;
  padding-right: 20px;
  margin-bottom: 40px;
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

.header {
  background-color: #EEEEEE;
  padding: 2px 0;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  animation: fadeIn 0.5s ease-out;
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
.global-content-padding {
    padding-bottom: 100px;
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

</style>
