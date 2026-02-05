"use client";

import { useState, useEffect } from "react";
import { Menu, X, Instagram, Share2 } from "lucide-react";

export default function Nav() {
  const [open, setOpen] = useState(false);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  function handleShare() {
    const url = "https://crowdbuild.io";
    const text = "crowdbuild — the crowd decides what gets built next.";

    if (navigator.share) {
      navigator.share({
        title: "crowdbuild",
        text,
        url,
      });
    } else {
      navigator.clipboard.writeText(url);
      alert("Link copied to clipboard");
    }
  }

  return (
    <>
      {/* Header */}
      <header className="fixed top-0 z-50 w-full border-b border-zinc-200 bg-white/80 backdrop-blur">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
          {/* Logo */}
          <div className="font-mono text-lg font-semibold tracking-tight">
            crowd<span className="text-cyan-500">build</span>
          </div>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center gap-6">
            {/* Share */}
            <button
              onClick={handleShare}
              className="text-zinc-500 hover:text-cyan-500 transition"
              aria-label="Share crowdbuild"
            >
              <Share2 size={18} />
            </button>

            {/* Follow */}
            <a
              href="https://instagram.com/YOUR_HANDLE"
              target="_blank"
              rel="noopener noreferrer"
              className="text-zinc-500 hover:text-cyan-500 transition"
              aria-label="Follow crowdbuild on Instagram"
            >
              <Instagram size={18} />
            </a>
          </div>

          {/* Mobile Toggle */}
          <button
            onClick={() => setOpen(true)}
            className="md:hidden text-zinc-700"
            aria-label="Open menu"
          >
            <Menu size={22} />
          </button>
        </div>
      </header>

      {/* Mobile Fullscreen Menu */}
      {open && (
        <div className="fixed inset-0 z-[60] bg-white flex flex-col">
          {/* Top bar */}
          <div className="flex h-16 items-center justify-between px-6 border-b border-zinc-200">
            <div className="font-mono text-lg font-semibold tracking-tight">
              crowd<span className="text-cyan-500">build</span>
            </div>

            <button
              onClick={() => setOpen(false)}
              aria-label="Close menu"
            >
              <X size={24} className="text-zinc-700" />
            </button>
          </div>

          {/* Center content */}
          <div className="flex flex-1 flex-col items-center justify-center gap-12 px-6">
            {/* Brand reinforcement */}
            <div className="text-2xl font-semibold tracking-tight">
              crowd<span className="text-cyan-500">build</span>
            </div>

            {/* Actions */}
            <div className="flex flex-col items-center gap-8">
              {/* Share */}
              <button
                onClick={handleShare}
                className="flex items-center gap-3 text-xl font-medium text-zinc-800 hover:text-cyan-500 transition"
              >
                <Share2 size={22} />
                <span>Share</span>
              </button>

              {/* Follow */}
              <a
                href="https://instagram.com/crowdbuild.io"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-xl font-medium text-zinc-800 hover:text-cyan-500 transition"
              >
                <Instagram size={22} />
                <span>Follow</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
