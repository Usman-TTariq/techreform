const cityShape = (overrides) => ({
  metaDescription: "PLACEHOLDER — to be written per city",
  heroHeadlinePrefix: "Custom",
  heroHeadlineAccent: "Mobile App Development Services",
  heroHeadlineSuffix: "for Intuitive, High-Growth Apps",
  heroIntro: "PLACEHOLDER — city-specific intro paragraph",
  industriesFirstWord: "We Have",
  industriesSecondWord: "Served",
  industriesThirdWord: "Industries",
  industriesIntro: "PLACEHOLDER — city-specific industries blurb",
  formIntro: "PLACEHOLDER — city-specific contact form intro",
  ...overrides,
});

export const CITIES = {
  "new-york": cityShape({
    name: "New York",
    state: "NY",
    stateFull: "New York",
    slug: "new-york",
    metaTitle: "Top Mobile App Development Services & Experts in New York, NY",
    heroHeadlineSuffix: "for Intuitive, High-Growth Apps in New York",
  }),
  "los-angeles": cityShape({
    name: "Los Angeles",
    state: "CA",
    stateFull: "California",
    slug: "los-angeles",
    metaTitle: "Top Mobile App Development Services & Experts in Los Angeles, CA",
    heroHeadlineSuffix: "for Intuitive, High-Growth Apps in Los Angeles",
  }),
  chicago: cityShape({
    name: "Chicago",
    state: "IL",
    stateFull: "Illinois",
    slug: "chicago",
    metaTitle: "Top Mobile App Development Services & Experts in Chicago, IL",
    heroHeadlineSuffix: "for Intuitive, High-Growth Apps in Chicago",
  }),
  houston: cityShape({
    name: "Houston",
    state: "TX",
    stateFull: "Texas",
    slug: "houston",
    metaTitle: "Top Mobile App Development Services & Experts in Houston, TX",
    heroHeadlineSuffix: "for Intuitive, High-Growth Apps in Houston",
  }),
  dallas: cityShape({
    name: "Dallas",
    state: "TX",
    stateFull: "Texas",
    slug: "dallas",
    metaTitle: "Top Mobile App Development Services & Experts in Dallas, TX",
    heroHeadlineSuffix: "for Intuitive, High-Growth Apps in Dallas",
  }),
};

export const CITY_SLUGS = Object.keys(CITIES);
