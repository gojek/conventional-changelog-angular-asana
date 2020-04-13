> Based on [`conventional-changelog-angular`](https://github.com/conventional-changelog/conventional-changelog/tree/master/packages/conventional-changelog-angular) preset

## Conventional Changelog Angular Asana

Extends the Angular convention with support for [Asana](http://asana.com/) tasks.

## Commit format

Adds support for Asana link references.

```
fix(pencil): add `graphiteWidth` option

fixes https://app.asana.com/0/12345678/12345678
```

Existing references can co-exist

```
perf(pencil): remove graphiteWidth option

BREAKING CHANGE: The graphiteWidth option has been removed. The default graphite width of 10mm is always used for performance reason

closes #28
fixes https://app.asana.com/0/12345678/12345678
```
