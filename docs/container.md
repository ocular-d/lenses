# Containerization

::: tip Scope
:bulb: Background info about container setup
:::

**Table of content**

[[toc]]

Containerization is a lightweight alternative to a virtual machine that involves encapsulating an application in a container with its own operating system.

All checks are "packaged" into containers.
This approach makes it effortless to use lenses with different CI/CD setups or use it locally.

All containers are build with [Docker](https://www.docker.com/ "Link to website of Docker").

::: warning Note
:exclamation: In the future we will move to **daemonless container** containers which will be able to run
as **non-privileged user**.

By doing so, there is no need for running a docker daemon or run the containers as root.
:::

## Container setup

All containers are based on the same [base image](https://github.com/ocular-d/containers/tree/master/ci-base "Link to container repository on GitHub").

This base image is slightly bigger than needed to purely run the checks.

The reason for that is that is also contains package requirements according to *best practices* of various continuous integration tools.

[CircleCI](https://circleci.com/ "Link to CirecleCI site") for example requires [`ssh`](https://circleci.com/docs/2.0/custom-images/#required-tools-for-primary-containers "Link to CircleCI docs about custom images") to be able to login to debug into the test environment if you would like to do so.

Further on contain all images [`tini`](https://github.com/krallin/tini "Link to tini on GitHub"), [`su-exec`](https://github.com/ncopa/su-exec "Link to su-exec on GitHub") and a custom user *ttd* which is used to run all checks.

::: warning Note
:exclamation: With moving to **daemonless container** `su-exec` will be obsolete and removed from the base container image.
:::