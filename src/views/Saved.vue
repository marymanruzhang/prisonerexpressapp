<template>
  <div class="global-content-padding">
    <div class="saved-programs-container">
      <b-container>
        <b-row v-if="savedPrograms.length === 0" class="no-saved-message justify-content-center">
          <img align="center" src="/public/images/saved-images/learning.png" alt="Options" class="image-saved w-75">
          <div class="text">It seems you have nothing saved, you should add a program!</div>
        </b-row>
        <b-row v-else>
          <b-col md="4" v-for="(item, index) in savedPrograms" :key="index">
            <b-card class="program clickable" @click="selectFixture(item)">
              <b-card-img :src="`${baseDir}images/${item.img}`" alt="Program Image" top></b-card-img>
              <b-card-text>
                <p class="name">{{ item.name }}</p>
                <p class="description">{{ item.description }}</p>
              </b-card-text>
              <b-button class="undo" @click.stop="undoSave(item)">Unsave</b-button>
            </b-card>
          </b-col>
        </b-row>
      </b-container>
    </div>
    <b-modal v-model="showModal" id="my-modal" title="Program Details" hide-footer>
      <div v-if="selectedFixture">
        <h4>{{ selectedFixture.name }}</h4>
        <vue-pdf-embed :source="`${baseDir}${selectedFixture.pdf}`"/>
      </div>
    </b-modal>
  </div>
</template>

<script>
import VuePdfEmbed from 'vue-pdf-embed';
import 'vue-pdf-embed/dist/style/index.css';

export default {
  components: {
    VuePdfEmbed
  },
  data() {
    return {
      savedPrograms: [],
      selectedFixture: null,
      showModal: false
    };
  },
  methods: {
    undoSave(item) {
      const index = this.savedPrograms.indexOf(item);
      if (index !== -1) {
        this.savedPrograms.splice(index, 1);
        localStorage.setItem('savedPrograms', JSON.stringify(this.savedPrograms));
      }
    },
    selectFixture(fixture) {
      this.selectedFixture = fixture;
      this.showModal = true;
    },
  },
  mounted() {
    const saved = localStorage.getItem('savedPrograms');
    if (saved) {
      this.savedPrograms = JSON.parse(saved);
    }
  }
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Jacquard+12+Charted&family=Noto+Serif:ital,wght@0,100..900;1,100..900&display=swap');

body {
  font-family: "Noto Serif", serif;
}

.saved-programs-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px;
  min-height: 300px;
}

.no-saved-message {
  color: #FF4136;
  font-size: 24px;
  font-weight: bold;
  text-align: center;
}

.program {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: relative;
  max-width: 350px;
  height: 550px;
  padding: 20px;
  text-align: center;
  margin-bottom: 20px;
  background: #FFFFFF;
  border: 1px solid #DDD;
}

.program:hover {
  box-shadow: 0 0 10px rgba(0,0,0,0.15);
}

.name {
  font-size: 24px;
  margin-top: 10px;
}

.description {
  font-size: 16px;
  color: #666;
  margin-bottom: 15px;
}

.undo {
  background-color: #FF4136;
  color: white;
  border: none;
  cursor: pointer;
  padding: 10px 20px;
  align-self: center;
  margin-top: auto;
}


.global-content-padding {
    padding-bottom: 100px;
}

.programs-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  justify-content: center;
}

.save {
  color: red;
  cursor: pointer;
  width: 20px;
  transition: filter 0.3s;
}

.save:hover {
  filter: brightness(120%);
}

.program {
  position: relative;
  max-width: 350px;
  padding: 4vw;
  text-align: center;
  margin-bottom: 4vw;
}

.program:hover {
  box-shadow: 0 0 10px black;
}

.name {
  font-size: 1.8vw;
}

.description {
  font-size: 1.2vw;
}

.save-message {
  color: green;
  font-size: 1.4vw;
}

.fade-enter-active, .fade-leave-active {
  transition: opacity 0.5s;
}

.fade-enter, .fade-leave-to {
  opacity: 0;
}

.global-content-padding {
  padding-bottom: 10vw;
}

.program.clickable:hover {
  cursor: pointer;
  box-shadow: 0 0 15px rgba(0,0,0,0.2);
}

@media (max-width: 768px) {
  .program {
    max-width: 300px;
    padding: 5vw;
    margin-bottom: 5vw;
  }

  .name {
    font-size: 2vw;
  }

  .description {
    font-size: 1.4vw;
  }

  .save-message {
    font-size: 1.6vw;
  }

  .global-content-padding {
    padding-bottom: 15vw;
  }
}

@media (max-width: 576px) {
  .program {
    max-width: 250px;
    padding: 6vw;
    margin-bottom: 6vw;
  }

  .name {
    font-size: 2.2vw;
  }

  .description {
    font-size: 1.5vw;
  }

  .save-message {
    font-size: 1.8vw;
  }

  .global-content-padding {
    padding-bottom: 20vw;
  }
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
