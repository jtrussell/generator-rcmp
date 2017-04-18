/* global before, describe, it */

'use strict'
const path = require('path')
const assert = require('yeoman-assert')
const helpers = require('yeoman-test')

describe('generator-rcmp:app', () => {
  before(() => {
    return helpers.run(path.join(__dirname, '../generators/app'))
      .withPrompts({
        moduleName: 'foo-bar',
        className: 'wowza',
        authorName: 'Wowza',
        homepage: 'https://github.com/wowza/foo-bar',
        desc: 'Super blargus',
        useDotFiles: 'y',
        installDeps: 'n'
      })
      .toPromise()
  })

  it('creates files', () => {
    assert.file([
      '.babelrc',
      '.editorconfig',
      '.eslintrc.js',
      '.gitignore',
      'README.md',
      'package.json',
      'postcss.config.js',
      'src/index.js',
      'src/components/foo-bar/index.js',
      'src/components/foo-bar/foo-bar.js',
      'src/components/foo-bar/foo-bar.css',
      'src/components/foo-bar/foo-bar.spec.js',
      'webpack.config.js'
    ])
  })
})
