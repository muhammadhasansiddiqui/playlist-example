module.exports = {
  extends: 'eslint-config-ns',
  rules: {
    'global-require': 0,
    'no-console': 0,
    'no-underscore-dangle': 0,
    'prettier/prettier': [
      'error',
      {
        bracketSpacing: true,
        printWidth: 80,
        semi: true,
        singleQuote: true,
        trailingComma: 'all',
      },
    ],
  },
}
