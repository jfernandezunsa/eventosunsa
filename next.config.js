// next.config.js
const isProd = process.env.NODE_ENV === 'production';

module.exports = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  assetPrefix: isProd ? './' : '',
  webpack: (config) => {
    config.module.rules.push({
      test: /\.(png|jpe?g|gif|svg|webp|ico)$/i,
      loader: 'file-loader',
      options: {
        publicPath: `${isProd ? '.' : ''}/_next/static/images/`,
        outputPath: 'static/images/',
        name: '[name].[hash].[ext]',
      },
    });

    return config;
  },
};
