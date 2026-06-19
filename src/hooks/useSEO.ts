import { useEffect } from "react";

interface SEOProps {
  title: string;
  description: string;
  keywords?: string;
  canonicalUrl?: string;
}

export const useSEO = ({ title, description, keywords, canonicalUrl }: SEOProps) => {
  useEffect(() => {
    // 1. Update page title
    document.title = title;

    // 2. Update meta description
    let metaDesc = document.querySelector('meta[name="description"]');
    if (!metaDesc) {
      metaDesc = document.createElement("meta");
      metaDesc.setAttribute("name", "description");
      document.head.appendChild(metaDesc);
    }
    metaDesc.setAttribute("content", description);

    // 3. Update meta keywords
    let metaKey = document.querySelector('meta[name="keywords"]');
    if (!metaKey) {
      metaKey = document.createElement("meta");
      metaKey.setAttribute("name", "keywords");
      document.head.appendChild(metaKey);
    }
    const defaultKeywords = "DevDhara, DevDhara Technologies, DevDhar, Dev Patel, Web Development Ahmedabad, App Development Gujarat, Custom Software India, SEO Services, IT Consulting";
    metaKey.setAttribute("content", keywords ? `${keywords}, ${defaultKeywords}` : defaultKeywords);

    // 4. Update Open Graph Meta Tags
    let ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) ogTitle.setAttribute("content", title);

    let ogDesc = document.querySelector('meta[property="og:description"]');
    if (ogDesc) ogDesc.setAttribute("content", description);

    // 5. Update Twitter Meta Tags
    let twitterTitle = document.querySelector('meta[name="twitter:title"]');
    if (twitterTitle) twitterTitle.setAttribute("content", title);

    let twitterDesc = document.querySelector('meta[name="twitter:description"]');
    if (twitterDesc) twitterDesc.setAttribute("content", description);

    // 6. Update Canonical URL
    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.setAttribute("rel", "canonical");
      document.head.appendChild(canonical);
    }
    canonical.setAttribute("href", canonicalUrl || window.location.href);
  }, [title, description, keywords, canonicalUrl]);
};
