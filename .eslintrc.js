module.exports = {
  extends: require.resolve('@umijs/lint/dist/config/eslint'),
  rules: {
    '@typescript-eslint/no-use-before-define': [
      'error',
      {
        functions: true,
        classes: true,
        variables: false,
      },
    ],
    '@typescript-eslint/no-unused-expressions': 'off',
    'react/button-has-type': 'off',
  },
};
