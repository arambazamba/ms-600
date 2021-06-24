## OutgoingWebhook

-   Listens for requests at `/api/webhook` using `requestHandler()` defined in WEBHOOKNAME.ts
-   Uses an adavtive card `planetDisplayCard.json`
-   Processes the request using `processAuthenticatedRequest`
-   Serve in two seperate terminals using:

    ```
    gulp serve
    ```

    ```
    ngrok http 3007
    ```

-   Register Outgoing Webhook in Teams

    ![ow-add-tab](_images/ow-add-tab.jpg)

    ![ow-create-wh](_images/ow-create-wh.jpg)

    ![ow-config-wh](_images/ow-config-wh.jpg)

-   Copy token. Stop project and add it to `.env`. Restart proj using `gulp serve`

    ![ow-copy-token](_images/ow-copy-token.jpg)

-   Call Webhook using @WEBHOOKNAME Venus
