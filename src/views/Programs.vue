<template>
  <div class="programs-container">
    <h1> Programs </h1>

    <div class="tiles">
      <b-card class = "city"  v-for="(item) in fixtures"  :key="item.name" :img-src="`${baseDir}images/${item.img}`">
        <b-card-text>
          <p class = "name"> {{ item.name }} </p>
          {{ item.description }}
        </b-card-text>
        <b-button href="/" variant="primary"> Explore more {{ item.name }}</b-button>
        <b-button class = "save" href="/" > <img src="/images/saved2.png" alt="Saved" /> Save  </b-button>

      </b-card>
    </div>
  </div>
</template>


<style scoped>
.programs-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  background: #F5F5DC;
}

.tiles {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
}

.tile {
  background-color: #FFFFFF;
  color: #5C4033;
  border: 1px solid #FFA500;
  border-radius: 10px;
  padding: 20px;
  margin: 10px;
  cursor: pointer;
  width: 200px;
  text-align: center;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, background-color 0.3s ease;
}

.tile:hover {
  transform: scale(1.05);
  background-color: #FFA500;
  color: #FFFFFF;
}

.save {
  background-color: #FFFFFF;
  color: black;
  border: none;
}

.save:hover {
  transform: scale(1.05);
  background-color: #FFA500;
  color: #FFFFFF;
}

</style>
