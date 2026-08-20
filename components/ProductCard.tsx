"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";

type ProductCardProps = {
  name: string;
  description: string;
  icon: ReactNode;
  href?: string;
  index?: number;
};

export default function ProductCard({
  name,
  description,
  icon,
  href,
  index = 0,
}: ProductCardProps) {
  const cardContent = (
    <div className="group relative flex h-full flex-col gap-4 rounded-2xl bg-wyn-gold p-8 shadow-sm ring-1 ring-black/5 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
      <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-wyn-purple-dark text-wyn-gold">
        {icon}
      </div>

      <h3 className="font-heading text-2xl font-bold text-wyn-purple-dark">
        {name}
      </h3>

      <p className="flex-1 text-base leading-relaxed text-wyn-purple-dark/80">
        {description}
      </p>

      <div className="pt-2">
        {href ? (
          <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-wyn-purple-dark">
            Visit site
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
          </span>
        ) : (
          <span className="inline-flex items-center gap-1.5 rounded-full bg-wyn-purple-dark/10 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-wyn-purple-dark">
            Coming soon
          </span>
        )}
      </div>
    </div>
  );

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.5, delay: index * 0.1, ease: "easeOut" }}
    >
      {href ? (
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="block h-full"
        >
          {cardContent}
        </a>
      ) : (
        cardContent
      )}
    </motion.div>
  );
}
