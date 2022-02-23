module.exports = {
  env: {
    node: true
  },
  extends: [ 'eslint:recommended', 'plugin:node/recommended' ],
  parserOptions: {
    ecmaVersion: 12
  },
  rules: {
    'node/exports-style': [ 'error', 'module.exports' ],
    'node/file-extension-in-import': [ 'error', 'always' ],
    'node/prefer-global/buffer': [ 'error', 'always' ],
    'node/prefer-global/console': [ 'error', 'always' ],
    'node/prefer-global/process': [ 'error', 'always' ],
    'node/prefer-global/url-search-params': [ 'error', 'always' ],
    'node/prefer-global/url': [ 'error', 'always' ],
    'node/prefer-promises/dns': 'error',
    'node/prefer-promises/fs': 'error',
    'require-await': [ 'error' ],
    'no-unused-vars': [
      'error',
      {
        vars: 'all',
        args: 'after-used',
        ignoreRestSiblings: false,
        argsIgnorePattern: '^_',
        caughtErrors: 'all',
        caughtErrorsIgnorePattern: '^_'
      }
    ],
    indent: [ 'error', 2 ],
    'space-before-function-paren': [ 'error', 'always' ],
    'brace-style': [ 'error', 'stroustrup' ],
    'array-bracket-spacing': [
      'error',
      'always',
      {
        arraysInArrays: true
      }
    ]
  }
}
