const path = require("path"); //извлкаем встроенный модуль из Node.js,
//который позволяет работать с путями к файлам и каталогам
const HtmlWebpackPlugin = require("html-webpack-plugin");

const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = function (env, args) {
  const isDevMode = args.mode === "development";
  //const isProd = args.mode === "production";
  
  return {
    entry: {
      main: path.resolve(__dirname, "./src/index.js"), //__dirname - системная перменная которая указывает путь до текущего файла,
      //path.resolve - метод преобразует последовательность путей в абсолютный путь
    },
    output: {
      path: path.resolve(__dirname, "./dist"),
      clean: true,
      filename: "[name].[contenthash].js", //[name] = main, [contenthash] - каждый раз генерируется доп имя при изменении файла в index.js
      //благодаря этому клиент будет получать обновленные данные, потому что в хэше данные обновятся(благодаря новому имени файла)
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: path.resolve(__dirname, "src", "index.html"),
      }),
      !isDevMode ? new MiniCssExtractPlugin() : null,
    ].filter(x => Boolean(x)),
    module: {
      rules: [
        {
          test: /\.html$/i,
          loader: "html-loader",
        },
        {
          test: /\.css$/i,
          use: [
            isDevMode ? "style-loader" : MiniCssExtractPlugin.loader,
            "css-loader"
          ],
        },
  
      ],
    },
  };
};
