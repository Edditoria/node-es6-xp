import babel from 'rollup-plugin-babel';
import resolve from '@rollup/plugin-node-resolve';

export default [
	{
		input: 'index.mjs',
		output: {
			file: 'dist/rollup/index.common.js',
			format: 'cjs'
		},
		plugins: [
			resolve()
		]
	}, {
		input: 'index.mjs',
		output: {
			file: 'dist/rollup/index.umd.js',
			format: 'umd'
		},
		plugins: [
			resolve(),
			babel({
				babelrc: false,
				presets: ['@babel/env']
			})
		]
	}
];
