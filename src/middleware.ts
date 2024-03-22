import { NextRequest } from "next/server";
import { i18nRouter } from "next-i18n-router";
import i18nConfig from "../i18n.config";

export const middleware = (request: NextRequest) =>
	i18nRouter(request, i18nConfig);

export const config = {
	matcher: "/((?!api|static|.*\\..*|_next).*)",
};
