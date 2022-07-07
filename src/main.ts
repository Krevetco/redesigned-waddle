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
import 'virtual:windi-devtools'
import { registerStore } from '@/store'

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

const app = createApp(App).use(router).use(auth).use(Antd).use(pinia)
app.provide('enable-route-transitions', true)
app.mount('#app')
registerStore()
