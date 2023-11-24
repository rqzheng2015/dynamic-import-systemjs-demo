import resolve from '@rollup/plugin-node-resolve';
import babel from '@rollup/plugin-babel';
import copy from 'rollup-plugin-copy';

export default {
    input: ["src/neptune.js", "src/saturn.js"],
    output: [
        {
            dir: "public",
            format: "system",
            sourcemap: true
        }
    ],
    plugins: [
        resolve(),
        babel({
            presets: ['@babel/preset-env'],
            babelHelpers: 'bundled',
            "targets": {
                "chrome": "40",
            },
            "plugins": [
                "@babel/plugin-transform-object-assign"
            ]
        }),
        copy({
            targets: [{ src: 'src/index.html', dest: 'public' }]
        })
    ],
};
