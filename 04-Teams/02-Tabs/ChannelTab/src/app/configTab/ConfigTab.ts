import { PreventIframe } from "express-msteams-host";

/**
 * Used as place holder for the decorators
 */
@PreventIframe("/configTab/index.html")
@PreventIframe("/configTab/config.html")
@PreventIframe("/configTab/remove.html")
export class ConfigTab {
}
