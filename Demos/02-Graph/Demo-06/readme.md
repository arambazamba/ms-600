## Change Notifications

[Set up notifications for changes in user data](https://docs.microsoft.com/en-us/graph/webhooks)

Using the Microsoft Graph API, an app can subscribe to changes on the following resources:

- Cloud printing printer
- Cloud printing printTaskDefinition
- Content within the hierarchy of any folder driveItem on a user's personal OneDrive
- Content within the hierarchy of the root folder driveItem on OneDrive for Business
- Group
- Microsoft 365 group conversation
- Outlook event
- Outlook message
- Outlook personal contact
- Security alert
- SharePoint list
- Teams callRecord
- Teams chatMessage
- Teams presence (preview)
- TodoTask (preview)
- User

```json
POST https://graph.microsoft.com/v1.0/subscriptions
Content-Type: application/json
{
  "changeType": "created,updated",
  "notificationUrl": "https://webhook.azurewebsites.net/notificationClient",
  "resource": "/me/mailfolders('inbox')/messages",
  "expirationDateTime": "2016-03-20T11:00:00.0000000Z",
  "clientState": "SecretClientState"
}
```

App Registration:

![change-app.jpg](_images/change-app.jpg)

Update Config in `constants.js`:

![config.jpg](_images/config.jpg)

Start Ngrok

```
ngrok http 3000 -host-header=rewrite
```

Note: Sample taken from [here](https://github.com/microsoftgraph/nodejs-webhooks-rest-sample)
