# node-es6-xp

This is an experimental repo to find a sweet spot of ES-modules in Node 13, when we **develop a npm package**. Make a better `<node_modules/pkg/>` for common usages.

In root directory of this repo, run:

```shell
nvm use 12

node index # I'm root index
node index.mjs # throw Error
node mod # throw Error

nvm use 13

node index # I'm cjs index
node index.mjs # I'm esm index
node mod # I'm cjs module
node mod.mjs # I'm esm module
```

![Screenshot of Terminal for experiencing Node 13 ESM conditional exports][screenshot]

*Note*: ECMAScript Modules is a experimental feature in Node 13. ([link][node_esm_doc])

> Stability: 1 - Experimental. The feature is not subject to Semantic Versioning rules. Non-backward compatible changes or removal may occur in any future release. Use of the feature is not recommended in production environments.

Notes:

- What about other tools? Webpack, Rollup, etc?
- Write in issues if you have question or suggestion.


[screenshot]: docs/images/screenshot-terminal-node-13-esm.png

[node_esm_doc]: https://nodejs.org/api/esm.html
