import { NextRequest, NextResponse } from "next/server";

/**
 * Two properties now: endogenator.com (root-site) and
 * generative.endogenator.com (generative-site). doctorate.endogenator.com
 * and Clerk auth have been fully removed, not just unlinked.
 */

const GENERATIVE_HOSTS = new Set(["generative.endogenator.com"]);
const KNOWN_PREFIXES = ["/root-site", "/generative-site"];

export function middleware(request: NextRequest) {
  const hostname = (request.headers.get("host") || "")
    .split(":")[0]
    .toLowerCase();

  const url = request.nextUrl.clone();

  // If the request already targets one of the real site folders directly,
  // leave it alone. Without this check, a direct request to
  // /generative-site on a non-generative host would get rewritten a
  // second time into /root-site/generative-site, which doesn't exist.
  // This also means either folder can be visited directly by path for
  // local testing, regardless of hostname.
  const alreadyRouted = KNOWN_PREFIXES.some(
    (prefix) => url.pathname === prefix || url.pathname.startsWith(`${prefix}/`)
  );
  if (alreadyRouted) {
    return NextResponse.next();
  }

  const prefix = GENERATIVE_HOSTS.has(hostname)
    ? "/generative-site"
    : "/root-site";

  url.pathname = `${prefix}${url.pathname === "/" ? "" : url.pathname}`;
  return NextResponse.rewrite(url);
}

export const config = {
  matcher: [
    "/((?!api|_next/static|_next/image|favicon.ico|robots.txt|sitemap.xml|.*\\..*).*)",
  ],
};