export const resumeUrl = `${process.env.PUBLIC_URL}/Prajal_Dixit_Resume.pdf`;

export const profile = {
  name: "Prajal Dixit",
  role: "React Native Engineer",
  location: "Bengaluru, India",
  current: "React Native Developer at MFine",
  years: "4+",
  // Drop a square headshot in public/ (e.g. photo.jpg) and set photo: `${process.env.PUBLIC_URL}/photo.jpg`
  photo: null,
};

export const links = {
  email: "vkdixit46@gmail.com",
  linkedin: "https://www.linkedin.com/in/prajaldixit/",
  github: "https://github.com/PrajalDixit",
};

export const impact = [
  { value: "~30%", label: "faster lab-test booking screen loads at MFine" },
  { value: "8", label: "production and personal apps built or maintained" },
  { value: "4+", label: "years shipping React Native apps to iOS and Android" },
  { value: "2×", label: "Employee of the Month at iLEAD Group (2024)" },
];

export const projects = [
  {
    id: "mfine",
    name: "MFine",
    company: "MFine",
    year: "2025 - now",
    category: "Healthcare",
    tagline: "Consultations, lab tests, medicines and payments for patients and corporate users.",
    metric: { value: "Cult.fit", label: "membership integration, built end to end" },
    problem: "A healthcare app where slow screens and broken checkouts cost real patients time and the business real revenue.",
    contribution: [
      "Built the Cult.fit membership integration end to end: city selection, plan discovery and live API-driven plan screens.",
      "Owned and stabilised the hybrid medicine-ordering and checkout flow, fixing cart, edit and cross-platform bugs that were silently breaking purchases.",
      "Fixed TPA cancellation failures and a Scan & Pay re-upload defect, and added UTR-based payment reference tracking for finance reconciliation.",
      "Shipped corporate email verification, Aadhaar upload, Smart Reports and an in-app chatbot behind feature flags.",
      "Managed OTA updates and App Store / Play Store release cycles.",
    ],
    impact: "Rebuilt the lab-test booking flow and removed hidden bottlenecks, cutting screen load time by about 30% on iOS and Android, and launched a new fitness-membership revenue stream.",
    stack: ["React Native", "TypeScript", "Redux", "WebView bridge", "Feature flags", "OTA"],
    links: [
      { label: "App Store", href: "https://apps.apple.com/in/app/id1308944633" },
      { label: "Google Play", href: "https://play.google.com/store/apps/details?id=com.mfine" },
    ],
  },
  {
    id: "homeeducation",
    name: "HomeEducation",
    company: "5D Solutions",
    year: "2025",
    category: "EdTech",
    tagline: "A student platform for schedules, exam tracking and school updates.",
    metric: { value: "Faster", label: "load times with API response caching" },
    problem: "Students were waiting on slow screens, and the app was not ready for users who need higher contrast or other languages.",
    contribution: [
      "Profiled the app end to end, instrumented latency hotspots and reduced render time.",
      "Implemented API response caching for noticeably faster loads on Android and iOS.",
      "Improved contrast ratios and text readability, and laid the groundwork for multi-language and RTL support.",
    ],
    impact: "A faster, more accessible app, prepared for expansion beyond its first market.",
    stack: ["React Native", "Performance", "Caching", "Accessibility", "i18n"],
    links: [],
  },
  {
    id: "nerovega",
    name: "Nerovega",
    company: "Deqode",
    year: "2024 - 25",
    category: "Commerce",
    tagline: "A cross-platform shopping app, built from an empty repo to both stores.",
    metric: { value: "iOS + Android", label: "shipped to both stores" },
    problem: "A new e-commerce product that needed an app architecture, smooth browsing over large catalogues, and support for international markets.",
    contribution: [
      "Set up the project architecture, screen flow and data flow, and integrated every backend API.",
      "Overhauled how product listings load and render, so large catalogues scroll without dropped frames or late images.",
      "Added right-to-left layout and multi-language configuration without rebuilding existing screens.",
    ],
    impact: "Released to the App Store and Google Play as a production app, ready for new geographies.",
    stack: ["React Native", "E-commerce", "List performance", "i18n", "RTL"],
    links: [],
  },
  {
    id: "ananda",
    name: "Ananda Wellbeing",
    company: "iLEAD Group",
    year: "2023 - 24",
    category: "Healthcare",
    tagline: "Wellness assessments, consultations and programmes from Ananda in the Himalayas.",
    metric: { value: "Live", label: "on the App Store" },
    problem: "A wellness brand bringing assessments, expert consultations and programmes to a mobile app.",
    contribution: [
      "Built doctor and expert consultation flows.",
      "Handled live data sync, async operations and native device features that behave differently on Android and iOS.",
    ],
    impact: "Consultation flows used by guests of one of the world's best-known wellness retreats.",
    stack: ["React Native", "Consultations", "Native modules"],
    links: [{ label: "App Store", href: "https://apps.apple.com/app/id6450896328" }],
  },
  {
    id: "uep",
    name: "UEP Viewer",
    company: "iLEAD Group",
    year: "2022 - 24",
    category: "Commerce",
    tagline: "Browse and buy photos and videos from cheer and dance competitions.",
    metric: { value: "From scratch", label: "architecture and components" },
    problem: "An event app that had to keep growing features without breaking what was already live.",
    contribution: [
      "Built the app from the ground up, including its data architecture and screen component library.",
      "Owned Android and iOS releases: signing certificates, provisioning profiles, store submissions and compliance reviews.",
    ],
    impact: "A structure that let the team add features quickly, and releases that went out on schedule.",
    stack: ["React Native", "Architecture", "Release management"],
    links: [],
  },
  {
    id: "zipsecure",
    name: "ZipSecure",
    company: "iLEAD Group",
    year: "2022 - 24",
    category: "Mobile",
    tagline: "Real-time security workflows for gated communities.",
    metric: { value: "Real-time", label: "sync across Android and iOS" },
    problem: "Security staff and residents needed live updates that work the same way on very different devices.",
    contribution: [
      "Built real-time security workflows with live data sync and async operations.",
      "Handled native device interactions that behave differently across platforms.",
    ],
    impact: "Dependable live workflows for gate security on both platforms.",
    stack: ["React Native", "Real-time", "Native integrations"],
    links: [],
  },
  {
    id: "geophotologger",
    name: "GeoPhotoLogger",
    company: "Personal project",
    year: "2025",
    category: "Open source",
    tagline: "Capture photos with GPS coordinates, upload to Firebase and see them on a map.",
    metric: { value: "Open", label: "source on GitHub" },
    problem: "A side project to work with the camera, location, maps and cloud storage together in one app.",
    contribution: [
      "Camera and gallery capture with automatic GPS lookup and coordinate preview.",
      "Uploads images to Firebase Storage and metadata to Firestore.",
      "Map screen with a marker per photo and thumbnail previews.",
    ],
    impact: "A complete, readable React Native 0.76 + TypeScript codebase anyone can review.",
    stack: ["React Native 0.76", "TypeScript", "Firebase", "react-native-maps", "Geolocation"],
    links: [{ label: "GitHub", href: "https://github.com/PrajalDixit/GeoPhotoLogger" }],
  },
  {
    id: "solar",
    name: "Solar Proposal Generator",
    company: "Personal project",
    year: "2026",
    category: "Web",
    tagline: "A web tool that turns system size and tariff into a branded, multi-page solar proposal PDF.",
    metric: { value: "No backend", label: "PDFs generated in the browser" },
    problem: "A solar installer needed every customer quote to be consistent and branded, with generation, subsidy and payback figures calculated the same way each time.",
    contribution: [
      "Built the form-to-PDF flow in React 19 and Vite, rendering a multi-page A4 proposal with @react-pdf/renderer entirely client-side.",
      "Modelled yearly and monthly generation, the PM Surya Ghar residential subsidy, payback, 25-year savings and CO₂ offset from a few inputs.",
      "Added a live PDF preview before download, and on phones opens the file in the native viewer because mobile browsers won't show a PDF inside an iframe.",
      "Kept company details, components, warranty and terms in one config file, so the proposal can be rebranded without touching the code.",
    ],
    impact: "A complete, consistent customer proposal from one short form, on desktop or phone.",
    stack: ["React 19", "Vite", "@react-pdf/renderer", "JavaScript"],
    links: [{ label: "GitHub", href: "https://github.com/PrajalDixit/Solar-Estimation-" }],
  },
];

export const experience = [
  {
    company: "MFine",
    role: "React Native Developer",
    period: "Nov 2025 - Present",
    location: "Bengaluru",
    context: "Healthcare SaaS",
    points: [
      "Launched the Cult.fit membership integration, a new revenue stream inside the app.",
      "Stabilised the revenue-critical medicine checkout and payment flows.",
      "Added UTR-based payment tracking so finance can reconcile without manual follow-up.",
    ],
  },
  {
    company: "5D Solutions",
    role: "React Native Developer",
    period: "Jul 2025 - Oct 2025",
    location: "Pune",
    context: "EdTech · HomeEducation",
    points: [
      "Reduced render time and added API response caching.",
      "Improved accessibility and prepared the app for multi-language and RTL.",
    ],
  },
  {
    company: "Deqode",
    role: "Solution Engineer",
    period: "Oct 2024 - Jun 2025",
    location: "Indore",
    context: "E-commerce · Nerovega",
    points: [
      "Built Nerovega from scratch and shipped it to both stores.",
      "Made large product catalogues scroll smoothly; added RTL and multi-language.",
    ],
  },
  {
    company: "iLEAD Group",
    role: "Software Developer",
    period: "Aug 2022 - Sep 2024",
    location: "Indore",
    context: "UEP Viewer · ZipSecure · Ananda Wellbeing",
    points: [
      "Built UEP Viewer's architecture and component library from the ground up.",
      "Owned the full Android and iOS release process across multiple apps.",
      "Employee of the Month, January and March 2024.",
    ],
  },
];

export const skills = [
  { group: "Mobile core", items: ["React Native", "iOS", "Android", "React Navigation", "Metro"] },
  { group: "Native & UI", items: ["Reanimated", "Gesture Handler", "WebView bridges", "Deep linking", "Native modules"] },
  { group: "Languages & state", items: ["TypeScript", "JavaScript", "Redux", "Redux Toolkit", "Context API"] },
  { group: "Shipping", items: ["App Store", "Google Play", "OTA / CodePush", "CI/CD", "Feature flags", "Code review"] },
  { group: "Integrations", items: ["REST APIs", "Firebase", "Payments", "Third-party SDKs", "Maps & location"] },
  { group: "Debugging", items: ["Performance profiling", "Flipper", "React DevTools", "Xcode", "Android Studio"] },
];

export const principles = [
  { title: "Measure before I optimise", body: "I profile first and fix the bottleneck the numbers point to, not the one I guessed." },
  { title: "Own it through the store", body: "Signing, provisioning, store review and OTA updates are part of the job, not someone else's problem." },
  { title: "Ship risky things behind flags", body: "New features go to a small group first, so a bad day stays small." },
  { title: "Fix the cause, not the symptom", body: "Silent checkout and login failures get traced to the root, then covered so they stay fixed." },
  { title: "Respect both platforms", body: "Android and iOS behave differently. I test on both and handle the differences on purpose." },
];

export const faqs = [
  { q: "What kind of role are you looking for?", a: "A full-time React Native role on a product team, where I can own mobile features from design hand-off to the store release." },
  { q: "Where are you based?", a: "Bengaluru, India. I'm open to on-site, hybrid or remote roles." },
  { q: "Do you work with native code?", a: "Yes, where React Native needs it: WebView bridges, native device features, Xcode and Android Studio debugging, signing and provisioning." },
  { q: "Have you shipped apps to the stores?", a: "Yes. I've built and released apps to both the App Store and Google Play, and I've managed OTA updates and release cycles in production." },
  { q: "Can I see code you've written?", a: "Client work is under NDA, but two projects on my GitHub are public: GeoPhotoLogger, a React Native + TypeScript app, and a React web tool that generates solar proposal PDFs." },
  { q: "What's the fastest way to reach you?", a: "Email or LinkedIn. My resume has my phone number." },
];
