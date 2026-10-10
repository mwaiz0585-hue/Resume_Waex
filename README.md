# Portfolio update: UTP and Vantris Energy logos

The homepage now includes two white logo badges beneath your profile photo:
- Education: UTP / Information Technology
- Current internship: Vantris Energy Berhad / Until 9 April 2027

The supplied logo images are included unchanged. The badges sit side by side on desktop and stack on phones.

## Apply this update to your existing local website

1. Extract this ZIP to a temporary folder.
2. Copy index.html, style.css, script.js, robots.txt, sitemap.xml, and favicon.svg into your existing CV-RESUME website folder. Choose Replace for the existing files.
3. Copy the images/brands folder into that website's existing images folder. Merge the folders; keep your original profile photo, project screenshots, videos, and other media.
4. Open index.html from your existing CV-RESUME folder.
5. Refresh with Ctrl + F5.

This package includes the stylesheet and the two new logos. It is an update for your existing website; your existing profile photo and gallery media are not included.

## Folder layout after merging

| Location | Contents |
| --- | --- |
| Website root | index.html, style.css, script.js, robots.txt, sitemap.xml, favicon.svg |
| images/brands/ | utp-logo.jpg, vantris-energy-logo.png |
| Existing images/ and its other subfolders | Your original profile photo, project screenshots, activity photos, and videos |

## Publish to the existing website

Open https://github.com/mwaiz0585-hue/Resume_Waex and upload the updated website files to the repository root, preserving the images/brands subfolder for the two logos. Commit them together to main.

If Render auto-deploy is enabled, wait for that deployment. Otherwise deploy the latest commit from your existing Render service. Your website remains https://resume-waex.onrender.com/.

## SEO changes retained

- Current internship biography through 9 April 2027.
- Removal of internship-seeking wording.
- Page title, meta description, canonical URL, and sharing metadata.
- Person, ProfilePage, and WebSite structured data.
- Sitemap, robots.txt, and favicon.
- Search-readable HTML for all six existing project cards.
- Working navigation targets and unique section IDs.

The HTML, logo paths, CSS structure, and JavaScript syntax were checked. The website has not been published by this update package.

## Google Search Console

Open https://search.google.com/search-console/ and add https://resume-waex.onrender.com/ as a URL prefix property. Choose HTML tag verification and use the exact google-site-verification tag provided for your own account. After publishing that tag, verify the property, submit sitemap.xml, and inspect/request indexing for the homepage.

Google controls indexing, rankings, snippets, and AI Overview inclusion. Logo placement does not guarantee any search result feature.

