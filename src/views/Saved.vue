<template>
    <div class="saved-programs-container">
      <b-container>
        <b-row>
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
.programs-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  justify-content: center;
  background-color: #F5F5DC;
;
}
.save {
  background-color: beige;
  color: black;
  border: none;
  position: absolute;
  bottom: 10px;
  right: 38px;
  width: 30px;
}
.program {
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
.undo {
  background-color: #FF4136;
  color: white;
  border: none;
  cursor: pointer;
  margin-top: 5px;
}

.saved-programs-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  justify-content: center;
  background-color: #F5F5DC;
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
</style>
