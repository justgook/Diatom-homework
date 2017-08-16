import * as webpack from 'webpack'
import * as path from 'path'
import * as HtmlWebpackPlugin from 'html-webpack-plugin'
declare const __dirname: string

const config: webpack.Configuration = {
  entry: {
    public: './src/public.tsx',
    admin: './src/admin.tsx'
  },
  output: {
    path: path.join(__dirname, "dist"),
    filename: "[name].entry.js"
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/
      }
    ]
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js"]
  },
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    compress: true,
    port: 9000,
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Credentials": "true",
      "Access-Control-Allow-Methods": "GET,HEAD,OPTIONS,POST,PUT",
      "Access-Control-Allow-Headers": "Origin, X-Requested-With, Content-Type, Accept, Authorization"
    }
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Pubilc side',
      chunks: ['public'],
    }),
    new HtmlWebpackPlugin({  // Also generate a test.html
      title: 'Admin side',
      filename: 'admin.html',
      chunks: ['admin'],
    })

  ]
}

export default config