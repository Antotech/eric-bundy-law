# Eric Bundy Law — Premium Website

A responsive attorney website built with:

- Next.js
- React
- TypeScript
- Tailwind CSS
- Framer Motion
- Lucide icons

## Local setup

1. Install Node.js.
2. Open a terminal in this folder.
3. Run:

```bash
npm install
npm run dev
```

4. Open:

```text
http://localhost:3000
```

## Deploying to Vercel

1. Upload this folder to a GitHub repository.
2. Sign in to Vercel using GitHub.
3. Choose **Add New Project**.
4. Import the repository.
5. Accept the default Next.js settings.
6. Click **Deploy**.

## Required edits before publishing

### WhatsApp number
Open:

```text
components/WhatsAppButton.tsx
```

Replace:

```ts
const phone = "12675550198";
```

Use the full number with country code and no plus sign, spaces, or dashes.

### Email and location
Search the project for:

```text
eric@ericbundylaw.com
Philadelphia, Pennsylvania
```

Replace them with the final details.

### Professional photograph
The About section currently uses a branded placeholder because no approved professional headshot was supplied.

### Upwork reviews
The uploaded review image is saved at:

```text
public/upwork-reviews.png
```

Confirm that every review and image shown may be used publicly and that the screenshot does not expose unwanted private information.

### Contact form
The included form opens the visitor's email program. Before launch, connect it to a dedicated form service or server endpoint so submissions work reliably on every device.

### Legal review
Before launch, review attorney-advertising language, privacy disclosures, testimonial rules, jurisdictional disclaimers, accessibility, and professional-responsibility requirements applicable to the website.
