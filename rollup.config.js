import ts2 from 'rollup-plugin-typescript2'
import serve from 'rollup-plugin-serve'
import livereload from 'rollup-plugin-livereload'
import path from 'path'

const resolve = p => path.resolve(__dirname, p)

const ts2Plugin = ts2({
    tsconfig: resolve(`tsconfig.json`),
    tsconfigOverride: {
        complierOptions: {
            declaration: true,
            declarationMap: true
        }
    }
})

export default {
    input: resolve(`src/index.ts`),
    output: {
        file: resolve(`dist/routine4ts.global.js`),
        format: 'iife'
    },
    plugins: [
        ts2Plugin,

        serve({
            open: true,
            port: 4000,
            // contentBase: 'dist/'
        }),

        livereload({
            verbose: false
        })
    ]
}