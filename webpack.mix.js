const { mix } = require('laravel-mix');
const webpack = require("webpack");

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */

mix.setPublicPath('build');
mix.setResourceRoot('../');

mix.webpackConfig({
    plugins: [
        new webpack.ProvidePlugin({
            jQuery: "jquery",
            $: "jquery"
        }),
    ],
});

// Core assets
mix.js('assets/js/app.js', 'build/js')
    .sass('assets/sass/app.scss', 'build/css');
