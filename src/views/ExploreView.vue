<template>
  <div class="explore-container">
    <h1>Explore Prison Express</h1>
    <div class="tiles">
      <b-button v-for="(item) in fixtures.explore2" :key="item.name" class="tile" @click="goToDetail(item.name)">
        <h3>{{item.name}}</h3>
        <p>{{item.description }}</p>
      </b-button>

      <b-button v-for="(item, work_type) in fixtures.explore" :key="item.name" class="tile" @click="goToDetail(item.name)"
      :to = "`/works/${work_type}`">
        <h3>{{ item.name}}</h3>
        <p>{{ item.description }}</p>
      </b-button>
      
    </div>
  </div>
</template>

<script setup>
// import { computed } from 'vue';
// import ExploreFixtures from '@/ExploreFixtures.json';

// const exploreItems = computed(() => ExploreFixtures);

function goToDetail(name) {
  // You can expand this function to navigate to a detail view or perform other actions
  console.log("Clicked on:", name);
}
</script>

<style>
html {
  background-color: #F5F5DC;
}

.explore-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  background: #F5F5DC;
}

h1 {
  color: #C27B00;
  text-shadow: 1px 1px 2px #FFFACD;
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

@media (min-width: 1200px) {
  .tiles {
    justify-content: start;
  }

  .tile {
    width: calc(25% - 20px);
  }
}

</style>
