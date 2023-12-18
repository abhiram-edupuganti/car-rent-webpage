/** @type {import('next').NextConfig} */
const nextConfig = {
    images : {
        domains : ['cdn.imagin.studio']
    },
    //below is added additionally for webpack error
    // webpack(config) {
    //     config.infrastructureLogging = { debug: /PackFileCache/ }
    //     return config;
    //   }
}

module.exports = nextConfig
