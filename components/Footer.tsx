export default function Footer() {
  return (
    <footer className="border-t border-zinc-200 bg-white">
      <div className="mx-auto max-w-7xl px-6 py-10 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-zinc-500">
        <span>© {new Date().getFullYear()} crowdbuild</span>

        <a
          href="https://instagram.com/crowdbuild.io"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-cyan-500 transition"
        >
          Instagram
        </a>
      </div>
    </footer>
  );
}
