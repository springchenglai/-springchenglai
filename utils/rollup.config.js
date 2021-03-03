export default {
  input: './src/index.js',
  output: [
    {
      file: 'dist/bundle.js',
      format: 'cjs'
    },
    {
      file: 'dist/bundle.es.js',
      format: 'esm'
    }
  ]
}