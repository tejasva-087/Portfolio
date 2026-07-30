// components/utils/ScrollToHash.tsx
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export function ScrollToHash() {
  const { hash, pathname } = useLocation();

  useEffect(() => {
    if (!hash) {
      window.scrollTo({ top: 0, left: 0 });
      return;
    }

    const id = hash.replace("#", "");

    const scrollToEl = () => {
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: "smooth", block: "start" });
        return true;
      }
      return false;
    };

    // Try immediately; if the target isn't rendered yet (e.g. we just
    // navigated from another page), retry for a short window.
    if (!scrollToEl()) {
      let attempts = 0;
      const interval = setInterval(() => {
        attempts++;
        if (scrollToEl() || attempts > 20) clearInterval(interval);
      }, 50);
      return () => clearInterval(interval);
    }
  }, [hash, pathname]);

  return null;
}
