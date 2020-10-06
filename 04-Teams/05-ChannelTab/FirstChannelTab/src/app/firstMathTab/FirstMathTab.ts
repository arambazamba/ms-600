import { PreventIframe } from "express-msteams-host";

/**
 * Used as place holder for the decorators
 */
@PreventIframe("/firstMathTab/index.html")
@PreventIframe("/firstMathTab/config.html")
@PreventIframe("/firstMathTab/remove.html")
export class FirstMathTab {
}
