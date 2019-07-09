# Linkcheck

::: tip Key Point
:bulb: Linkchecker for [Mardown](https://en.wikipedia.org/wiki/Markdown "Link to Markdown page on Wikipedia") (.`md`)
and [reStructuredText](https://en.wikipedia.org/wiki/ReStructuredText "Link to rst page on Wikipedia") (.`rst`) source files.
:::

![Image of running linkcheck with CI/CD](../assets/demo-docs-linkcheck.png)


Based on [linkcheck](https://github.com/cytopia/linkcheck "Link to linkcheck website").

## Dependencies

- [Docker](https://docker.com "Website of Docker")

## Continuous integration

### CircleCI

```yaml
---
version: 2

jobs:
  "linkcheck":
    docker:
        - image: testthedocs/cci-linkcheck:0.0.2
    steps:
      - checkout
      - run:
          command: |
            su-exec ttd /usr/local/bin/linkcheck -c '200,301,302' -t 5 docs


workflows:
  version: 2
  btd:
    jobs:
      - "linkcheck"
```

## Settings

Default settings are configured in the [script itself](https://github.com/testthedocs/rakpart/blob/master/ttd-linkcheck/linkcheck "Link to source of script").


```txt
Usage: linkcheck [-e -i -t -r -c -k -l] [<path>]
       linkcheck --version
       linkcheck --help


Options:

-e        Limit search to those file extensions.
          Defaults to limiting on non-binary files.
          Accepts comma separated string of extensions:
            -e txt
            -e txt,rst
            -e sh,py.c,h

-i        Ignore all URLs matching the specified regex.
          Defaults to: ^http(s)?:\/\/(127\.0\.0\.1)|(localhost).*$
          Accepts a single regex string:
            -i '^http(?):\/\/my-comapny.com.*$'

-t        Specify curl timeout in seconds, after which probing stops for one url.
          Defaults to 10 seconds.
          Accepts a positive integer:
            -t 5
            -t 10

-r        Specify how many time to retry probing a single URL, before giving up.
          Defaults to 3 times.
          Accepts a positive integer:
            -r 5
            -r 10

-c        Specify HTTP status codes that are valid for success.
          Any code not specified in here will produce an error for the given URL.
          Defaults to '200'.
          Accepts comma separated string of http status codes:
            -c '200'
            -c '200,301'
            -c '200,301,302'

-k        Ignore invalid SSL certificates for HTTPS connections.
          Defaults to error on invalid SSL certificates.
          This is just a single flag with no other arguments.

-l        Specify whether to follow redirect URLs or not.
          This argument does not accept parameters.
          Defaults to not following redirects.

--version Show version and exit.
--help    Show this help screen.


Optional arguments:

<path>    Specify what directory to scan files for URLs.
          Defaults to current directory.
```

## Local Usage
  
  ```shell
  docker run -it -v `pwd`:/srv/test oculard/linkcheck
  ```

