const WindiCSS = require('vite-plugin-windicss').default

module.exports = {
    plugins: [
        require('postcss-import')(),
        WindiCSS('./tailwind.config.js'), //This refers to your tailwind config
        require('autoprefixer'),
    ],
}
