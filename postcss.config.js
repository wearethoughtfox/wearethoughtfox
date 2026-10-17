export default {
  plugins: {
    'postcss-import': {},
    'postcss-nesting': {},
    ...(process.env.NODE_ENV === 'production' ? { cssnano: {} } : {})
  }
};
