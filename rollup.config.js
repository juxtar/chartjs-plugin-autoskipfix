import babel from 'rollup-plugin-babel';
import {terser} from 'rollup-plugin-terser';

export default {
    input: 'src/index.js',
    external: ['chart.js'],
    output: [
        {
            file: 'dist/chartjs-plugin-autoskipfix.js',
            format: 'umd',
            name: 'AutoSkipFixPlugin',
            globals: {
                'chart.js': 'Chart'
            }
        },
        {
            file: 'dist/chartjs-plugin-autoskipfix.min.js',
            format: 'umd',
            name: 'AutoSkipFixPlugin',
            globals: {
                'chart.js': 'Chart'
            },
            plugins: [terser()]
        }
    ],
    plugins: [babel()]
};
