# Optimizing Graph

- GraphConsole
- Batching

## Batching

Execute in Graph Explorer

```
POST https://graph.microsoft.com/v1.0/$batch
Accept: application/json
Content-Type: application/json
```

Body:

```json
{
  "requests": [
    {
      "url": "/me?$select=displayName,jobTitle,userPrincipalName",
      "method": "GET",
      "id": "1"
    },
    {
      "url": "/me/messages?$filter=importance eq 'high'&$select=from,subject,receivedDateTime,bodyPreview",
      "method": "GET",
      "id": "2"
    },
    {
      "url": "/me/events",
      "method": "GET",
      "id": "3"
    }
  ]
}
```

[Combine multiple requests in one HTTP call using JSON batching](https://docs.microsoft.com/en-us/graph/json-batching)

## Change Notifications

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

[Set up notifications for changes in user data](https://docs.microsoft.com/en-us/graph/webhooks)
