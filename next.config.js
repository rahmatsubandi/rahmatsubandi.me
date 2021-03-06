const nextTranslate = require("next-translate");

module.exports = nextTranslate({
    webpack: (config, { isServer }) => {
        if (isServer) {
            require('./scripts/generate-sitemap');
        }

        return config;
    },
    async headers() {
        return [
            {
                source: "/pages/api/:path*",
                headers: [
                    { key: "Access-Control-Allow-Credentials", value: "true" },
                    { key: "Access-Control-Allow-Origin", value: "*" },
                    { key: "Access-Control-Allow-Methods", value: "GET,OPTIONS,PATCH,DELETE,POST,PUT" },
                    { key: "Access-Control-Allow-Headers", value: "X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version" },
                ]
            }
        ]
    }
});