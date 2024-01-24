const path = require("path");
const HTMLWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const OptimizeCssAssetPlugin = require("optimize-css-assets-webpack-plugin");
const TerserWebpackPlugin = require("terser-webpack-plugin");
// const BundleAnalyzerPlugin = require("webpack-bundle-analyzer").BundleAnalyzerPlugin;

// import path from "path";
// import HTMLWebpackPlugin from "html-webpack-plugin";
// import { CleanWebpackPlugin } from "clean-webpack-plugin";
// import CopyWebpackPlugin from "copy-webpack-plugin";
// import MiniCssExtractPlugin from "mini-css-extract-plugin";
// import OptimizeCssAssetPlugin from "optimize-css-assets-webpack-plugin";
// import TerserWebpackPlugin from "terser-webpack-plugin";

const isDev = process.env.NODE_ENV === "development";
const optimization = () => {
  const config = {
    splitChunks: {
      chunks: "all",
    },
  };
  !isDev ? (config.minimizer = [new OptimizeCssAssetPlugin(), new TerserWebpackPlugin()]) : null;
  return config;
};

const filename = (ext) => (isDev ? `[name].${ext}` : `[name].[hash].${ext}`);

const cssLoaders = (extra) => {
  const loaders = [
    {
      loader: MiniCssExtractPlugin.loader,
      options: {
        hmr: isDev,
        reloadAll: true,
      },
    },
    "css-loader",
  ];
  if (extra) {
    loaders.push(extra);
  }
  return loaders;
};

const babelOptions = (preset) => {
  const config = {
    presets: ["@babel/preset-env"],
    plugins: ["@babel/plugin-proposal-class-properties"],
  };
  if (preset) {
    config.presets.push(preset);
  }
  return config;
};

const jsLoaders = () => {
  const loaders = [
    {
      loader: "babel-loader",
      options: babelOptions(),
    },
  ];
  isDev ? loaders.push("eslint-loader") : null;
  return loaders;
};

module.exports = {
  context: path.resolve(__dirname, "src"),
  mode: "development",
  entry: {
    main: ["@babel/polyfill", "./index.jsx"],
  },
  output: {
    filename: filename("js"),
    path: path.resolve(__dirname, "dist"),
  },
  resolve: {
    extensions: [".js", ".json", ".png", ".css"],
    alias: {
      "@models": path.resolve(__dirname, "src/models"),
      "@": path.resolve(__dirname, "src"),
    },
  },
  optimization: optimization(),
  devServer: {
    port: 4200,
    hot: isDev,
  },
  devtool: isDev ? "source-map" : "",
  plugins: [
    // new BundleAnalyzerPlugin(),
    new HTMLWebpackPlugin({
      template: "./index.html",
      minify: {
        collapseWhitespace: !isDev,
      },
    }),
    new CleanWebpackPlugin(),
    new CopyWebpackPlugin([
      {
        from: path.resolve(__dirname, "src/favicon.ico"),
        to: path.resolve(__dirname, "dist"),
      },
    ]),
    new MiniCssExtractPlugin({
      filename: filename("css"),
    }),
  ],
  module: {
    rules: [
      {
        test: /\.css$/,
        use: cssLoaders(),
      },
      {
        test: /\.less$/,
        use: cssLoaders("less-loader"),
      },
      {
        test: /\.s[ac]ss$/,
        use: cssLoaders("sass-loader"),
      },
      {
        test: /\.(png|jpg|svg|gif)$/,
        use: [{ loader: "file-loader" }],
      },
      {
        test: /\.(ttf|otf|woff|woff2|eot)$/,
        use: [{ loader: "file-loader" }],
      },
      {
        test: /\.xml$/,
        use: "xml-loader",
      },
      {
        test: /\.csv$/,
        use: "csv-loader",
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: jsLoaders(),
      },
      {
        test: /\.ts$/,
        exclude: /node_modules/,
        loader: {
          loader: "babel-loader",
          options: babelOptions("@babel/preset-typescript"),
        },
      },
      {
        test: /\.jsx$/,
        exclude: /node_modules/,
        loader: {
          loader: "babel-loader",
          options: babelOptions("@babel/preset-react"),
        },
      },
    ],
  },
};
