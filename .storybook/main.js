const { mergeConfig } = require('vite')
const WindiCSS = require('vite-plugin-windicss').default
const path = require('path')
const Components = require('unplugin-vue-components/vite')
const { AntDesignVueResolver } = require('unplugin-vue-components/resolvers')
const IconsResolver = require('unplugin-icons/resolver')
const Icons = require('unplugin-icons/vite')

module.exports = {
    stories: ['../src/**/*.stories.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
    addons: [
        '@storybook/addon-links',
        '@storybook/addon-essentials',
        '@storybook/addon-interactions',
        {
            name: '@storybook/addon-postcss',
            options: {
                cssLoaderOptions: {
                    importLoaders: 1,
                },
                postcssLoaderOptions: {
                    implementation: require('postcss'),
                },
            },
        },
    ],
    framework: '@storybook/vue3',
    core: {
        builder: '@storybook/builder-vite',
    },
    features: {
        storyStoreV7: true,
    },
    typescript: {
        check: false,
        checkOptions: {},
    },
    async viteFinal(config, { configType }) {
        return mergeConfig(config, {
            plugins: [
                WindiCSS({
                    config: path.join(__dirname, '..', 'tailwind.config.ts'), // that was my missing piece
                }),
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
                    '@/': `./scr/`,
                },
            },
        })
    },
}
