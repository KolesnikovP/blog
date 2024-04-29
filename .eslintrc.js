module.exports = {
  env: {
    browser: true,
    es2021: true,
    jest: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
    'plugin:i18next/recommended',
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
    'i18next',
    'react-hooks',
    'kolesnikov-plugin',
    'unused-imports',
    'import',
  ],
  rules: {
    'unused-imports/no-unused-imports': 'error',
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
    'max-len': ['warn', { code: 160 }],
    'i18next/no-literal-string': ['error', {
      markupOnly: true,
      ignoreAttribute: [
        'border',
        'data-testid',
        'to',
        'size',
        'theme',
        'align',
        'target',
        'direction',
        'align', 'gap',
        'justify',
        'role',
        'as',
      ],
    }],
    'jsx-a11y/click-events-have-key-events': 'off', // this is good rule, but it's pet project not for this
    'react-hooks/rules-of-hooks': 'error', // Checks rules of Hooks
    'react-hooks/exhaustive-deps': 'error', // Checks effect
    'no-param-reassign': 'off',
    'react/jsx-one-expression-per-line': 'off',
    'no-undef': 'off',
    // I know when I can use key as index and when I can't
    'react/no-array-index-key': 'off',
    'kolesnikov-plugin/path-checker': ['error', { alias: '@' }],
    'kolesnikov-plugin/public-api-imports': ['error', {
      alias: '@',
      testFilesPatterns: ['**/*.test.*', '**/*.story.*', '**/StoreDecorator.tsx'],
    },
    ],
    'kolesnikov-plugin/layer-imports': [
      'error',
      {
        alias: '@',
        ignoreImportPatterns: ['**/StoreProvider', '**/testing'],
      },
    ],
    'import/order': [
      'error',
      {
        groups: ['builtin', 'external', 'internal'],
        pathGroups: [
          {
            pattern: 'react',
            group: 'external',
            position: 'before',
          },
          {
            pattern: '@/**',
            group: 'external',
            position: 'after',
          },
        ],
        pathGroupsExcludedImportTypes: ['react'],
        // 'newlines-between': 'always',
        alphabetize: {
          order: 'asc',
          caseInsensitive: true,
        },
      },
    ],

  },
  globals: {
    __IS_DEV__: true,
    __API__: true,
    __PROJECT__: true,
  },
  overrides: [
    {
      files: ['**/src/**/*.{test,stories}.{ts,tsx}'],
      rules: {
        'i18next/no-literal-string': 'off',
        'max-len': 'off',
      },
    },
  ],
};
