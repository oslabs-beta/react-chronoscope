module.exports = {
  env: {
    browser: true,
    es6: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  plugins: [
    'react',
    '@typescript-eslint',
  ],
  rules: {
    "import/prefer-default-export": "off",
    "react/jsx-filename-extension": "off",
    'import/no-unresolved': 0,
    "import/extensions": "off",
    "no-unused-vars": "off",
    "no-undef": "off",
    "class-methods-use-this": "off",
    "no-use-before-define": "off",
    "consistent-return": "off",
    "no-shadow": "off",
    "max-len": "off",
    "no-param-reassign": "off",
    "no-underscore-dangle": "off",
    "no-new-wrappers": "off",
    "react/prop-types": "off",
  },
};
