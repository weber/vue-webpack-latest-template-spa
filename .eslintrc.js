module.exports = {
  root: true,
  parserOptions: {
    parser: 'babel-eslint'
  },
  env: {
    browser: true,
    node: true,
    mocha: true,
    es6: true,
    'codeceptjs/codeceptjs': true
  },
  "globals": {
    "expect": true
  },
  extends: [
    'plugin:security/recommended',
    'plugin:vue/recommended',
    'standard',
    
  ],
  plugins: [
    'vue',
    'security',
    'codeceptjs'
  ],
  rules: {
    'generator-star-spacing': 'off',
    "space-before-function-paren": [2,{"anonymous":"always","named":"always","asyncArrow":"always"}],
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off'
  }
}
