import eslint from '@eslint/js';
import tseslint from '@typescript-eslint/eslint-plugin';
import typescript from '@typescript-eslint/parser';
import prettier from 'eslint-config-prettier';
import globals from 'globals';

export default [
    eslint.configs.recommended,
    {
        ignores: ['**/dist/**/*.+(js|ts)', '**/node_modules/**/*.+(js|ts)'],
    },
    {
        files: ['**/*.ts', '**/*.tsx'],
        languageOptions: {
            parser: typescript,
            parserOptions: {
                ecmaVersion: 'latest',
                sourceType: 'module',

            },
            globals: {
                ...globals.browser,
                ...globals.node
            }
        },
        plugins: {
            '@typescript-eslint': tseslint
        },
        rules: {
            ...tseslint.configs.recommended.rules
        }
    },
    {
        files: ['**/__tests__/**/*.[jt]s?(x)', '**/?(*.)+(spec|test).[jt]s?(x)'],
        languageOptions: {
            globals: {
                describe: 'readonly',
                expect: 'readonly',
                it: 'readonly',
                jest: 'readonly',
                test: 'readonly',
                beforeEach: 'readonly',
                afterEach: 'readonly',
                beforeAll: 'readonly',
                afterAll: 'readonly'
            }
        }
    },
    prettier
];
