import Image from "next/image";
import ProductCard from "@/components/ProductCard";

// Tagline options — pick your favorite and drop it into the hero below:
// 1. "The home for women's sports — tickets, content, and community."
// 2. "One brand. Every way to follow women's sports."
// 3. "Built for the fans powering women's sports forward."
const TAGLINE =
  "The home for women's sports — tickets, content, and community.";

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
    href: undefined,
  },
];

export default function Home() {
  return (
    <main>
      {/* Hero */}
      <section className="zigzag-bg relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-6 text-center">
        <div className="relative flex flex-col items-center">
          <div
            className="w-56 overflow-hidden rounded-2xl [mask-image:radial-gradient(closest-side,black_78%,transparent_100%)] [-webkit-mask-image:radial-gradient(closest-side,black_78%,transparent_100%)] sm:w-72 md:w-80"
          >
            <Image
              src="/images/wynsports-logo.png"
              alt="WynSports"
              width={340}
              height={340}
              priority
              className="h-full w-full"
            />
          </div>

          <p className="mt-8 max-w-xl font-body text-lg text-wyn-cream/90 sm:text-xl">
            {TAGLINE}
          </p>
        </div>

        <a
          href="#products"
          aria-label="Scroll to products"
          className="absolute bottom-10 flex flex-col items-center gap-1 text-wyn-lavender/80 transition-colors hover:text-wyn-gold"
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
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="font-heading text-4xl font-extrabold text-wyn-purple-dark sm:text-5xl">
              Our Products
            </h2>
            <p className="mt-4 text-lg text-neutral-500">
              A growing family of products built for women's sports fans.
            </p>
          </div>

          <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2">
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
