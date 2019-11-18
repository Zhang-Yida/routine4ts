const execa = require('execa')

execa(
    'rollup',
    [
        '-wc'
    ]
)