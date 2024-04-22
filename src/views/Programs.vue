<template>
  <div class="programs-container">
  <b-container>
  <b-row>
    <b-col md="4" v-for="(item, index) in program_fixtures" :key="index">
      <b-card class="program" :img-src="`${baseDir}images/${item.img}`">
        <b-card-text>
          <p class="name">{{ item.name }}</p>
          <p class = "description"> {{ item.description }}</p>
        </b-card-text>
        <!-- <b-button href="/" variant="primary">Explore {{ item.name }}</b-button> -->
        <b-button class="save" href="/">
          <img src="/images/saved2.png" alt="Saved" />

        </b-button>
      </b-card>
          </b-col>
        </b-row>
      </b-container>

  </div>
</template>


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
  width: 30px; /* Adjust the width of the save icon */
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


</style>
