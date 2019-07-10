# Remark

::: tip Scope
:bulb:Style linter for [CommonMark](https://commonmark.org/ "Link to website of CommonMark") written [Markdown](https://en.wikipedia.org/wiki/Markdown "Link to Markdown page on Wikipedia").
:::

**Table of content**

[[toc]]

## Continuous integration

### CircleCI

### Travis CI

### Drone

Below is an example Travis pipeline (`.drone.yml`) running linkcheck against the *docs* directory.

## Local usage

To use linkcheck locally, please make sure that you have [Docker](https://docker.com "Link to website of Docker") installed.

### Example

Check out the [demo-docs](https://github.com/ocular-d/demo-docs "Link to dem-docs repository") repository:

```shell
git clone https://github.com/ocular-d/demo-docs.git
```

Change into the cloned repository:

```shell
cd demo-docs
```

## Information

remark is based on [remark-lint](https://github.com/remarkjs/remark-lint "Link to website of remark-lint") and [zemanlx/remark-lint](https://github.com/zemanlx/remark-lint "Website of zemanlx/remark-lint docker").

### Dependencies

- [Docker](https://docker.com "Website of Docker")
