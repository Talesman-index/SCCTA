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
    id: "nextgen-l7-sep-2026",
    title: "Level 7: NextGen Level - 7 Round Robin Invitational",
    level: "USTA Level 7",
    category: "junior",
    date: "September 26–27, 2026",
    location: "Clayton County Tennis Center, 2300 GA # 138, JONESBORO, GA, 30236",
    divisions: "Boys & Girls 12U, 14U, 16U, 18U (Singles & Doubles)",
    divisionTags: {
      boys: ["12U S · Y", "12U D · Y", "14U S · Y", "14U D · Y", "16U S · Y", "18U S · Y"],
      girls: ["12U S · Y", "12U D · Y", "14U S · Y", "14U D · Y", "16U S · Y", "18U D · Y"]
    },
    deadline: "Closes: 22 septembre 2026 à 17:59 UTC-4",
    surface: "Hard Court (Outdoor)",
    entryFee: "$23.50 – $47.00",
    status: "REGISTRATIONS OPEN",
    statusType: "open",
    logo: "/logo.png",
    image: "/images/sccta-the-mill-group.jpg",
    ustaLink: "https://playtennis.usta.com/tournaments",
    featured: true
  },
  {
    id: "nextgen-l7-oct-2026",
    title: "Level 7: NextGen Level - 7 Round Robin Invitational",
    level: "USTA Level 7",
    category: "junior",
    date: "October 3–4, 2026",
    location: "Clayton County Tennis Center, 2300 GA # 138, JONESBORO, GA, 30236",
    divisions: "Boys & Girls 12U, 14U, 16U, 18U (Singles & Doubles)",
    divisionTags: {
      boys: ["12U S · Y", "12U D · Y", "14U S · Y", "14U D · Y", "16U S · Y", "18U S · Y"],
      girls: ["12U S · Y", "12U D · Y", "14U S · Y", "14U D · Y", "16U S · Y", "18U D · Y"]
    },
    deadline: "Closes: 29 septembre 2026 à 17:59 UTC-4",
    surface: "Hard Court (Outdoor)",
    entryFee: "$23.50 – $47.00",
    status: "REGISTRATIONS OPEN",
    statusType: "open",
    logo: "/logo.png",
    image: "/images/sccta-the-mill-juniors.jpg",
    ustaLink: "https://playtennis.usta.com/tournaments",
    featured: true
  },
  {
    id: "hudlow-jr-champs-part2",
    title: "Level 6: Level 6 - SCCTA @ The Hudlow Jr. Champs Part 2",
    level: "USTA Level 6",
    category: "junior",
    date: "October 23–25, 2026",
    location: "Hudlow Tennis Center, 2051 OLD ROCKBRIDGE RD, NORCROSS, GA, 30071",
    divisions: "Boys & Girls 12U, 14U, 16U, 18U (Singles & Doubles)",
    divisionTags: {
      boys: ["12U S · Y", "12U D · Y", "14U S · Y", "14U D · Y", "16U S · Y", "18U S · Y", "18U D · Y"],
      girls: ["12U S · Y", "12U D · Y", "14U S · Y", "14U D · Y", "16U S · Y", "18U S · Y", "18U D · Y"]
    },
    deadline: "Closes: 19 octobre 2026 à 17:59 UTC-4",
    surface: "Hard Court (Outdoor)",
    entryFee: "$39.00 – $78.00",
    status: "REGISTRATIONS OPEN",
    statusType: "open",
    logo: "/logo.png",
    image: "/images/sccta-clayton-team.jpg",
    ustaLink: "https://playtennis.usta.com/tournaments",
    featured: true
  },
  {
    id: "turkey-bowl-classic",
    title: "Level 6: SCCTA Fall Jr. Turkey Bowl Classic",
    level: "USTA Level 6",
    category: "junior",
    date: "November 13–15, 2026",
    location: "Clayton County Tennis Center, 2300 GA # 138, JONESBORO, GA, 30236",
    divisions: "Boys & Girls 12U, 14U, 16U, 18U (Singles & Doubles)",
    divisionTags: {
      boys: ["12U S · Y", "12U D · Y", "14U S · Y", "14U D · Y", "16U S · Y", "18U S · Y", "18U D · Y"],
      girls: ["12U S · Y", "12U D · Y", "14U S · Y", "14U D · Y", "16U S · Y", "18U S · Y", "18U D · Y"]
    },
    deadline: "Closes: 9 novembre 2026 à 17:59 UTC-5",
    surface: "Hard Court (Outdoor)",
    entryFee: "$39.00 – $78.00",
    status: "REGISTRATIONS OPEN",
    statusType: "open",
    logo: "/logo.png",
    image: "/images/sccta-scholarship-awards.jpg",
    ustaLink: "https://playtennis.usta.com/tournaments",
    featured: true
  },
  {
    id: "adult-singles-doubles-l5",
    title: "Level 5 Open: Adult Singles / Doubles",
    level: "USTA Level 5 Adult Open",
    category: "adult",
    date: "November 20–22, 2026",
    location: "Clayton County Tennis Center, 2300 GA # 138, JONESBORO, GA, 30236",
    divisions: "Men's, Women's & Mixed Doubles & Singles (20+, 35+, 40+, 45+)",
    divisionTags: {
      men: ["20+ S · Y", "20+ D · Y", "35+ S · Y", "35+ D · Y", "40+ S · Y", "40+ D · Y", "45+ S · Y", "45+ D · Y"],
      women: ["20+ S · Y", "20+ D · Y", "35+ S · Y", "35+ D · Y", "40+ S · Y", "40+ D · Y", "45+ S · Y", "45+ D · Y"],
      mixed: ["20+ D · Y", "35+ D · Y", "40+ D · Y", "45+ D · Y"]
    },
    deadline: "Closes: 16 novembre 2026 à 17:59 UTC-5",
    surface: "Hard Court (Outdoor)",
    entryFee: "$50.00",
    status: "REGISTRATIONS OPEN",
    statusType: "open",
    logo: "/logo.png",
    image: "/images/sccta-team-celebration.jpg",
    ustaLink: "https://playtennis.usta.com/tournaments",
    featured: false
  },
  {
    id: "sam-kennedy-open-invitational",
    title: "Level 6: SCCTA Sam Kennedy Open Invitation",
    level: "USTA Level 6",
    category: "junior",
    date: "November 27–29, 2026",
    location: "Hudlow Tennis Center, 2051 Old Rockbridge Rd, Norcross, GA, 30071-2238",
    divisions: "Boys & Girls 12U, 14U, 16U, 18U (Singles & Doubles)",
    divisionTags: {
      boys: ["12U S · Y", "12U D · Y", "14U S · Y", "14U D · Y", "16U S · Y", "18U S · Y", "18U D · Y"],
      girls: ["12U S · Y", "12U D · Y", "14U S · Y", "14U D · Y", "16U S · Y", "18U S · Y", "18U D · Y"]
    },
    deadline: "Opens: 23 septembre 2026 à 12:00 UTC-4",
    surface: "Hard Court (Outdoor)",
    entryFee: "$39.00 – $78.00",
    status: "REGISTRATIONS CLOSED",
    statusType: "upcoming",
    logo: "/logo.png",
    image: "/images/course-private-lesson.jpg",
    ustaLink: "https://playtennis.usta.com/tournaments",
    featured: false
  }
];

export const PAST_TOURNAMENTS = [
  {
    id: "past-nextgen-best",
    title: "Level 7: NextGen 2026 BEST OF THE BEST Circuit Open",
    level: "USTA Level 7",
    category: "junior",
    date: "January 24–25, 2026",
    location: "Clayton County Tennis Center, 2300 GA # 138, Jonesboro, GA, 30236",
    divisions: "Boys & Girls 12U, 14U, 16U, 18U (Singles & Doubles)",
    divisionTags: {
      boys: ["12U S", "14U S", "16U S", "18U S"],
      girls: ["12U S", "14U S", "16U S", "18U S"]
    },
    entryFee: "$28.70",
    status: "COMPLETED",
    logo: "/logo.png"
  },
  {
    id: "past-spring-kickoff",
    title: "USTA Junior Circuit: Non-ranking SCCTA Spring Kick-off 10U & 12U Green Ball",
    level: "USTA Junior Circuit",
    category: "junior",
    date: "February 7–8, 2026",
    location: "Clayton County Tennis Center, Jonesboro, GA",
    divisions: "Co-ed 10U Green & Orange Ball, 12U Green Ball",
    divisionTags: {
      coed: ["10U Orange", "10U Green", "12U Green"]
    },
    entryFee: "$28.70",
    status: "COMPLETED",
    logo: "/logo.png"
  },
  {
    id: "past-winter-classic",
    title: "Level 7: Winter Classic SCCTA Open Showcase",
    level: "USTA Level 7",
    category: "junior",
    date: "February 21–22, 2026",
    location: "Clayton County Tennis Center, Jonesboro, GA",
    divisions: "Boys & Girls 12U, 14U, 16U Singles",
    divisionTags: {
      boys: ["12U S", "14U S", "16U S"],
      girls: ["12U S", "14U S", "16U S"]
    },
    entryFee: "$28.70",
    status: "COMPLETED",
    logo: "/logo.png"
  },
  {
    id: "past-march-madness",
    title: "Level 7: SCCTA @ The Hudlow March Tennis Madness",
    level: "USTA Level 7",
    category: "junior",
    date: "March 20–22, 2026",
    location: "Hudlow Tennis Center, 2051 Old Rockbridge Rd, Norcross, GA 30071",
    divisions: "Boys & Girls 12U, 14U, 16U, 18U Singles & Doubles",
    divisionTags: {
      boys: ["12U S", "14U S", "16U S", "18U S"],
      girls: ["12U S", "14U S", "16U S", "18U S"]
    },
    entryFee: "$28.70",
    status: "COMPLETED",
    logo: "/logo.png"
  },
  {
    id: "past-grand-slam",
    title: "USTA Junior Circuit: Non-ranking SCCTA GRAND SLAM 10U Green Ball & 10U Orange Ball",
    level: "USTA Junior Circuit",
    category: "junior",
    date: "April 11–12, 2026",
    location: "Clayton County Tennis Center, Jonesboro, GA",
    divisions: "Co-ed 10U Orange Ball & 10U Green Ball",
    divisionTags: {
      coed: ["10U Orange", "10U Green"]
    },
    entryFee: "$28.70",
    status: "COMPLETED",
    logo: "/logo.png"
  },
  {
    id: "past-clayton-spring",
    title: "Level 7: SCCTA @ Clayton County Spring Junior City Championship",
    level: "USTA Level 7",
    category: "junior",
    date: "April 25–26, 2026",
    location: "Clayton County Tennis Center, Jonesboro, GA",
    divisions: "Boys & Girls 12U, 14U, 16U Singles & Doubles",
    divisionTags: {
      boys: ["12U S", "14U S", "16U S"],
      girls: ["12U S", "14U S", "16U S"]
    },
    entryFee: "$28.70",
    status: "COMPLETED",
    logo: "/logo.png"
  },
  {
    id: "past-hudlow-singles-doubles",
    title: "Level 6: The Hudlow Singles & Doubles Jr. Champ",
    level: "USTA Level 6",
    category: "junior",
    date: "May 15–17, 2026",
    location: "Hudlow Tennis Center, 2051 Old Rockbridge Rd, Norcross, GA 30071",
    divisions: "Boys & Girls 12U, 14U, 16U, 18U Singles & Doubles",
    divisionTags: {
      boys: ["12U S", "12U D", "14U S", "14U D", "16U S", "16U D", "18U S", "18U D"],
      girls: ["12U S", "12U D", "14U S", "14U D", "16U S", "16U D", "18U S", "18U D"]
    },
    entryFee: "$39.00 – $78.00",
    status: "COMPLETED",
    logo: "/logo.png"
  },
  {
    id: "past-rockdale-invitational",
    title: "USTA Junior Circuit: Non-ranking Rockdale Junior Invitational Jr. Champ",
    level: "USTA Junior Circuit",
    category: "junior",
    date: "June 19–20, 2026",
    location: "Rockdale Tennis Center / Clayton Regional, GA",
    divisions: "Co-ed 10U, 12U, 14U Round Robin",
    divisionTags: {
      coed: ["10U Green", "12U Green", "14U Yellow"]
    },
    entryFee: "$28.70",
    status: "COMPLETED",
    logo: "/logo.png"
  },
  {
    id: "past-summer-satellite",
    title: "USTA Junior Circuit: Non-ranking Summer Satellite Junior Circuit",
    level: "USTA Junior Circuit",
    category: "junior",
    date: "July 17–18, 2026",
    location: "Clayton County International Park Tennis Center, GA",
    divisions: "10U, 12U, 14U Green & Yellow Ball",
    divisionTags: {
      coed: ["10U Green", "12U Green", "14U Yellow"]
    },
    entryFee: "$28.70",
    status: "COMPLETED",
    logo: "/logo.png"
  },
  {
    id: "past-hudlow-champs-p1",
    title: "Level 6: SCCTA @ The Hudlow Jr. Champs Part 1",
    level: "USTA Level 6",
    category: "junior",
    date: "August 14–16, 2026",
    location: "Hudlow Tennis Center, 2051 Old Rockbridge Rd, Norcross, GA 30071-2238",
    divisions: "Boys & Girls 12U, 14U, 16U, 18U Singles & Doubles",
    divisionTags: {
      boys: ["12U S", "12U D", "14U S", "14U D", "16U S", "16U D", "18U S", "18U D"],
      girls: ["12U S", "12U D", "14U S", "14U D", "16U S", "16U D", "18U S", "18U D"]
    },
    entryFee: "$39.00 – $78.00",
    status: "COMPLETED",
    logo: "/logo.png"
  }
];

export const IMPACT_STORIES = [
  {
    id: "essay-contest-winner",
    name: "Ashley B. Cooke & Isaiah Kendrick",
    category: "NJTL Scholarship Recipients",
    tag: "SCCTA NJTL College Scholarship Awardees",
    image: "/images/sccta-scholarship-awards.jpg",
    achievement: "SCCTA College Scholarship · Academic & Athletic Excellence",
    excerpt: "Awarded $500 NJTL collegiate academic scholarships for leadership, sportsmanship, and outstanding dedication on and off the court.",
    fullStory: "During the annual SCCTA ceremony, Ashley B. Cooke and Isaiah Kendrick were officially presented with South Clayton Community Tennis Association scholarships. Both athletes progressed through Clayton County junior development programs, demonstrating exceptional character, academic diligence, and community leadership.",
    quote: "SCCTA gave us the foundation to excel in our studies and compete with integrity on court."
  },
  {
    id: "player-spotlight-marcus",
    name: "Marcus Johnson",
    category: "Player Spotlight",
    tag: "Junior Circuit Champion",
    image: "/images/sccta-the-mill-juniors.jpg",
    achievement: "From Red Ball Beginner to State Ranked Junior",
    excerpt: "Marcus climbed through SCCTA's 4-stage player pathway and now competes in sectionals while maintaining high academic honors.",
    fullStory: "Marcus started on the youth courts at Clayton County Parks. With guidance from certified SCCTA coaches and dedicated matchplay in Junior Circuit events, Marcus developed a formidable all-court game and confidence.",
    quote: "The coaches at SCCTA believed in me before I even knew how to hold a racquet properly."
  },
  {
    id: "scholarship-brianna",
    name: "Brianna Taylor & Clinic Team",
    category: "Youth Tennis Clinics",
    tag: "Clayton Connected Youth Clinic",
    image: "/images/sccta-clayton-clinic.png",
    achievement: "Comprehensive Coaching & Racquet Distribution",
    excerpt: "Providing Clayton County youth with free equipment, structured coaching, and competitive tournament pathways.",
    fullStory: "Through SCCTA's partnership with Clayton County Parks & Recreation, youth athletes receive racquets, uniforms, and progressive coaching designed to build both tennis mastery and teamwork.",
    quote: "SCCTA is family. They don't just care about your forehand; they care about your character and education."
  },
  {
    id: "academic-terrence",
    name: "Clayton County Community Team",
    category: "Community Impact",
    tag: "Clayton Connected Junior Tennis",
    image: "/images/sccta-clayton-team.jpg",
    achievement: "Over 100+ Clayton County Juniors Empowered",
    excerpt: "Connecting youth across Clayton County through accessible tennis, academic workshops, and positive peer mentorship.",
    fullStory: "SCCTA clinics bring kids together from across Clayton County. Every junior participant receives equipment bags, racquets, structured drills, and educational support.",
    quote: "Every practice is a chance to grow, learn discipline, and build friendships that last a lifetime."
  }
];

export const GALLERY_ITEMS = [
  {
    id: 1,
    title: "Clayton County Connected Junior Team",
    location: "Clayton County Parks & Rec Courts",
    category: "Youth Clinics",
    span: "col-span-1 md:col-span-2 row-span-2",
    image: "/images/sccta-clayton-team.jpg"
  },
  {
    id: 2,
    title: "Junior Clinic Pathway at The Mill",
    location: "The Mill Tennis Facility",
    category: "Junior Circuit",
    span: "col-span-1 md:col-span-1 row-span-1",
    image: "/images/sccta-the-mill-juniors.jpg"
  },
  {
    id: 3,
    title: "SCCTA NJTL Scholarship Awards Ceremony",
    location: "Jonesboro, GA",
    category: "Scholarships",
    span: "col-span-1 md:col-span-1 row-span-1",
    image: "/images/sccta-scholarship-awards.jpg"
  },
  {
    id: 4,
    title: "Clayton Connected Coaching & Drills",
    location: "Clayton County, GA",
    category: "Clinics",
    span: "col-span-1 md:col-span-1 row-span-1",
    image: "/images/sccta-clayton-clinic.png"
  },
  {
    id: 5,
    title: "The Mill Championship Clinic Group",
    location: "The Mill Tennis Center",
    category: "Community",
    span: "col-span-1 md:col-span-2 row-span-1",
    image: "/images/sccta-the-mill-group.jpg"
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
