# Sitemap Generator

A Node.js script that automatically generates an XML sitemap for your portfolio website.

## Overview

This script creates a sitemap.xml file containing all the routes of your portfolio website, making it easier for search engines to crawl and index your pages.

## Features

- ✨ Generates XML sitemap following the sitemaps.org protocol
- 🔧 Configurable base URL and routes
- 📅 Automatic lastmod timestamp
- 🎯 Custom priority levels for different pages
- 🔄 Configurable change frequency
- 🛡️ URL normalization to prevent duplicate slashes

## Prerequisites

```bash
npm install xmlbuilder2
```

## Configuration

### Base URL
```javascript
const baseUrl = "https://thepremkumar.netlify.app";
```

### Routes
The script includes the following routes by default:
- `/` - Homepage (priority: 1.0)
- `/about` - About page (priority: 0.7)
- `/skills` - Skills page (priority: 0.7)
- `/experience` - Experience page (priority: 0.7)
- `/certificates` - Certificates page (priority: 0.7)
- `/projects` - Projects page (priority: 0.7)
- `/contact` - Contact page (priority: 0.7)

## Usage

1. **Install dependencies:**
   ```bash
   npm install xmlbuilder2
   ```

2. **Run the script:**
   ```bash
   node generate-sitemap.js
   ```

3. **Output:**
   The sitemap will be generated at `../public/sitemap.xml`

## Sitemap Structure

Each URL entry includes:
- `<loc>` - The page URL
- `<lastmod>` - Last modification date (2025-11-30)
- `<changefreq>` - How frequently the page changes (monthly)
- `<priority>` - Page importance (0.0 to 1.0)

## Example Output

```xml
<?xml version="1.0"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://thepremkumar.netlify.app/</loc>
    <lastmod>2025-11-30</lastmod>
    <changefreq>monthly</changefreq>
    <priority>1.0</priority>
  </url>
  <url>
    <loc>https://thepremkumar.netlify.app/about</loc>
    <lastmod>2025-11-30</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.7</priority>
  </url>
  <!-- More URLs... -->
</urlset>
```

## Customization

### Adding New Routes
Add new routes to the `routes` array:
```javascript
const routes = [
    "/",
    "/about",
    "/blog",  // New route
    // ... other routes
];
```

### Changing Update Frequency
Modify the `changefreq` value (valid values: always, hourly, daily, weekly, monthly, yearly, never):
```javascript
url.ele("changefreq").txt("weekly");
```

### Updating Last Modified Date
Change the `lastmod` timestamp:
```javascript
url.ele("lastmod").txt(new Date().toISOString().split('T')[0]);
```

### Custom Priority Logic
Adjust priorities based on your needs:
```javascript
const priority = route === "/" ? "1.0" 
    : route === "/projects" ? "0.9" 
    : "0.7";
```

## File Structure

```
project/
├── scripts/
│   └── generate-sitemap.js
└── public/
    └── sitemap.xml (generated)
```

## Integration with Build Process

Add to your `package.json`:
```json
{
  "scripts": {
    "build:sitemap": "node scripts/generate-sitemap.js",
    "build": "npm run build:sitemap && vite build"
  }
}
```

## SEO Best Practices

- 🏠 Homepage should have priority 1.0
- 📄 Important pages: 0.8-0.9
- 📝 Regular pages: 0.5-0.7
- 🔄 Update `lastmod` when content changes
- 📅 Set realistic `changefreq` values

## Troubleshooting

**Error: Cannot find module 'xmlbuilder2'**
```bash
npm install xmlbuilder2
```

**Error: ENOENT: no such file or directory**
- Check the output path in `fs.writeFileSync()`
- Ensure the `public` directory exists

## License

MIT

## Author

Premkumar - [thepremkumar.netlify.app](https://thepremkumar.netlify.app)

---

💡 **Tip:** Submit your sitemap to Google Search Console and Bing Webmaster Tools for better indexing!