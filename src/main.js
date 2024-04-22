
// import fixtures from './fixtures.json'

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
// app.config.globalProperties.fixtures = fixtures;
// app.config.globalProperties.baseDir = import.meta.env.BASE_URL;

import program_fixtures from './program_fixtures.json'
app.config.globalProperties.program_fixtures = program_fixtures;
app.config.globalProperties.baseDir = import.meta.env.BASE_URL;
app.mount('#app')
