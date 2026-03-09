import { Nav } from "./Nav.tsx"

type LayoutProps = {
    title?: string,
    email?:string,
    userId?:string,
    displayName?:string,
    children?: unknown
}
export function Layout({ title = "Tuna Can Comedy", email, userId, displayName, children }: LayoutProps) {
  
  return (
    <html lang="en">
      <head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>{title}</title>
          <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link href="https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Instrument+Serif:ital@0;1&family=Space+Mono:wght@400;700&display=swap" rel="stylesheet"></link>
        <link rel="stylesheet" href="/static/styles/globals.css" />
        <link rel="icon" href="/static/images/favicon.ico" />
      </head>
      <body>
        <div class="cursor" id="cursor"></div>
        <div class="cursor-ring" id="cursorRing"></div>
        <nav>
            <a href="/" class="nav-logo">Tuna Can Comedy</a>
            <ul class="nav-links">
                <li><a href="#shows">Shows</a></li>
                <li><a href="/about.html">About</a></li>
                <li><a href="#performers">Performers</a></li>
                <li><a href="#tickets">Tickets</a></li>
            </ul>
        </nav>
        <main>{children}</main>
      </body>
    </html>

  )
}
