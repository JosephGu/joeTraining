# Write a mini Webpack

## What is a Bundler?
Bundlers lets us write modules that work in the browser

## ESM (EcmaScript Modules)
import _ from 'lodash';
export default someThing;

## CommonJS 
const _ = require('lodash');
module.exports = someThing;

## Dependency Graph
The Modules Dependency Relationship

## Implementation Overview
1. Parse a single file and extract its dependencies
2. Recursively build a dependency graph
3. Package everything into a single file
