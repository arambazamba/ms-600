# Sharepoint Framework - SPFx

[Overview of the SharePoint Framework](https://docs.microsoft.com/en-us/sharepoint/dev/spfx/sharepoint-framework-overview)

[SharePoint Framework Node Compatibility](https://docs.microsoft.com/en-us/sharepoint/dev/spfx/compatibility)

[SharePoint Framework version compatibility matrix](https://docs.microsoft.com/en-us/sharepoint/dev/spfx/compatibility)

[PnP SPFx Yeoman generator](https://pnp.github.io/generator-spfx/)

[CLI for Microsoft 365](https://pnp.github.io/cli-microsoft365/)

## Environment Setup

[Setup Environment](https://docs.microsoft.com/en-us/sharepoint/dev/spfx/set-up-your-development-environment)

Machine Setup for SPFx Dev:

```
choco install nodejs-lts --version=14.18.1 -y
npm install -g yo gulp
npm install -g @microsoft/generator-sharepoint
npm install -g @pnp/generator-spfx
```

>Note: As an alternative to installing a specific Node version you can use [Node Version Manager (nvm) for Windows](https://github.com/coreybutler/nvm-windows). Remove existing Node Installations before installing nvm.

## Getting Started

Workbench URL

```
https://SITEURL/_layouts/workbench.aspx
```

Install Dev Certificate

```
gulp trust-dev-cert
```

## Recommended Extensions & AddOns

[SPFx Snippets](https://marketplace.visualstudio.com/items?itemName=eliostruyf.spfx-snippets)

[SPFx TaskRunner](https://marketplace.visualstudio.com/items?itemName=eliostruyf.vscode-spfx-task-runner)

[SharePoint Typed Items](https://marketplace.visualstudio.com/items?itemName=s-kainet.sharepoint-typed-item)
