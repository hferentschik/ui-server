# Build docker image

## Prerequisites

To build docker image:

- [docker](https://docs.docker.com/engine/installation/)

## Build docker image for any commit

Replace **YOUR_TAG** and **YOUR_CHECKOUT_COMMIT** in the below command to build:

```bash
git checkout YOUR_CHECKOUT_COMMIT
docker build . -t temporalio/ui:YOUR_TAG
```

## Quickstart for production

To use the container in a production setting, use the following command:

```shellscript
docker run \
    -e TEMPORAL_ADDRESS=127.0.0.1:7233 \                                    -- Temporal Frontend Address
    -e TEMPORAL_PORT=8080 \                                                 -- Port to serve HTTP API and UI on
    -e TEMPORAL_AUTH_ENABLED=true \                                         -- Enable auth
    -e TEMPORAL_AUTH_PROVIDER_URL=https://accounts.google.com \             -- Auth OIDC provider url
    -e TEMPORAL_AUTH_CLIENT_ID=xxxxx-xxxx.apps.googleusercontent.com \      -- Auth client ID
    -e TEMPORAL_AUTH_CLIENT_SECRET=xxxxxxxxxxxxxxx \                        -- Auth client secret
    -e TEMPORAL_AUTH_CALLBACK_URL=https://xxxx.com:8080/auth/sso/callback \ -- Auth callback url
    temporalio/ui:<tag>
```