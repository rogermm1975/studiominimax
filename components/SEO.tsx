
import React, { useEffect } from 'react';
import { useLanguage } from '../contexts/LanguageContext';

const SEO: React.FC = () => {
  const { t, language } = useLanguage();

  useEffect(() => {
    // Helper function to set meta tags safely
    const setMetaTag = (selectorAttr: string, selectorValue: string, content: string) => {
      let element = document.querySelector(`meta[${selectorAttr}="${selectorValue}"]`);
      if (!element) {
        element = document.createElement('meta');
        element.setAttribute(selectorAttr, selectorValue);
        document.head.appendChild(element);
      }
      element.setAttribute('content', content);
    };

    // --- Basic Meta Tags ---
    document.title = t.meta.title;
    setMetaTag('name', 'description', t.meta.description);
    setMetaTag('name', 'keywords', t.meta.keywords);

    // --- Open Graph (Facebook/LinkedIn) ---
    setMetaTag('property', 'og:title', t.meta.title);
    setMetaTag('property', 'og:description', t.meta.description);
    setMetaTag('property', 'og:locale', language === 'es' ? 'es_ES' : 'en_US');
    // URL usually stays the same for the SPA landing, but if we had routes, we'd update it.
    // image is static in index.html unless we want to change it per language (rare).

    // --- Twitter ---
    setMetaTag('property', 'twitter:title', t.meta.title);
    setMetaTag('property', 'twitter:description', t.meta.description);

    // --- HTML Lang Attribute ---
    document.documentElement.lang = language;

    // --- Canonical Link ---
    // Important for avoiding duplicate content issues if params are used
    let linkCanonical = document.querySelector('link[rel="canonical"]');
    if (!linkCanonical) {
      linkCanonical = document.createElement('link');
      linkCanonical.setAttribute('rel', 'canonical');
      document.head.appendChild(linkCanonical);
    }
    // Ensure we point to the main URL (clean of query params like ?lang=en if we used them, though here we use context)
    linkCanonical.setAttribute('href', 'https://rogermm1975.github.io/MiniMax-Studio/');

  }, [t, language]);

  return null;
};

export default SEO;
