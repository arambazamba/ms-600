import { BotDeclaration, MessageExtensionDeclaration } from "express-msteams-host";
import * as debug from "debug";
import { DialogSet, DialogState } from "botbuilder-dialogs";
import YoutubeUnfurlingMessageExtension from "../youtubeUnfurlingMessageExtension/YoutubeUnfurlingMessageExtension";
import { StatePropertyAccessor, CardFactory, TurnContext, MemoryStorage, ConversationState, ActivityTypes, TeamsActivityHandler } from "botbuilder";
// Initialize debug logging module
const log = debug("msteams");

/**
 * Implementation for YoutubeUnfurling Bot
 */
@BotDeclaration(
    "/api/messages",
    new MemoryStorage(),
    // eslint-disable-next-line no-undef
    process.env.MICROSOFT_APP_ID,
    // eslint-disable-next-line no-undef
    process.env.MICROSOFT_APP_PASSWORD)

export class YoutubeUnfurlingBot extends TeamsActivityHandler {
    private readonly conversationState: ConversationState;
    /** Local property for YoutubeUnfurlingMessageExtension */
    @MessageExtensionDeclaration("youtubeUnfurlingMessageExtension")
    private _youtubeUnfurlingMessageExtension: YoutubeUnfurlingMessageExtension;

    private readonly dialogs: DialogSet;
    private dialogState: StatePropertyAccessor<DialogState>;

    /**
     * The constructor
     * @param conversationState
     */
    public constructor(conversationState: ConversationState) {
        super();
        // Message extension YoutubeUnfurlingMessageExtension
        this._youtubeUnfurlingMessageExtension = new YoutubeUnfurlingMessageExtension();

        this.conversationState = conversationState;
        this.dialogState = conversationState.createProperty("dialogState");
        this.dialogs = new DialogSet(this.dialogState);

    }

}
