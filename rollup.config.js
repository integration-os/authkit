import babel from '@rollup/plugin-babel';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import typescript from 'rollup-plugin-typescript2';
import pkg from './package.json';

export default {
  input: 'src/index.ts',
  external: ['react', 'prop-types'],
  output: [
    { file: pkg.main, format: 'cjs' },
    { file: pkg.module, format: 'es' },
  ],
  plugins: [
    typescript({
      rollupCommonJSResolveHack: false,
      clean: true,
    }),
    resolve(),
    babel({
      babelHelpers: 'bundled',
      extensions: ['.ts', '.js', '.tsx', '.jsx'],
    }),
    commonjs(),
  ],
};
