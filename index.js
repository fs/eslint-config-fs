module.exports = {
  parser: 'babel-eslint',
  parserOptions: {
    sourceType: 'module'
  },
  env: {
    node: true,
    es6: true
  },
  plugins: [
    'react',
    'import'
  ],
  extends: [
    './rules/base',
    './rules/import',
    './rules/react'
  ].map(require.resolve)
};
