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
    published: z.boolean().default(true),
  }),
});

// Optional text: blank in the dashboard means "not set".
const opt = z.string().optional().default('');

// Portfolio projects: client work (Our Work page) and website showcase (Creative Studio page).
const work = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/work' }),
  schema: z.object({
    title: z.string(),
    client: z.string(),
    projectFor: z.enum(['Client', 'EION Creative Ventures']).default('Client'),
    type: z.enum(['Creative Studio', 'Author-published']),
    category: opt,
    service: z.string(),
    bookType: opt,
    summary: z.string(),
    description: opt,
    whatWeDid: opt,
    features: z.array(z.string()).default([]),
    image: z.string(),
    imageAlt: z.string(),
    mobileImage: opt,
    mobileImageAlt: opt,
    gallery: z.array(z.object({ image: z.string(), alt: z.string(), view: z.enum(['Desktop', 'Mobile']).or(z.literal('')).optional().transform((v) => (v === 'Mobile' ? 'Mobile' : 'Desktop')) })).default([]),
    link: opt,
    linkLabel: z.string().default('Visit the site'),
    quote: opt,
    quoteBy: opt,
    showOnWork: z.boolean().default(true),
    showOnStudio: z.boolean().default(false),
    featured: z.boolean().default(false),
    studioFeatured: z.boolean().default(false),
    homeFeatured: z.boolean().default(false),
    order: z.number().default(100),
    permission: z.boolean().default(false),
    published: z.boolean().default(true),
  }),
});

// Client testimonials ("What authors say").
const testimonials = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/testimonials' }),
  schema: z.object({
    quote: z.string(),
    name: z.string(),
    role: opt,
    photo: opt,
    photoAlt: opt,
    homeFeatured: z.boolean().default(false),
    order: z.number().default(100),
    published: z.boolean().default(true),
  }),
});

// The About page (one file).
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

// The Creative Studio page (one file).
const item = z.object({ title: z.string(), text: opt });
const studio = defineCollection({
  loader: glob({ pattern: 'creative-studio.yaml', base: './src/content/pages' }),
  schema: z.object({
    heroEyebrow: z.string(),
    heroTitle: z.string(),
    heroIntro: z.string(),
    heroButton: z.string(),
    heroSecondButton: z.string(),
    heroImage: z.string(),
    heroImageAlt: z.string(),
    heroPhoneImage: opt,
    heroPhoneImageAlt: opt,
    servicesEyebrow: z.string(),
    servicesHeading: z.string(),
    services: z.array(z.object({ title: z.string(), text: z.string(), note: opt })).default([]),
    customText: z.string(),
    customButton: z.string(),
    portfolioEyebrow: z.string(),
    portfolioHeading: z.string(),
    portfolioIntro: z.string(),
    portfolioNote: opt,
    dashboardEyebrow: z.string(),
    dashboardHeading: z.string(),
    dashboardText: z.string(),
    dashboardPoints: z.array(item).default([]),
    dashboardNote: opt,
    dashboardImage: opt,
    dashboardImageAlt: opt,
    launchEyebrow: z.string(),
    launchHeading: z.string(),
    launchGroups: z.array(z.object({ title: z.string(), items: z.array(z.string()).default([]) })).default([]),
    launchLinkText: opt,
    stepsHeading: z.string(),
    steps: z.array(item).default([]),
    pairText: z.string(),
    pairButton: z.string(),
    finalHeading: z.string(),
    finalButton: z.string(),
  }),
});

// Published authors (Meet Our Authors page). Books are linked by their file name (slug).
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
    studioCard: card,
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
    workEyebrow: z.string(),
    workHeading: z.string(),
    workLinkText: z.string(),
    howEyebrow: z.string(),
    howHeading: z.string(),
    steps: z.array(z.object({ title: z.string(), text: z.string() })).default([]),
    whoEyebrow: z.string(),
    whoText: z.string(),
    whoItems: z.array(z.string()).default([]),
    whoButton: opt,
    studioBandEyebrow: z.string(),
    studioBandTitle: z.string(),
    studioBandAccent: opt,
    studioBandTitleEnd: opt,
    studioBandText: z.string(),
    studioBandButton: z.string(),
    studioBandImage: z.string(),
    studioBandImageAlt: z.string(),
    closingHeading: z.string(),
    closingText: z.string(),
    closingButton: z.string(),
  }),
});

export const collections = { books, work, testimonials, pages, settings, studio, authors, youngAuthors, home };
