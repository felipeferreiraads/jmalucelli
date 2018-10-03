const path = require('path')

module.exports = {
  skipComponentsWithoutExample: true,
  styleguideComponents: {
    Wrapper: path.join(__dirname, 'src/components/StyleguideWrapper')
  },
  sections: [
    {
      name: 'Introduction',
      content: 'docs/intro.md'
    },
    {
      name: 'Components',
      components: 'src/components/**/*.js'
    },
    {
      name: 'Screens',
      components: 'src/screens/**/*.js'
    }
  ],
  theme: {
    maxWidth: 2000
  }
}
