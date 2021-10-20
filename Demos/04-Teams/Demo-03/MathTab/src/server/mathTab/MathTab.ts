import { PreventIframe } from "express-msteams-host";

/**
 * Used as place holder for the decorators
 */
@PreventIframe("/mathTab/index.html")
@PreventIframe("/mathTab/config.html")
@PreventIframe("/mathTab/remove.html")
export class MathTab {
}
