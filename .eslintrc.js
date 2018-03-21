module.exports = {
    root: true,
    parser: 'babel-eslint',
    env: {
        browser: true,
        node: true
    },
    extends: 'standard',
    // required to lint *.vue files
    plugins: [
        'html'
    ],
    // add your custom rules here
    rules: {
        "indent": [
            "warn",
            4
        ],
        "space-before-function-paren": ["error", "never"],
        "no-multiple-empty-lines": ["error", { "max": 2 }],
        "no-unused-vars": ["warn", { "vars": "all", "args": "after-used", "ignoreRestSiblings": false }]
    },
    globals: {}
}
