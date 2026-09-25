import { NextRequest, NextResponse } from "next/server";

/**
 * Three properties on one codebase:
 *   endogenator.com            -> /root-site
 *   generative.endogenator.com -> /generative-site
 *   portfolio.endogenator.com  -> /portfolio-site
 * Every other hostname, including localhost, defaults to /root-site.
 */

const HOST_PREFIXES: Record<string, string> = {
  "generative.endogenator.com": "/generative-site",
  "portfolio.endogenator.com": "/portfolio-site",
};
const DEFAULT_PREFIX = "/root-site";
const KNOWN_PREFIXES = ["/root-site", "/generative-site", "/portfolio-site"];

export function middleware(request: NextRequest) {
  const hostname = (request.headers.get("host") || "")
    .split(":")[0]
    .toLowerCase();

  const url = request.nextUrl.clone();

  // If the request already targets one of the real site folders directly,
  // leave it alone. Without this check, a direct request to one site's
  // folder on another site's host would get rewritten a second time
  // (e.g. /root-site/portfolio-site), which doesn't exist. This also means
  // every site folder can be visited directly by path for local testing.
  // Any new site prefix must be added to KNOWN_PREFIXES as well as
  // HOST_PREFIXES.
  const alreadyRouted = KNOWN_PREFIXES.some(
    (prefix) => url.pathname === prefix || url.pathname.startsWith(`${prefix}/`)
  );
  if (alreadyRouted) {
    return NextResponse.next();
  }

  const prefix = HOST_PREFIXES[hostname] ?? DEFAULT_PREFIX;

  url.pathname = `${prefix}${url.pathname === "/" ? "" : url.pathname}`;
  return NextResponse.rewrite(url);
}

export const config = {
  matcher: [
    "/((?!api|_next/static|_next/image|favicon.ico|robots.txt|sitemap.xml|.*\\..*).*)",
  ],
};
