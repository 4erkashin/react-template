module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  plugins: ['react', '@typescript-eslint', 'import', 'simple-import-sort'],
  extends: [
    'plugin:react/recommended',
    'airbnb',
    'airbnb-typescript',
    'airbnb/hooks',
    'plugin:storybook/recommended',
    'prettier',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: './tsconfig.json',
  },
  settings: {
    'import/parsers': {
      '@typescript-eslint/parser': ['.ts', '.tsx'],
    },
    'import/resolver': {
      typescript: {
        alwaysTryTypes: true,
        project: './tsconfig.json',
      },
    },
  },
  rules: {
    'consistent-return': 'off',
    'import/no-unresolved': 'error',
    'import/prefer-default-export': 'off',
    'jsx-a11y/label-has-associated-control': 'off',
    'react/function-component-definition': 'off',
    'react/jsx-filename-extension': [
      1,
      { extensions: ['.js', '.jsx', '.ts', '.tsx'] },
    ],
    'react/jsx-no-useless-fragment': 'off',
    'react/jsx-props-no-spreading': 'off',
    'react/react-in-jsx-scope': 'off',
    'react/require-default-props': 'off',
    'simple-import-sort/exports': 'error',
    'simple-import-sort/imports': [
      'error',
      {
        groups: [
          // Side effect imports
          ['^\\u0000'],
          // Packages (global imports)
          ['^@?\\w'],
          // Relative imports
          ['^\\.'],
        ],
      },
    ],
  },
  overrides: [
    {
      files: ['vite.config.ts'],
      rules: {
        'import/no-extraneous-dependencies': 'off',
      },
    },
  ],
};
