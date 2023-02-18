import { createApp } from 'vue'
import App from './App.vue'
import ElementPlus from 'element-plus'
import store from './store'
import 'element-plus/dist/index.css'
import 'virtual:windi.css'
import "./permission"

import * as ElementPlusIconsVue from '@element-plus/icons-vue'
import './assets/icon/iconfont.css'
import router from './router'

const app = createApp(App)

for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    app.component(key, component)
}

app.use(ElementPlus)
app.use(router)
app.use(store)

app.mount('#app')
