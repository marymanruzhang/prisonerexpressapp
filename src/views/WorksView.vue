<script>
export default {
  data() {
    return {
      selectedFixture: null
    };
  },
  props: {
    work_type: {
      type: String,
      required: true
    }
  },
  computed: {
    fixturesList() {
      return Object.values(Object.fromEntries(Object.entries(this.fixtures).filter(([key, value]) => key === this.work_type)))[0];
    }
  },
  methods: {
    selectFixture(fixture) {
      this.selectedFixture = fixture;
    },
    clearSelection() {
      this.selectedFixture = null;
    }
  }
};
</script>

<template>
<b-container>
  <b-row v-if="selectedFixture" class="overlay">
    <b-card class="centered-card" >
      <div class="card-body">
        <b-row>

          <b-col>
            <img v-if="selectedFixture['img']" class="work_img" :src="`${baseDir}images/${selectedFixture['img']}`">
          </b-col>
          <b-col>
            <h3 v-if="selectedFixture['title']" class="card-title">{{ selectedFixture["title"] }}</h3>
            <h6 v-if="selectedFixture['author']" class="card-text">by: {{ selectedFixture["author"] }}</h6>
            <h6 v-if="selectedFixture['date']">Published: {{ selectedFixture["date"] }}</h6>
            <h6 v-if="selectedFixture['newsletter']">Featured in {{ selectedFixture["newsletter"] }}</h6>
          </b-col>
          <b-col>
          <button type="button" class="btn-close" aria-label="Close" @click="clearSelection"></button>
          </b-col>
        </b-row>
      </div>
    </b-card>
  </b-row>

  <b-row>
    <b-card
      class="work_card"
      v-for="(fixture, key) in fixturesList"
      :key="key"
      @click="selectFixture(fixture)"
      :class="{ dim: selectedFixture }"
    >
      <div class="card-body">
        <b-row>
          <b-col>
            <img v-if="fixture['img']" class="work_img" :src="`${baseDir}images/${fixture['img']}`">
          </b-col>
          <b-col>
            <h3 v-if="fixture['title']" class="card-title">{{ fixture["title"] }}</h3>
            <h6 v-if="fixture['author']" class="card-text">by: {{ fixture["author"] }}</h6>
            <h6 v-if="fixture['date']">Published: {{ fixture["date"] }}</h6>
            <h6 v-if="fixture['newsletter']">Featured in {{ fixture["newsletter"] }}</h6>
          </b-col>
        </b-row>
      </div>
    </b-card>
  </b-row>
</b-container>
</template>


<style scoped>
.work_img{
  width:300px;
  height:400px;
}
.overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.7);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 10;
}

.centered-card {
  z-index: 11; /* Higher than overlay */
  width: 50%; /* Or any other percentage or fixed width depending on design needs */
  max-width: 700px; /* Maximum width to avoid very wide cards on larger screens */
  min-width: 400px; /* Minimum width to maintain readability */
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2); /* Optional: Adds shadow for better visibility */
  transition: transform 0.3s ease-out;
  transform: scale(1.05); /* Slightly larger to stand out */
}
.dim {
  opacity: 0.4;
  transition: opacity 0.3s ease-out;
}

.work_card {
  cursor: pointer;
  transition: transform 0.3s ease-in-out;
}

.work_card:hover {
  transform: translateY(-5px);
}
</style>
