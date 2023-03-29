import babel from '@rollup/plugin-babel';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import typescript from 'rollup-plugin-typescript2';
import copy from 'rollup-plugin-copy';
import pkg from './package.json';
import { terser } from 'rollup-plugin-terser';
import json from '@rollup/plugin-json';


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
    json(),
    copy({
      targets: [{ src: 'src/types', dest: 'dist' }],
    }),
    resolve(),
    babel({
      exclude: 'node_modules/**',
      babelHelpers: 'bundled',
      extensions: ['.ts', '.js', '.tsx', '.jsx'],
    }),
    commonjs({
      namedExports: {
        'react/jsx-runtime': ['jsx', 'jsxs'],
        "react-dom": ["createPortal"],
      }
    }),
    terser(),
  ],
};
