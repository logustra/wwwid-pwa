const withTypescript = require('@zeit/next-typescript')
const withPlugins = require('next-compose-plugins')
const withWorkbox = require('next-workbox')
const withManifest = require('next-manifest')
const createStyledComponentsTransformer = require('typescript-plugin-styled-components').default
const styledComponentsTransformer = createStyledComponentsTransformer()

const nextConfig = {
    webpack: (config) => {
        // Fixes npm packages that depend on `fs` module
        config.node = {
            fs: 'empty',
        }

        config.module.rules.push(
            {
                test: /\.(ts|tsx)$/,
                loader: 'awesome-typescript-loader',
                options: {
                    getCustomTransformers: () => ({
                        before: [styledComponentsTransformer]
                    })
                }
            },
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
            }
        )

        return config;
    }
}

module.exports = withPlugins([
    [
        withTypescript
    ],
    [
        withWorkbox, {
            workbox: {
                registerSW: true,
                runtimeCaching: [
                    {
                        urlPattern: /^https?.*/,
                        handler: 'staleWhileRevalidate'
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
                    src: './static/icons/icon-512x512.png',
                    cache: true
                }
            }
        }
    ]
], nextConfig);
