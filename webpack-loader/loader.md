# Loader

## Why Loader?
Webpack only understands Javascript and JSON file.
So we need Loaders to process other types of files.

## Common Use
Style, CSS, Sass, PostCss, Babel

## Property in Webpack.config.js
test: identifies which file or files should be transformed.
use: indicate which loader should be used to do the transforming.

    module.exports = {
        module: {
            rules: [{ test: /\.txt$/, use: 'raw-loader' }],
        },  
    };

## How to Use
1. Configuration (webpack.config.js)
2. Inline (import)

## Sorting
Right to Left / Bottom to Top

## Features
1. Chain rendered by order mentioned by above, the first one passes its result(transformed resource) to the next one and so forth.
2. Can be Sync or Async
3. Loader can be configured with an options object

