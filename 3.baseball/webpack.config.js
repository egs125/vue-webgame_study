const { VueLoaderPlugin } = require('vue-loader')
const path = require('path');
 
module.exports = {
    mode: 'development',
    devtool: 'eval',
    resolve: {
        extensions: ['.js', '.vue'],
    },
    entry: {
        app: path.join(__dirname, 'main.js'), // 하나로 합쳐질 파일의 이름 = app.js
    },
    module: {
        rules:[{
            test: /\.vue$/,
            use: 'vue-loader', 
        }],
    },
    plugins: [
        new VueLoaderPlugin(),
    ],
    output: {
        filename: '[name].js', //filename: 'app.js' 로 선언하는 것과 동일
        path: path.join(__dirname, 'dist'),
    },
};