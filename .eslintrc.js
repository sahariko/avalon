module.exports = {
    root: true,
    parser: '@typescript-eslint/parser',
    plugins: [
        '@typescript-eslint'
    ],
    extends: [
        'eslint:recommended',
        'plugin:react/recommended',
    ],
    parserOptions: {
        ecmaVersion: 2020,
        sourceType: 'module',
        ecmaFeatures: {
            jsx: true
        }
    },
    settings: {
        react: {
            version: 'detect'
        }
    },
    env: {
        es6: true,
        node: true
    },
    rules: {
        'no-var': 2,
        'prefer-const': 2,
        'comma-dangle': ['error', 'never'],
        'object-curly-spacing': ['error', 'always'],
        semi: 2,
        quotes: [2, 'single']
    },
    overrides: [
        {
            files: ['*.ts', '*.tsx'],
            extends: [
                'plugin:@typescript-eslint/recommended',
                'plugin:@typescript-eslint/eslint-recommended'
            ],
            rules: {
                '@typescript-eslint/no-unused-vars': 2,
                '@typescript-eslint/no-explicit-any': 2,
                '@typescript-eslint/explicit-module-boundary-types': 2,
            }
        }
    ]
}
