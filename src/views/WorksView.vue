<script>
export default {
  props: {
    work_type: {
      type: String,
      required: true
    }
 },


};

const counter = 0;
// const json = Object.values(Object.fromEntries(Object.entries(fixtures).filter(([key, value]) => key === this.work_type)))[0]

</script>



<template>
<b-container>
   <b-row>
        <b-card :v-b-modal="key" class = "work_card" v-for="(fixture, key) in Object.values(Object.fromEntries(Object.entries(fixtures).filter(([key, value]) => key === this.work_type)))[0]" >

          <div class ="card-body">
            <b-row>
            <b-col> <img v-if = "fixture['img']" class = "work_img" :src="`${baseDir}images/${fixture['img']}`" ></b-col>
            <b-col>
            <h3 v-if = "fixture['title']" class="card-title"> {{fixture["title"]}} </h3>
            <h6 v-if = "fixture['author']" class="card-text">by: {{fixture["author"]}} </h6>
            <h6 v-if = "fixture['date']" >Published: {{fixture["date"]}}</h6>
            <h6 v-if = "fixture['newsletter']">Featured in {{fixture["newsletter"]}}</h6>
            </b-col>
        </b-row>

          </div>
        </b-card>

        <b-modal :id= "key"   v-for="(fixture,key) in Object.values(Object.fromEntries(Object.entries(fixtures).filter(([key, value]) => key === this.work_type)))[0]">
          <div class ="card-body">
            <b-row>
            <b-col> <img v-if = "fixture['img']" class = "work_img" :src="`${baseDir}images/${fixture['img']}`" ></b-col>
            <b-col>
            <h3 v-if = "fixture['title']" class="card-title"> {{fixture["title"]}} </h3>
            <h6 v-if = "fixture['author']" class="card-text">by: {{fixture["author"]}} </h6>
            <h6 v-if = "fixture['date']" >Published: {{fixture["date"]}}</h6>
            <h6 v-if = "fixture['newsletter']">Featured in {{fixture["newsletter"]}}</h6>
            </b-col>
        </b-row>

          </div>
        </b-modal>



    </b-row>
</b-container>

</template>

<style>
.work_img{
  width:300px;
  height:400px;
}

</style>
