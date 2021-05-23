# Getting Started

[Get started with Microsoft Teams app development](https://docs.microsoft.com/en-us/microsoftteams/platform/build-your-first-app/build-first-app-overview#get-prerequisites)

## Create first Teams project

Scaffolding:

```
yo teams
```

Interpolates env to manifest & create `./package/*.zip`:

```
gulp manifest
```

> Note: Usually .env is inclued in `.gitignore`

Build the project:

```
gulp build
```

Serve the project

```
gulp serve
```

Establish a secure tunnel to test:

```
gulp ngrok-serve
```

### ngrok changing hostname tweak

To avoid that the `ngrok hostname` (Tunnel FQDN) changes with every `gulp ngrok-serve`, run `gulp start-ngrok` in a seperate standalone console window or a terminal split window and uss the guide below.

![ngrok](_images/ngrok.jpg)

To start the ngrok tunnel:

```
gulp start-ngrok (from within a Teams proj)
```

To start the app [after update]:

```
gulp manifest
gulp serve --debug
```
