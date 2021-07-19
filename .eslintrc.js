module.exports = {
    root: true,
    extends: [
        '@react-native-community',
        'plugin:prettier/recommended', // 添加 prettier 插件
    ],
    rules: {
        'react-native/no-inline-styles': 0,
        'no-sparse-arrays': 0,
    },
};
