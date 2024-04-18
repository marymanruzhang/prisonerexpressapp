<template>
  <div class="explore-container">
    <h1>Explore Prison Express</h1>
    <div class="tiles">
      <div v-for="item in exploreItems" :key="item.name" class="tile" @click="goToDetail(item.name)">
        <h3>{{ item.name }}</h3>
        <p>{{ item.description }}</p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue';
import ExploreFixtures from '@/ExploreFixtures.json';

const exploreItems = computed(() => ExploreFixtures);

function goToDetail(name) {
  // You can expand this function to navigate to a detail view or perform other actions
  console.log("Clicked on:", name);
}
</script>

<style>
.explore-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
}

.tiles {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
}

.tile {
  background-color: white;
  color: black;
  border-radius: 10px;
  padding: 20px;
  margin: 10px;
  cursor: pointer;
  width: 200px;
  text-align: center;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;
}

.tile:hover {
  transform: translateY(-10px);
}
</style>
