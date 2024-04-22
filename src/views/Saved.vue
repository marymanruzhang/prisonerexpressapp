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
        this.savedPrograms.splice(index, 1); // Remove the item from the array
        localStorage.setItem('savedPrograms', JSON.stringify(this.savedPrograms)); // Update localStorage
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
  background-color: #FFFFFF;
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
  margin-top: 10px;
}

  </style>
