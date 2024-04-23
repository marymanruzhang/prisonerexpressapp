<template>
  <b-container >
    <b-row>
      <b-card class="tile">
        Highlights card
      </b-card>

    </b-row>
    <b-row>
     <div class="tiles">
      <b-button v-for="(item, work_type) in fixtures.explore" :key="item.name" class="tile" @click="goToDetail(item.name)"
      :to = "`/works/${work_type}`">
        <h3>{{ item.name }}</h3>
        <p>{{ item.description }}</p>
      </b-button>
    </div>
  </b-row>
  </b-container>
</template>


<script setup>
import { useRoute, useRouter } from 'vue-router';

const router = useRouter();

function goToDetail(name) {
  router.push({ name: 'detail', params: { itemName: name } });
  console.log("Navigated to:", name);
}
</script>

<style>
.explore-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  background: #F5F5DC;
}

.h1 {
  color: #C27B00;
  text-shadow: 1px 1px 2px #FFFACD;
  animation: fadeIn 2s ease-out;
}

.tiles {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 20px;
  width: 100%;
  max-width: 1200px;
}

.tile {
  background-color: #FFFFFF;
  color: #5C4033;
  border: 2px solid #FFA500;
  border-radius: 15px;
  padding: 20px;
  margin: 10px;
  cursor: pointer;
  text-align: center;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, background-color 0.3s ease, box-shadow 0.3s ease;
}

.tile:hover {
  transform: translateY(-5px);
  background-color: #FFA500;
  color: #FFFFFF;
  box-shadow: 0 12px 24px rgba(0, 0, 0, 0.2);
}

@keyframes fadeIn {
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
}

@media (min-width: 1200px) {
  .tiles {
    grid-template-columns: repeat(4, 1fr);
  }
}
</style>
