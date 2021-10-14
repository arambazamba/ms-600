import { PreventIframe } from "express-msteams-host";

/**
 * Used as place holder for the decorators
 */
@PreventIframe("/graphTab/index.html")
@PreventIframe("/graphTab/config.html")
@PreventIframe("/graphTab/remove.html")
export class GraphTab {
}
