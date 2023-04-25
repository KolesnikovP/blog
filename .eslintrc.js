module.exports = {
  env: {
    browser: true,
    es2021: true,
    jest: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: [
    'react',
    '@typescript-eslint',
  ],
  rules: {
    'react/jsx-indent': [0, { indentMode: 2, ignoreTernaryOperator: true }],
    indent: [2, 2],
    'no-unused-vars': 'warn',
    'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx', 'tsx', 'ts'] }],
    'import/no-unresolved': 'off',
    'import/extensions': 'off',
    'import/prefer-default-export': 'off',
    'no-shadow': 'off',
    'react/function-component-definition': 'off',
    'react/require-default-props': 'off',
    'jsx-quotes': [1, 'prefer-single'],
    'react/react-in-jsx-scope': 'off',
    'react/jsx-props-no-spreading': 'warn',
    'no-underscore-dangle': 'off',
    'import/no-extraneous-dependencies': 'off',
    'jsx-a11y/no-static-element-interactions': 'warn',
    'max-len': ['warn', { code: 140 }],
  },
  globals: {
    __IS_DEV__: true,
  },
};
