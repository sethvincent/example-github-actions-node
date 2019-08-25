# Github Actions node example

This example explores using the new [Github actions CI](https://github.com/features/actions) functionality for continuous testing & release.

## Overview
- tests and linter are run on every `push` event
- tests and linter are also run on every `release` event
- if the `release` action is `published` and the tests and linter step passes, the module is published to npm

## Release process
- Create a git tag on the `master` branch using `npm version major|minor|patch`
- Push the tag and the version commit to the repo with `git push && git push --tags`
- Create a release for that tag through the Github UI
- Github Actions will then run the `release` workflow and publish the module at that tag

## Ideas for improvements
- Creating a git tag could be triggered by an external event, such as an event created by a chat bot
- Automatically put together release notes based on the contents of a `CHANGELOG.md` file

## Configuration

### Secret npm token
Create a secret env var called `NPM_AUTH_TOKEN` that has an [authentication token from npm](https://docs.npmjs.com/about-authentication-tokens).

Follow Github's instructions for [creating and using secrets](https://help.github.com/en/articles/virtual-environments-for-github-actions#creating-and-using-secrets-encrypted-variables) to add `NPM_AUTH_TOKEN`.
