import babel from 'rollup-plugin-babel'
import { terser } from 'rollup-plugin-terser'
import commonjs from '@rollup/plugin-commonjs'
import resolve from '@rollup/plugin-node-resolve'

const babelConfig = {
  babelrc: false,
  presets: [['@babel/preset-env', { targets: 'defaults, IE >= 10, Safari >= 5.1' }]]
}

export default [{
  input: 'lib/browser.js',
  output: { file: 'build/qrcode-browser.js', format: 'umd', name: 'QRCode', exports: 'named' },
  plugins: [commonjs(), resolve({ browser: true }), babel(babelConfig), terser()]
}, {
  input: 'lib/index.js',
  output: { file: 'build/qrcode-node.js', format: 'umd', name: 'QRCode', exports: 'named' },
  plugins: [commonjs(), resolve({ browser: false, preferBuiltins: true }), babel(babelConfig), terser()]
}]
