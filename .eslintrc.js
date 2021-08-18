module.exports = {
  root: true,
  env: {
    jest: true,
    es2020: true,
    node: true,
    browser: true
  },
  extends: ['prettier', 'airbnb-base', 'plugin:vue/vue3-essential'],
  // required to lint *.vue files
  plugins: ['prettier', 'vue'],
  parserOptions: {
    parser: 'babel-eslint',
    ecmaVersion: 11,
    sourceType: 'module'
  },
  rules: {
    'comma-dangle': ['error', 'never'],
    'no-console': ['off'],
    'implicit-arrow-linebreak': 'off',
    'function-paren-newline': 'off',
    'generator-star-spacing': 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'import/extensions': [
      'error',
      'always',
      {
        ignorePackages: true,
        pattern: {
          '.js': 'never',
          '.vue': 'never'
        }
      }
    ],
    indent: 'off',
    'object-curly-newline': 'off',
    'import/prefer-default-export': 'off',
    'import/named': 'off',
    'operator-linebreak': 'off',
    'func-names': 'off',
    'object-shorthand': 'off',
    'linebreak-style': 'off',
    'import/no-unresolved': 'off'
  }
};
