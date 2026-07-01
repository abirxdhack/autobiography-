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

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-bg px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-fg">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-fg">Page not found</h2>
        <p className="mt-2 text-sm text-fg-muted">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="mt-6">
          <Link to="/" className="btn-primary">Go home</Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  const router = useRouter();
  useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);
  return (
    <div className="flex min-h-screen items-center justify-center bg-bg px-4">
      <div className="max-w-md text-center">
        <h1 className="text-xl font-semibold text-fg">This page didn't load</h1>
        <p className="mt-2 text-sm text-fg-muted">Something went wrong. Try again or head home.</p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button onClick={() => { router.invalidate(); reset(); }} className="btn-primary">Try again</button>
          <a href="/" className="btn-ghost">Go home</a>
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
      { title: "Abir Arafat Chawdhury — My Autobiography" },
      { name: "description", content: "Cinematic autobiography portfolio of Abir Arafat Chawdhury — dreamer, learner, believer and self-taught student developer." },
      { name: "author", content: "Abir Arafat Chawdhury" },
      { property: "og:title", content: "Abir Arafat Chawdhury — My Autobiography" },
      { property: "og:description", content: "Cinematic autobiography portfolio of Abir Arafat Chawdhury — dreamer, learner, believer and self-taught student developer." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Abir Arafat Chawdhury — My Autobiography" },
      { name: "twitter:description", content: "Cinematic autobiography portfolio of Abir Arafat Chawdhury — dreamer, learner, believer and self-taught student developer." },
      { property: "og:image", content: "https://storage.googleapis.com/gpt-engineer-file-uploads/Cz8d7b2khvUSbdlpM1vr112V1fp2/social-images/social-1782577502442-1000306600.webp" },
      { name: "twitter:image", content: "https://storage.googleapis.com/gpt-engineer-file-uploads/Cz8d7b2khvUSbdlpM1vr112V1fp2/social-images/social-1782577502442-1000306600.webp" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&family=Dancing+Script:wght@600;700&display=swap" },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  const themeInit = `(function(){try{var s=localStorage.getItem('theme')||'system';var m=window.matchMedia('(prefers-color-scheme: light)').matches;var l=s==='light'||(s==='system'&&m);var r=document.documentElement;r.classList.toggle('light',l);r.classList.toggle('dark',!l);r.style.colorScheme=l?'light':'dark';}catch(e){}})();`;
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <head>
        <HeadContent />
        <script dangerouslySetInnerHTML={{ __html: themeInit }} />
      </head>
      <body suppressHydrationWarning>{children}<Scripts /></body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();
  return (
    <QueryClientProvider client={queryClient}>
      <Outlet />
    </QueryClientProvider>
  );
}
