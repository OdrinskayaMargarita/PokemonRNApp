module.exports = function (api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      [
        'module-resolver',
        {
          root: ['./src'],
          alias: {
            src: './src',
            assets: './src/assets',
            '@lib': './src/lib',
            '@images': './src/assets/images',
          },
        },
      ],
      '@babel/plugin-proposal-export-namespace-from',
    ],
  };
};
