
import ExploreFixtures from './ExploreFixtures.json'
import ArtFixtures from './ArtFixtures.json';
import PoetryFixtures from './PoetryFixtures.json'

// main.js/ts
import { createApp } from 'vue'
import { createBootstrap } from 'bootstrap-vue-next'

// Add the necessary CSS
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue-next/dist/bootstrap-vue-next.css'
import './assets/main.css'

import App from './App.vue'
import router from './router'

const app = createApp(App)
app.use(router)
app.use(createBootstrap({ components: true, directives: true }))
app.config.globalProperties.fixtures ={
    explore: ExploreFixtures,
    art: ArtFixtures,
    poetry: PoetryFixtures
};

app.config.globalProperties.baseDir = import.meta.env.BASE_URL;

app.mount('#app')
