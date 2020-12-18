import babel from '@rollup/plugin-babel';
import resolve from '@rollup/plugin-node-resolve';
import ts from '@wessberg/rollup-plugin-ts';
import commonjs from 'rollup-plugin-commonjs';
import pkg from './package.json';

export default {
  input: 'src/index.ts',
  external: ['react', 'prop-types'],
  output: [
    { file: pkg.main, format: 'cjs' },
    { file: pkg.module, format: 'es' },
  ],
  plugins: [
    ts(),
    resolve(),
    babel({
      babelHelpers: 'bundled',
      extensions: ['.ts', '.js', '.tsx', '.jsx'],
    }),
    commonjs(),
  ],
};
