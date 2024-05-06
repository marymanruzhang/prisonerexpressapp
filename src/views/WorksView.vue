<script>
import VuePdfEmbed from 'vue-pdf-embed';
import 'vue-pdf-embed/dist/style/index.css';

export default {
  components: {
    VuePdfEmbed
  },
  data() {
    return {
      selectedFixture: null
    };
  },
  props: {
    work_type: {
      type: String,
      required: true
    }
  },
  computed: {
    fixturesList() {
      return Object.values(Object.fromEntries(Object.entries(this.fixtures).filter(([key, value]) => key === this.work_type)))[0];
    }
  },
  methods: {
    selectFixture(fixture) {
      this.selectedFixture = fixture;
    },
    clearSelection() {
      this.selectedFixture = null;
    }
  }
};
</script>

<template>
<div class="global-programs-container">
  <b-container >
    <b-row>
    <p align = "center" class = "uppercase"> {{this.work_type}} Collection</p>
    </b-row>
    <b-row>
      <b-card v-b-modal.my-modal
        class="work_card stylish-card"
        v-for="(fixture, key) in fixturesList"
        :key="key"
        @click="selectFixture(fixture)"
      >
        <div class="card-body">
          <b-row>
            <b-col v-if="fixture['img']">
              <img class="work_img card-img" :src="`${baseDir}images/${fixture['img']}`">
            </b-col>
            <b-col class="d-flex flex-column justify-content-center align-items-center">
              <h3 align = "center" v-if="fixture['title']" class="card-title">{{ fixture["title"] }}</h3>
              <h6  align = "center" v-if="fixture['author']" class="card-text">by: {{ fixture["author"] }}</h6>
              <h6  class="card-text" align = "center" v-if="fixture['date']">Published: {{ fixture["date"] }}</h6>
              <h6  class="card-text" align = "center" v-if="fixture['newsletter']">Featured in {{ fixture["newsletter"] }}</h6>
            </b-col>
          </b-row>
        </div>
    <b-modal v-if="selectedFixture && work_type ==='art'"
      id="my-modal"
      hide-footer >
        <div class="card-body">
          <img class="w-100 h-75" :src="`${baseDir}images/${selectedFixture['img']}`">
        </div>
      </b-modal>

      <b-modal v-if="selectedFixture && work_type !='art'"
      id="my-modal"
      hide-footer >
      <p v-if="selectedFixture['mailing_address']" align="center"> Mailing Address: {{selectedFixture['mailing_address']}}</p>
      <VuePdfEmbed  :v-if="`${baseDir}${selectedFixture['pdf']}`" annotation-layer text-layer :source="`${baseDir}${selectedFixture['pdf']}`"/>
      <p  align="center">{{ selectedFixture['title'] }}</p>
      <p>{{ selectedFixture['essay'] }}</p>
      </b-modal>



      </b-card>
    </b-row>
  </b-container>
</div>
</template>


<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Dancing+Script:wght@400;700&display=swap');

@import url('https://fonts.googleapis.com/css2?family=Jacquard+12+Charted&family=Noto+Serif:ital,wght@0,100..900;1,100..900&display=swap');

body {
  font-family: "Noto Serif", serif;
  background-color: #F0F8FF;
}
.centered-card {
  z-index: 11;
  width: 50%;
  max-width: 700px;
  min-width: 400px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  transition: transform 0.3s ease-out;
  transform: scale(1.05);
}

.dim {
  opacity: 0.4;
  transition: opacity 0.3s ease-out;
}


.overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow-y: auto;
  background-color: rgba(0, 0, 0, 0.7);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 10;
}

.pdf-container{

  width: 100%;
  height: 90vh;
  overflow-y: auto;

}

.stylish-card {
  transition: transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out;
  border: none;
  border-radius: 10px;
}

.stylish-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 4px 20px rgba(0,0,0,0.25);
}

.stylish-card .card-img {
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
}

.stylish-card .card-body {
  padding: 20px;
}

.stylish-card .card-title {
  color: #333;
  font-size: 30px;
  font-weight: bold;
}

.stylish-card .card-text {
  color: #666;
  margin-top: 10px;
}


.work_card {
  cursor: pointer;
  transition: transform 0.3s ease-in-out;
}

.work_card:hover {
  transform: translateY(-5px);
}

.work_img{
  width:300px;
  height:400px;

}

.uppercase {
  text-transform: uppercase;
  font-size: 40px;
  font-family: 'Dancing Script', cursive;
}

.global-programs-container {
    padding-bottom: 100px;
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
