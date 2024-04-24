<script>
import VuePdfEmbed from 'vue-pdf-embed';
import 'vue-pdf-embed/dist/style/index.css';

export default {
  components: {
    VuePdfEmbed
  },
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
<b-container >
  <b-row>
   <p align = "center" class = "uppercase"> {{this.work_type}} Collection</p>
  </b-row>
  <b-row>
    <b-card v-b-modal.my-modal
      class="work_card stylish-card"
      v-for="(fixture, key) in fixturesList"
      :key="key"
      @click="selectFixture(fixture)"
    >
      <div class="card-body">
        <b-row>
          <b-col v-if="fixture['img']">
            <img class="work_img card-img" :src="`${baseDir}images/${fixture['img']}`">
          </b-col>
          <b-col class="d-flex flex-column justify-content-center align-items-center">
            <h3 align = "center" v-if="fixture['title']" class="card-title">{{ fixture["title"] }}</h3>
            <h6  align = "center" v-if="fixture['author']" class="card-text">by: {{ fixture["author"] }}</h6>
            <h6  class="card-text" align = "center" v-if="fixture['date']">Published: {{ fixture["date"] }}</h6>
            <h6  class="card-text" align = "center" v-if="fixture['newsletter']">Featured in {{ fixture["newsletter"] }}</h6>
          </b-col>
        </b-row>
      </div>
  <b-modal v-if="selectedFixture && work_type ==='art'"
    id="my-modal"
    hide-footer >
      <div class="card-body">
        <img class="w-100 h-75" :src="`${baseDir}images/${selectedFixture['img']}`">
      </div>
    </b-modal>

    <b-modal v-if="selectedFixture && work_type !='art'"
    id="my-modal"
    hide-footer >
    <p v-if="selectedFixture['mailing_address']" align="center"> Mailing Address: {{selectedFixture['mailing_address']}}</p>
    <VuePdfEmbed  v-if="selectedFixture['pdf']" annotation-layer text-layer :source="selectedFixture['pdf']"/>
    <p  align="center">{{ selectedFixture['title'] }}</p>
    <p>{{ selectedFixture['essay'] }}</p>
    </b-modal>



    </b-card>
  </b-row>
</b-container>
</template>


<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Dancing+Script:wght@400;700&display=swap');



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


.overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow-y: auto;
  background-color: rgba(0, 0, 0, 0.7);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 10;
}

.pdf-container{

  width: 100%; /* Adjust width as necessary */
  height: 90vh; /* Adjust height to provide sufficient space for the PDF */
  overflow-y: auto; /* Allows scrolling within the PDF container if needed */

}

/* General styling for all b-cards */
.stylish-card {
  transition: transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out; /* Smooth transition for hover effects */
  border: none; /* Remove default border */
  border-radius: 10px; /* Rounded corners for a softer look */
}

/* Shadow and slight lift on hover */
.stylish-card:hover {
  transform: translateY(-5px); /* Slightly lift the card */
  box-shadow: 0 4px 20px rgba(0,0,0,0.25); /* Soft shadow for depth */
}

/* Card image styling */
.stylish-card .card-img {
  border-top-left-radius: 10px; /* Rounded top-left corner */
  border-top-right-radius: 10px; /* Rounded top-right corner */
}

/* Card body styling */
.stylish-card .card-body {
  padding: 20px; /* More padding for better spacing */
}

/* Card title styling */
.stylish-card .card-title {
  color: #333; /* Darker text for better readability */
  font-size: 30px; /* Larger font size */
  font-weight: bold; /* Bold for emphasis */
}

/* Card text styling */
.stylish-card .card-text {
  color: #666; /* Grayish text for subtle appearance */
  margin-top: 10px; /* Spacing between title and text */
}


.work_card {
  cursor: pointer;
  transition: transform 0.3s ease-in-out;
}

.work_card:hover {
  transform: translateY(-5px);
}

.work_img{
  width:300px;
  height:400px;

}

.uppercase {
  text-transform: uppercase;
  font-size: 40px;
  font-family: 'Dancing Script', cursive;
}
</style>
