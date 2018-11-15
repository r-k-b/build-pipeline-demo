
For now, this just serves a "hello world" on port 3000.


# Questions

## What does typescript + nodejs look like in the pipeline?

## What does Elm look like in the pipeline?

## What about some kind of `version.txt`?

Ideally, Docker's build process, whether local or on CI, would allow us to
generate a file containing the current git commit ID. With that, we could
see at runtime exactly which commit the running code was built from.

However, there seems to be no decent way of getting that information from
within the `Dockerfile`; there are some suggestions along the lines of
passing the commit info in via build arguments, but those seem overly
fragile ― a dev may forget to add them, or the CI tool may not support
such.

For now, perhaps the best we can do is tagging + CI? I.e, add a semver 
tag via git, push it to origin, then have the CI tool use the tag name
to tag the docker image. 

(although, tags can be deleted & re-added; they're not immutable...)

(and this doesn't help us determine the commit info from the runtime)
