import fs from "fs";
import { create } from "xmlbuilder2";

const baseUrl = "https://thepremkumar.netlify.app";

const routes = [
    "/",
    "/about",
    "/skills",
    "/experience",
    "/certificates",
    "/projects",
    "/contact",
];

function normalizeUrl(base, route) {
    const cleanBase = base.replace(/\/$/, "");
    const cleanRoute = route.startsWith("/") ? route : "/" + route;
    return (cleanBase + cleanRoute).replace(/([^:]\/)\/+/g, "$1");
}

const urlset = create({ version: "1.0" }).ele("urlset", {
    xmlns: "http://www.sitemaps.org/schemas/sitemap/0.9",
});

routes.forEach((route) => {
    const url = urlset.ele("url");

    url.ele("loc").txt(normalizeUrl(baseUrl, route));

    // Static lastmod
    url.ele("lastmod").txt("2025-11-30");

    // Change frequency
    url.ele("changefreq").txt("monthly");

    // Priority (homepage gets 1.0)
    const priority = route === "/" ? "1.0" : "0.7";
    url.ele("priority").txt(priority);
});

const xml = urlset.end({ prettyPrint: true });

// Adjust path based on your structure
fs.writeFileSync("../public/sitemap.xml", xml);

console.log("✅ Sitemap generated successfully!");
console.log(`📍 Generated ${routes.length} URLs`);
console.log(`🔗 Base URL: ${baseUrl}`);
