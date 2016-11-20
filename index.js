module.exports = {
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
