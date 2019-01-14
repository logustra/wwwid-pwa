const withPlugins = require('next-compose-plugins');
const withWorkbox = require('next-workbox');
const withManifest = require('next-manifest');
const optimizedImages = require('next-optimized-images');

const nextConfig = {
    webpack: (config) => {
        // Fixes npm packages that depend on `fs` module
        config.node = {
            fs: 'empty',
        }

        config.module.rules.push(
            {
                test: /\.(otf|ttf|eot|woff|woff2)$/i,
                use: [
                    {
                        loader: "file-loader",
                        options: {
                            name: "[name].[ext]",
                            publicPath: "/_next/",
                            outputPath: "static/fonts"
                        }
                    }
                ]
            },
            {
                test: /\.(webm|mp4|mov|mkv|avi)$/i,
                use: [
                    {
                        loader: "file-loader",
                        options: {
                            name: "[name].[ext]",
                            publicPath: "/_next/",
                            outputPath: "static/videos"
                        }
                    }
                ]
            }
        )

        return config;
    }
}

module.exports = withPlugins([
    [
        withWorkbox, {
            workbox: {
                registerSW: true,
                runtimeCaching: [
                    {
                        urlPattern: /^https?.*/,
                        handler: 'networkFirst'
                    }
                ]
            }
        }
    ],
    [
        withManifest, {
            manifest: {
                name: 'WWWID - PWA',
                short_name: 'WWWID - PWA',
                icons: {
                    src: './assets/icons/icon-512x512.png',
                    cache: true
                }
            }
        }
    ],
    [
        optimizedImages, {
            inlineImageLimit: 8192,
            imagesFolder: 'images',
            imagesName: '[name]-[hash].[ext]',
            optimizeImagesInDev: false,
            mozjpeg: {
                progressive: true,
                quality: 75
            },
            optipng: {
                enabled: false,
                optimizationLevel: 3,
            },
            pngquant: {
                quality: 75,
                speed: 4
            },
            gifsicle: {
                interlaced: false,
                optimizationLevel: 3,
            },
            svgo: {
                options: {
                    cleanupIDs: true,
                    convertColors: true,
                    removeViewBox: true
                }
            },
            webp: {
                preset: 'default',
                quality: 75,
            },
        }
    ],
], nextConfig);
