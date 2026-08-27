export const TEAM_MEMBERS = [
  {
    id: "conrad-cooke",
    name: "Conrad Cooke",
    role: "Tournament Director / CEO",
    bio: "Visionary leader behind SCCTA with over two decades of experience promoting youth tennis, community tournaments, and educational pathways throughout Clayton County and Georgia.",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=600&q=80",
    badge: "Leadership & Tournaments",
    email: "scccta1@gmail.com"
  },
  {
    id: "peggy-ballou",
    name: "Peggy Ballou",
    role: "Tournament Desk Administrator",
    bio: "Dedicated administrator overseeing seamless match day operations, player check-in, draw assignments, and athlete support across all SCCTA events.",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=600&q=80",
    badge: "Operations & Logistics",
    email: "sccta.jr.tournament@gmail.com"
  },
  {
    id: "ashley-cooke",
    name: "Ashley Cooke",
    role: "Match Tennis App Tech / Junior Representative",
    bio: "Digital technology lead optimizing live court assignments, digital scoreboards, and championing the junior players' voice and experience in Georgia tennis.",
    image: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?auto=format&fit=crop&w=600&q=80",
    badge: "Tech & Junior Voice",
    email: "sccta.jr.tournament@gmail.com"
  },
  {
    id: "ingrid-abram",
    name: "Ingrid Abram",
    role: "Referee / Senior Official",
    bio: "Certified USTA official ensuring fair play, sportsmanship, and rule adherence across all junior circuit competitions and championship tournaments.",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=600&q=80",
    badge: "Officiating & Fair Play",
    email: "scccta1@gmail.com"
  },
  {
    id: "kevin-nye",
    name: "Kevin Nye",
    role: "Tournament Support",
    bio: "Key contributor to tournament execution, facility preparation, court equipment, and on-site player hospitality.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=600&q=80",
    badge: "Event Execution",
    email: "scccta1@gmail.com"
  },
  {
    id: "alex-young",
    name: "Alex Young",
    role: "Customer Support Lead",
    bio: "Primary point of contact for parents, coaches, and new families navigating clinic enrollments, tournament registration, and program inquiries.",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=600&q=80",
    badge: "Family & Player Support",
    email: "scccta1@gmail.com"
  }
];

export const BALL_STAGES = [
  {
    id: "red",
    name: "RED BALL",
    ages: "Ages 4–8",
    tagline: "Start. Play. Discover.",
    color: "#EF4444",
    courtSize: "36' x 18' (Small Court)",
    ballSpeed: "75% slower than yellow ball",
    racquet: "19\" – 23\"",
    description: "Designed for young beginners to gain confidence immediately. Lower bounces and lightweight equipment allow kids to rally on their very first day.",
    skills: ["Hand-eye coordination", "Basic rally mechanics", "Court safety & fun", "Movement agility"]
  },
  {
    id: "orange",
    name: "ORANGE BALL",
    ages: "Ages 8–10",
    tagline: "Learn. Rally. Grow.",
    color: "#F97316",
    courtSize: "60' x 21' (3/4 Court)",
    ballSpeed: "50% slower than yellow ball",
    racquet: "23\" – 25\"",
    description: "Players expand their court coverage, learn directional control, refine swing paths, and begin understanding match strategy in singles and doubles.",
    skills: ["Topspin & slice foundations", "Serve & return patterns", "Court positioning", "Point construction"]
  },
  {
    id: "green",
    name: "GREEN BALL",
    ages: "Age 11 & Under",
    tagline: "Develop. Compete. Progress.",
    color: "#22C55E",
    courtSize: "78' x 27' (Full 78-Foot Court)",
    ballSpeed: "25% slower than yellow ball",
    racquet: "25\" – 26\"",
    description: "Full court play with a ball that stays slightly lower in the strike zone, encouraging proper stroke execution and transition into tournament competition.",
    skills: ["Full court movement", "Tactical depth & angles", "Competitive matchplay", "Mental resilience"]
  },
  {
    id: "yellow",
    name: "YELLOW BALL",
    ages: "Age 11+",
    tagline: "Play the full game.",
    color: "#EAB308",
    courtSize: "78' x 27' / 36' (Full Regulation)",
    ballSpeed: "Standard regulation 100% speed",
    racquet: "26\" – 27\"+ (Standard)",
    description: "The complete game at regulation speed. Tailored for junior circuit players, high school athletes, and tournament champions pushing for collegiate opportunities.",
    skills: ["Advanced shot power & spin", "Tournament strategy", "Physical conditioning", "Collegiate pathways"]
  }
];

export const UPCOMING_TOURNAMENTS = [
  {
    id: "clayton-open-2026",
    title: "SCCTA South Clayton Junior Spring Open",
    level: "USTA Level 6 (Georgia)",
    date: "April 18–19, 2026",
    location: "Clayton County International Park Tennis Center, Jonesboro, GA",
    divisions: "Boys & Girls 12U, 14U, 16U, 18U (Singles & Doubles)",
    deadline: "April 13, 2026 at 11:59 PM EST",
    surface: "Hard Court (Outdoor)",
    entryFee: "$45.00 Singles / $25.00 Doubles",
    status: "Registration Open",
    image: "/doubles-ready-stance.jpg",
    featured: true
  },
  {
    id: "metro-atl-circuit-2026",
    title: "SCCTA Junior Circuit Green & Orange Ball Trophy Challenge",
    level: "USTA Junior Circuit Non-Elimination",
    date: "May 2–3, 2026",
    location: "Lovejoy Regional Tennis Facility, Hampton, GA",
    divisions: "Co-ed 10U Orange Ball & 12U Green Ball",
    deadline: "April 28, 2026 at 11:59 PM EST",
    surface: "Hard Court (Outdoor)",
    entryFee: "$35.00 per player (Includes T-Shirt & Medals)",
    status: "Registration Open",
    image: "/blue-court-player.jpg",
    featured: true
  },
  {
    id: "summer-slam-2026",
    title: "SCCTA Southern Sectional Prep Championship",
    level: "USTA Level 5 Open",
    date: "June 13–14, 2026",
    location: "Clayton County Tennis Complex, GA",
    divisions: "Junior B/G 14U–18U & Adult Open Singles",
    deadline: "June 8, 2026 at 11:59 PM EST",
    surface: "Hard Court (Outdoor)",
    entryFee: "$50.00",
    status: "Upcoming",
    image: "/junior-girl.jpg",
    featured: false
  },
  {
    id: "clayton-adult-doubles",
    title: "Clayton County Community Adult Doubles Classic",
    level: "Adult NTRP 3.0, 3.5, 4.0 & Open",
    date: "July 11, 2026",
    location: "Clayton County International Park, Jonesboro, GA",
    divisions: "Men's, Women's & Mixed Doubles",
    deadline: "July 6, 2026 at 11:59 PM EST",
    surface: "Hard Court",
    entryFee: "$30.00 per player",
    status: "Upcoming",
    image: "/team-high-five.jpg",
    featured: false
  }
];

export const IMPACT_STORIES = [
  {
    id: "essay-contest-winner",
    name: "Makayla Harris",
    category: "Recognition & Writing",
    tag: "Georgia's USTA Southern Essay Contest Winner",
    image: "/blue-court-player.jpg",
    achievement: "USTA Southern Sectional Winner · College Scholarship Recipient",
    excerpt: "Through SCCTA's NJTL essay workshops, Makayla reflected on Arthur Ashe's legacy of character and education, taking 1st place in Georgia.",
    fullStory: "Makayla joined SCCTA at age 8 with zero tennis experience. Over 6 years in our youth clinics and academic enrichment labs, she not only became a top junior competitor in Clayton County but also discovered her passion for writing. Her winning essay on 'How Tennis Builds Leadership Beyond the Court' was awarded 1st Place across Georgia by USTA Southern. Today, she mentors younger students every Saturday.",
    quote: "Tennis taught me how to stay calm under pressure, but SCCTA showed me that my voice can change the world around me."
  },
  {
    id: "player-spotlight-marcus",
    name: "Marcus Johnson",
    category: "Player Spotlight",
    tag: "Junior Circuit Champion",
    image: "/doubles-ready-stance.jpg",
    achievement: "From Red Ball Beginner to State Ranked Junior",
    excerpt: "Marcus climbed through SCCTA's 4-stage player pathway and now competes in USTA Level 5 sectionals while maintaining a 3.9 GPA.",
    fullStory: "Marcus started on the 36-foot red ball court at Lovejoy Regional Park. With guidance from coach Conrad Cooke and dedicated matchplay in Junior Team Tennis, Marcus developed a formidable all-court game. In 2025, he earned his first sectional singles title and received an academic-athletic mentorship grant.",
    quote: "The coaches at SCCTA believed in me before I even knew how to hold a racquet properly."
  },
  {
    id: "scholarship-brianna",
    name: "Brianna Taylor",
    category: "Scholarship Recipient",
    tag: "HBCU Tennis Scholar",
    image: "/clay-player-portrait.png",
    achievement: "Full Collegiate Tennis & Academic Grantee",
    excerpt: "Brianna leveraged SCCTA's college readiness workshops to secure a collegiate roster spot and full academic funding.",
    fullStory: "Through SCCTA's 'Beyond the Baseline' college prep program, Brianna received SAT tutoring, resume prep, and match footage portfolio reviews. She is now entering her sophomore season as team co-captain while studying Computer Science.",
    quote: "SCCTA is family. They don't just care about your forehand; they care about your diploma."
  },
  {
    id: "academic-terrence",
    name: "Terrence Vance",
    category: "Academic Achievement",
    tag: "Valedictorian & Team Captain",
    image: "/team-high-five.jpg",
    achievement: "Clayton High Honor Roll · 4.0 GPA",
    excerpt: "Balancing varsity tennis and AP courses, Terrence credits SCCTA's disciplined practice culture for his academic drive.",
    fullStory: "Terrence utilized SCCTA's after-school study halls before stepping onto the court. The discipline learned through competitive drills directly translated to his academic success, earning him top honors in Clayton County schools.",
    quote: "Every match is a problem-solving puzzle, just like calculus or physics."
  }
];

export const GALLERY_ITEMS = [
  {
    id: 1,
    title: "Community Doubles & Training",
    location: "Clayton County International Park",
    category: "Matchplay",
    span: "col-span-1 md:col-span-2 row-span-2",
    image: "/doubles-ready-stance.jpg"
  },
  {
    id: 2,
    title: "Junior Pathway & Mentorship",
    location: "Jonesboro, GA",
    category: "Youth Tennis",
    span: "col-span-1 md:col-span-1 row-span-1",
    image: "/blue-court-player.jpg"
  },
  {
    id: 3,
    title: "Teamwork & Court Sportsmanship",
    location: "SCCTA Tennis Center",
    category: "Community",
    span: "col-span-1 md:col-span-1 row-span-1",
    image: "/team-high-five.jpg"
  },
  {
    id: 4,
    title: "Clay Court Skills & Clinic",
    location: "Lovejoy Regional Park",
    category: "Clinics",
    span: "col-span-1 md:col-span-1 row-span-1",
    image: "/clay-player-portrait.png"
  },
  {
    id: 5,
    title: "Match Standard Courts",
    location: "Clayton County, GA",
    category: "Facilities",
    span: "col-span-1 md:col-span-2 row-span-1",
    image: "/aerial-court.jpg"
  }
];

export const DONATION_TIERS = [
  {
    amount: 25,
    title: "Racquet & Ball Starter",
    description: "Provides a brand-new junior racquet and a can of training balls for a first-time beginner in Clayton County.",
    icon: "Sparkles"
  },
  {
    amount: 50,
    title: "Monthly Clinic Scholarship",
    description: "Sponsors one full month of weekly youth tennis coaching and academic tutoring for an aspiring junior.",
    icon: "Heart",
    popular: true
  },
  {
    amount: 150,
    title: "Tournament Entry & Gear Pack",
    description: "Covers USTA Junior Circuit registration fees, team jersey, and equipment bag for competitive events.",
    icon: "Trophy"
  },
  {
    amount: 500,
    title: "Full Season Player Sponsor",
    description: "Funds an entire season of comprehensive coaching, mentoring, matchplay travel, and college readiness guidance.",
    icon: "Crown"
  }
];

export const FAQS_TOURNAMENTS = [
  {
    q: "How do I access match draws and daily schedules?",
    a: "Draws and schedules are published on the USTA Serve Tennis tournament portal and the Match Tennis App 48 hours prior to the tournament start date. Live court updates are broadcasted through the app."
  },
  {
    q: "What is the policy for withdrawals and refunds?",
    a: "Withdrawals requested prior to the registration deadline will receive a full refund minus processing fees. Withdrawals made after the draws are posted cannot be refunded per USTA Sectional regulations."
  },
  {
    q: "What is the format for Consolation and Backdraw matches?",
    a: "Most SCCTA events offer First Match Losers Consolation (FMLC) or round-robin compass draws so every player is guaranteed a minimum of two meaningful matches."
  },
  {
    q: "Where do tournaments take place?",
    a: "Primary host sites include Clayton County International Park Tennis Center (Jonesboro, GA) and Lovejoy Regional Tennis Facility, featuring state-of-the-art lighted hard courts."
  },
  {
    q: "How do alternate players get notified of draw openings?",
    a: "Alternates are listed in order of USTA ranking/entry timestamp. If a main draw player withdraws, our desk administrator Peggy Ballou will contact the next alternate by phone and email immediately."
  }
];
