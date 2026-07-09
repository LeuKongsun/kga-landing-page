"use client";

import { useCallback, useEffect, useMemo, useState } from "react";
import { createPortal } from "react-dom";
import { AnimatePresence, m } from "framer-motion";
import { Check, Copy, Share2, X } from "lucide-react";

const getShareUrl = (slug) => {
  const path = `/blog/${slug}`;
  if (typeof window === "undefined") return path;
  return `${window.location.origin}${path}`;
};

const copyText = async (text) => {
  if (navigator.clipboard?.writeText) {
    await navigator.clipboard.writeText(text);
    return;
  }

  const textarea = document.createElement("textarea");
  textarea.value = text;
  textarea.setAttribute("readonly", "");
  textarea.style.position = "fixed";
  textarea.style.opacity = "0";
  document.body.appendChild(textarea);
  textarea.select();
  document.execCommand("copy");
  document.body.removeChild(textarea);
};

export default function BlogShareButton({
  slug,
  title,
  className = "",
  showLabel = false,
  buttonLabel = "Share",
}) {
  const [isMounted, setIsMounted] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [copied, setCopied] = useState(false);
  const shareUrl = useMemo(() => getShareUrl(slug), [slug]);

  const closeModal = useCallback(() => {
    setIsOpen(false);
    setCopied(false);
  }, []);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    if (!isOpen) return undefined;

    const previousOverflow = document.body.style.overflow;
    const onKeyDown = (event) => {
      if (event.key === "Escape") closeModal();
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [closeModal, isOpen]);

  const handleCopy = async () => {
    try {
      await copyText(shareUrl);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1800);
    } catch {
      setCopied(false);
    }
  };

  const modal = (
    <AnimatePresence>
      {isOpen && (
        <m.div
          className="fixed inset-0 z-[90] flex items-center justify-center bg-slate-950/55 px-4 backdrop-blur-md"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          role="dialog"
          aria-modal="true"
          aria-labelledby={`share-title-${slug}`}
          onClick={closeModal}
        >
          <m.div
            className="relative w-full max-w-md overflow-hidden rounded-3xl border border-brand-blue/10 bg-white shadow-2xl shadow-slate-950/25 dark:border-white/10 dark:bg-[#111c2b]"
            initial={{ opacity: 0, y: 18, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 12, scale: 0.98 }}
            transition={{ duration: 0.18 }}
            onClick={(event) => event.stopPropagation()}
          >
            <div className="absolute -right-14 -top-14 h-32 w-32 rounded-full bg-brand-orange/20 blur-3xl" />
            <div className="absolute -bottom-16 -left-16 h-36 w-36 rounded-full bg-brand-blue/15 blur-3xl" />

            <div className="relative p-6">
              <div className="mb-5 flex items-start justify-between gap-4">
                <div>
                  <p className="mb-2 text-xs font-display font-700 uppercase tracking-[0.18em] text-brand-orange">
                    Share Blog
                  </p>
                  <h3
                    id={`share-title-${slug}`}
                    className="text-xl font-display font-800 leading-snug text-brand-text dark:text-white"
                  >
                    {title}
                  </h3>
                </div>
                <button
                  type="button"
                  onClick={closeModal}
                  aria-label="Close share popup"
                  className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-brand-blue/10 text-brand-text/50 transition-colors hover:border-brand-orange/30 hover:text-brand-orange dark:border-white/10 dark:text-gray-400"
                >
                  <X className="h-4 w-4" aria-hidden="true" />
                </button>
              </div>

              <p className="mb-3 text-sm font-body leading-relaxed text-brand-text/60 dark:text-gray-400">
                Copy this link and share it with your students, team, or clients.
              </p>

              <div className="mb-5 rounded-2xl border border-brand-blue/10 bg-brand-blue/5 p-3 dark:border-white/10 dark:bg-white/5">
                <input
                  value={shareUrl}
                  readOnly
                  onFocus={(event) => event.target.select()}
                  className="w-full bg-transparent text-sm font-body text-brand-text/80 outline-none dark:text-gray-200"
                />
              </div>

              <div className="flex flex-col-reverse gap-3 sm:flex-row sm:justify-end">
                <button
                  type="button"
                  onClick={closeModal}
                  className="inline-flex items-center justify-center rounded-full border border-brand-blue/15 px-5 py-2.5 text-sm font-display font-700 text-brand-text/70 transition-all hover:border-brand-orange/30 hover:text-brand-orange dark:border-white/10 dark:text-gray-300"
                >
                  Close
                </button>
                <button
                  type="button"
                  onClick={handleCopy}
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-brand-orange px-5 py-2.5 text-sm font-display font-700 text-white shadow-md shadow-brand-orange/20 transition-all hover:bg-brand-orange/90"
                >
                  {copied ? (
                    <Check className="h-4 w-4" aria-hidden="true" />
                  ) : (
                    <Copy className="h-4 w-4" aria-hidden="true" />
                  )}
                  {copied ? "Copied!" : "Copy link"}
                </button>
              </div>
            </div>
          </m.div>
        </m.div>
      )}
    </AnimatePresence>
  );

  return (
    <>
      <button
        type="button"
        onClick={() => setIsOpen(true)}
        aria-label={`Share ${title}`}
        className={`inline-flex items-center justify-center gap-1.5 rounded-full border border-brand-blue/20 text-brand-text/75 transition-all hover:border-brand-orange/40 hover:text-brand-orange dark:border-white/10 dark:text-gray-300 dark:hover:border-brand-orange/40 dark:hover:text-brand-orange ${className}`}
      >
        <Share2 className="h-4 w-4" aria-hidden="true" />
        {showLabel ? <span>{buttonLabel}</span> : <span className="sr-only">{buttonLabel}</span>}
      </button>

      {isMounted ? createPortal(modal, document.body) : null}
    </>
  );
}
