module.exports = {
    parser: '@typescript-eslint/parser',
    extends: [
        'eslint:recommended',
        'plugin:@typescript-eslint/recommended',
        'prettier'
    ],
    plugins: ['@typescript-eslint'],
    parserOptions: {
        ecmaVersion: 2020,
        sourceType: 'module',
        project: './tsconfig.test.json'
    },
    globals: {
        // Instead of env.node and env.jest, we define globals explicitly
        'process': true,
        'module': true,
        'require': true,
        '__dirname': true,
        'jest': true,
        'describe': true,
        'it': true,
        'expect': true,
        'beforeEach': true,
        'afterEach': true
    },
    rules: {
        '@typescript-eslint/explicit-function-return-type': 'warn',
        '@typescript-eslint/no-unused-vars': ['error', { argsIgnorePattern: '^_' }],
        '@typescript-eslint/no-explicit-any': 'error',
        'no-console': 'off'
    },
    ignorePatterns: ['dist/', 'node_modules/', '*.js']
}; 