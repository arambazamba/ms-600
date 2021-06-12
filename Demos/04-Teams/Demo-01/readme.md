# Environment Setup

[Get started with Microsoft Teams app development](https://docs.microsoft.com/en-us/microsoftteams/platform/build-your-first-app/build-first-app-overview#get-prerequisites)

## Install Requirements

For Teams Development a tool called [ngrok](https://ngrok.com/download) is required. Ngrok provides a secure incoming tunnel that is required to allow incoming requests used for bots and messaging extensions

![ngrok](_images/ngrok.png)

Install Generators:

```
npm i -g yo gulp-cli typescript
npm i -g generator-teams@2.17.1
or
npm i -g generator-teams
```

> Note: `generator-teams@2.17.1` creates a class based structure that corresponds to the lab guides, the current generator (V3.x) creates a React Hooks based structure. Read [more](https://developer.microsoft.com/en-us/office/blogs/announcing-microsoft-teams-app-generator-yo-teams-version-3/)

### Enable Upload of custom apps in tenant

Go to Teams [Admin Center - https://admin.teams.microsoft.com/](https://admin.teams.microsoft.com/):

Go to policies:

![setup-pol](_images/setup-pol.jpg)

Enable upload of custom apps:

![enable-upload](_images/enable-upload.jpg)
