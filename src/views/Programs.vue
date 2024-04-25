<template>
  <div class="global-content-padding">
    <div class="programs-container">
      <b-container>
        <b-row class="justify-content-center">
          <b-col cols="12" sm="6" md="4" v-for="(item, index) in program_fixtures" :key="index" class="d-flex justify-content-center">
            <b-card class="program" :img-src="`${baseDir}images/${item.img}`">
              <b-card-text>
                <p class="name">{{ item.name }}</p>
                <p class="description">{{ item.description }}</p>
              </b-card-text>
              <img class="save" @click="toggleSave(item)"
                  :src="isSaved(item.name) ? '/images/saved-images/saved2_active.png' : '/images/saved-images/saved2.png'" alt="Save" />
              <transition name="fade">
                <p class="save-message" v-if="showSaveMessage && currentSaving === item.name">
                  Saved!
                </p>
              </transition>
            </b-card>
          </b-col>
        </b-row>
      </b-container>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      savedPrograms: [],
      showSaveMessage: false,
      currentSaving: '',
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

.programs-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  justify-content: center;
  background-color: #F0F8FF;
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

</style>
