
module.exports = {
  webpack: (config) => {
    config.module.rules.push(
      {
        test: /\.(css|scss|less)/,
        loader: 'emit-file-loader',
        options: {
          name: 'dist/[path][name].[ext]'
        }
      },
      {
        test: /\.css$/,
        use: ['babel-loader', 'raw-loader', 'postcss-loader']
      },
      {
        test: /\.s(a|c)ss$/,
        use: ['babel-loader', 'raw-loader', 'postcss-loader',
          { loader: 'sass-loader' }
        ]
      },
      {
        test: /\.less$/,
        use: ['babel-loader', 'raw-loader', 'postcss-loader',
          { loader: 'less-loader' }
        ]
      }
    )
    return config
  }
}