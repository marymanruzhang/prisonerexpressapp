import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { createBootstrap } from 'bootstrap-vue-next'
import fixtures from './fixtures.json';
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue-next/dist/bootstrap-vue-next.css'

const app = createApp(App)

app.use(createBootstrap())
app.use(router)
app.config.globalProperties.$fixtures = fixtures;
app.config.globalProperties.baseDir = import.meta.env.BASE_URL;

app.mount('#app')
