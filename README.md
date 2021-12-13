## 01. jsx 工作流程

1. 安装
   ```zsh
   npm i @babel/core @babel/plugin-syntax-jsx @babel/plugin-transform-react-jsx @babel/types --save
   ```
2. AST抽象语法树
3. babel工作流
4. 转换(旧) classic
5. 转换(新) automatic

## 02. 手动创建项目

1. 安装
  ```zsh
  # 依赖包
  npm i @babel/core @babel/plugin-proposal-class-properties @babel/plugin-proposal-decorators @babel/preset-env @babel/preset-react babel-loader html-webpack-plugin webpack webpack-cli webpack-dev-server --save-dev
  # 开发版本
  npm i react@experimental react-dom@experimental --save
  ```
2. webpack.config.js
  ```js
  const path = require('path');
  const HtmlWebpackPlugin = require('html-webpack-plugin');

  module.exports = {
    mode: 'development',
    devtool:'source-map',
    entry:'./src/index.js',
    output:{
      path:path.resolve(__dirname,'dist'),
      filename:'[name].js',
      publicPath:'/'
    },
    module:{
      rules:[
        {
          test: /\.js?$/,
          use:{
            loader:'babel',
            options:{
              presets:[['@babel/preset-env'], '@babel/preset-react'],
              plugins:[
                ['@babel/plugin-proposal-decorators',{legacy:true}],
                ['@babel/plugin-proposal-class-properties',{loose:true}],
              ],
            },
          },
          exclude:/node_modules/
        },
      ]
    },
    plugins:[
      new HtmlWebpackPlugin({
        template:'./public/index.html'
      })
    ]
  }
  ```