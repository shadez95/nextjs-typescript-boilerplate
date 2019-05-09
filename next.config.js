// Trying to maintain backwards compatibility for older node versions
// eslint-disable-next-line @typescript-eslint/no-var-requires
const withTypescript = require('@zeit/next-typescript');

// Below is fine because this file is only ran when building
// or for development
// eslint-disable-next-line import/no-extraneous-dependencies
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
});

module.exports = withTypescript(withBundleAnalyzer({}));

// ---------------------------------

// Use code below if you want more control of
// the bundle analyzer and remove code above
// Below is an example of using webpack-bundle-analyzer
// instead of @next/bundle-analyzer

// @next/bundle-analyzer will create static HTML files
// for both client and server

// webpack-bundle-analyzer isn't installed so install it
// before using it
// npm i --save-dev webpack-bundle-analyzer

// ---------------------------------

// const withTypescript = require('@zeit/next-typescript');
// const {BundleAnalyzerPlugin} = require('webpack-bundle-analyzer');
//
// module.exports = withTypescript({
//   webpack(config) {
//     if (process.env.ANALYZE) {
//       config.plugins.push(new BundleAnalyzerPlugin({
//         analyzerMode: 'server',
//         analyzerPort: 8888,
//         openAnalyzer: true
//       }))
//     }
//     return config
//   }
// });
