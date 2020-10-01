# Adds Verificator status as comment on Production Pull Requests - GitHub Actions

## What is it ?

A GitHub action that comments with the verificator status on production pull
requests.

## Usage

```
on:
  pull_request:
    branches:
      - production

jobs:
  example_comment_pr:
    runs-on: ubuntu-latest
    name: Adds Verificator Status comment
    steps:
      - name: Checkout
        uses: actions/checkout@v1

      - name: Comment PR
        uses: MerchantsBonding/verificator-status-comment@master
        with:
          GITHUB_TOKEN: ${{ secrets.GITHUB_TOKEN }}
          TRAVIS_TOKEN: ${{ secrets.TRAVIS_TOKEN }}
```

Duplicated repo from https://github.com/thollander/actions-comment-pull-request
