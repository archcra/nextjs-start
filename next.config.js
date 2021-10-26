/* eslint-disable */
const withPlugins = require('next-compose-plugins');
const withAntdLess = require('next-plugin-antd-less');
const withMDX = require('@next/mdx')({
  extension: /\.mdx$/
})


const pluginAntdLess = withAntdLess({
  // modifyVars: {
  //   '@THEME--DARK': 'theme-dark',
  // },
  lessVarsFilePath: './src/styles/variables.less',
  // cssLoaderOptions: {
  //   esModule: false,
  //   sourceMap: false,
  //   modules: {
  //     mode: 'local',
  //   },
  // },
});

// next.js configuration
const nextConfig = {
  webpack(config) {
    return config;
  }
}

module.exports = withPlugins([
  [pluginAntdLess],
  [withMDX, {
    pageExtensions: ['js', 'jsx', 'mdx']
  }]
],
  nextConfig);


// https://github.com/cyrilwanner/next-compose-plugins#readme Basic example

