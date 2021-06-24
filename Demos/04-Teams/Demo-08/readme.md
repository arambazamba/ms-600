# Link unfurling

[Link unfurling](https://docs.microsoft.com/en-us/microsoftteams/platform/messaging-extensions/how-to/link-unfurling?tabs=javascript)

Demo uses v3 of teams yeoman generator

```
npm i -g generator-teams@3.1.0
```

Options for scaffolding:

![scaffolding](_images/scaffolding.png)

Check `manifest.json` after scaffolding:

```json
"composeExtensions": [
    {
      "botId": "{{MICROSOFT_APP_ID}}",
      "canUpdateConfiguration": false,
      "commands": [],
      "messageHandlers": [
        {
          "type": "link",
          "value": {
            "domains": [
              "*.youtube.com"
```
