import { defineConfig } from 'vite'
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

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
        vue(),
        Pages(),
        Layouts(),
        eslintPlugin(),
        WindiCSS(),
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
