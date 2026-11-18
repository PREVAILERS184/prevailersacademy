# Prevailers Academia Star Ltd

Website for Prevailers Academia Star Ltd, an online tutoring academy. Built with Next.js 16 and React 19.

## Run locally

```bash
npm ci
npm run dev
```

Open [http://localhost:3000](http://localhost:3000). Run `npm run build` to check the production build.

## Pages

- `/` — home
- `/programs` — subjects and learning support
- `/online-learning` — the online tutoring experience
- `/gallery` — photos from live classes
- `/about` — academy and team
- `/enroll` — enrollment enquiry

The enrollment form prepares an email in the visitor's email app; it does not submit to a server.

## Add class photos

1. Place the image in `public/images/`.
2. Add its path, alt text, title, and caption to `src/app/gallery/photos.ts`.

The gallery page shows every photo in that list, and the home page previews the first four.
