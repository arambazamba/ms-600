# Webhooks

[Webhooks & Connectors](https://docs.microsoft.com/en-us/microsoftteams/platform/webhooks-and-connectors/what-are-webhooks-and-connectors)

[Adaptive Cards](https://docs.microsoft.com/en-us/adaptive-cards/)

[Adaptive Cards Designer](https://adaptivecards.io/designer/)

## OutgoingWebhook

- Listens for requests at `/api/webhook` using `requestHandler()` defined in WEBHOOKNAME.ts
- Uses an adavtive card `planetDisplayCard.json`

Create a Webhook & Invoke it:

> Note: Copy the Webhook Url. Example: `https://outlook.office.com/webhook/2b200327-6453-433a-8231-751c940efd99@d92b247e-90e0-4469-a129-6a32866c0d0a/IncomingWebhook/f08693ef36eb48419aed5a44d51034f3/25853297-1418-4fc4-96ec-22f8bc83axxx`

```
Invoke-RestMethod -Method post -ContentType 'Application/Json' -Body '{"text":"Hello World!"}' -Uri <YOUR WEBHOOK URL>
```
