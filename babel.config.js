module.exports = {
  presets: ['next/babel'],
  env: {
    development: {
      plugins: [
        [
          'styled-components',
          { ssr: true, displayName: true, preprocess: false },
        ],
      ],
      presets: ['next/babel'],
    },
    production: {
      plugins: [
        [
          'styled-components',
          { ssr: true, displayName: true, preprocess: false },
        ],
      ],
      presets: ['next/babel'],
    },
  },
  plugins: [
    ['styled-components', { ssr: true, displayName: true, preprocess: false }],
  ],
}
