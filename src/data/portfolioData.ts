import heroPortraitImg from '../assets/images/pure_cutout_boy_1790577348675.jpg';
import workspaceLaptopImg from '../assets/images/workspace_laptop_1790576635015.jpg';
import projectPokedexImg from '../assets/images/pokedex_vercel_cover_1792047791822.jpg';
import projectStudyMateImg from '../assets/images/studymate_planner_cover_1790698801915.jpg';
import projectNovaImg from '../assets/images/nova_ai_portfolio_cover_1790661711772.jpg';
import projectAshlineImg from '../assets/images/project_ashline_game_1790502963600.jpg';
import projectAriaImg from '../assets/images/aria_voice_assistant_1790503167933.jpg';
import projectBowlerImg from '../assets/images/bowlers_academy_1790503945939.jpg';
import projectBarberImg from '../assets/images/the_new_barber_1790504064445.jpg';
import projectPokharaBarberImg from '../assets/images/barber_shop_pokhara_1790528051665.jpg';

export { workspaceLaptopImg };

export interface Project {
  id: string;
  title: string;
  subtitle: string;
  category: string;
  year: string;
  client: string;
  role: string;
  image: string;
  description: string;
  challenge: string;
  solution: string;
  impact: string[];
  technologies: string[];
  externalUrl?: string;
  featured: boolean;
}

export const PERSONAL_INFO = {
  name: 'Aanam Thapa',
  grade: 'Class 4 (Standard IV)',
  role: 'Junior Coder & Student Creator',
  valueStatement: 'I am a 4th grade student who loves building real playable 3D games, creature encyclopedias & Pokédex apps, student productivity suites, and voice-activated AI tools.',
  shortBio:
    'Studying in Class 4 (Standard IV). Passionate about game mechanics, real-time PokéAPI creature encyclopedias, student productivity tools, browser-native AI assistants, and modern business flagships. Creator of Pokédex Web App, StudyMate Planner, Nova AI Assistant, ASHLINE, The New Barber, Barber Shop Pokhara, Bowler\'s Academy, and ARIA voice reminders.',
  heroImage: heroPortraitImg,
  status: 'Class IV Student · Learning & Coding Projects Daily',
  location: 'Mumbai, India',
  phone: '8779431446',
  email: 'manaathapa14@gmail.com',
  github: 'https://github.com',
  linkedin: 'https://linkedin.com',
};

export const PROJECTS: Project[] = [
  {
    id: 'pokedex-web-app',
    title: 'POKÉ GO HUB // POKÉMON TACTICS & DEX',
    subtitle: 'Comprehensive Pokémon GO strategy platform and creature hub featuring community tactics, raid battle tips, creature stats, and ethical gameplay guides.',
    category: 'Interactive Web App',
    year: '2025',
    client: 'AA Studio Labs',
    role: 'Creator & Frontend Developer',
    image: projectPokedexImg,
    description:
      'A sleek, responsive Pokémon GO tactics and creature hub deployed live on Netlify. Built to provide trainers with verified ethical gameplay strategies, battle counters, creature stats, user-curated guides, and interactive tools designed to elevate player performance without illicit methods.',
    challenge:
      'Designing an intuitive tactical platform that curates high-level raid recommendations, community battle guides, and verified creature data with responsive glassmorphism navigation.',
    solution:
      'Engineered responsive grid cards with fast search filtering, modular tactical guides, dynamic UI components, and global high-availability hosting via Netlify CDN.',
    impact: [
      'Live deployment accessible worldwide at poke-go-hub.netlify.app',
      'Curated database of ethical gameplay strategies, gym defense, and raid counters',
      'Community-driven tips and battle tools with responsive mobile & desktop UX',
      'High-contrast modern interface with instant navigation and fast load speeds',
    ],
    technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Vite', 'Netlify Deployment', 'REST APIs'],
    externalUrl: 'https://poke-go-hub.netlify.app/',
    featured: true,
  },
  {
    id: 'studymate-school-planner',
    title: 'STUDYMATE // SCHOOL & TUITION PLANNER',
    subtitle: 'All-in-one student productivity suite featuring school/tuition timetables, homework tracker with celebration bursts, exam countdowns, study streaks, and Pomodoro focus timer.',
    category: 'Student Productivity Suite',
    year: '2026',
    client: 'AA Studio Education',
    role: 'Creator & Lead Developer',
    image: projectStudyMateImg,
    description:
      'StudyMate is a responsive web application designed for students balancing school classes and private tuitions. Built with dual-language support (English & Nepali), interactive daily timetable schedules, homework priority checklists, exam countdown badges, offline-capable local storage persistence, animated dark/light themes, and a customizable Pomodoro focus timer.',
    challenge:
      'Harmonizing weekly timetable organization, task state machine transitions with visual micro-interactions, streak habit tracking, and countdown calculators in a lightweight, zero-dependency browser app.',
    solution:
      'Engineered an offline-first localStorage data store, particle burst reward animations upon homework completion, day pill carousel navigation, and bilingual localization toggles.',
    impact: [
      'Live playable deployment accessible at /studymate.html',
      'School vs Tuition tagging with custom color-coded schedule items',
      'Streak counter habit tracker with flame animations to encourage daily consistency',
      'Integrated Pomodoro Focus Timer with circular SVG progress indicator and break modes',
    ],
    technologies: ['Vanilla JavaScript', 'Local Storage Architecture', 'SVG Circular Progress', 'CSS Design Tokens', 'Bilingual i18n'],
    externalUrl: '/studymate.html',
    featured: true,
  },
  {
    id: 'nova-ai-assistant',
    title: 'NOVA // BROWSER AI ASSISTANT',
    subtitle: 'Free browser-native AI assistant for writing, thinking, coding, and learning with 20M tokens refreshed every 5 hours.',
    category: 'Free AI Assistant',
    year: '2026',
    client: 'AA Studio Labs',
    role: 'Creator & Frontend Engineer',
    image: projectNovaImg,
    description:
      'Nova is a private, client-side AI assistant environment designed for thinking, brainstorming, coding, and decision making. Engineered with a 20,000,000 token refill engine every 5 hours, synchronized token balance pills, instant heuristic responses, code snippet markdown formatting, and an animated cosmic canvas.',
    challenge:
      'Designing a frictionless zero-login AI experience that runs 100% inside the client browser, maintaining synchronized token state across multiple UI navigation components with instant response generation.',
    solution:
      'Created a token cycle manager in localStorage with auto-refill intervals, responsive chat composer with keyboard shortcuts, markdown code rendering, and custom particle background.',
    impact: [
      'Live playable deployment accessible right at /nova.html',
      '20 Million token pool with automatic 5-hour refresh cycle',
      'Dual synchronized real-time token HUD pills in nav and composer',
      'Zero server latency, complete client-side privacy, no sign-up required',
    ],
    technologies: ['Vanilla JavaScript', 'HTML5 Canvas', 'CSS Animations', 'Token Architecture', 'Markdown Parser'],
    externalUrl: '/nova.html',
    featured: true,
  },
  {
    id: 'ashline-black-site',
    title: 'ASHLINE // BLACK SITE',
    subtitle: 'Tactical survival arena game featuring 12 operators, 16 modular weapons, and offline/multiplayer combat.',
    category: '3D Action Web Game',
    year: '2024',
    client: 'Ashline Nexus Studios',
    role: 'Creator & Game Developer',
    image: projectAshlineImg,
    description:
      'ASHLINE // Black Site is an intense web-based first-person survival combat arena. Built with smooth WASD movement, mouse-look aiming, multiple tactical operators, realistic recoil and reload state animations, custom audio effects, and both offline arena and multiplayer modes.',
    challenge:
      'Making a real fast 3D FPS browser game with zero install time that works smoothly with mouse locking, weapon animations, and sound effects.',
    solution:
      'Created custom WebGL render loops, responsive keyboard/mouse controls (WASD, sprint, jump, crouch), and weapon loadout menus.',
    impact: [
      'Live playable deployment at aanamashlinegame.netlify.app',
      '12 playable operators with custom loadout stats',
      '16 weapons & equipment items ready in armory',
      'Runs right inside the browser with zero downloads needed',
    ],
    technologies: ['Three.js / WebGL', 'TypeScript', 'Web Audio API', 'Netlify Edge', 'Vite', 'CSS Scanlines'],
    externalUrl: 'https://aanamashlinegame.netlify.app/',
    featured: true,
  },
  {
    id: 'barber-shop-pokhara',
    title: 'BARBERSHOP.POKHARA',
    subtitle: 'High-energy precision grooming & fast appointment reservation portal for Baglung Barber Shop in Pokhara, Nepal.',
    category: 'Commercial Barber Booking Platform',
    year: '2024',
    client: 'Baglung Barber Shop Pokhara',
    role: 'Creator & Frontend Developer',
    image: projectPokharaBarberImg,
    description:
      'Barbershop.pokhara is a high-impact, modern web portal designed for Baglung Barber Shop in Pokhara, Nepal. Built with a bold dark-aesthetic theme featuring Bebas Neue display typography, gold/amber accents, a 30-second online appointment booking workflow, precision haircut & hot-towel shave pricing menus, master barber profiles, and direct WhatsApp contact channels.',
    challenge:
      'Crafting an ultra-fast, mobile-first booking experience with zero lag that enables tourists and Pokhara locals to schedule haircuts, beard trims, and grooming packages in under 30 seconds.',
    solution:
      'Engineered a lightweight, responsive single-page web app with interactive service selection, real-time total calculation, direct WhatsApp/phone dispatching, and crisp performance hosted on Netlify Edge.',
    impact: [
      'Live deployment running at barber-shop-pokhara.netlify.app',
      'Instant 30-second appointment booking system',
      'Full pricing menu for haircuts, beard styling, & hot-towel treatments',
      'Direct mobile phone and WhatsApp booking integration',
    ],
    technologies: ['JavaScript', 'Bebas Neue & Inter', 'Netlify Edge', 'Responsive UI', 'WhatsApp Booking API'],
    externalUrl: 'https://barber-shop-pokhara.netlify.app/',
    featured: true,
  },
  {
    id: 'the-new-barber',
    title: 'THE NEW BARBER BOUDHA',
    subtitle: 'Premium digital flagship and appointment booking platform for premier barbershop in Kathmandu.',
    category: 'Full-Stack Business Platform',
    year: '2024',
    client: 'The New Barber Nepal',
    role: 'Creator & Frontend Architect',
    image: projectBarberImg,
    description:
      'The New Barber is an elegant, high-end digital flagship crafted for a luxury barbershop in Boudha, Kathmandu. Features an editorial dark/gold visual aesthetic, service catalogs (haircuts, hot towel shaves, beard sculpting), appointment booking engine, Google Maps branch locators, and Schema.org LocalBusiness SEO integration.',
    challenge:
      'Translating the tactile luxury, warm ambiance, and craftsmanship of a master barbershop into an ultra-responsive web platform with fast booking flows and rich structured business data.',
    solution:
      'Designed a sleek editorial layout with Cormorant Garamond typography, responsive service menus, instant client appointment request forms, and localized SEO schema markup.',
    impact: [
      'Live production deployment at the-new-barber.ai.studio',
      'Seamless online appointment scheduling & service picker',
      'Integrated branch directions, operating hours & contact desk',
      'Schema.org LocalBusiness structured SEO optimization',
    ],
    technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Cormorant Garamond', 'Schema.org SEO', 'AI Studio Edge'],
    externalUrl: 'https://the-new-barber.ai.studio/',
    featured: true,
  },
  {
    id: 'bowlers-academy',
    title: "BOWLER'S ACADEMY",
    subtitle: 'Master the art of cricket bowling: outswing, inswing, lethal yorkers, bouncers, and match strategy drills.',
    category: 'Interactive Sports & Training Platform',
    year: '2024',
    client: "Bowler's Academy",
    role: 'Creator & Web Developer',
    image: projectBowlerImg,
    description:
      "Bowler's Academy is a comprehensive web training companion for cricket fast bowlers, swing bowlers, and cricket lovers. Features in-depth pitch trajectory guides for outswing, inswing, seam movement, and reverse swing, plus tactical match strategy playbooks (death overs, test match fields), interactive cricket bowling quizzes, and physical bowling drills.",
    challenge:
      'Designing an engaging, interactive cricket bowling academy that breaks down complex physics (seam angle, wrist position, aerodynamics, pitch length) into crisp, easy-to-follow visual lessons and interactive quizzes.',
    solution:
      'Engineered an interactive multi-tab web application with custom pitch diagram visualizations, match situation simulators, quiz score engines, and responsive drill routines.',
    impact: [
      'Live deployment running at aanambowleracademy.netlify.app',
      'Detailed tactical guides for Swing, Seam, Yorkers & Slower balls',
      'Interactive Match Strategy simulator & Bowling IQ Quiz',
      'Curated physical warmups, runup drills, and safety guidelines',
    ],
    technologies: ['JavaScript', 'CSS Grid & Flexbox', 'Interactive Quizzes', 'Responsive UI', 'Netlify Edge'],
    externalUrl: 'https://aanambowleracademy.netlify.app/',
    featured: true,
  },
  {
    id: 'aria-voice-reminders',
    title: 'ARIA · VOICE REMINDERS',
    subtitle: 'Smart voice assistant & reminder scheduler featuring speech synthesis, audio alarms, and aurora glass aesthetics.',
    category: 'Smart Voice Application',
    year: '2024',
    client: 'Aria Intelligent Labs',
    role: 'Creator & Frontend Developer',
    image: projectAriaImg,
    description:
      'Aria is an ambient browser-based voice reminders app. It speaks reminders aloud using Web Speech synthesis, plays alarm chimes, lets you preview speech phrases, and keeps your schedule saved safely in your browser.',
    challenge:
      'Making a talking voice assistant that speaks clearly in the browser without any complicated logins or external servers.',
    solution:
      'Integrated the Web Speech Synthesis API and Web Audio oscillator chimes with beautiful glowing aurora glass cards and instant local storage.',
    impact: [
      'Live deployment running at aria-voice-reminder.netlify.app',
      'Instant voice preview and acoustic alarm testing',
      'Private local storage keeping reminders safe on device',
      'Clean light/dark aurora glass UI design',
    ],
    technologies: ['Web Speech API', 'Web Audio API', 'CSS Aurora Glass', 'TypeScript', 'LocalStorage', 'Netlify Edge'],
    externalUrl: 'https://aria-voice-reminder.netlify.app/',
    featured: true,
  },
];

// Unified "Work & Capabilities" combining skills, coding process, services/offerings
export const UNIFIED_WORK_DATA = {
  codingSkills: [
    { name: 'Game Development (3D / WebGL)', level: 'Advanced', description: 'Building 3D arenas, character locomotion (WASD), cameras, and collision' },
    { name: 'Commercial & Brand Websites', level: 'Advanced', description: 'Modern appointment booking flows, luxury typography, and local SEO schema' },
    { name: 'Sports & Educational Web Apps', level: 'Advanced', description: 'Interactive training guides, cricket pitch diagrams, quizzes, and drill flows' },
    { name: 'JavaScript & TypeScript', level: 'Core', description: 'State logic, data structures, event listeners, and typed components' },
    { name: 'HTML5 Canvas & Web Audio', level: 'Proficient', description: 'Procedural graphics, custom audio effects, sound synthesis, and timers' },
    { name: 'UI & Responsive Layouts', level: 'Proficient', description: 'Tailwind CSS, clean cards, HUD scanlines, and mobile design' },
  ],
  myProcess: [
    {
      step: '01',
      title: 'Idea & Fun Concept',
      desc: 'Dreaming up cool game mechanics, barbershop portals, or helpful voice tools that users can experience right in their browser.',
    },
    {
      step: '02',
      title: 'Plan Controls & Rules',
      desc: 'Sketching keyboard controls, booking calendar steps, cricket bowling pitch zones, and responsive screen layouts.',
    },
    {
      step: '03',
      title: 'Code & Playtest',
      desc: 'Writing clean code, setting up 3D graphics, booking state forms, or audio APIs, and testing every button until it feels great.',
    },
    {
      step: '04',
      title: 'Publish Online',
      desc: 'Deploying live on Netlify and AI Studio so anyone across the world can click and enjoy with zero installation.',
    },
  ],
  whatICanBuild: [
    {
      title: 'Playable Web Games',
      desc: 'Fast, responsive in-browser action, arcade, and puzzle games with keyboard/mouse controls and sound effects.',
    },
    {
      title: 'Modern Business Websites',
      desc: 'Editorial brand websites, barbershop and salon portals, online booking flows, and local business profiles.',
    },
    {
      title: 'Sports & Training Guides',
      desc: 'Interactive cricket bowling trainers, strategy playbooks, rule guides, and interactive sport quiz apps.',
    },
  ],
};

export const SCHOOL_EDUCATION = {
  grade: 'Class 4 (Standard IV)',
  school: 'Elementary School Education',
  favoriteSubjects: ['Computer Science & Coding', 'Mathematics & Logic', 'Physical Education & Cricket', 'Science & Robotics'],
  achievements: [
    'Built & published live 3D web game (ASHLINE) on Netlify',
    'Created Barbershop.pokhara high-speed booking portal on Netlify',
    'Created The New Barber Boudha digital brand & booking platform',
    "Created Bowler's Academy cricket training platform on Netlify",
    'Created voice-powered AI reminders app (ARIA)',
    'Active participant in junior school coding activities',
  ],
};
