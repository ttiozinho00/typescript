module.exports = {
    env:
    {
        es6: true,
        node: true
    },

    extends:
        [
            "prettier",
            "prettier/react",
            "prettier/@typescript-eslint",
            'plugin:@typescript-eslint/recommended',
            'standard'
        ],

    globals:
    {
        Atomics: 'readonly',
        SharedArrayBuffer: 'readonly'
    },

    parser: '@typescript-eslint/parser',
    parserOptions:
    {
        ecmaVersion: 2018,
        sourceType: 'module'
    },

    plugins:
        [
            '@typescript-eslint'
        ],

    rules:
    {
        '@typescript-eslint/no-unused-vars': "error"
    }
}
