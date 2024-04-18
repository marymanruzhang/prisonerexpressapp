<script>
export default {
  props: {
    work_type: {
      type: String,
      required: true
    }
 },
};

// const json = Object.values(Object.fromEntries(Object.entries(fixtures).filter(([key, value]) => key === this.work_type)))[0]

</script>



<template>
<b-container>
    <b-button
        variant="primary"
        class="mb-2 w-100"
        :to="`/`"> HOME
    </b-button>
<<<<<<< HEAD

=======
    <!-- <h1>{{fixtures.{{work_type}}</h1> -->
>>>>>>> origin/main
    <b-row>
        <b-card v-for="fixture in Object.values(Object.fromEntries(Object.entries(fixtures).filter(([key, value]) => key === this.work_type)))[0]" >

          <div class ="card-body">
            <b-row>
            <b-col> <img :src="`${baseDir}images/${fixture['img']}`" ></b-col>
            <b-col>
            <h3 class="card-title text-right"> {{fixture["title"]}} </h3>
            <h6 class="card-text">by: {{fixture["author"]}} </h6>
            <h6>Created on: {{fixture["date"]}}</h6>
            <h6>Featured in {{fixture["newsletter"]}} Newsletter</h6>
            </b-col>
        </b-row>

          </div>
        </b-card>

    </b-row>
</b-container>

</template>
