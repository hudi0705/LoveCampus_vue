import {
  createApp
} from 'vue'
import {
  createPinia
} from 'pinia'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import router from './router'
import App from './App.vue'
import Vant from 'vant';
const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(ElementPlus)
app.use(Vant);
app.mount('#app')