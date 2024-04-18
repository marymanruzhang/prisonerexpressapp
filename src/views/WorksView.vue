<script>
// export default {
//   data() {
//     return {
//       current_work: NULL
//     };
//   },
//   methods: {
//     showcase(work_id) {
//       this.current_work = work_id;
//     },
//     exit() {
//         this.current_work = NULL;
//     }
//   }
// }
</script>


<template>
<b-container>
    <b-button
        variant="primary"
        class="mb-2 w-100"
        :to="`/`"> HOME
    </b-button>
    <b-row>
        <!-- <b-card >
            <h3 class="card-title text-center">Title </h3>
            <b-card>img here</b-card>
            <h6 class="card-text">Created by </h6>
            <h6>01/01/2001</h6>
            <h6>Newsletter March 2001</h6>
        </b-card> -->

        <b-card>
          <div class ="card-body">
            <b-row>
            <b-col> <b-card>img here</b-card> </b-col>
            <b-col>
            <h3 class="card-title text-right">Title </h3>
            <h6 class="card-text">Created by </h6>
            <h6>01/01/2001</h6>
            <h6>Newsletter March 2001</h6>
            </b-col>
        </b-row>

          </div>
        </b-card>

    </b-row>
</b-container>

</template>
