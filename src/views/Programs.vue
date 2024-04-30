<template>
  <div class="global-content-padding">
    <div class="programs-container">
      <b-container>
        <b-row class="justify-content-center">
          <b-col cols="12" md="8" v-for="(item, index) in program_fixtures" :key="index">
            <b-card class="program d-flex flex-row shadow-lg">
              <b-card-img class="program-image" :src="`${baseDir}images/${item.img}`" alt="Program Image"></b-card-img>
              <div class="program-info d-flex flex-column justify-content-between">
                <b-card-text class="program-description">{{ item.description }}</b-card-text>
                <div class="program-title-container">
                  <b-card-title class="program-title">{{ item.name }}</b-card-title>
                  <img class="save" @click="toggleSave(item)"
                    :src="isSaved(item.name) ? '/images/saved-images/saved2_active.png' : '/images/saved-images/saved2.png'" alt="Save" />
                  <transition name="fade">
                    <p class="save-message" v-if="showSaveMessage && currentSaving === item.name">
                      Saved!
                    </p>
                  </transition>
                </div>
              </div>
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
  background-color: #F0F8FF;
}

.program {
  display: flex;
  align-items: center;
  margin-bottom: 20px;
  background-color: #fff;
  border-radius: 10px;
  padding: 20px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

.program-image {
  width: 150px;
  height: 150px;
  margin-right: 20px;
  border-radius: 10px;
}

.program-info {
  flex-grow: 1;
}

.program-title-container {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 20px;
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

.save {
  color: red;
  cursor: pointer;
  width: 20px;
  transition: filter 0.3s;
}

.save:hover {
  filter: brightness(120%);
}

.save-message {
  color: green;
  font-size: 1rem;
}

.fade-enter-active, .fade-leave-active {
  transition: opacity 0.5s;
}

.fade-enter, .fade-leave-to {
  opacity: 0;
}

.global-content-padding {
  padding-bottom: 7vw;
  padding-top: 3vw;
}

@media (max-width: 768px) {
  .program {
    flex-direction: column;
    align-items: center;
  }

  .program-image {
    width: 100%;
    height: auto;
    margin-bottom: 10px;
  }

  .program-info {
    width: 100%;
  }

  .program-title-container {
    flex-direction: column;
    align-items: center;
  }
}
</style>
