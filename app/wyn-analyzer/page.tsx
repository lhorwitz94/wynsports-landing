import type { Metadata } from "next";
import Link from "next/link";
import WynAnalyzer from "@/components/WynAnalyzer";

export const metadata: Metadata = {
  title: "Wyn Analyzer — Find Your Women's Sports Fan Community",
  description:
    "A 5-question quiz matching you to a women's sports fan community — WNBA, NWSL, PWHL, women's golf & tennis, college sports, or Unrivaled — based on real fan research, not stereotypes.",
};

export default function WynAnalyzerPage() {
  return (
    <main>
      <section className="zigzag-bg relative flex flex-col items-center justify-center overflow-hidden px-6 py-16 text-center sm:py-20">
        <Link
          href="/"
          className="absolute left-6 top-6 text-sm font-semibold text-wyn-lavender/80 transition-colors hover:text-wyn-gold"
        >
          &larr; WynSports
        </Link>
        <p className="text-xs font-semibold uppercase tracking-widest text-wyn-lavender">
          Wyn Analyzer
        </p>
        <h1 className="mt-3 max-w-2xl font-heading text-3xl font-extrabold text-white sm:text-5xl">
          Find your women&apos;s sports fan community
        </h1>
        <p className="mt-4 max-w-xl font-body text-base text-wyn-cream/90 sm:text-lg">
          Five quick questions. Real fan data, not stereotypes. See which league&apos;s
          community actually fits how you watch.
        </p>
      </section>

      <section className="bg-white px-6 py-16 sm:py-24">
        <WynAnalyzer />
      </section>
    </main>
  );
}
