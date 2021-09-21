module.exports = {
  root: true,
  parserOptions: {
    ecmaVersion: 6,
    sourceType: 'module'
  },
  plugins: [
    'import'
  ],
  env: {
    'browser': true,
    'node': true
  },
  rules: {
    // Suave Recommended Rules
    // General
    eqeqeq: ['error', 'smart'],

    // ES6
    'arrow-parens': ['error', 'always'],
    'eol-last': ['error', 'always'],
    'generator-star-spacing': ['error', {
      'before': false,
      'after': true
    }],
    'lines-between-class-members': ['error', 'always', { exceptAfterSingleLine: false }],
    'no-async-promise-executor': 'error',
    'no-duplicate-imports': 'error',
    'no-await-in-loop': 'error',
    'no-var': 'error',
    'no-return-await': 'error',
    'no-useless-rename': 'error',
    'object-shorthand': ['error', 'always'],
    'padding-line-between-statements': [
      'error',
      { blankLine: 'always', prev: 'multiline-block-like', next: '*' }
    ],
    'prefer-destructuring': ['error', { array: false, object: true }, { enforceForRenamedProperties: false }],
    'prefer-spread': 'error',
    'prefer-template': 'error',

    'import/no-relative-parent-imports': 'error',

    // Suave Base Rules
    'array-bracket-spacing': ['error', 'never'],
    'brace-style': ['error', '1tbs', { 'allowSingleLine': false }],
    'camelcase': ['error', { 'properties': 'always' }],
    'comma-dangle': ['error', 'never'],
    'comma-spacing': ['error', {
      'before': false,
      'after': true
    }],
    'comma-style': ['error', 'last'],
    'curly': ['error', 'all'],
    'dot-notation': 'error',
    'dot-location': ['error', 'property'],
    'indent': ['error', 2, { 'SwitchCase': 1 }],
    'key-spacing': ['error', {
      'beforeColon': false,
      'afterColon': true
    }],
    'keyword-spacing': ['error', {
      'overrides': {
        'catch': {
          'after': false
        }
      }
    }],
    'max-statements-per-line': ['error', { 'max': 1 }],
    'new-cap': ['error'],
    'no-empty': ['error'],
    'no-multiple-empty-lines': ['error', { 'max': 1 }],
    'func-call-spacing': 'error',
    'no-trailing-spaces': 'error',
    'no-useless-concat': 'error',
    'object-curly-spacing': ['error', 'always'],
    'one-var': ['error', {
      'uninitialized': 'always',
      'initialized': 'never'
    }],
    'operator-linebreak': ['error', 'before'],
    'quotes': ['error', 'single', { 'avoidEscape': true }],
    'semi': ['error', 'always'],
    'semi-spacing': ['error', {
      'before': false,
      'after': true
    }],
    'space-before-blocks': ['error', 'always'],
    'space-before-function-paren': ['error', 'never'],
    'space-in-parens': ['error', 'never'],
    'space-infix-ops': 'error',
    'space-unary-ops': ['error', {
      'words': false,
      'nonwords': false
    }],
    'spaced-comment': ['error', 'always']
  }
};
