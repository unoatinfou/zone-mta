'use strict';

module.exports = {
    rules: {
        indent: 0,
        quotes: [2, 'single'],
        'linebreak-style': [2, 'unix'],
        semi: [2, 'always'],
        strict: [2, 'global'],
        eqeqeq: 2,
        'dot-notation': 2,
        curly: 2,
        'no-fallthrough': 2,
        'quote-props': [2, 'as-needed'],
        'no-unused-expressions': [
            2,
            {
                allowShortCircuit: true
            }
        ],
        'no-unused-vars': 2,
        'no-undefined': 2,
        'handle-callback-err': 2,
        'no-new': 2,
        'new-cap': 2,
        'no-eval': 2,
        'no-invalid-this': 2,
        radix: [2, 'always'],
        'no-use-before-define': [2, 'nofunc'],
        'callback-return': [2, ['callback', 'cb', 'done']],
        'comma-dangle': [2, 'never'],
        'comma-style': [2, 'last'],
        'no-regex-spaces': 2,
        'no-empty': 2,
        'no-duplicate-case': 2,
        'no-empty-character-class': 2,
        'no-redeclare': [
            2,
            {
                builtinGlobals: true
            }
        ],
        'block-scoped-var': 2,
        'no-sequences': 2,
        'no-throw-literal': 2,
        'no-useless-call': 2,
        'no-useless-concat': 2,
        'no-void': 2,
        yoda: 2,
        'no-undef': 2,
        'global-require': 2,
        'no-var': 2,
        'no-bitwise': 2,
        'no-lonely-if': 2,
        'no-mixed-spaces-and-tabs': 2,
        'arrow-body-style': [2, 'as-needed'],
        'arrow-parens': [2, 'as-needed'],
        'prefer-arrow-callback': 2,
        'object-shorthand': 2,
        'prefer-spread': 2
    },
    env: {
        es6: true,
        node: true
    },
    extends: 'eslint:recommended',
    globals: {
        it: true,
        describe: true,
        beforeEach: true,
        afterEach: true
    }
};
