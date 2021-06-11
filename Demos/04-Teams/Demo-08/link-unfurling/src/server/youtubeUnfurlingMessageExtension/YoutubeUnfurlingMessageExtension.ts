import * as debug from "debug";
import { PreventIframe } from "express-msteams-host";
import { TurnContext, CardFactory, MessagingExtensionQuery, MessagingExtensionResult, AppBasedLinkQuery } from "botbuilder";
import { IMessagingExtensionMiddlewareProcessor } from "botbuilder-teams-messagingextensions";

// Initialize debug logging module
const log = debug("msteams");

@PreventIframe("/youtubeUnfurlingMessageExtension/config.html")
export default class YoutubeUnfurlingMessageExtension implements IMessagingExtensionMiddlewareProcessor {
    public async onQueryLink(context: TurnContext, query: AppBasedLinkQuery): Promise<MessagingExtensionResult> {
        const card = CardFactory.adaptiveCard({
            type: "AdaptiveCard",
            body: [
                {
                    type: "TextBlock",
                    size: "Large",
                    text: query.url,
                },
                {
                    type: "TextBlock",
                    text: "Navigate to the selected web site",
                },
                {
                    type: "Image",
                    url: `https://${process.env.HOSTNAME}/assets/icon.png`,
                },
            ],
            actions: [
                {
                    type: "Action.OpenUrl",
                    title: "Navigate",
                    url: query.url,
                },
            ],
            $schema: "http://adaptivecards.io/schemas/adaptive-card.json",
            version: "1.2",
        });
        const preview = {
            contentType: "application/vnd.microsoft.card.thumbnail",
            content: {
                title: query.url,
                text: query.url,
                images: [
                    {
                        url: `https://${process.env.HOSTNAME}/assets/icon.png`,
                    },
                ],
            },
        };

        return Promise.resolve({
            type: "result",
            attachmentLayout: "list",
            attachments: [{ ...card, preview }],
        } as MessagingExtensionResult);
    }
}
