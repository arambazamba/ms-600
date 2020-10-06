import { PreventIframe } from "express-msteams-host";

/**
 * Used as place holder for the decorators
 */
@PreventIframe("/firstDemoTab/index.html")
@PreventIframe("/firstDemoTab/personal.html")
export class FirstDemoTab {}
