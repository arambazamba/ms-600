# Single Sign-on

[Authenticate users in Microsoft Teams](https://docs.microsoft.com/en-us/microsoftteams/platform/concepts/authentication/authentication)

[Single sign-on (SSO) support for tabs](https://docs.microsoft.com/en-us/microsoftteams/platform/tabs/how-to/authentication/auth-aad-sso)

[Authentication flow for bots in Microsoft Teams](https://docs.microsoft.com/en-us/microsoftteams/platform/bots/how-to/authentication/auth-flow-bot)

## Teamwork Tab

- Show app registration `teamworks-tab`
  - Expose an API for the app
  - Add access_as_user scope
  - Add wellknown apps
    - Microsoft Teams mobile & desktop clients -> 1fec8e78-bce4-4aaf-ab1b-5451cc387264
    - Microsoft Teams web client -> 5e3ce6c0-2b1f-4285-8d4b-75ee78787346
- Create Teams app
- Associate the Azure AD app with the Microsoft Teams app
- Obtain the ID token from Microsoft Teams
- Obtain an access token for Microsoft Graph using the OAuth2 on behalf of flow

- Start App and note ngrok url
- Update ngrok Url in:
    - Visual Studio Code project /.env file
    - Azure AD Application > Authentication > Redirect URIs
    - Azure AD Application > Expose an API > Application ID URI

Add SSO Demo https://docs.microsoft.com/en-us/learn/modules/msteams-sso/