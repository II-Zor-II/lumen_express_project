module.exports = {
  root: true,
  env: {
    node: true
  },
  parserOptions: {
    'ecmaVersion': 2020,
    'sourceType': 'module',
    'parser': '@typescript-eslint/parser'
  },
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'semi': 'warn',
    'object-curly-spacing': 'warn',
    'no-unused-vars': 'warn'
  },
  extends: [
    '@vue/standard',
    '@vue/typescript',
    'plugin:vue/essential',
    'plugin:vue/recommended',
    'eslint:recommended'
  ],
  'parser': 'vue-eslint-parser',
  'plugins': [
    'vue',
  ]
}
