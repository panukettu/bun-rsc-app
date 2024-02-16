# Bun, Hono and React Server Components

## Information

- Use `pnpm install`
- Bare minimum is to export one `<Layout/>` from `src/pages/index.tsx`. Props and Content is optional.
- For style you need to have `src/styles/main.css`.
- Use env variables with `APP_PUBLIC_` prefix to get them in the output.

- Export your Hono API from `src/server/index.ts`. It is not required as the application is served separately.

- Best to just stick with tailwind for styles.

- All Server Component rules apply.
- No Server Context exists.
- Vendored Client Components probably need to be re-exported as `'use client'` for them to work.
- use `cache` from `react/server` if you need it.

- Server Actions are supported only with functions, no FormData support exists.
- Server Actions will stream new page content in by default, if you do not want this pass `action(...args, { stale: true})`
- Server Actions cannot be declared inside Server Components. You can declare them in the same file outside of the component.

- Use `Link` to navigate, it will perform a hard navigation if `href.startsWith('/')` - otherwise it will stream the navigation.
- If you want to skip the client side cache you can pass `revalidate={true}` into a streaming navigation.

## Getting Started

To get started with this template, simply paste this command into your terminal:

```bash
bunx --bun @pkxp/bun-rsc
```

## Development

To start the development server run:

```bash
bun dev
```

Open http://localhost:3000/ with your browser.

## Production

Run production build and server:

```bash
bun prod
```
