module.exports = {
  rules: {
    'react/jsx-closing-bracket-location': 2,
    'react/jsx-curly-spacing': [2, 'always', { 'spacing': { 'objectLiterals': 'never' }}],
    'react/jsx-indent-props': [2, 2],
    'react/jsx-max-props-per-line': [2, { 'maximum': 2 }],
    'react/jsx-no-bind': 2,
    'react/jsx-no-duplicate-props': 2,
    'react/jsx-no-undef': 2,
    'react/jsx-uses-react': 2,
    'react/jsx-uses-vars': 2,
    'react/jsx-wrap-multilines': 2,
    'react/no-did-mount-set-state': 2,
    'react/no-did-update-set-state': 2,
    'react/no-direct-mutation-state': 2,
    'react/no-multi-comp': [2, { 'ignoreStateless': true }],
    'react/no-unknown-property': 2,
    'react/prefer-es6-class': 2,
    'react/prop-types': [2, { ignore: ['children'] }],
    'react/react-in-jsx-scope': 2,
    'react/self-closing-comp': 2,
    'react/sort-comp': [
      2,
      {
        order: [
          'static-methods',
          'lifecycle',
          'everything-else',
          'render'
        ],
        groups: {
          lifecycle: [
            'displayName',
            'propTypes',
            'contextTypes',
            'childContextTypes',
            'mixins',
            'statics',
            'defaultProps',
            'state',
            'getDefaultProps',
            'getInitialState',
            'getChildContext',
            'constructor',
            'componentWillMount',
            'componentDidMount',
            'componentWillReceiveProps',
            'shouldComponentUpdate',
            'componentWillUpdate',
            'componentDidUpdate',
            'componentWillUnmount'
          ]
        }
      }
    ],
    'react/sort-prop-types': 2,
    'react/style-prop-object': 2
  }
};
