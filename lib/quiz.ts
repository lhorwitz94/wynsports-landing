// Women's Sports Fan Analyzer — quiz data + scoring logic.
// Pure data/functions, no network or LLM calls, so results are instant.

export type CommunityKey =
  | "wnba"
  | "nwsl"
  | "pwhl"
  | "golfTennis"
  | "college"
  | "unrivaled";

export type Community = {
  key: CommunityKey;
  name: string;
  short: string;
  /** Why-copy referencing the real demographic/psychographic pattern for this fanbase. */
  why: string;
  ctas: {
    wynFeed: { label: string; href: string };
    wtix: { label: string; href: string };
  };
};

export const COMMUNITIES: Record<CommunityKey, Community> = {
  wnba: {
    key: "wnba",
    name: "WNBA",
    short: "Player-driven, digitally native, built for summer nights",
    why:
      "About 80% of avid WNBA fans say a specific player is the reason they watch — team loyalty comes second. That star-first pull, paired with a young, urban, digitally-engaged fan culture, is what your answers point toward.",
    ctas: {
      wynFeed: { label: "Catch up on WNBA coverage on WynFeed", href: "https://www.wsportstix.com/news" },
      wtix: { label: "Find WNBA tickets on WTIX", href: "https://wsportstix.com" },
    },
  },
  nwsl: {
    key: "nwsl",
    name: "NWSL",
    short: "Season-long team loyalty, fall energy, suburban and family-rooted",
    why:
      "Women aged 35-44 are NWSL's most highly engaged fans, over-indexing versus soccer fans generally, and the league's strongest markets (like New England) skew suburban and family-oriented. Your taste for outdoor fall games and sticking with a roster through the season lines up with that profile.",
    ctas: {
      wynFeed: { label: "Catch up on NWSL coverage on WynFeed", href: "https://www.wsportstix.com/news" },
      wtix: { label: "Find NWSL tickets on WTIX", href: "https://wsportstix.com" },
    },
  },
  pwhl: {
    key: "pwhl",
    name: "PWHL",
    short: "Cold-climate hockey culture, physical, playoff-intensity",
    why:
      "PWHL fandom is concentrated in cold-climate, hockey-first regions — the Northeast, Great Lakes, Pacific Northwest, and Canada — and skews toward fans who already love hockey and are discovering the women's game. Your pull toward winter arenas and physical, playoff-atmosphere intensity fits that pattern closely.",
    ctas: {
      wynFeed: { label: "Catch up on PWHL coverage on WynFeed", href: "https://www.wsportstix.com/news" },
      wtix: { label: "Find PWHL tickets on WTIX", href: "https://wsportstix.com" },
    },
  },
  golfTennis: {
    key: "golfTennis",
    name: "Women's Golf & Tennis",
    short: "Older, more affluent, drawn to a small field of dominant stars",
    why:
      "Women's golf and tennis fans skew older, more affluent, and more suburban-to-coastal than most women's sports audiences, and the appeal is built around a handful of dominant individual stars rather than team drama. Your preference for head-to-head competition and quieter, individual tension matches that fanbase.",
    ctas: {
      wynFeed: { label: "Catch up on golf & tennis coverage on WynFeed", href: "https://www.wsportstix.com/news" },
      wtix: { label: "Find golf & tennis tickets on WTIX", href: "https://wsportstix.com" },
    },
  },
  college: {
    key: "college",
    name: "College Sports (NCAA Women's)",
    short: "Alumni and hometown loyalty, building toward March Madness",
    why:
      "College women's sports fandom runs on school and alumni ties more than any single league factor, with fan engagement spiking hard every March. Your loyalty to a school over a specific team or player, and your appetite for a season that builds toward one big tournament, are the clearest signals of that fan profile.",
    ctas: {
      wynFeed: { label: "Catch up on NCAA women's coverage on WynFeed", href: "https://www.wsportstix.com/news" },
      wtix: { label: "Find college sports tickets on WTIX", href: "https://wsportstix.com" },
    },
  },
  unrivaled: {
    key: "unrivaled",
    name: "Unrivaled",
    short: "New, digitally-native, star-driven basketball in short bursts",
    why:
      "Unrivaled's fanbase is newer and more digitally native than most, made up largely of WNBA offseason viewers who want an even more star-driven, isolation-heavy version of basketball. Your appetite for fast bursts of action built around a small group of elite players tracks with that crowd.",
    ctas: {
      wynFeed: { label: "Catch up on Unrivaled coverage on WynFeed", href: "https://www.wsportstix.com/news" },
      wtix: { label: "Find Unrivaled tickets on WTIX", href: "https://wsportstix.com" },
    },
  },
};

export type ScoreMap = Record<CommunityKey, number>;

export type QuizOption = {
  id: string;
  label: string;
  /** Points awarded per community — not 1:1, since real fans overlap leagues. */
  scores: Partial<ScoreMap>;
};

export type QuizQuestion = {
  id: string;
  category: string;
  prompt: string;
  options: QuizOption[];
};

export const QUESTIONS: QuizQuestion[] = [
  {
    id: "location",
    category: "Location & climate",
    prompt: "Where do you live (or wish you lived)?",
    options: [
      {
        id: "urban",
        label: "A big, always-on city — LA, New York, Atlanta energy",
        scores: { wnba: 3, unrivaled: 2, golfTennis: 1 },
      },
      {
        id: "cold",
        label: "Cold-climate hockey country — New England, the Great Lakes, the Pacific Northwest, or Canada",
        scores: { pwhl: 3, nwsl: 1 },
      },
      {
        id: "collegeTown",
        label: "A suburban college town with real school spirit",
        scores: { college: 3, nwsl: 1 },
      },
      {
        id: "affluentSuburb",
        label: "Somewhere warm and affluent, country-club or resort adjacent",
        scores: { golfTennis: 3 },
      },
    ],
  },
  {
    id: "socialStyle",
    category: "Personality & social style",
    prompt: "Which sounds most like you as a fan?",
    options: [
      {
        id: "starChaser",
        label: "I fall hard for one specific player and follow her whole career",
        scores: { wnba: 3, unrivaled: 2 },
      },
      {
        id: "rosterLoyalist",
        label: "I bond with the whole roster and ride with the team, win or lose",
        scores: { nwsl: 2, pwhl: 2, college: 1 },
      },
      {
        id: "schoolLoyalist",
        label: "My loyalty is to the jersey or school I grew up with, more than any one team",
        scores: { college: 3 },
      },
      {
        id: "fieldWatcher",
        label: "I like following a tight field of a few stars going head-to-head",
        scores: { golfTennis: 3, unrivaled: 1 },
      },
    ],
  },
  {
    id: "season",
    category: "Season & weather",
    prompt: "What's your favorite way to watch sports?",
    options: [
      {
        id: "fallOutdoors",
        label: "Crisp fall air, outdoor games, a scarf and a thermos",
        scores: { nwsl: 3, college: 1 },
      },
      {
        id: "winterArena",
        label: "Cozy indoor arena energy in the dead of winter",
        scores: { pwhl: 2, unrivaled: 3, college: 2 },
      },
      {
        id: "summerNights",
        label: "Long summer nights, catching a game after work",
        scores: { wnba: 3 },
      },
      {
        id: "springBuildup",
        label: "Tension building all winter into a big spring championship",
        scores: { college: 3, pwhl: 1 },
      },
    ],
  },
  {
    id: "engagement",
    category: "How you fandom",
    prompt: "What actually keeps you coming back?",
    options: [
      {
        id: "playerFirst",
        label: "A specific star athlete — she's basically why I watch",
        scores: { wnba: 3, unrivaled: 2, golfTennis: 1 },
      },
      {
        id: "teamFirst",
        label: "A team I'm loyal to through rebuilds, trades, and rough seasons",
        scores: { nwsl: 2, pwhl: 3 },
      },
      {
        id: "schoolFirst",
        label: "My alma mater or hometown school, full stop",
        scores: { college: 3 },
      },
      {
        id: "eliteFewFirst",
        label: "Whichever elite few are dominating right now",
        scores: { golfTennis: 3, unrivaled: 1 },
      },
    ],
  },
  {
    id: "pace",
    category: "Pace & intensity",
    prompt: "What kind of intensity do you want from a game?",
    options: [
      {
        id: "fastBursts",
        label: "Fast, high-scoring bursts I can watch in one short sitting",
        scores: { wnba: 2, unrivaled: 3 },
      },
      {
        id: "slowBuild",
        label: "A rivalry that slowly builds and pays off over a season",
        scores: { nwsl: 2, pwhl: 2, college: 2 },
      },
      {
        id: "playoffGrit",
        label: "Nail-biting, physical, playoff-atmosphere intensity",
        scores: { pwhl: 3, college: 2 },
      },
      {
        id: "quietTension",
        label: "Quiet, one-shot-at-a-time individual competition",
        scores: { golfTennis: 3 },
      },
    ],
  },
];

const EMPTY_SCORES: ScoreMap = {
  wnba: 0,
  nwsl: 0,
  pwhl: 0,
  golfTennis: 0,
  college: 0,
  unrivaled: 0,
};

export type QuizResult = {
  scores: ScoreMap;
  primary: Community;
  secondary: Community;
};

/**
 * Tallies weighted scores across all six communities for a set of selected
 * option ids (one per question) and returns the top two matches.
 */
export function scoreQuiz(selectedOptionIds: string[]): QuizResult {
  const scores: ScoreMap = { ...EMPTY_SCORES };

  QUESTIONS.forEach((question, index) => {
    const option = question.options.find((o) => o.id === selectedOptionIds[index]);
    if (!option) return;
    for (const [key, points] of Object.entries(option.scores) as [CommunityKey, number][]) {
      scores[key] += points;
    }
  });

  const ranked = (Object.keys(scores) as CommunityKey[]).sort((a, b) => scores[b] - scores[a]);

  return {
    scores,
    primary: COMMUNITIES[ranked[0]],
    secondary: COMMUNITIES[ranked[1]],
  };
}
