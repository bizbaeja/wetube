const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
console.log(path.resolve(__dirname, "assets", "js"));

module.exports = {
  entry: {
    main: "./src/client/js/main.js",
    videoPlayer: "./src/client/js/videoPlayer.js",
  },
  watch: true,
  watchOptions: {
    aggregateTimeout: 200,
    poll: 1000,
  },

  plugins: [
    new MiniCssExtractPlugin({
      filename: "css/styles.css",
    }),
  ],
  mode: "development",

  output: {
    filename: "js/[name].js",
    path: path.resolve(__dirname, "assets"),
    clean: true,
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: {
          loader: "babel-loader",
          options: {
            presets: [["@babel/preset-env", { targets: "defaults" }]],
          },
        },
      },
      {
        //우리는 모든 scss 파일을 변환시킬 것이다.
        test: /\.scss$/,
        //그를 위해 로더 3개를 사용할 것인데, **제일 중요한건 제일 마지막 loader 부터 시작해야 한다
        use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"],
      },
    ],
  },
};
//__dirname : 파일까지의 경로 전체
