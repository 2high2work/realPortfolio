export interface Project {
  id: string;
  title: string;
  subtitle: string;
  externalUrl: string;
  description: string;
  longDescription: string;
  techStack: string[];
  metrics: string[];
  asciiArt: string;
  placeholderText: string;
  imageUrl: string;
}

export interface Skill {
  id: string;
  name: string;
  category: string;
  level: string;
  experienceYears: string;
  description: string;
  details: string[];
  asciiIcon: string;
}

export interface Experience {
  id: string;
  role: string;
  company: string;
  period: string;
  location: string;
  summary: string;
  achievements: string[];
  asciiBadge: string;
}

export const PROJECTS: Project[] = [
  {
    id: "proj-1",
    title: "NIGHT_OF_WOLVES",
    subtitle: "Videogame Programming",
    externalUrl: "https://store.steampowered.com/app/2393490/Night_of_Wolves/",
    description: "Distributed task runner built on raw sockets. Handles 10M+ events/sec with zero heap allocation.",
    longDescription: "Night Of Wolves is a videogame by Gooblin Studio, the game is currently in development, but its updates can be seen in the Steam page.",
    techStack: ["C#", "Unity", "SourceTree"],
    metrics: ["10M+ Events/sec", "Under 16MB Memory", "0.02ms P99 Latency"],
    asciiArt: `
%#%%#####################################%%%%%%%***%%%%%%#######################******************%
%#%%%%%#################################%%%###%#+*+#%###%%%###############*****+==+===++--==-=-=++*
%###%%%*#%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%###%%=..=+#%###%%%%%%%%%%##%%**=+=:-=+==--++===-=--+*+=-=
%*+***%*%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%*-=:=-*%%%%%%%%%%%%%%*=#+..:..-+=+:..:-:=+-=---=---+=
#+-=+#%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%#%#+-+-+*%#%%%%%%%%%%%%++:.:..:..:.--....:.:-----+-==--
#*-=+#%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%###%%***%%###%%%%%%%%%%%+.:::.+*=......-..:..--------=-:
#*--+#%%%%%%%%%%%%%%%%%%%%%%%%%%%%#-.#%#-=%%%%%####%%%%%%%%%%%%%%%%*=*=:-*+*......+-.:-=:-::-----==
#*-=+#%%%%%%%%%%%%%%%%%%%%%%%%%%%%%+=.=%+*%..#=.+*.*%-:#+#+=-.*=*%%#=+-.:.......-++-:.+:::------==*
#*-=+#%%%%%%%%%%%%%%%%%%%%%%%%%%%%%+*%-.=*%.:%+..:.#%:.*:.%%+.%%%%%%==--+***=::-**-::-:+-::---=+--*
#*--+#%%%%%%%%%%%%%%%%%%%%%%%%%%%%%+*%%+.+%.:%%#%#.+%*+#=-%%+.%%%%%%*****+-*--=+#+*+*==.:---=--==++
#*==*#%%%%%%%%%%%%%%%%%%%%%%%%%%%%%##%%%%%*==#%%#%%%*=:-%%%#=-+%%%%%%%%****+=#%%%%%%%**+#*-=:-====+
#*--+#%%%%%%%%%%%%%%%%%%%%%+............%%%%%#**:#+:+*%%%%%%%%%%%%%%%%#+***=-*%%*=:=+-.=..::=====+*
##-=+#%##*##**##*%%%%*==#%%=............#%%%%*=*+*+-%%%%%%%%%%%%%%%%%%%%#***#%%%=:+......:=+++++*##
#*-=+*#*+==+:.:::-**:...=%%=.:#+:#+:....=#%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%++=:..::+*#%###%%%%
#*-=++-:::=:#=:---.:++==+%%=..*+:*+-.-..-*%=**=.*%-.#%%%..*#+%#:*--%#:+=%%%%%%%%%#+=-:..:*#%%%%%%#%
#*-=*+*=:=-..:=-=-:**#*#+##=::.%.:#-::.=+#==%%%+.%-.%%%%*.%%+%..=-+%%-.=%%%%%%%%%%#+-=+..:+*#%%#%*#
#*=++#%****=+@@@@@+%*++*+*#-...*#-+#-..:*%#.#%%=+%-.%%#%#:-+#%*.*%%%+=%:-%%%%%%%%%%#+::+.:=++#*#*+-
#*-=+#%%+=.-+*=+*#=-:...-##=:.:-.:.:.::-#%%%+=*%%%----#%%%*#%%%#*%%%+#*=*%%%%%%%%%%%%**-#*+*##*+=++
#*+++####+-..=:--::+*#%%%%%*...-.......:#%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%#%%**=-=
#*++*#+*+*++-+=+++-=++=+*%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%+--==
#*+=*+-+--+++=+--::.:.:--+%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%#+--=-
#=+++=-*+*--+:==++:=-:::-:*%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%##**+-=+
#=**++***=====:-=***-::-*+*#%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%#*#**===--
#+++**%**-+--+::=*#+==-==+***###########################################################***=:-=-+=+
*****#*#+=*+*+==****+=++=*##############################################################**====*++++
    `,
    placeholderText: "[ PROJECT 1 ARCHITECTURE / SCREENSHOT PLACEHOLDER ]",
    imageUrl: "/images/project1.png"
  },
  {
    id: "proj-2",
    title: "DARK_POOL_EXCHANGE",
    subtitle: "Zero-Knowledge Order Matching System",
    externalUrl: "https://example.com/dark-pool",
    description: "Cryptographic order book matching engine guaranteeing trader privacy via zk-SNARK proofs.",
    longDescription: "A decentralized matching engine where participants can commit buy/sell intentions without revealing price or volume until execution criteria are met. Built with strict audit logging and immutable verification trails.",
    techStack: ["Rust", "zk-SNARKs", "Solidity", "WebSockets", "LevelDB"],
    metrics: ["1,200 TPS", "Zero-Knowledge Verification", "Fully Audited"],
    asciiArt: `
 +---------------------------------------+
 |   |||||||||| CRYPTO POOL ||||||||||   |
 |   +----------+             +------+   |
 |   | USER A   | ----zk----> |POOL  |   |
 |   | (HIDDEN) |             |MATCH |   |
 |   +----------+             +------+   |
 +---------------------------------------+
    `,
    placeholderText: "[ PROJECT 2 EXCHANGE INTERFACE PLACEHOLDER ]",
    imageUrl: "/images/project1.png"
  },
  {
    id: "proj-3",
    title: "HYPER_GRID_BBS",
    subtitle: "Retro-Modern Terminal Communication Platform",
    externalUrl: "https://example.com/hyper-grid",
    description: "ANSI/ASCII text-based community board with real-time encrypted messaging and file drops.",
    longDescription: "Reimagining the 1990s BBS culture with modern end-to-end encryption protocols. Fully accessible via Telnet, SSH, or Web Terminal. Features customizable ANSI rendering and automated bot moderation.",
    techStack: ["Node.js", "TypeScript", "xterm.js", "libsodium", "Redis"],
    metrics: ["50k Active Users", "100% Terminal Compatible", "E2EE Secured"],
    asciiArt: `
 +---------------------------------------+
 |  _  _ _   _ ___ ___ ___   ___ ___ ___ |
 | | || | | | | . | __| . \\ | . | . | __||
 | | __ | |_| |  _| _||   / | . | . |__ ||
 | |_||_|\\___/|_| |___|_|\\_\\|___|___|___||
 +---------------------------------------+
    `,
    placeholderText: "[ PROJECT 3 TERMINAL BBS PLACEHOLDER ]",
    imageUrl: "/images/project1.png"
  },
  {
    id: "proj-4",
    title: "VOID_MONITOR",
    subtitle: "Autonomous Infrastructure Sentinel",
    externalUrl: "https://github.com/example/void-monitor",
    description: "Lightweight daemon that monitors kernel panics and hardware faults in server clusters.",
    longDescription: "VOID_MONITOR sits quietly in system memory, analyzing kernel logs and hardware telemetry. In the event of catastrophic failure, it automatically triggers failover protocols and dispatches encrypted alerts via mesh networking.",
    techStack: ["Go", "Linux Kernel", "Systemd", "gRPC", "Prometheus"],
    metrics: ["99.999% Uptime Guard", "0.1% CPU Usage", "Instant Failover"],
    asciiArt: `
 +---------------------------------------+
 |       /\\       WARNING: THREAT LEVEL  |
 |      /  \\      STATUS: SECURE         |
 |     / !! \\     NODES ONLINE: 1,024    |
 |    /______\\    AUTO-REPAIR: ARMED     |
 +---------------------------------------+
    `,
    placeholderText: "[ PROJECT 4 DASHBOARD PLACEHOLDER ]",
    imageUrl: "/images/project1.png"
  }
];

export const SKILLS: Skill[] = [
  {
    id: "skill-sysarch",
    name: "SYSTEMS_ARCHITECTURE",
    category: "Engineering",
    level: "EXPERT // 99%",
    experienceYears: "8+ Years",
    description: "Designing fault-tolerant, horizontally scalable backend ecosystems without modern bloat.",
    details: [
      "Micro-kernel and distributed monolith paradigms",
      "High-concurrency thread management & IPC",
      "Memory leak prevention and static analysis",
      "Zero-downtime hot-reloading architectures"
    ],
    asciiIcon: `
  +===+ +===+ +===+
  | A | | B | | C |
  +===+ +===+ +===+
    \\     |     /  
  +---------------+
  |  MASTER BUS   |
  +---------------+
    `
  },
  {
    id: "skill-sec",
    name: "OFFENSIVE_SECURITY",
    category: "Security",
    level: "ADVANCED // 92%",
    experienceYears: "6+ Years",
    description: "Penetration testing, zero-day mitigation, and hardened cryptography implementation.",
    details: [
      "Reverse engineering binary executables",
      "Custom exploit payload development",
      "Network packet analysis & DPI evasion",
      "Secure enclave and TPM integration"
    ],
    asciiIcon: `
     .--------.    
    /  #****#  \\   
   |  #******#  |  
   |____________|  
   |   LOCKED   |  
   +------------+  
    `
  },
  {
    id: "skill-front",
    name: "TERMINAL_UI & ACCESSIBILITY",
    category: "Frontend",
    level: "MASTER // 95%",
    experienceYears: "7+ Years",
    description: "Building extreme performance, raw aesthetics interfaces with 100% WCAG accessibility compliance.",
    details: [
      "Monochrome contrast optimization",
      "Screen-reader DOM ordering & ARIA landmarks",
      "Zero-latency keyboard navigation pipelines",
      "Canvas & WebGL high-fidelity ASCII shaders"
    ],
    asciiIcon: `
   +------------+  
   | >_ ls -la  |  
   | #########  |  
   +------------+  
    `
  },
  {
    id: "skill-devops",
    name: "BARE_METAL_DEVOPS",
    category: "Infrastructure",
    level: "SENIOR // 88%",
    experienceYears: "5+ Years",
    description: "Managing physical clusters, BGP routing, custom Linux distros, and automated provisioning.",
    details: [
      "PXE boot automation & Kickstart scripts",
      "eBPF network traffic filtering",
      "Custom Kubernetes operator development",
      "Immutable infrastructure pipelines"
    ],
    asciiIcon: `
   [=== SERVER ===]
   [=== CLUSTER ==]
   [=== ACTIVE ===]
   ||||||||||||||||
    `
  }
];

export const EXPERIENCE: Experience[] = [
  {
    id: "exp-1",
    role: "PRINCIPAL ARCHITECT",
    company: "VOID_LABS INC.",
    period: "2023 - PRESENT",
    location: "REMOTE // DISTRIBUTED",
    summary: "Leading the core engineering team behind decentralized messaging infrastructure. Architecting zero-trust networks.",
    achievements: [
      "Reduced infrastructure latency by 48% across global edge locations",
      "Designed custom binary serialization protocol saving 300 TB/month in bandwidth",
      "Mentored a team of 14 senior distributed systems engineers"
    ],
    asciiBadge: `
 +-------------------+
 | [!] VOID_LABS     |
 | LDR: PRINCIPAL    |
 +-------------------+
    `
  },
  {
    id: "exp-2",
    role: "SENIOR SYSTEMS ENGINEER",
    company: "CYBER_DYNAMICS",
    period: "2020 - 2023",
    location: "TOKYO, JP // HYBRID",
    summary: "Built high-frequency order routers and low-latency market data parsers for quantitative trading desks.",
    achievements: [
      "Implemented kernel bypass networking using DPDK for sub-microsecond tick processing",
      "Maintained 100% uptime during high-volatility market flash crash events",
      "Authored 50+ technical whitepapers on memory barrier optimizations"
    ],
    asciiBadge: `
 +-------------------+
 | [!] CYBER_DYN     |
 | ENG: SENIOR SYS   |
 +-------------------+
    `
  },
  {
    id: "exp-3",
    role: "SECURITY RESEARCHER",
    company: "SEC_OPS_AGENCY",
    period: "2018 - 2020",
    location: "BERLIN, DE",
    summary: "Conducted security audits on mission-critical banking software and embedded IoT controllers.",
    achievements: [
      "Discovered and responsibly disclosed 14 CVEs in enterprise virtualization platforms",
      "Developed automated fuzzing cluster capable of testing 1,000 binaries simultaneously",
      "Spoke at major security conferences on hardware side-channel attacks"
    ],
    asciiBadge: `
 +-------------------+
 | [!] SEC_OPS       |
 | RSH: AUDITOR      |
 +-------------------+
    `
  }
];

export const ABOUT_DATA = {
  header: "ABOUT // 2HIGH2WORK",
  tagline: "PROGRAMMER AS A JOB, PROGRAMMER AS A HOBBY.",
  bioParagraphs: [
    "2High2Work is an engineering collective and portfolio identity forged in the fires of raw computing. We reject modern web bloat, endless JavaScript framework churn, and bloated corporate design systems. Instead, we embrace the pure, unadulterated power of black text on a white canvas—or white text on a black terminal.",
    "Our work operates at the nexus of high-throughput backend architecture, rigorous offensive security, and hyper-accessible frontend interfaces. We believe that true accessibility means writing clean, semantic markup that functions perfectly whether viewed on a 4K monitor, a Braille reader, or a 1980s VT100 terminal.",
    "When we aren't optimizing assembly pipelines or auditing smart contracts, we are researching decentralized communication protocols and archiving early internet history."
  ],
  stats: [
    { label: "LINES OF CODE", value: "14,502,891" },
    { label: "COFFEE CONSUMED", value: "8,402 L" },
    { label: "SERVERS CRASHED", value: "0" },
    { label: "ACCESSIBILITY SCORE", value: "100%" }
  ],
  philosophy: [
    "1. MONOCHROME PURITY: Color is a distraction from structure.",
    "2. RAW SPEED: If it takes more than 100ms to load, it is broken.",
    "3. ABSOLUTE CLARITY: Accessible to screen readers, keyboards, and humans alike.",
    "4. NO COMPROMISE: We do not ship broken code."
  ]
};
