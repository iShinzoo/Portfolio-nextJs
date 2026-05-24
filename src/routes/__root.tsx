import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";

import appCss from "../styles.css?url";
import { BottomDock } from "@/components/site/BottomDock";
import { Footer } from "@/components/site/Footer";
import { BootScreen } from "@/components/site/BootScreen";
import { Analytics } from '@vercel/analytics/react';

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center px-4 layer-content">
      <div className="max-w-md text-center">
        <h1
          className="text-[120px] leading-none paint-chip"
          style={{ fontFamily: "var(--font-display)", color: "var(--clr-gold)" }}
        >
          404
        </h1>
        <p
          className="mt-3 text-sm"
          style={{ color: "var(--clr-muted)", fontFamily: "var(--font-mono)" }}
        >
          Letter not found — returned to sender.
        </p>
        <a
          href="/"
          className="inline-block mt-6 px-6 py-3 text-sm font-semibold"
          style={{
            background: "var(--clr-vermillion)",
            color: "var(--clr-paper)",
            borderRadius: "4px",
          }}
        >
          Go home
        </a>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  return (
    <div className="flex min-h-screen items-center justify-center px-4 layer-content">
      <div className="max-w-md text-center">
        <h1
          className="text-3xl"
          style={{ fontFamily: "var(--font-display)", color: "var(--clr-gold)" }}
        >
          The press jammed.
        </h1>
        <p className="mt-2 text-sm" style={{ color: "var(--clr-muted)" }}>
          Something went sideways. Try again or head home.
        </p>
        <div className="mt-6 flex gap-3 justify-center">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="px-5 py-2 text-sm font-semibold"
            style={{
              background: "var(--clr-vermillion)",
              color: "var(--clr-paper)",
              borderRadius: "4px",
            }}
          >
            Try again
          </button>
          <a
            href="/"
            className="px-5 py-2 text-sm"
            style={{
              border: "1.5px dashed var(--clr-gold)",
              color: "var(--clr-gold)",
              borderRadius: "4px",
            }}
          >
            Home
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
      { title: "Krishna Thakur — UI/UX Designer · Indian Retro Portfolio" },
      {
        name: "description",
        content:
          "Portfolio of Krishna Thakur — UI/UX Designer from Madhya Pradesh, India. Crafted with chai and pixels.",
      },
      { name: "author", content: "Krishna Thakur" },
      { property: "og:title", content: "Krishna Thakur — UI/UX Designer" },
      {
        property: "og:description",
        content: "Visual storyteller, product thinker, interface architect — handcrafted in India.",
      },
      { property: "og:type", content: "website" },
      { property: "og:image", content: "/port.ico" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:image", content: "/port.ico" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "icon", href: "/port.ico" },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Analytics />
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();
  return (
    <QueryClientProvider client={queryClient}>
      <BootScreen />
      <div className="layer-content min-h-screen flex flex-col">
        <main className="flex-1 pb-[120px] md:pb-[100px]">
          <Outlet />
        </main>
        <Footer />
      </div>
      <BottomDock />
    </QueryClientProvider>
  );
}
