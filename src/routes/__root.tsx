import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { useEffect, type ReactNode } from "react";

import appCss from "../styles.css?url";
import { reportLovableError } from "../lib/lovable-error-reporting";
import { CookieBanner } from "../components/CookieBanner";

function NotFoundComponent() {
  return (
    <div
      className="flex min-h-screen items-center justify-center px-4"
      style={{ backgroundColor: "#0B0B0D" }}
    >
      <div className="max-w-md text-center">
        <h1 style={{ color: "#E5D2A0", fontSize: "72px" }}>404</h1>
        <h2 style={{ color: "#E5D2A0", fontSize: "20px", marginTop: "1rem" }}>Page not found</h2>
        <p style={{ color: "#D1D5DB", marginTop: "0.5rem", fontSize: "14px" }}>
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            style={{
              backgroundColor: "#C8A45D",
              color: "#0B0B0D",
              padding: "12px 24px",
              borderRadius: "8px",
              fontSize: "14px",
              fontWeight: 500,
            }}
          >
            Go home
          </Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);

  return (
    <div
      className="flex min-h-screen items-center justify-center px-4"
      style={{ backgroundColor: "#0B0B0D" }}
    >
      <div className="max-w-md text-center">
        <h1 style={{ color: "#E5D2A0", fontSize: "20px" }}>This page didn't load</h1>
        <p style={{ color: "#D1D5DB", marginTop: "0.5rem", fontSize: "14px" }}>
          Something went wrong on our end. You can try refreshing or head back home.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            style={{
              backgroundColor: "#C8A45D",
              color: "#0B0B0D",
              padding: "10px 20px",
              borderRadius: "8px",
              fontSize: "14px",
              fontWeight: 500,
            }}
          >
            Try again
          </button>
          <a
            href="/"
            style={{
              border: "1px solid #C8A45D",
              color: "#C8A45D",
              padding: "10px 20px",
              borderRadius: "8px",
              fontSize: "14px",
              fontWeight: 500,
            }}
          >
            Go home
          </a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Blackwood Keep | Creative Design & Digital Marketing Solutions" },
      {
        name: "description",
        content:
          "Blackwood Keep engineers high-converting marketing funnels for trades, facilities management, and B2B/B2C enterprises across the Wirral, Liverpool, Chester, Cheshire West, Cheshire East, and North Wales.",
      },
      { property: "og:site_name", content: "Blackwood Keep" },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Inter:wght@400;500&family=Playfair+Display:wght@500&display=swap",
      },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          name: "Blackwood Keep Ltd",
          email: "hello@blackwoodkeep.co.uk",
          slogan: "Creative Design & Digital Marketing Solutions",
        }),
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();
  return (
    <QueryClientProvider client={queryClient}>
      <Outlet />
      <CookieBanner />
    </QueryClientProvider>
  );
}
