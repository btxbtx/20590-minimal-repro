# 20590-minimal-repro

Minimal config for #20590

Platform is set to gitlab because that's where I run renovate. I'm hosting this
from my public github account so it is tied to the account I post to the
renovate project with. Ideally, this repo would be tested on gitlab.

# First Run

1. Update variables in `.envrc` to reflect your environment.
1. Make sure the env vars are available in your environment
1. Run renovate (I am using renovate v34)
   ```
   renovate
   ```

## Desired

`helmfiles/dev/doUpdate.values.yaml`, has a PR created.

## Actual

`helmfiles/dev/doUpdate.values.yaml`, has a PR created. (desired)

# Second Run

This is where the problem is.

1. Update the `.envrc` variable
   `DO_UPDATE_NAME` to `doUpdateSecond"`, i.e.
   `    export DO_UPDATE_NAME="doUpdate"
   `
1. Make sure this var has changed in your environment
1. Run renovate

   ```
   renovate
   ```

## Desired

- `helmfiles/dev/doUpdate.values.yaml`, the original PR, should be untouched.
- `helmfiles/dev/doUpdateSecond.values.yaml` is updated by renovate in a single PR
- `helmfiles/dev/doNotUpdate.values.yaml` should not be updated.

## Actual

- `helmfiles/dev/doUpdateSecond.values.yaml` has PR created. (desired)
- `helmfiles/dev/doUpdate.values.yaml` is removed by renovate. (not desired)
- `helmfiles/dev/doNotUpdate.values.yaml` should not be updated. (desired)
