## What is this
A module that just `require`s everything in a given path, to enable you to get a picture of the un-tested files in your project.

Currently it works for me because my code uses requirejs, so all I have to do is mock the requirejs function and everythings happy - if you're doing something different it might not work so well (or at all).

## How do I use it
Something like this (example uses mocha, but could be other frameworks):
```
node ./node_modules/istanbul/lib/cli.js --hook-run-in-context cover ./node_modules/mocha/bin/_mocha node_modules/istanbul-baseline/cli.js ./js/* --report lcovonly -- -R spec
```
