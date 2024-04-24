<template>
  <div class="global-content-padding">
    <div class="saved-programs-container">
      <b-container>
        <div v-if="savedPrograms.length === 0" class="no-saved-message">
          You have nothing saved, you should add a program!!
        </div>

        <b-row v-else>
          <b-col md="4" v-for="(item, index) in savedPrograms" :key="index">
            <b-card class="program" :img-src="`${baseDir}images/${item.img}`">
              <b-card-text>
                <p class="name">{{ item.name }}</p>
                <p class="description">{{ item.description }}</p>
              </b-card-text>
              <b-button class="undo" @click="undoSave(item)">Undo</b-button>
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
      savedPrograms: []
    };
  },
  methods: {
    undoSave(item) {
      const index = this.savedPrograms.indexOf(item);
      if (index !== -1) {
        this.savedPrograms.splice(index, 1);
        localStorage.setItem('savedPrograms', JSON.stringify(this.savedPrograms));
      }
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
.saved-programs-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px;
  background-color: #F0F8FF;
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
</style>
