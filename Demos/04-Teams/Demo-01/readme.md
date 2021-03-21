# Getting Started

Installation:

```
npm i -g yo gulp-cli typescript
npm i -g generator-teams@2.17.1
npm i -g generator-teams
```

> Note: `generator-teams@2.17.1` creates a class based structure that corresponds to the lab guides

Scaffolding:

```
yo teams
```

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
