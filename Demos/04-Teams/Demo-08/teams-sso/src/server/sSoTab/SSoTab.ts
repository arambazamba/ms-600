import { PreventIframe } from "express-msteams-host";

/**
 * Used as place holder for the decorators
 */
@PreventIframe("/sSoTab/index.html")
@PreventIframe("/sSoTab/config.html")
@PreventIframe("/sSoTab/remove.html")
export class SSoTab {
}
