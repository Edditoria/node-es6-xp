# node-es6-xp

This is an experimental repo to find a sweet spot of ES-modules in Node 13 when we **develop a npm package**. Please note: It focuses on `<src/pkg/>`, rather than explores how to consume a package.

In Node 13, we can make sure of ES Module natively, plus "conditional exports" to map to different paths. So, users can `import something from 'package-module.mjs'` from a package.

## Prepare

```shell
npm install # pkg in local, webpack, rollup, etc.
```

"pkg", that emulate our package development, lives in `src/pkg` directory. If you modify any files in `<src/pkg/*>`, effect will be taken immediately. You can see in `<./package.json>`:

```json
{
	"dependencies": {
		"pkg": "file:src/pkg"
	}
}
```

For more information, please read "npm install \<folder\>" in [official docs about npm-install][npm_install_doc].

## Node.js

In root directory of this repo, run:

```shell
nvm use 12

node index # I'm umd index
node index.mjs # throw Error
node mod # throw Error

nvm use 13

node index # I'm cjs index
node index.mjs # I'm esm index
node mod # I'm cjs module
node mod.mjs # I'm esm module
node import-error.mjs # throw Error (missing file extension in pkg/esm/import-error.mjs)
```

To understand the above results, please check out the `<node_modules/pkg/package.json>` file:

- "main": It acts as a fallback when you use Node <13. ESM and CommonJs are handled by bundling tools such as Webpack and Rollup.
- "exports": It is the key to define how Node 13 works with "conditional exports".

![Screenshot of Terminal for experiencing Node 13 ESM conditional exports][screenshot]

*Note*: ECMAScript Modules is a experimental feature in Node 13. ([link][node_esm_doc])

> Stability: 1 - Experimental. The feature is not subject to Semantic Versioning rules. Non-backward compatible changes or removal may occur in any future release. Use of the feature is not recommended in production environments.

## Webpack

```shell
npm run webpack

# For each of nvm use 12 and nvm use 13
node dist/webpack/main.js # Object [Module] { default: "I'm esm index" }
```

Check out `<dist/webpack/main.js>`. Webpack takes `<node_modules/pkg/esm/index.mjs>`. It is because "module" field is set in `<src/pkg/package.js>`.

---

Notes:

- What about other tools? Rollup, etc?
- Write in issues if you have question or suggestion.


[screenshot]: docs/images/screenshot-terminal-node-13-esm.png

[npm_install_doc]: https://docs.npmjs.com/cli/install
[node_esm_doc]: https://nodejs.org/api/esm.html
