<template>
  <div class="global-content-padding">
    <b-container fluid>
      <b-row class="d-flex justify-content-center">
        <b-card v-b-modal.my-modal
        v-for="(item) in fixtures.highlight"
        :img-src="`${baseDir}images/${item['img']}`"
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
            </div>
            <div class="tile-content">
              <h3>{{ item.name }}</h3>
              <p>{{ item.description }}</p>
            </div>
          </b-button>
        </div>
      </b-row>
    </b-container>
    <p class = "read"> Read our past newsletters! </p>

        <div class = newsletters>
        <b-carousel :interval="5000" controls indicators img-width="1024"
          img-height="480"
          style="text-shadow: 1px 1px 2px #333;"
          @sliding-start="onSlideStart"
          @sliding-end="onSlideEnd">
        <b-carousel-slide v-for="(pdf, index) in pdfSources" :key="index" @click="selectPdf(index)"
        :img-src="imageRoutes[index]" >
          <p class = "caption"> {{ pdfNames[index]}} </p>
          <b-button variant="light">View Newsletter</b-button>
        </b-carousel-slide>
        </b-carousel>
        <b-modal v-model="showPdfViewer" title="PDF Viewer" @hidden="closePdfViewer"> <VuePdfEmbed :source="`${baseDir}${selectedPdf}`" /> </b-modal>
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
  "pdfs/newsletter-pdfs/winter24.pdf",
  "pdfs/newsletter-pdfs/summer23.pdf",
  "pdfs/newsletter-pdfs/winter23.pdf",
  "pdfs/newsletter-pdfs/summer22.pdf",
  "pdfs/newsletter-pdfs/winter22.pdf"
];
const pdfNames = [
  "Winter 2024",
  "Summer 2023",
  "Winter 2023",
  "Summer 2022",
  "Winter 2022",
];

const imageRoutes = [
    "images/news/winter24.jpg",
    "images/news/summer23.jpg",
    "images/news/winter23.jpg",
    "images/news/summer22.jpg",
    "images/news/winter22.jpg"
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

.h_text {
  font-size: 50px;
  font-weight: bold;
}

@keyframes fadeIn {
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
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

.b-col {
  padding: 0;
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

.highlight img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.highlight {
  height: 300px;
  position: relative;
  overflow: hidden;
  padding: 0;
  transition: transform 0.3s ease, background-color 0.3s ease, box-shadow 0.3s ease;
  box-shadow: 30px 30px 30px rgba(0, 0.25, 0.25, 0.25);
  border: none;
  cursor: pointer;
}

.tile {
  background-color: #FFFFFF;
  color: #333333;
  border-radius: 5px;
  padding: 20px;
  cursor: pointer;
  text-align: center;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  border: none;
}

.tile:hover {
  transform: translateY(-3px);
  background-color: grey;
  color: #FFFFFF;
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.2);
}

.tile-header img {
  width: 100%;
  height: auto;
  object-fit: cover;
  aspect-ratio: 16 / 9;
}

.tile:hover::before {
  opacity: 1;
}

.tile-content {
  padding-top: 10px;
}

.tile-header, .tile-content {
  pointer-events: none;
}
.newsletters {
  display: flex;
  flex-direction: column;
  margin-top: 2%;
}

.read {
  text-align: center;
  font-weight: bold;
  font-size: 35px;
  margin-top: 5%;
}

.caption{
  font-size: 35px;
}

@media (max-width: 600px) {
  .tiles {
    grid-template-columns: 1fr;
  }
}

.tiles {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 20px;
}

.tiles {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 20px;
}

@media (max-width: 600px) {
  .tiles {
    grid-template-columns: repeat(1, 1fr);
  }
}

.tile {
  width: 100%;
  max-width: 80%;
  margin: 20px auto;
}
.tile-header img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  aspect-ratio: 10 / 10;
  object-position: center;
  margin-bottom: -32px;
}

</style>
