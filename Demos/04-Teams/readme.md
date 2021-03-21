# Introduction to Microsoft Teams Development

## Demos

- FirstTeamsApp
- Personal- & Configurable Tabs
- TaskModules
- Webhooks
- Msg Extensions
- Bots

## Readings

[Teams Developer Reference](https://docs.microsoft.com/en-us/microsoftteams/platform/overview)

[Teams Client SDK](https://docs.microsoft.com/en-us/microsoftteams/platform/tabs/how-to/using-teams-client-sdk)

[Microsoft Teams JavaScript client SDK](https://docs.microsoft.com/en-us/javascript/api/overview/msteams-client?view=msteams-client-js-latest)

[Single Sign-On for Teams](https://docs.microsoft.com/en-us/microsoftteams/platform/tabs/how-to/authentication/auth-aad-sso)

## Tools & Extensions

[Microsoft Teams Toolkit VS Code Extension](https://marketplace.visualstudio.com/items?itemName=TeamsDevApp.ms-teams-vscode-extension)

### Ngrok

[ngrok](https://ngrok.com)

> Note: To avoid having the ngrok name changed all the time use from within a Teams project in two seperate terminals, or even better run gulp start-ngrok in a seperate standalone console window.

Replace `gulp ngrok-serve` with:

```
gulp start-ngrok (from within a Teams proj)
```

```
gulp serve --debug
```

![ngrok](_images/ngrok.jpg)
