import { defineConfig } from 'vitest/config'
import vue from '@vitejs/plugin-vue'
import path from 'path'
import Pages from 'vite-plugin-pages'
import Layouts from 'vite-plugin-vue-layouts'
import Icons from 'unplugin-icons/vite'
import IconsResolver from 'unplugin-icons/resolver'
import Components from 'unplugin-vue-components/vite'
import { AntDesignVueResolver } from 'unplugin-vue-components/resolvers'
import eslintPlugin from 'vite-plugin-eslint'
import WindiCSS from 'vite-plugin-windicss'
import AutoImport from 'unplugin-auto-import/vite'

// https://vitejs.dev/config/
export default defineConfig({
    test: {
        globals: true,
        deps: {
            inline: ['ant-design-vue'],
        },
        environment: 'jsdom',
    },
    plugins: [
        vue({
            ssr: false,
        }),
        Pages(),
        Layouts(),
        eslintPlugin(),
        WindiCSS(),
        // This plugin allows to autoimport libs
        AutoImport({
            imports: [
                'vitest',
                'vue',
                'vue-router',
                {
                    axios: [['default', '$axios']],
                    pinia: ['defineStore', 'storeToRefs'],
                    '@/store': [['default', '$store']],
                },
            ],
            include: [
                /\.[tj]sx?$/, // .ts, .tsx, .js, .jsx
                /\.vue$/,
                /\.vue\?vue/, // .vue
                /\.md$/, // .md
            ],
            dts: true, // generate TypeScript declaration
            eslintrc: {
                enabled: true, // Default `false`
            },
        }),
        // This plugin allows to autoimport vue components
        Components({
            resolvers: [AntDesignVueResolver(), IconsResolver()],
        }),
        Icons({
            // This setting will autoinstall the iconify iconset when it's used in the code, e.g, @iconify-json/mdi or @iconify-json/fe
            autoInstall: true,
        }),
    ],
    resolve: {
        alias: {
            '@/': `${path.resolve(__dirname, './src')}/`,
        },
    },
})
