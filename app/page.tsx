import Image from "next/image";
import Link from "next/link";
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

const CompassIcon = () => (
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
    <circle cx="12" cy="12" r="10" />
    <polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76" />
  </svg>
);

const GameIcon = () => (
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
    <line x1="6" x2="10" y1="11" y2="11" />
    <line x1="8" x2="8" y1="9" y2="13" />
    <line x1="15" x2="15.01" y1="12" y2="12" />
    <line x1="18" x2="18.01" y1="10" y2="10" />
    <path d="M17.32 5H6.68a4 4 0 0 0-3.978 3.59c-.006.052-.01.101-.017.152C2.604 9.416 2 14.456 2 16a3 3 0 0 0 3 3c1 0 1.5-.5 2-1l1.414-1.414A2 2 0 0 1 9.828 16h4.344a2 2 0 0 1 1.414.586L17 18c.5.5 1 1 2 1a3 3 0 0 0 3-3c0-1.545-.604-6.584-.685-7.258-.007-.05-.011-.1-.017-.151A4 4 0 0 0 17.32 5z" />
  </svg>
);

// Add future products here — the grid below flows automatically.
const PRODUCTS = [
  {
    name: "WTIX",
    description:
      "A ticketing aggregator for women's sports — WNBA, NWSL, PWHL, tennis, golf, and college sports, pulled together in one place.",
    icon: <TicketIcon />,
    href: "https://wsportstix.com",
  },
  {
    name: "WynFeed",
    description:
      "A content hub for women's sports — news, video, and community in one feed.",
    icon: <FeedIcon />,
    href: "https://www.wsportstix.com/news",
  },
  {
    name: "Custom Gamification",
    description:
      "Custom games built for fans, by fans. Define the experience you're looking for, play with friends or alone, show how you engage as a fan.",
    icon: <GameIcon />,
    href: "https://college-trivia.vercel.app/",
  },
];

export default function Home() {
  return (
    <main>
      {/* Hero */}
      <section className="zigzag-bg relative flex flex-col items-center justify-center overflow-hidden px-6 py-20 text-center sm:py-24">
        <div className="relative flex flex-col items-center">
          <Image
            src="/images/wynsports-newlogo.png"
            alt="WynSports"
            width={340}
            height={340}
            priority
            className="w-72 sm:w-96 md:w-[28rem]"
          />

          <p className="mt-6 whitespace-nowrap font-body text-[clamp(0.6rem,2.6vw,1.25rem)] text-wyn-cream/90">
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
        <div className="mx-auto max-w-6xl">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {PRODUCTS.map((product, index) => (
              <ProductCard key={product.name} index={index} {...product} />
            ))}
          </div>
        </div>
      </section>

      {/* Wyn Analyzer teaser */}
      <section className="bg-wyn-cream px-6 py-16 sm:py-20">
        <div className="mx-auto flex max-w-3xl flex-col items-center gap-4 text-center">
          <div className="flex items-center gap-3">
            <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-wyn-purple text-wyn-yellow">
              <CompassIcon />
            </div>
            <h2 className="font-heading text-3xl font-extrabold text-wyn-purple sm:text-4xl">
              Wyn Analyzer
            </h2>
          </div>
          <p className="text-lg font-semibold text-wyn-purple/80">
            Not sure which fan community is yours?
          </p>
          <p className="max-w-2xl text-base leading-relaxed text-wyn-purple/80">
            Take a 5-question quiz to find out what kind of fan you are. Grounded in
            real fan data across WNBA, NWSL, PWHL, women&apos;s golf, tennis, and college sports.
          </p>
          <Link
            href="/wyn-analyzer"
            className="group mt-2 inline-flex items-center gap-1.5 rounded-full bg-wyn-purple px-6 py-3 text-sm font-semibold text-wyn-cream transition-colors hover:bg-wyn-purple-dark"
          >
            Take the quiz
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="transition-transform duration-300 group-hover:translate-x-1"
            >
              <path d="M5 12h14" />
              <path d="m12 5 7 7-7 7" />
            </svg>
          </Link>
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
