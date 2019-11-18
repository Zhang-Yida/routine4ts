import ts2 from 'rollup-plugin-typescript2'
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
    plugins: [
        ts2Plugin
    ],
    output: {
        file: resolve(`dist/routine4ts.global.js`),
        format: 'iife'
    }
}