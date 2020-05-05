> Based on [`conventional-changelog-angular`](https://github.com/conventional-changelog/conventional-changelog/tree/master/packages/conventional-changelog-angular) preset

## Conventional Changelog Angular Asana

Extends the Angular convention with support for [Asana](http://asana.com/) tasks.

## Commit format

Adds support for Asana link references.

```
fix(pencil): add `graphiteWidth` option

fixes https://app.asana.com/0/12345678/12345678
```

References can co-exist

```
perf(pencil)!: remove graphiteWidth option

closes #28
fixes https://app.asana.com/0/12345678/12345678

BREAKING CHANGE: The graphiteWidth option has been removed. The default graphite width of 10mm is always used for performance reason
```

## Usage

Use this preset, like any other other conventional-changelog presets.

### With Lerna

Install as a devDevdependency first.

```
$ npm install @gojek/conventional-changelog-angular-asana --save-dev
```

When using with [lerna](https://lerna.js.org/) [version](https://github.com/lerna/lerna/tree/master/commands/version) Set the `--changelog-preset` flag.

```
$ lerna version --conventional-commits --changelog-preset angular-asana
```

Or, if using [`lerna.json`](https://github.com/lerna/lerna#lernajson), pass it in **"conventionalCommits"** option.

```json
"command": {
  "version": {
    "conventionalCommits": "angular-asana"
  }
```

Lerna automatically prepends `conventional-changelog-`, so node module resolution will resolve to the correct package.

## Issues/Questions?

[Open an issue](../../issues)
