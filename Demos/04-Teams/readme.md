# Introduction to Microsoft Teams Development

[Teams Admin Center - https://admin.teams.microsoft.com/](https://admin.teams.microsoft.com/)

[Microsoft 365 Teams Developer Portal - https://dev.teams.microsoft.com/](https://dev.teams.microsoft.com/)

## Demos

-   Environment Setup
-   Explore Structure of Teams App & First Teams App
-   Personal- & Configurable Tabs
-   TaskModules & Adaptive Cards
-   Outgoing- and Incoming-Webhooks
-   Bots
-   Message Extensions Extensions
-   Link unfurling

## Readings

[Teams Developer Reference](https://docs.microsoft.com/en-us/microsoftteams/platform/overview)

[Teams Client SDK](https://docs.microsoft.com/en-us/microsoftteams/platform/tabs/how-to/using-teams-client-sdk)

[Teams Samples](https://pnp.github.io/teams-dev-samples/)

[Microsoft Teams JavaScript client SDK](https://docs.microsoft.com/en-us/javascript/api/overview/msteams-client?view=msteams-client-js-latest)

[fluentui/react-northstar](https://fluentsite.z22.web.core.windows.net/)

[Single Sign-On for Teams](https://docs.microsoft.com/en-us/microsoftteams/platform/tabs/how-to/authentication/auth-aad-sso)

## Tools & Extensions

[Microsoft Teams Toolkit VS Code Extension](https://marketplace.visualstudio.com/items?itemName=TeamsDevApp.ms-teams-vscode-extension)

[Microsoft Teams Manifest Editor Online](https://dev.teams.microsoft.com/appconfiguration.html)

[Adaptive Card Studio](https://marketplace.visualstudio.com/items?itemName=madewithcardsio.adaptivecardsstudiobeta)

## Teams - Yeoman Commands

Scaffolding:

```
yo teams
```

Interpolates env to manifest (updates ngrok hostname) & create `./package/*.zip`:

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
