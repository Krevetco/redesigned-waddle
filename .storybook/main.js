const { mergeConfig } = require('vite')
const ElementPlus = require('unplugin-element-plus/vite');

module.exports = {
    stories: ['../src/**/*.stories.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
    addons: [
        '@storybook/addon-links',
        '@storybook/addon-essentials',
        '@storybook/addon-interactions',
        '@socheatsok78/storybook-addon-vuetify',
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
        // reactDocgen: 'react-docgen-typescript',
        // reactDocgenTypescriptOptions: {
        //     shouldExtractLiteralValuesFromEnum: true,
        //     propFilter: (prop) => (prop.parent ? !/node_modules/.test(prop.parent.fileName) : true),
        // },
    },
    async viteFinal(config, { configType }) {
        return mergeConfig(config, {
            plugins: [
                ElementPlus(),
            ],
            resolve: {
                alias: {
                    '@/': `./scr/`,
                },
            },

        })
    },
}
