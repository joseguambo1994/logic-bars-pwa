import { LinksFunction } from "@remix-run/cloudflare";
import {
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";
import stylesheet from "~/tailwind.css?url";
import { BottomNavbar } from "./BottomNavigationBar";
import TopNavigationBar from "./TopNavigationBar";

export let links: LinksFunction = () => {
  return [{ rel: "manifest", href: "/manifest.json" },
  { rel: "stylesheet", href: stylesheet }
  ];
};

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        <div className="pt-16 pb-16">
          {children}
        </div>
        <ScrollRestoration />
        <Scripts />
        <TopNavigationBar />
        <BottomNavbar />
      </body>
    </html>
  );
}

export default function App() {
  return <Outlet />;
}
