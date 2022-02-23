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
        // API_URL: 'http://0.0.0.0:8000',
        API_URL: 'https://api.kel-okuibuz.com',
    }
});
