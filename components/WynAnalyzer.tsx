"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { QUESTIONS, scoreQuiz, type QuizResult } from "@/lib/quiz";

export default function WynAnalyzer() {
  const [answers, setAnswers] = useState<string[]>([]);
  const [result, setResult] = useState<QuizResult | null>(null);

  const currentIndex = answers.length;
  const question = QUESTIONS[currentIndex];
  const progress = Math.min(currentIndex, QUESTIONS.length) / QUESTIONS.length;

  function selectOption(optionId: string) {
    const next = [...answers, optionId];
    setAnswers(next);
    if (next.length === QUESTIONS.length) {
      setResult(scoreQuiz(next));
    }
  }

  function retake() {
    setAnswers([]);
    setResult(null);
  }

  return (
    <div className="mx-auto w-full max-w-2xl">
      {/* Progress indicator */}
      <div className="mb-10">
        <div className="mb-2 flex items-center justify-between text-xs font-semibold uppercase tracking-widest text-wyn-purple/60">
          <span>{result ? "Your match" : `Question ${currentIndex + 1} of ${QUESTIONS.length}`}</span>
          <span>{result ? "Done" : question.category}</span>
        </div>
        <div className="h-2 w-full overflow-hidden rounded-full bg-wyn-purple/10">
          <motion.div
            className="h-full rounded-full bg-wyn-gold"
            initial={false}
            animate={{ width: `${(result ? 1 : progress) * 100}%` }}
            transition={{ duration: 0.4, ease: "easeOut" }}
          />
        </div>
      </div>

      <AnimatePresence mode="wait">
        {!result ? (
          <motion.div
            key={question.id}
            initial={{ opacity: 0, x: 24 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -24 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="rounded-2xl bg-white p-8 shadow-sm ring-1 ring-black/5"
          >
            <h2 className="font-heading text-2xl font-bold text-wyn-purple sm:text-3xl">
              {question.prompt}
            </h2>

            <div className="mt-8 flex flex-col gap-3">
              {question.options.map((option) => (
                <button
                  key={option.id}
                  type="button"
                  onClick={() => selectOption(option.id)}
                  className="group flex items-center justify-between rounded-xl border-2 border-wyn-purple/10 bg-wyn-cream/40 px-5 py-4 text-left text-base font-medium text-wyn-purple transition-all duration-200 hover:-translate-y-0.5 hover:border-wyn-gold hover:bg-wyn-yellow/20 hover:shadow-md"
                >
                  <span>{option.label}</span>
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="ml-4 shrink-0 opacity-0 transition-all duration-200 group-hover:translate-x-1 group-hover:opacity-100"
                  >
                    <path d="M5 12h14" />
                    <path d="m12 5 7 7-7 7" />
                  </svg>
                </button>
              ))}
            </div>
          </motion.div>
        ) : (
          <motion.div
            key="result"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="flex flex-col gap-6"
          >
            {/* Primary match */}
            <div className="rounded-2xl bg-wyn-purple p-8 text-wyn-cream shadow-sm ring-1 ring-black/5">
              <p className="text-xs font-semibold uppercase tracking-widest text-wyn-lavender">
                Your top match
              </p>
              <h2 className="mt-2 font-heading text-3xl font-extrabold text-white sm:text-4xl">
                {result.primary.name}
              </h2>
              <p className="mt-1 text-sm font-medium text-wyn-lavender">
                {result.primary.short}
              </p>
              <p className="mt-4 text-base leading-relaxed text-wyn-cream/90">
                {result.primary.why}
              </p>

              <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                <a
                  href={result.primary.ctas.wtix.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-1.5 rounded-full bg-wyn-gold px-5 py-2.5 text-sm font-semibold text-wyn-purple transition-colors hover:bg-wyn-gold-dark"
                >
                  {result.primary.ctas.wtix.label}
                </a>
                <a
                  href={result.primary.ctas.wynFeed.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-1.5 rounded-full border-2 border-wyn-lavender/40 px-5 py-2.5 text-sm font-semibold text-wyn-cream transition-colors hover:border-wyn-lavender hover:bg-white/5"
                >
                  {result.primary.ctas.wynFeed.label}
                </a>
              </div>
            </div>

            {/* Secondary match */}
            <div className="rounded-2xl bg-wyn-yellow p-8 shadow-sm ring-1 ring-black/5">
              <p className="text-xs font-semibold uppercase tracking-widest text-wyn-purple/70">
                Your secondary match
              </p>
              <h3 className="mt-2 font-heading text-2xl font-bold text-wyn-purple">
                {result.secondary.name}
              </h3>
              <p className="mt-1 text-sm font-medium text-wyn-purple/70">
                {result.secondary.short}
              </p>
              <p className="mt-4 text-base leading-relaxed text-wyn-purple">
                {result.secondary.why}
              </p>
            </div>

            <button
              type="button"
              onClick={retake}
              className="mx-auto mt-2 inline-flex items-center gap-1.5 text-sm font-semibold text-wyn-purple/60 transition-colors hover:text-wyn-purple"
            >
              Retake the quiz
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
