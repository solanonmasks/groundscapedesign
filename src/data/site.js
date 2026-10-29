// =============================================================================
// site.js — ALL editable business info and text lists live in this one file.
// Change a value here, save, and the page updates. You don't need to touch
// index.astro for everyday text changes.
// =============================================================================

export const site = {
  name: 'Groundscape Design and Build',
  legalName: 'Groundscape Design and Build Ltd.',
  companyNumber: 'BC1595341',
  title: 'Groundscape Design and Build | Landscape construction, Vancouver',
  description:
    'Full-service landscape construction for homes and businesses across Vancouver. Design, excavation, hardscape, concrete, decks and planting, managed by one team from first plan to final finish.',

  // ---------------------------------------------------------------------------
  // TO CONFIRM WITH THE CLIENT: phone number and email.
  // The design prototype did not include a phone number or email address, so
  // these are placeholders. The email is used by the quote form (when no
  // FORM_ENDPOINT is set) and in the search-engine data. The phone is left
  // empty on purpose; when you add one it is shown in the form's error message
  // and added to the search-engine data automatically.
  //   phone.display = how it looks on the page, e.g. '(604) 555-0123'
  //   phone.tel     = digits only for tap-to-call, e.g. '+16045550123'
  // ---------------------------------------------------------------------------
  phone: { display: '', tel: '' },
  email: 'info@groundscapedesign.ca',

  address: {
    locality: 'Vancouver',
    region: 'BC',
    country: 'CA',
    display: 'Vancouver, BC',
  },
  hours: '', // e.g. 'Mon–Fri 7am–5pm' (not in the design yet)
  areaServed: 'Vancouver, BC',

  rating: { value: '5.0', source: 'HomeStars' },
  // TO CONFIRM: link to the client's own HomeStars profile page.
  homestarsUrl: 'https://homestars.com',

  socials: [
    // { label: 'Instagram', url: 'https://instagram.com/...' },
  ],

  // Quote form handler. Leave as "" to use the email fallback (opens the
  // visitor's email app). Paste a Formspree endpoint to send directly,
  // e.g. 'https://formspree.io/f/abcdwxyz'. See README.md.
  FORM_ENDPOINT: '',
};

// Header navigation links (label + section id on the page).
export const nav = [
  { label: 'Services', href: '#services' },
  { label: 'Projects', href: '#work' },
  { label: 'Process', href: '#process' },
  { label: 'Contact', href: '#quote' },
];

// Hero "strata" bars at the base of the hero photo (top to bottom).
export const strata = [
  { color: '#7E8C5A', height: '14px' },
  { color: '#C58B52', height: '10px' },
  { color: '#8A8378', height: '8px' },
  { color: '#EDE8DE', height: '5px' },
];

// Services list. `image` is the file name in src/assets/ (see index.astro).
export const services = [
  { title: 'Landscape design & installation', image: 'design', alt: 'Landscaped garden with planting and lawn', text: 'Planning and installing planting, lawns, garden beds and landscape lighting, shaped around how you’ll use the space.' },
  { title: 'Hardscaping & paver patios', image: 'pavers', alt: 'Paver patio and walkway', text: 'Paver patios, walkways and outdoor living areas, built on a properly prepared base.' },
  { title: 'Retaining walls', image: 'walls', alt: 'Stone retaining wall in a terraced yard', text: 'Retaining walls that hold grade, create usable levels and add structure to the yard.' },
  { title: 'Concrete driveways, walkways & slabs', image: 'concrete', alt: 'Concrete driveway and walkway', text: 'Concrete driveways, walkways and slabs for homes and commercial properties.' },
  { title: 'Excavation & site preparation', image: 'excavation', alt: 'Excavator preparing a building site', text: 'Excavation, grading and site prep so every layer above it is built right.' },
  { title: 'Fencing', image: 'fenceA', alt: 'Wooden privacy fence', text: 'Fencing solutions for privacy, security and a clean property line.' },
  { title: 'Custom decks', image: 'decks', alt: 'Custom wooden deck', text: 'Custom deck construction that extends your living space outdoors.' },
];

// Process steps. `color` is the bar on top of each step.
export const steps = [
  { title: 'Plan', color: '#7E8C5A', text: 'We start with your vision and budget, then plan the design and the work it will take to build it.' },
  { title: 'Prepare', color: '#C58B52', text: 'Excavation and site preparation set the foundation for everything that follows.' },
  { title: 'Build & finish', color: '#191A17', text: 'Our crew builds every element and handles the finishing touches, with attention to detail throughout.' },
];

// Recent projects grid. The FIRST item is the big 2×2 tile on desktop.
export const gallery = [
  { image: 'g1', alt: 'Paver patio and outdoor living area' },
  { image: 'g2', alt: 'Retaining wall' },
  { image: 'g6', alt: 'Concrete driveway' },
  { image: 'deck2', alt: 'Custom deck' },
  { image: 'g4', alt: 'Fencing and planting' },
];

// Quick facts under the quote heading.
export const facts = [
  { label: 'Based in', value: 'Vancouver, BC' },
  { label: 'Clients', value: 'Residential & commercial' },
  { label: 'Company no.', value: 'BC1595341' },
];

// Quote form: service chips and property types.
export const chips = ['Design', 'Pavers', 'Retaining wall', 'Concrete', 'Excavation', 'Fencing', 'Deck'];
export const propertyTypes = ['Residential', 'Commercial', 'Strata'];
