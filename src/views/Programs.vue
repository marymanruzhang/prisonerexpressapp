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
  width: 20px; /* Adjust the width as needed */
  transition: filter 0.3s;
}

.save:hover {
  filter: brightness(120%);
}

.program {
  position: relative;
  max-width: 350px; /* Adjust max-width for responsiveness */
  padding: 4vw; /* Adjust padding for responsiveness */
  text-align: center;
  margin-bottom: 4vw; /* Adjust margin for responsiveness */
}

.program:hover {
  box-shadow: 0 0 10px black;
}

.name {
  font-size: 1.8vw; /* Adjust font size for responsiveness */
}

.description {
  font-size: 1.2vw; /* Adjust font size for responsiveness */
}

.save-message {
  color: green;
  font-size: 1.4vw; /* Adjust font size for responsiveness */
}

.fade-enter-active, .fade-leave-active {
  transition: opacity 0.5s;
}

.fade-enter, .fade-leave-to {
  opacity: 0;
}

.global-content-padding {
  padding-bottom: 10vw; /* Adjust padding for responsiveness */
}

@media (max-width: 768px) {
  .program {
    max-width: 300px; /* Adjust max-width for smaller screens */
    padding: 5vw; /* Adjust padding for smaller screens */
    margin-bottom: 5vw; /* Adjust margin for smaller screens */
  }

  .name {
    font-size: 2vw; /* Adjust font size for smaller screens */
  }

  .description {
    font-size: 1.4vw; /* Adjust font size for smaller screens */
  }

  .save-message {
    font-size: 1.6vw; /* Adjust font size for smaller screens */
  }

  .global-content-padding {
    padding-bottom: 15vw; /* Adjust padding for smaller screens */
  }
}

@media (max-width: 576px) {
  .program {
    max-width: 250px; /* Adjust max-width for even smaller screens */
    padding: 6vw; /* Adjust padding for even smaller screens */
    margin-bottom: 6vw; /* Adjust margin for even smaller screens */
  }

  .name {
    font-size: 2.2vw; /* Adjust font size for even smaller screens */
  }

  .description {
    font-size: 1.5vw; /* Adjust font size for even smaller screens */
  }

  .save-message {
    font-size: 1.8vw; /* Adjust font size for even smaller screens */
  }

  .global-content-padding {
    padding-bottom: 20vw; /* Adjust padding for even smaller screens */
  }
}

</style>
