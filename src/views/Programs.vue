<template>
  <div class="global-content-padding">
    <div class="programs-container">
      <b-container>
        <b-row>
          <b-col md="4" v-for="(item, index) in program_fixtures" :key="index">
            <b-card class="program" :img-src="`${baseDir}images/${item.img}`">
              <b-card-text>
                <p class="name">{{ item.name }}</p>
                <p class="description">{{ item.description }}</p>
              </b-card-text>
              <img class="save" @click="toggleSave(item)"
                  :src="isSaved(item.name) ? '/images/saved2_active.png' : '/images/saved2.png'" alt="Save" />
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
  position: absolute;
  bottom: 10px;
  right: 38px;
  width: 30px;
  transition: filter 0.3s;
}

.save:hover {
  filter: brightness(120%);
}

.program {
  position: relative;
  max-width: 350px;
  height: 550px;
  padding: 50px;
  text-align: center;
  margin-bottom: 8%;
}

.program:hover {
  box-shadow: 0 0 10px black;
}

.name {
  font-size: 35px;
}

.description {
  font-size: 15px;
}

.save-message {
  position: absolute;
  bottom: 25px;
  right: 50px;
  color: green;
  font-size: 18px;
}

.fade-enter-active, .fade-leave-active {
  transition: opacity 0.5s;
}

.fade-enter, .fade-leave-to {
  opacity: 0;
}

.global-content-padding {
    padding-bottom: 100px;
}
</style>
