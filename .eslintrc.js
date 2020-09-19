module.exports = {
    parser: "@typescript-eslint/parser",
    extends: [
        'eslint:recommended',
        'plugin:react/recommended'
    ],
    root: true,
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
        semi: 2,
        quotes: [2, 'single']
    },
    overrides: [
        {
            files: ['**/*.ts', '**/*.tsx'],
            extends: [
                'plugin:@typescript-eslint/recommended'
            ],
            rules: {
                '@typescript-eslint/no-unused-vars': 2,
                // 'no-console': 0,
                // 'no-var': 2,
                // 'prefer-const': 2,
                semi: 2,
                // quotes: [2, 'single']
            }
        },
        {
            files: ['server/**/*.js', 'bin/**/*.js'],
            env: {
            }
        },
        {
            files: ['client/**/*.js'],
            env: {
                browser: true
            }
        }
    ]
}
