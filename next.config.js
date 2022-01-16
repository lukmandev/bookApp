const withImages = require('next-images');

module.exports = withImages({
    webpack(config, options) {
        return config
    },
    swcMinify: false,
    dynamicAssetPrefix: true,
    images: {
        disableStaticImages: true
    },
    env: {
        API_URL: 'https://payment-test-app-v2.herokuapp.com',
        // API_URL: 'http://0.0.0.0:8000',
        BASE_URL: 'http://localhost:3000'
    }
});