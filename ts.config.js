export const typescriptConfig = {
    extends: ['plugin:@typescript-eslint/eslint-recommended'],
    overrides: [
      {
        parser: '@typescript-eslint/parser',
        extends: [
          'plugin:@typescript-eslint/recommended',
          'prettier/@typescript-eslint',
          'plugin:import/typescript',
        ],
        plugins: ['@typescript-eslint'],
   
        files: ['*.ts', '*.tsx'],
   
        rules: {},
      },
    ],