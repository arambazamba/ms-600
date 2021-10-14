# Getting Started

[Get started with Microsoft Teams app development](https://docs.microsoft.com/en-us/microsoftteams/platform/build-your-first-app/build-first-app-overview#get-prerequisites)

[Build apps with the Teams Toolkit and Visual Studio Code](https://docs.microsoft.com/en-us/microsoftteams/platform/toolkit/visual-studio-code-overview)

## Basic Teams Workflow

Three scaffolding options:

-   `generator-teams@2.17.1` creates a class based structure that corresponds to the lab guides.
-   The current generator (V3.x) creates a React Hooks based structure. Read [more](https://developer.microsoft.com/en-us/office/blogs/announcing-microsoft-teams-app-generator-yo-teams-version-3/)
-   Teams toolkit also creates a different structure

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

## Ngrok

To avoid having the ngrok name changed all the time use from within a Teams project in two seperate terminals, or even better run gulp start-ngrok in a seperate standalone console window.

Replace `gulp ngrok-serve` with:

```
gulp start-ngrok (from within a Teams proj)
```

```
gulp serve --debug
```

![ngrok](_images/ngrok.jpg)

## Webpack

Do avoid webpack size warning during you getting started process you can disable performance hints in `webpack.config.js` of your project by adding:

```json
performance: {
    hints: false
}
```

![webpack-performance.png](_images/webpack-performance.png)

## ESlint

To disable ESlint add the following line to your settings of VS Code:

```
"eslint.enable": false
```

## Labs

[01-Tabs, Exercise 1: 01-Exercise-Create a custom Microsoft Teams personal tab](../../../Labs/4-Teams/01-Tabs/01-Exercise-Create%20a%20custom%20Microsoft%20Teams%20personal%20tab.md)
