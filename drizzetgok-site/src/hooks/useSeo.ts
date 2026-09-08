import { useEffect } from 'react';

type SeoOptions = {
  title: string;
  description?: string;
  canonical?: string;
  ogImage?: string;
  noindex?: boolean;
  keywords?: string; // verilirse sayfaya özel meta keywords ile index.html'deki genel değeri ezer
};

function setMeta(selector: string, attr: 'name' | 'property', key: string, value: string) {
  let el = document.head.querySelector<HTMLMetaElement>(selector);
  if (!el) {
    el = document.createElement('meta');
    el.setAttribute(attr, key);
    document.head.appendChild(el);
  }
  el.setAttribute('content', value);
}

function setLink(rel: string, href: string) {
  let el = document.head.querySelector<HTMLLinkElement>(`link[rel="${rel}"]`);
  if (!el) {
    el = document.createElement('link');
    el.setAttribute('rel', rel);
    document.head.appendChild(el);
  }
  el.setAttribute('href', href);
}

export function useSeo({ title, description, canonical, ogImage, noindex, keywords }: SeoOptions) {
  useEffect(() => {
    const prevTitle = document.title;
    document.title = title;

    // keywords: sayfaya özel arama terimleri (index.html'deki genel keywords'ü ezer).
    // Örn. reklam sayfalarında kısıtlı terimleri (botoks vb.) içermeyen liste vermek için.
    // Sayfadan çıkınca önceki değere geri döner.
    let prevKeywords: string | null = null;
    let keywordsEl: HTMLMetaElement | null = null;
    if (keywords) {
      keywordsEl = document.head.querySelector<HTMLMetaElement>('meta[name="keywords"]');
      if (!keywordsEl) {
        keywordsEl = document.createElement('meta');
        keywordsEl.setAttribute('name', 'keywords');
        document.head.appendChild(keywordsEl);
      }
      prevKeywords = keywordsEl.getAttribute('content');
      keywordsEl.setAttribute('content', keywords);
    }

    // noindex: arama motorlarından gizle (özel/şifreli sayfalar için).
    // Sayfadan çıkınca temizlenir (cleanup).
    let robotsEl: HTMLMetaElement | null = null;
    if (noindex) {
      robotsEl = document.head.querySelector<HTMLMetaElement>('meta[name="robots"]');
      if (!robotsEl) {
        robotsEl = document.createElement('meta');
        robotsEl.setAttribute('name', 'robots');
        document.head.appendChild(robotsEl);
      }
      robotsEl.setAttribute('content', 'noindex, nofollow');
    }

    if (description) {
      setMeta('meta[name="description"]', 'name', 'description', description);
      setMeta('meta[property="og:description"]', 'property', 'og:description', description);
      setMeta('meta[name="twitter:description"]', 'name', 'twitter:description', description);
    }

    setMeta('meta[property="og:title"]', 'property', 'og:title', title);
    setMeta('meta[name="twitter:title"]', 'name', 'twitter:title', title);

    if (canonical) {
      setLink('canonical', canonical);
      setMeta('meta[property="og:url"]', 'property', 'og:url', canonical);
    }

    if (ogImage) {
      setMeta('meta[property="og:image"]', 'property', 'og:image', ogImage);
      setMeta('meta[name="twitter:image"]', 'name', 'twitter:image', ogImage);
    }

    return () => {
      document.title = prevTitle;
      // noindex meta'yı bu sayfadan çıkınca kaldır (diğer sayfalar indexlenebilsin).
      if (robotsEl) robotsEl.remove();
      // keywords'ü önceki (genel) değere geri döndür.
      if (keywordsEl && prevKeywords !== null) keywordsEl.setAttribute('content', prevKeywords);
    };
  }, [title, description, canonical, ogImage, noindex, keywords]);
}
