import { PreventIframe } from "express-msteams-host";

/**
 * Used as place holder for the decorators
 */
@PreventIframe("/ssoMailsTab/index.html")
@PreventIframe("/ssoMailsTab/config.html")
@PreventIframe("/ssoMailsTab/remove.html")
export class SsoMailsTab {
}
