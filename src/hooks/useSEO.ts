import { useEffect } from "react";

interface SEOProps {
  title: string;
  description: string;
  keywords?: string;
  canonicalUrl?: string;
  ogImage?: string;
  twitterImage?: string;
  ogType?: string;
  jsonLd?: Record<string, any> | Record<string, any>[];
}

export const useSEO = ({
  title,
  description,
  keywords,
  canonicalUrl,
  ogImage,
  twitterImage,
  ogType = "website",
  jsonLd,
}: SEOProps) => {
  useEffect(() => {
    // 1. Update page title
    document.title = title;

    // Helper function for meta tags
    const updateOrCreateMeta = (selector: string, attrName: string, attrVal: string, content: string) => {
      let element = document.querySelector(selector);
      if (!element) {
        element = document.createElement("meta");
        element.setAttribute(attrName, attrVal);
        document.head.appendChild(element);
      }
      element.setAttribute("content", content);
    };

    // 2. Meta description
    updateOrCreateMeta('meta[name="description"]', "name", "description", description);

    // 3. Meta keywords
    const defaultKeywords = "DevDhara, DevDhara Technologies, DevDhar, Dev Patel, ChemX Pumps, Chem-X Pumps, Chemx, Omax Industries, RestoPlus, InvoxaERP, SavioERP, MV Fluid, JAAG Alumni, Jaiswal App, Web Development Ahmedabad, App Development Gujarat, Custom Software India, SEO Services, IT Consulting";
    const fullKeywords = keywords ? `${keywords}, ${defaultKeywords}` : defaultKeywords;
    updateOrCreateMeta('meta[name="keywords"]', "name", "keywords", fullKeywords);

    // 4. Open Graph Meta Tags
    updateOrCreateMeta('meta[property="og:title"]', "property", "og:title", title);
    updateOrCreateMeta('meta[property="og:description"]', "property", "og:description", description);
    updateOrCreateMeta('meta[property="og:type"]', "property", "og:type", ogType);
    updateOrCreateMeta('meta[property="og:url"]', "property", "og:url", canonicalUrl || window.location.href);

    const imageToUse = ogImage || "https://res.cloudinary.com/dsddldquo/image/upload/v1779710012/fsm1uhfqtmeamioetwao.png";
    updateOrCreateMeta('meta[property="og:image"]', "property", "og:image", imageToUse);

    // 5. Twitter Meta Tags
    updateOrCreateMeta('meta[name="twitter:title"]', "name", "twitter:title", title);
    updateOrCreateMeta('meta[name="twitter:description"]', "name", "twitter:description", description);
    updateOrCreateMeta('meta[name="twitter:image"]', "name", "twitter:image", twitterImage || imageToUse);
    updateOrCreateMeta('meta[name="twitter:card"]', "name", "twitter:card", "summary_large_image");

    // 6. Update Canonical URL
    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.setAttribute("rel", "canonical");
      document.head.appendChild(canonical);
    }
    canonical.setAttribute("href", canonicalUrl || window.location.href);

    // 7. Dynamic JSON-LD Structured Data
    let jsonLdScript = document.getElementById("dynamic-seo-schema") as HTMLScriptElement | null;
    if (jsonLd) {
      if (!jsonLdScript) {
        jsonLdScript = document.createElement("script");
        jsonLdScript.id = "dynamic-seo-schema";
        jsonLdScript.type = "application/ld+json";
        document.head.appendChild(jsonLdScript);
      }
      jsonLdScript.textContent = JSON.stringify(jsonLd, null, 2);
    } else if (jsonLdScript) {
      jsonLdScript.remove();
    }
  }, [title, description, keywords, canonicalUrl, ogImage, twitterImage, ogType, jsonLd]);
};

