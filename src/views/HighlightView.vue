
<script>
</script>

<template>
    <b-container fluid >
        <b-row>
            <h1 align = "center"> Highlighted Work</h1>
        </b-row>
        <b-row class = "justify-content-center">
            <b-card v-b-modal.my-modal
                v-for="(fixture) in fixtures.highlight"
                :img-src="`${baseDir}images/${fixture['img']}`"
                img-top
                class = "w-50 justify-content-center"

                >
                <div class="card-body">
                        <h3 v-if="fixture['title']" class="card-title">{{ fixture["title"] }}</h3>
                        <h6 v-if="fixture['author']" class="card-text">by: {{ fixture["author"] }}</h6>
                        <h6 v-if="fixture['date']">Published: {{ fixture["date"] }}</h6>
                        <h6 v-if="fixture['newsletter']">Featured in {{ fixture["newsletter"] }}</h6>
                </div>

                <b-modal id="my-modal" hide-footer  class = "w-100">
                    <b-img
                    class = "w-100"
                        :src="`${baseDir}images/${fixture['img']}`">

                    </b-img>
                </b-modal>

            </b-card>




        </b-row>


</b-container>

</template>

<style>
</style>
