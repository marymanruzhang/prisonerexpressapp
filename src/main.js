
import ExploreFixtures from './fixtures/ExploreFixtures.json';
import ArtFixtures from './fixtures/ArtFixtures.json';
import PoetryFixtures from './fixtures/PoetryFixtures.json';
import EssayFixtures from './fixtures/EssayFixtures.json';
import JournalFixtures from './fixtures/JournalFixtures.json';
import faqFixtures from './fixtures/faqFixtures.json';
import highlightFixtures from  './fixtures/highlightFixtures.json';
import program_fixtures from './fixtures/program_fixtures.json';


// main.js/ts
import { createApp } from 'vue'
import { createBootstrap } from 'bootstrap-vue-next'

// Add the necessary CSS
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue-next/dist/bootstrap-vue-next.css'

import App from './App.vue'
import router from './router'

const app = createApp(App)
app.use(router)
app.use(createBootstrap({ components: true, directives: true }))
app.config.globalProperties.fixtures = {
    explore: ExploreFixtures,
    art: ArtFixtures,
    poetry: PoetryFixtures,
    essay: EssayFixtures,
    journal: JournalFixtures,
    faq: faqFixtures,
    highlight: highlightFixtures,

};

app.config.globalProperties.baseDir = import.meta.env.BASE_URL;


app.config.globalProperties.program_fixtures = program_fixtures;
app.config.globalProperties.baseDir = import.meta.env.BASE_URL;
app.mount('#app')
