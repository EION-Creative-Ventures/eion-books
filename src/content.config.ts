// Content collections for the EION Books site.
// Everything here is edited through the dashboard at /admin.
import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const books = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/books' }),
  schema: z.object({
    title: z.string(),
    subtitle: z.string().optional(),
    author: z.string(),
    illustrator: z.string().optional(),
    category: z.enum(['Picture book', 'For parents', "Children's book", 'Anthology']),
    series: z.string().optional(),
    cover: z.string(),
    coverAlt: z.string(),
    description: z.string().optional().default(''),
    buyLabel: z.string().default('Buy the book'),
    buyUrl: z.string().optional(),
    featured: z.boolean().default(false),
    order: z.number().default(100),
    homeFeatured: z.boolean().default(false),
    homeOrder: z.number().default(100),
    showOnPublishing: z.boolean().default(false),
    projectLabel: z.enum(['', 'EION Books Original', 'Publishing & Production', 'Formatting & Layout', 'Formatting & Design']).optional().default(''),
    published: z.boolean().default(true),
  }),
});

// Optional text: blank in the dashboard means "not set".
const opt = z.string().optional().default('');

const pages = defineCollection({
  loader: glob({ pattern: 'about.md', base: './src/content/pages' }),
  schema: z.object({
    heroEyebrow: z.string(),
    heroTitle: z.string(),
    heroAccent: opt,
    heroIntro: z.string(),
    storyHeading: z.string(),
    beliefs: z.array(z.object({ title: z.string(), text: z.string() })).default([]),
    founderName: z.string(),
    founderBio: z.string(),
    credentials: opt,
    headshot: z.string(),
    headshotAlt: z.string(),
    authorSiteUrl: opt,
    litkidsUrl: opt,
  }),
});

// Site-wide settings: contact details, links, footer text (one file).
const settings = defineCollection({
  loader: glob({ pattern: 'site.yaml', base: './src/content/settings' }),
  schema: z.object({
    contactEmail: opt,
    startProjectUrl: opt,
    footerTagline: opt,
    footerBlurb: opt,
    instagramUrl: opt,
    linkedinUrl: opt,
    facebookUrl: opt,
    privacyUrl: opt,
  }),
});

const authors = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/authors' }),
  schema: z.object({
    name: z.string(),
    photo: opt,
    photoAlt: opt,
    authorOf: opt,
    bio: opt,
    books: z.array(z.string()).default([]),
    websiteUrl: opt,
    instagramUrl: opt,
    facebookUrl: opt,
    otherLinkLabel: opt,
    otherLinkUrl: opt,
    order: z.number().default(100),
    published: z.boolean().default(true),
  }),
});

// Young authors: names only, by design. There is deliberately no photo field.
const youngAuthors = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/young-authors' }),
  schema: z.object({
    name: z.string(),
    anthology: z.string(),
    order: z.number().default(100),
    published: z.boolean().default(true),
  }),
});

// The home page (one file).
const card = z.object({ eyebrow: z.string(), title: z.string(), text: z.string(), items: z.array(z.string()).default([]), linkText: z.string() });
const home = defineCollection({
  loader: glob({ pattern: 'home.yaml', base: './src/content/pages' }),
  schema: z.object({
    heroEyebrow: z.string(),
    heroTitle: z.string(),
    heroAccent: opt,
    heroIntro: z.string(),
    heroButton: z.string(),
    heroSecondButton: z.string(),
    shelfCaption: opt,
    ownership: z.array(z.object({ title: z.string(), text: z.string() })).default([]),
    servicesEyebrow: z.string(),
    servicesHeading: z.string(),
    publishingCard: card,
    founderEyebrow: z.string(),
    founderQuote: z.string(),
    founderName: z.string(),
    founderRole: opt,
    founderLinkText: opt,
    founderPhoto: opt,
    founderPhotoAlt: opt,
    booksEyebrow: z.string(),
    booksHeading: z.string(),
    booksLinkText: z.string(),
    authorsLinkText: opt,
    howEyebrow: z.string(),
    howHeading: z.string(),
    steps: z.array(z.object({ title: z.string(), text: z.string() })).default([]),
    whoEyebrow: z.string(),
    whoText: z.string(),
    whoItems: z.array(z.string()).default([]),
    whoButton: opt,
    promoHeading: z.string(),
    promoText: z.string(),
    promoButton: z.string(),
    promoUrl: z.string().url(),
    closingHeading: z.string(),
    closingText: z.string(),
    closingButton: z.string(),
  }),
});

// The Publishing Services page (one file).
const publishing = defineCollection({
  loader: glob({ pattern: 'publishing-services.yaml', base: './src/content/pages' }),
  schema: z.object({
    heroEyebrow: z.string(), heroTitle: z.string(), heroAccent: opt, heroIntro: z.string(), heroButton: z.string(),
    modelEyebrow: z.string(), modelHeading: z.string(), modelText: z.string(),
    youKeepLabel: z.string(), weProvideLabel: z.string(),
    youKeep: z.array(z.string()).default([]),
    weProvide: z.array(z.string()).default([]),
    modelNote: opt,
    phasesEyebrow: z.string(), phasesHeading: z.string(),
    phases: z.array(z.object({ title: z.string(), items: z.array(z.string()).default([]) })).default([]),
    phasesNote: opt,
    waysEyebrow: z.string(), waysHeading: z.string(),
    ways: z.array(z.object({ title: z.string(), text: z.string(), linkText: z.string(), highlight: opt })).default([]),
    waysNote: opt,
    booksEyebrow: z.string(), booksHeading: z.string(), booksText: opt, booksLinkText: opt,
    faqEyebrow: z.string(), faqHeading: z.string(),
    faqs: z.array(z.object({ question: z.string(), answer: z.string() })).default([]),
    closingHeading: z.string(), closingButton: z.string(),
  }),
});

// The Our Books page text (one file).
const ourBooks = defineCollection({
  loader: glob({ pattern: 'our-books.yaml', base: './src/content/pages' }),
  schema: z.object({
    heroEyebrow: z.string(), heroTitle: z.string(), heroAccent: opt,
    intro: z.array(z.string()).default([]),
    shelfEyebrow: z.string(), shelfTitle: z.string(),
    bandTitle: z.string(), bandText: opt, bandButton: z.string(),
  }),
});

// The Start a Project page and its thank-you page (one file).
const list = z.array(z.string()).default([]);
const startProject = defineCollection({
  loader: glob({ pattern: 'start-project.yaml', base: './src/content/pages' }),
  schema: z.object({
    eyebrow: z.string(), heading: z.string(), intro: opt,
    nextEyebrow: z.string(), nextSteps: list, ownership: opt,
    nameLabel: z.string(), emailLabel: z.string(), titleLabel: z.string(),
    bookTypeLabel: z.string(), bookTypes: list,
    stageLabel: z.string(), stages: list,
    helpLabel: z.string(), publishingHeading: z.string(), publishingServices: list,
    notSureLabel: opt,
    optionLabel: z.string(), options: list,
    timelineLabel: z.string(), timelines: list,
    messageLabel: z.string(), messageHint: opt, privacyNote: opt, submitButton: z.string(),
    thanksEyebrow: z.string(), thanksHeading: z.string(), thanksText: opt, thanksButton: z.string(),
  }),
});

const privacy = defineCollection({
  loader: glob({ pattern: 'privacy.md', base: './src/content/pages' }),
  schema: z.object({
    title: z.string(),
    effectiveDate: z.string(),
    draftNotice: opt,
  }),
});

export const collections = { books, pages, settings, authors, youngAuthors, home, publishing, ourBooks, startProject, privacy };
