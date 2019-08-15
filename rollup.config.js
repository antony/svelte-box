import svelte from 'rollup-plugin-svelte'
import resolve from 'rollup-plugin-node-resolve'
import commonjs from 'rollup-plugin-commonjs'
import livereload from 'rollup-plugin-livereload'
import { terser } from 'rollup-plugin-terser'
import json from 'rollup-plugin-json'
import postcss from 'rollup-plugin-postcss'
import builtins from 'rollup-plugin-node-builtins'
import globals from 'rollup-plugin-node-globals'

const production = !process.env.ROLLUP_WATCH;

export default {
	input: 'src/main.js',
	output: {
		sourcemap: true,
		format: 'iife',
		name: 'app',
		file: 'public/bundle.js'
	},
	plugins: [
    json(),
    postcss(),
		resolve({
			jsnext: true,
			main: true,
			browser: true,
			preferBuiltins: true,
			dedupe: importee => importee === 'svelte' || importee.startsWith('svelte/')
		}),
		commonjs({
		}),
		svelte({
			dev: !production,
			css: css => {
				css.write('public/bundle.css')
			}
    }),
    builtins(),
    globals(),
		!production && livereload('public'),
		production && terser()
	],
	watch: {
		clearScreen: false
	}
}
