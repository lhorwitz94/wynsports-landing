import Image from "next/image";
import ProductCard from "@/components/ProductCard";

const TAGLINE =
  "Reimagining digital fan experiences. Building the future of fandom";

const TicketIcon = () => (
  <svg
    width="28"
    height="28"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M2 9a3 3 0 0 1 0 6v2a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-2a3 3 0 0 1 0-6V7a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2Z" />
    <path d="M13 5v2" />
    <path d="M13 17v2" />
    <path d="M13 11v2" />
  </svg>
);

const FeedIcon = () => (
  <svg
    width="28"
    height="28"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M4 11a9 9 0 0 1 9 9" />
    <path d="M4 4a16 16 0 0 1 16 16" />
    <circle cx="5" cy="19" r="1" />
  </svg>
);

// Add future products here — the grid below flows automatically.
const PRODUCTS = [
  {
    name: "WTIX",
    description:
      "A ticketing aggregator for women's sports — WNBA, NWSL, PWHL, tennis, golf, and college sports, pulled together in one place.",
    icon: <TicketIcon />,
    accent: "gold" as const,
    href: "https://wsportstix.com",
  },
  {
    name: "WynFeed",
    description:
      "A content hub for women's sports — news, video, and community in one feed.",
    icon: <FeedIcon />,
    accent: "lavender" as const,
    href: "https://www.wsportstix.com/news",
  },
];

export default function Home() {
  return (
    <main>
      {/* Hero */}
      <section className="zigzag-bg relative flex flex-col items-center justify-center overflow-hidden px-6 py-20 text-center sm:py-24">
        <div className="relative flex flex-col items-center">
          <Image
            src="/images/wynsports-logo.png"
            alt="WynSports"
            width={340}
            height={340}
            priority
            className="w-72 sm:w-96 md:w-[28rem]"
          />

          <p className="mt-6 max-w-xl font-body text-lg text-wyn-cream/90 sm:text-xl">
            {TAGLINE}
          </p>
        </div>

        <a
          href="#products"
          aria-label="Scroll to products"
          className="mt-14 flex flex-col items-center gap-1 text-wyn-lavender/80 transition-colors hover:text-wyn-gold"
        >
          <span className="text-xs font-semibold uppercase tracking-widest">
            Our products
          </span>
          <svg
            className="animate-bounce-slow"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="m6 9 6 6 6-6" />
          </svg>
        </a>
      </section>

      {/* Products */}
      <section id="products" className="bg-white px-6 py-24 sm:py-32">
        <div className="mx-auto max-w-5xl">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            {PRODUCTS.map((product, index) => (
              <ProductCard key={product.name} index={index} {...product} />
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-neutral-100 bg-white px-6 py-10">
        <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-4 text-sm text-neutral-500 sm:flex-row">
          <p>WynSports &copy; 2026</p>
          <div className="flex gap-6">
            <a href="#about" className="transition-colors hover:text-wyn-purple">
              About
            </a>
            <a href="#contact" className="transition-colors hover:text-wyn-purple">
              Contact
            </a>
          </div>
        </div>
      </footer>
    </main>
  );
}
