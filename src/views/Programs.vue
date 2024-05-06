<template>
  <div class="global-content-padding">
    <div class="programs-container">
      <b-container>
        <b-row class="justify-content-center">
          <b-col cols="12" md="8" v-for="(item, index) in program_fixtures" :key="index">
           <b-card
            v-b-modal.my-modal
            @click="selectFixture(item)"
            @mouseover="hover = true"
            @mouseleave="hover = false"
            :class="{'hover-effect': hover}"
            class="program d-flex flex-row shadow-lg">
              <div class="program-title-container">
                <b-card-title class="program-title">{{ item.name }}</b-card-title>
                <div class="save-container">
                  <img class="save" @click.stop="toggleSave(item)"
                  :src="isSaved(item.name) ? `${baseDir}images/saved-images/saved2_active.png` : `${baseDir}images/saved-images/saved2.png`"
                       alt="Save" />
                  <div v-if="isSaved(item.name)" class="save-message">Saved</div>
                </div>
              </div>
              <b-card-img class="program-image" :src="`${baseDir}images/${item.img}`" alt="Program Image"></b-card-img>
              <div class="program-info d-flex flex-column justify-content-between">
                <b-card-text class="program-description">{{ item.description }}</b-card-text>
              </div>

              <b-modal v-if="selectedFixture" id="my-modal" hide-footer >
                {{selectedFixture['name']}}
                <VuePdfEmbed annotation-layer text-layer :source="`${baseDir}${selectedFixture['pdf']}`"/>
              </b-modal>
            </b-card>
          </b-col>
        </b-row>
      </b-container>
    </div>
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
      showSaveMessage: false,
      currentSaving: '',
      selectedFixture: null
    };
  },
  methods: {
    toggleSave(item) {
      const index = this.savedPrograms.findIndex(p => p.name === item.name);
      if (index === -1) {
        this.savedPrograms.push(item);
        this.showSaveMessage = true;
        this.currentSaving = item.name;
        setTimeout(() => {
          this.showSaveMessage = false;
          this.currentSaving = '';
        }, 2000);
      } else {
        this.savedPrograms.splice(index, 1);
      }
      localStorage.setItem('savedPrograms', JSON.stringify(this.savedPrograms));
    },
    isSaved(programName) {
      return this.savedPrograms.some(p => p.name === programName);
    },
    selectFixture(fixture) {
      this.selectedFixture = fixture;
    },
    clearSelection() {
      this.selectedFixture = null;
    }
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

.global-content-padding {
  padding-bottom: 12vw;
  padding-top: 3vw;
}

.program {
  display: flex;
  flex-direction: row;
  align-items: start;
  margin-bottom: 20px;
  background-color: #fff;
  border-radius: 10px;
  padding: 20px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

.program-title-container {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 1vh;
}

.program-image {
  width: 200px;
  height: 200px;
  margin-left: 20px;
  border-radius: 10px;
  padding-top: 20px;
}

.program-info {
  flex-grow: 1;
}

.program-title {
  font-size: 1.2rem;
  margin-bottom: 0.5rem;
  font-weight: bold;
  color: #333;
}

.program-description {
  font-size: 1rem;
  color: #666;
  padding-top: 5vh;
}

.save-container {
  position: relative;
}


.save-message {
  color: green;
  font-size: 0.8rem;
  position: absolute;
  top: 50px;
  left: 0;
  width: 100%;
  text-align: center;
}

.save {
  color: red;
  cursor: pointer;
  width: 40px;
  transition: filter 0.3s, box-shadow 0.3s;
}

.save:hover {
  filter: brightness(120%);
}

.save-container {
  position: relative;
}

.save-message {
  color: green;
  font-size: 0.8rem;
  position: absolute;
  top: 50px;
  left: 0;
  width: 100%;
  text-align: center;
}
.fade-enter-active, .fade-leave-active {
  transition: opacity 0.5s;
}

.fade-enter, .fade-leave-to {
  opacity: 0;
}

.program {
  cursor: pointer;
}


@media (max-width: 900px) {
  .program {
    flex-direction: row;
    align-items: center;
    justify-content: start;
    width: auto;
    max-width: none;
  }
  .program-image {
    width: 100px;
    height: 100px;
    margin-right: 10px;
  }

  .program-info {
    flex-grow: 1;
    padding-left: 10px;
  }

  .program-title-container {
    padding-left: 0;
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
