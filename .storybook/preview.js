import '../src/assets/scss/app.scss'
import 'virtual:windi.css'
import 'virtual:windi-devtools'

export const parameters = {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
        matchers: {
            color: /(background|color)$/i,
            date: /Date$/,
        },
    },
}
