# Public images for portfolio

Place any images you want served publicly by the site in this folder.

Guidelines:
- Use lowercase filenames with dashes or underscores (e.g. `oasis-home.png`).
- Keep filenames short and descriptive.
- Prefer optimized web formats (WebP, compressed PNG, or JPEG).
- Reference images from your React app with an absolute path, e.g. `/images/oasis-home.png`.

Notes:
- Files placed here will be served from the site root at `/images/<filename>` when running the dev server or building for production.
- If you'd rather import images from `src/` (so bundler hashes them), move them into `src/assets/images` and import them directly from components.
