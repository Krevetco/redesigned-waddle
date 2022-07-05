import '../src/assets/scss/app.scss'
// import { withVuetify } from '@socheatsok78/storybook-addon-vuetify/dist/decorators'
// import 'element-plus/theme-chalk/src/message.scss'
// import 'element-plus/es/components/message/style/css'
// import 'element-plus/dist/index.css'
// import ElementPlus from 'element-plus'
// import { app } from '@storybook/vue3'
// app.use(ElementPlus, {})

export const parameters = {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
        matchers: {
            color: /(background|color)$/i,
            date: /Date$/,
        },
    },
}
export const decorators = [
    // withVuetify
]
