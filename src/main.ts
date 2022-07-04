import '@/assets/scss/app.scss'
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { createAuth } from '@/auth'
import App from '@/App.vue'
import router from '@/router'
import axiosInstance from '@/api/axios'
import Antd from 'ant-design-vue'
import 'ant-design-vue/dist/antd.css'
import 'virtual:windi.css'

const auth = createAuth({
    router,
    loginRedirectRoute: { name: 'home' },
    logoutRedirectRoute: { name: 'index' },
    autoConfigureNavigationGuards: true,
    axios: {
        instance: axiosInstance,
        autoAddAuthorizationHeader: true,
    },
})
const pinia = createPinia()

const app = createApp(App)
app.use(router)
app.use(auth)
app.provide('enable-route-transitions', true)
app.mount('#app')
app.use(Antd)
app.use(pinia)
