# Getting Started

[Get started with Microsoft Teams app development](https://docs.microsoft.com/en-us/microsoftteams/platform/build-your-first-app/build-first-app-overview#get-prerequisites)

## Setup Environment

### Install Requirements

For Teams Development a tool called [ngrok](https://ngrok.com/download) is required. Ngrok provides a secure incoming tunnel that is required to allow incoming requests used for bots and messaging extensions

![ngrok](_images/ngrok.png)

Install Generators:

```
npm i -g yo gulp-cli typescript
npm i -g generator-teams@2.17.1
npm i -g generator-teams
```

> Note: `generator-teams@2.17.1` creates a class based structure that corresponds to the lab guides, the current generator (V3.x) creates a React Hooks based structure. Read [more](https://developer.microsoft.com/en-us/office/blogs/announcing-microsoft-teams-app-generator-yo-teams-version-3/)

### Enable Upload of custom apps in tenant

Go to teams admin:

![setup-pol](_images/setup-pol.jpg)

Enable upload of custom apps:

![enable-upload](_images/enable-upload.jpg)

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

### Ngrok changing hostname tweak

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
