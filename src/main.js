import {
  createApp
} from 'vue'
import {
  createPinia
} from 'pinia'
import home from './components/home.vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import router from './router'
import Zujian2 from './components/view/zujian4.vue'
import App from './App.vue'

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(ElementPlus)
app.mount('#app')