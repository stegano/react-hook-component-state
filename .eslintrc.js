module.exports = {
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint/eslint-plugin'],
  extends: [
    'eslint:recommended',
    'airbnb-base',
  ],
  overrides: [
    {
      files: ['*.ts', '*.tsx',
      ],
      rules: {
        /**
         * Exception handling of eslint `no-unused-vars` error when importing Typescript Interface
         * @see https://github.com/typescript-eslint/typescript-eslint/issues/46
         */
        '@typescript-eslint/no-unused-vars': [
          2,
          { args: 'none' },
        ],
        /**
         * @see https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/extensions.md
         */
        'import/extensions': 'off',
      },
    },
  ],
};
