export interface Subject {
  id: string;
  title: string;
  description: string;
  languages: string[];
  downloadUrl?: string;
}

export interface Semester {
  id: string;
  name: string;
  subjects: Subject[];
}

export interface Resource {
  id: string;
  title: string;
  description: string;
  languages?: string[];
  downloadUrl?: string;
}

export interface Department {
  id: string;
  semesters: Semester[];
  importantTopics: Resource[];
  syllabus: Resource[];
  previousPapers: Resource[];
}

// Civil Engineering Data
const civilSemesters: Semester[] = [
  {
    id: "semester-1",
    name: "1st Semester",
    subjects: [
      {
        id: "civil-1-1",
        title: "Engineering Mathematics I",
        description: "Complete notes covering calculus, differential equations, and linear algebra.",
        languages: ["english"],
        downloadUrl: "https://example.com/downloads/civil/sem1/math.pdf"
      },
      {
        id: "civil-1-2",
        title: "Engineering Physics",
        description: "Comprehensive study material for mechanics, waves, and optics.",
        languages: ["english", "hindi"],
        downloadUrl: "https://example.com/downloads/civil/sem1/physics.pdf"
      },
      {
        id: "civil-1-3",
        title: "Engineering Chemistry",
        description: "Detailed notes on chemical bonding, thermodynamics, and polymers.",
        languages: ["english"],
        downloadUrl: "https://example.com/downloads/civil/sem1/chemistry.pdf"
      },
      {
        id: "civil-1-4",
        title: "Engineering Graphics",
        description: "Step-by-step guide to engineering drawing and orthographic projections.",
        languages: ["hindi"],
        downloadUrl: "https://example.com/downloads/civil/sem1/graphics.pdf"
      },
      {
        id: "civil-1-5",
        title: "Basic Electrical Engineering",
        description: "Introduction to electrical circuits, transformers, and machines.",
        languages: ["english", "hindi"],
        downloadUrl: "https://example.com/downloads/civil/sem1/electrical.pdf"
      },
      {
        id: "civil-1-6",
        title: "Programming Fundamentals",
        description: "Basics of computer programming with C/C++.",
        languages: ["english"],
        downloadUrl: "https://example.com/downloads/civil/sem1/programming.pdf"
      }
    ]
  },
  {
    id: "semester-2",
    name: "2nd Semester",
    subjects: [
      {
        id: "civil-2-1",
        title: "Engineering Mathematics II",
        description: "Advanced topics in differential equations, complex analysis, and transforms.",
        languages: ["english"],
        downloadUrl: "https://example.com/downloads/civil/sem2/math.pdf"
      },
      {
        id: "civil-2-2",
        title: "Engineering Mechanics",
        description: "Principles of statics and dynamics with problem-solving approaches.",
        languages: ["english", "hindi"],
        downloadUrl: "https://example.com/downloads/civil/sem2/mechanics.pdf"
      },
      {
        id: "civil-2-3",
        title: "Building Materials",
        description: "Properties and applications of construction materials.",
        languages: ["hindi"],
        downloadUrl: "https://example.com/downloads/civil/sem2/materials.pdf"
      },
      {
        id: "civil-2-4",
        title: "Surveying I",
        description: "Basic principles and techniques of land surveying.",
        languages: ["english"],
        downloadUrl: "https://example.com/downloads/civil/sem2/surveying.pdf"
      },
      {
        id: "civil-2-5",
        title: "Environmental Science",
        description: "Study of ecosystems, pollution, and environmental protection.",
        languages: ["english", "hindi"],
        downloadUrl: "https://example.com/downloads/civil/sem2/environmental.pdf"
      },
      {
        id: "civil-2-6",
        title: "Communication Skills",
        description: "Effective techniques for technical communication and presentations.",
        languages: ["english"],
        downloadUrl: "https://example.com/downloads/civil/sem2/communication.pdf"
      }
    ]
  },
  {
    id: "semester-3",
    name: "3rd Semester",
    subjects: [
      {
        id: "civil-3-1",
        title: "Structural Analysis I",
        description: "Analysis of statically determinate structures and influence lines.",
        languages: ["english", "hindi"],
        downloadUrl: "https://example.com/downloads/civil/sem3/structural-analysis.pdf"
      },
      {
        id: "civil-3-2",
        title: "Fluid Mechanics",
        description: "Principles of fluid statics and dynamics with applications.",
        languages: ["english"],
        downloadUrl: "https://example.com/downloads/civil/sem3/fluid-mechanics.pdf"
      },
      {
        id: "civil-3-3",
        title: "Building Construction",
        description: "Techniques and methods for building construction practices.",
        languages: ["hindi"],
        downloadUrl: "https://example.com/downloads/civil/sem3/building-construction.pdf"
      },
      {
        id: "civil-3-4",
        title: "Concrete Technology",
        description: "Properties, testing, and design of concrete mixes.",
        languages: ["english", "hindi"],
        downloadUrl: "https://example.com/downloads/civil/sem3/concrete-technology.pdf"
      },
      {
        id: "civil-3-5",
        title: "Surveying II",
        description: "Advanced surveying techniques including theodolite surveying.",
        languages: ["english"],
        downloadUrl: "https://example.com/downloads/civil/sem3/surveying-ii.pdf"
      },
      {
        id: "civil-3-6",
        title: "Geotechnical Engineering I",
        description: "Soil properties, classification, and compaction.",
        languages: ["hindi"],
        downloadUrl: "https://example.com/downloads/civil/sem3/geotechnical-engineering.pdf"
      }
    ]
  },
  {
    id: "semester-4",
    name: "4th Semester",
    subjects: [
      {
        id: "civil-4-1",
        title: "Structural Analysis II",
        description: "Analysis of indeterminate structures using various methods.",
        languages: ["english"],
        downloadUrl: "https://example.com/downloads/civil/sem4/structural-analysis-ii.pdf"
      },
      {
        id: "civil-4-2",
        title: "Design of Concrete Structures I",
        description: "Design principles for reinforced concrete elements.",
        languages: ["english", "hindi"],
        downloadUrl: "https://example.com/downloads/civil/sem4/design-concrete-structures.pdf"
      },
      {
        id: "civil-4-3",
        title: "Hydraulics Engineering",
        description: "Flow through pipes, channels, and hydraulic machines.",
        languages: ["hindi"],
        downloadUrl: "https://example.com/downloads/civil/sem4/hydraulics-engineering.pdf"
      },
      {
        id: "civil-4-4",
        title: "Transportation Engineering I",
        description: "Principles of highway planning, design, and construction.",
        languages: ["english"],
        downloadUrl: "https://example.com/downloads/civil/sem4/transportation-engineering.pdf"
      },
      {
        id: "civil-4-5",
        title: "Geotechnical Engineering II",
        description: "Shear strength, bearing capacity, and earth pressure theories.",
        languages: ["english", "hindi"],
        downloadUrl: "https://example.com/downloads/civil/sem4/geotechnical-engineering-ii.pdf"
      },
      {
        id: "civil-4-6",
        title: "Engineering Economics",
        description: "Economic analysis methods for engineering projects.",
        languages: ["english"],
        downloadUrl: "https://example.com/downloads/civil/sem4/engineering-economics.pdf"
      }
    ]
  },
  {
    id: "semester-5",
    name: "5th Semester",
    subjects: [
      {
        id: "civil-5-1",
        title: "Design of Concrete Structures II",
        description: "Advanced design of RC structures including foundations and slabs.",
        languages: ["english", "hindi"],
        downloadUrl: "https://example.com/downloads/civil/sem5/design-concrete-structures-ii.pdf"
      },
      {
        id: "civil-5-2",
        title: "Design of Steel Structures",
        description: "Analysis and design of steel structural elements.",
        languages: ["english"],
        downloadUrl: "https://example.com/downloads/civil/sem5/design-steel-structures.pdf"
      },
      {
        id: "civil-5-3",
        title: "Water Resources Engineering",
        description: "Hydrology, irrigation, and water resource management.",
        languages: ["hindi"],
        downloadUrl: "https://example.com/downloads/civil/sem5/water-resources-engineering.pdf"
      },
      {
        id: "civil-5-4",
        title: "Environmental Engineering I",
        description: "Water supply engineering and treatment systems.",
        languages: ["english", "hindi"],
        downloadUrl: "https://example.com/downloads/civil/sem5/environmental-engineering.pdf"
      },
      {
        id: "civil-5-5",
        title: "Transportation Engineering II",
        description: "Railways, airports, and traffic engineering principles.",
        languages: ["english"],
        downloadUrl: "https://example.com/downloads/civil/sem5/transportation-engineering-ii.pdf"
      },
      {
        id: "civil-5-6",
        title: "Construction Management",
        description: "Project planning, scheduling, and management techniques.",
        languages: ["hindi"],
        downloadUrl: "https://example.com/downloads/civil/sem5/construction-management.pdf"
      }
    ]
  },
  {
    id: "semester-6",
    name: "6th Semester",
    subjects: [
      {
        id: "civil-6-1",
        title: "Design of Structures III",
        description: "Advanced structural design concepts and applications.",
        languages: ["english"],
        downloadUrl: "https://example.com/downloads/civil/sem6/design-structures-iii.pdf"
      },
      {
        id: "civil-6-2",
        title: "Environmental Engineering II",
        description: "Wastewater treatment and solid waste management.",
        languages: ["english", "hindi"],
        downloadUrl: "https://example.com/downloads/civil/sem6/environmental-engineering-ii.pdf"
      },
      {
        id: "civil-6-3",
        title: "Foundation Engineering",
        description: "Design of shallow and deep foundations for structures.",
        languages: ["hindi"],
        downloadUrl: "https://example.com/downloads/civil/sem6/foundation-engineering.pdf"
      },
      {
        id: "civil-6-4",
        title: "Remote Sensing and GIS",
        description: "Principles and applications of remote sensing technology.",
        languages: ["english"],
        downloadUrl: "https://example.com/downloads/civil/sem6/remote-sensing-gis.pdf"
      },
      {
        id: "civil-6-5",
        title: "Estimating and Costing",
        description: "Methods for estimating quantities and costs for construction.",
        languages: ["english", "hindi"],
        downloadUrl: "https://example.com/downloads/civil/sem6/estimating-costing.pdf"
      },
      {
        id: "civil-6-6",
        title: "Professional Ethics",
        description: "Ethical considerations in civil engineering practice.",
        languages: ["english"],
        downloadUrl: "https://example.com/downloads/civil/sem6/professional-ethics.pdf"
      }
    ]
  }
];

// Mechanical Engineering Data
const mechanicalSemesters: Semester[] = [
  {
    id: "semester-1",
    name: "1st Semester",
    subjects: [
      {
        id: "mech-1-1",
        title: "Engineering Mathematics I",
        description: "Essential mathematical concepts for engineering applications.",
        languages: ["english"],
        downloadUrl: "https://example.com/downloads/mechanical/sem1/math.pdf"
      },
      {
        id: "mech-1-2",
        title: "Engineering Physics",
        description: "Fundamental physics principles with engineering focus.",
        languages: ["english", "hindi"],
        downloadUrl: "https://example.com/downloads/mechanical/sem1/physics.pdf"
      },
      {
        id: "mech-1-3",
        title: "Engineering Chemistry",
        description: "Chemical concepts relevant to mechanical engineering.",
        languages: ["hindi"],
        downloadUrl: "https://example.com/downloads/mechanical/sem1/chemistry.pdf"
      },
      {
        id: "mech-1-4",
        title: "Engineering Graphics",
        description: "Technical drawing and design representation techniques.",
        languages: ["english"],
        downloadUrl: "https://example.com/downloads/mechanical/sem1/graphics.pdf"
      },
      {
        id: "mech-1-5",
        title: "Basic Electrical Engineering",
        description: "Fundamentals of electrical systems and circuits.",
        languages: ["english", "hindi"],
        downloadUrl: "https://example.com/downloads/mechanical/sem1/electrical.pdf"
      },
      {
        id: "mech-1-6",
        title: "Workshop Practice",
        description: "Basic manufacturing processes and tools handling.",
        languages: ["hindi"],
        downloadUrl: "https://example.com/downloads/mechanical/sem1/workshop.pdf"
      }
    ]
  },
  {
    id: "semester-2",
    name: "2nd Semester",
    subjects: [
      {
        id: "mech-2-1",
        title: "Engineering Mathematics II",
        description: "Advanced mathematical techniques for engineering problems.",
        languages: ["english"],
        downloadUrl: "https://example.com/downloads/mechanical/sem2/math.pdf"
      },
      {
        id: "mech-2-2",
        title: "Engineering Mechanics",
        description: "Static and dynamic force analysis in mechanical systems.",
        languages: ["english", "hindi"],
        downloadUrl: "https://example.com/downloads/mechanical/sem2/mechanics.pdf"
      },
      {
        id: "mech-2-3",
        title: "Materials Science",
        description: "Properties and behavior of engineering materials.",
        languages: ["english"],
        downloadUrl: "https://example.com/downloads/mechanical/sem2/materials.pdf"
      },
      {
        id: "mech-2-4",
        title: "Thermodynamics",
        description: "Laws of thermodynamics and energy transformation.",
        languages: ["hindi"],
        downloadUrl: "https://example.com/downloads/mechanical/sem2/thermodynamics.pdf"
      },
      {
        id: "mech-2-5",
        title: "Programming Fundamentals",
        description: "Introduction to computer programming for engineers.",
        languages: ["english"],
        downloadUrl: "https://example.com/downloads/mechanical/sem2/programming.pdf"
      },
      {
        id: "mech-2-6",
        title: "Communication Skills",
        description: "Technical writing and presentation techniques.",
        languages: ["english", "hindi"],
        downloadUrl: "https://example.com/downloads/mechanical/sem2/communication.pdf"
      }
    ]
  },
  {
    id: "semester-3",
    name: "3rd Semester",
    subjects: [
      {
        id: "mech-3-1",
        title: "Strength of Materials",
        description: "Analysis of stresses and deformations in solid materials.",
        languages: ["english", "hindi"],
        downloadUrl: "https://example.com/downloads/mechanical/sem3/strength-materials.pdf"
      },
      {
        id: "mech-3-2",
        title: "Manufacturing Processes I",
        description: "Casting, forming, and joining processes.",
        languages: ["english"],
        downloadUrl: "https://example.com/downloads/mechanical/sem3/manufacturing-processes.pdf"
      },
      {
        id: "mech-3-3",
        title: "Fluid Mechanics",
        description: "Behavior of fluids at rest and in motion.",
        languages: ["hindi"],
        downloadUrl: "https://example.com/downloads/mechanical/sem3/fluid-mechanics.pdf"
      },
      {
        id: "mech-3-4",
        title: "Machine Drawing",
        description: "Detailed drawing of machine elements and assemblies.",
        languages: ["english"],
        downloadUrl: "https://example.com/downloads/mechanical/sem3/machine-drawing.pdf"
      },
      {
        id: "mech-3-5",
        title: "Engineering Mathematics III",
        description: "Numerical methods and statistical techniques.",
        languages: ["english", "hindi"],
        downloadUrl: "https://example.com/downloads/mechanical/sem3/mathematics-iii.pdf"
      },
      {
        id: "mech-3-6",
        title: "Measurement and Metrology",
        description: "Principles of measurement and measuring instruments.",
        languages: ["hindi"],
        downloadUrl: "https://example.com/downloads/mechanical/sem3/measurement-metrology.pdf"
      }
    ]
  },
  {
    id: "semester-4",
    name: "4th Semester",
    subjects: [
      {
        id: "mech-4-1",
        title: "Applied Thermodynamics",
        description: "Power cycles, combustion, and refrigeration systems.",
        languages: ["english"],
        downloadUrl: "https://example.com/downloads/mechanical/sem4/applied-thermodynamics.pdf"
      },
      {
        id: "mech-4-2",
        title: "Dynamics of Machinery",
        description: "Kinematics and kinetics of machines and mechanisms.",
        languages: ["english", "hindi"],
        downloadUrl: "https://example.com/downloads/mechanical/sem4/dynamics-machinery.pdf"
      },
      {
        id: "mech-4-3",
        title: "Machine Design I",
        description: "Design principles for basic machine elements.",
        languages: ["hindi"],
        downloadUrl: "https://example.com/downloads/mechanical/sem4/machine-design.pdf"
      },
      {
        id: "mech-4-4",
        title: "Manufacturing Processes II",
        description: "Machining operations and advanced manufacturing.",
        languages: ["english"],
        downloadUrl: "https://example.com/downloads/mechanical/sem4/manufacturing-processes-ii.pdf"
      },
      {
        id: "mech-4-5",
        title: "Heat Transfer",
        description: "Principles and applications of conduction, convection, and radiation.",
        languages: ["english", "hindi"],
        downloadUrl: "https://example.com/downloads/mechanical/sem4/heat-transfer.pdf"
      },
      {
        id: "mech-4-6",
        title: "Numerical Methods",
        description: "Computational techniques for solving engineering problems.",
        languages: ["english"],
        downloadUrl: "https://example.com/downloads/mechanical/sem4/numerical-methods.pdf"
      }
    ]
  },
  {
    id: "semester-5",
    name: "5th Semester",
    subjects: [
      {
        id: "mech-5-1",
        title: "Internal Combustion Engines",
        description: "Working principles and performance of IC engines.",
        languages: ["english", "hindi"],
        downloadUrl: "https://example.com/downloads/mechanical/sem5/internal-combustion-engines.pdf"
      },
      {
        id: "mech-5-2",
        title: "Machine Design II",
        description: "Advanced machine component design and analysis.",
        languages: ["english"],
        downloadUrl: "https://example.com/downloads/mechanical/sem5/machine-design-ii.pdf"
      },
      {
        id: "mech-5-3",
        title: "Manufacturing Technology",
        description: "Modern manufacturing systems and automation.",
        languages: ["hindi"],
        downloadUrl: "https://example.com/downloads/mechanical/sem5/manufacturing-technology.pdf"
      },
      {
        id: "mech-5-4",
        title: "Control Systems",
        description: "Analysis and design of mechanical control systems.",
        languages: ["english", "hindi"],
        downloadUrl: "https://example.com/downloads/mechanical/sem5/control-systems.pdf"
      },
      {
        id: "mech-5-5",
        title: "Operations Research",
        description: "Optimization techniques for industrial problems.",
        languages: ["english"],
        downloadUrl: "https://example.com/downloads/mechanical/sem5/operations-research.pdf"
      },
      {
        id: "mech-5-6",
        title: "Refrigeration and Air Conditioning",
        description: "Principles and design of cooling systems.",
        languages: ["hindi"],
        downloadUrl: "https://example.com/downloads/mechanical/sem5/refrigeration-air-conditioning.pdf"
      }
    ]
  },
  {
    id: "semester-6",
    name: "6th Semester",
    subjects: [
      {
        id: "mech-6-1",
        title: "Power Plant Engineering",
        description: "Design and operation of different types of power plants.",
        languages: ["english"],
        downloadUrl: "https://example.com/downloads/mechanical/sem6/power-plant-engineering.pdf"
      },
      {
        id: "mech-6-2",
        title: "CAD/CAM",
        description: "Computer-aided design and manufacturing techniques.",
        languages: ["english", "hindi"],
        downloadUrl: "https://example.com/downloads/mechanical/sem6/cad-cam.pdf"
      },
      {
        id: "mech-6-3",
        title: "Vibration Engineering",
        description: "Analysis and control of mechanical vibrations.",
        languages: ["hindi"],
        downloadUrl: "https://example.com/downloads/mechanical/sem6/vibration-engineering.pdf"
      },
      {
        id: "mech-6-4",
        title: "Industrial Engineering",
        description: "Production planning, quality control, and management.",
        languages: ["english"],
        downloadUrl: "https://example.com/downloads/mechanical/sem6/industrial-engineering.pdf"
      },
      {
        id: "mech-6-5",
        title: "Finite Element Analysis",
        description: "Numerical technique for solving engineering problems.",
        languages: ["english", "hindi"],
        downloadUrl: "https://example.com/downloads/mechanical/sem6/finite-element-analysis.pdf"
      },
      {
        id: "mech-6-6",
        title: "Automobile Engineering",
        description: "Design and working principles of automotive systems.",
        languages: ["hindi"],
        downloadUrl: "https://example.com/downloads/mechanical/sem6/automobile-engineering.pdf"
      }
    ]
  }
];

// Computer Science Data
const computerSemesters: Semester[] = [
  {
    id: "semester-1",
    name: "1st Semester",
    subjects: [
      {
        id: "comp-1-1",
        title: "Engineering Mathematics I",
        description: "Mathematical foundations for computer science.",
        languages: ["english"],
        downloadUrl: "https://example.com/downloads/cs/sem1/math.pdf"
      },
      {
        id: "comp-1-2",
        title: "Physics for Computing",
        description: "Physical principles related to computing and electronics.",
        languages: ["english", "hindi"],
        downloadUrl: "https://example.com/downloads/cs/sem1/physics.pdf"
      },
      {
        id: "comp-1-3",
        title: "Introduction to Programming",
        description: "Fundamentals of programming using C language.",
        languages: ["english"],
        downloadUrl: "https://example.com/downloads/cs/sem1/programming.pdf"
      },
      {
        id: "comp-1-4",
        title: "Digital Logic Design",
        description: "Boolean algebra, logic gates, and digital circuits.",
        languages: ["hindi"],
        downloadUrl: "https://example.com/downloads/cs/sem1/digital-logic.pdf"
      },
      {
        id: "comp-1-5",
        title: "Basic Electronics",
        description: "Electronic components and basic circuit analysis.",
        languages: ["english", "hindi"],
        downloadUrl: "https://example.com/downloads/cs/sem1/electronics.pdf"
      },
      {
        id: "comp-1-6",
        title: "Communication Skills",
        description: "Technical communication and soft skills development.",
        languages: ["english"],
        downloadUrl: "https://example.com/downloads/cs/sem1/communication.pdf"
      }
    ]
  },
  {
    id: "semester-2",
    name: "2nd Semester",
    subjects: [
      {
        id: "comp-2-1",
        title: "Engineering Mathematics II",
        description: "Probability, statistics, and discrete mathematics.",
        languages: ["english"],
        downloadUrl: "https://example.com/downloads/cs/sem2/math.pdf"
      },
      {
        id: "comp-2-2",
        title: "Data Structures",
        description: "Implementation and analysis of basic data structures.",
        languages: ["english", "hindi"],
        downloadUrl: "https://example.com/downloads/cs/sem2/data-structures.pdf"
      },
      {
        id: "comp-2-3",
        title: "Object-Oriented Programming",
        description: "OOP concepts using C++ or Java.",
        languages: ["english"],
        downloadUrl: "https://example.com/downloads/cs/sem2/oop.pdf"
      },
      {
        id: "comp-2-4",
        title: "Computer Organization",
        description: "Computer architecture and assembly language programming.",
        languages: ["hindi"],
        downloadUrl: "https://example.com/downloads/cs/sem2/computer-organization.pdf"
      },
      {
        id: "comp-2-5",
        title: "Environmental Studies",
        description: "Environmental awareness and sustainability.",
        languages: ["english"],
        downloadUrl: "https://example.com/downloads/cs/sem2/environmental-studies.pdf"
      },
      {
        id: "comp-2-6",
        title: "Web Technologies",
        description: "HTML, CSS, and basics of web development.",
        languages: ["english", "hindi"],
        downloadUrl: "https://example.com/downloads/cs/sem2/web-technologies.pdf"
      }
    ]
  },
  {
    id: "semester-3",
    name: "3rd Semester",
    subjects: [
      {
        id: "comp-3-1",
        title: "Data Structures and Algorithms",
        description: "Advanced data structures and algorithm analysis.",
        languages: ["english", "hindi"],
        downloadUrl: "https://example.com/downloads/cs/sem3/data-structures-algorithms.pdf"
      },
      {
        id: "comp-3-2",
        title: "Database Management Systems",
        description: "Relational databases, SQL, and normalization.",
        languages: ["english"],
        downloadUrl: "https://example.com/downloads/cs/sem3/database-management-systems.pdf"
      },
      {
        id: "comp-3-3",
        title: "Operating Systems",
        description: "Process management, memory management, and file systems.",
        languages: ["hindi"],
        downloadUrl: "https://example.com/downloads/cs/sem3/operating-systems.pdf"
      },
      {
        id: "comp-3-4",
        title: "Theory of Computation",
        description: "Automata theory and formal languages.",
        languages: ["english"],
        downloadUrl: "https://example.com/downloads/cs/sem3/theory-computation.pdf"
      },
      {
        id: "comp-3-5",
        title: "Software Engineering",
        description: "Software development life cycle and project management.",
        languages: ["english", "hindi"],
        downloadUrl: "https://example.com/downloads/cs/sem3/software-engineering.pdf"
      },
      {
        id: "comp-3-6",
        title: "Discrete Structures",
        description: "Mathematical structures for computer science applications.",
        languages: ["english"],
        downloadUrl: "https://example.com/downloads/cs/sem3/discrete-structures.pdf"
      }
    ]
  },
  {
    id: "semester-4",
    name: "4th Semester",
    subjects: [
      {
        id: "comp-4-1",
        title: "Computer Networks",
        description: "Network protocols, architectures, and applications.",
        languages: ["english"],
        downloadUrl: "https://example.com/downloads/cs/sem4/computer-networks.pdf"
      },
      {
        id: "comp-4-2",
        title: "Design and Analysis of Algorithms",
        description: "Algorithm design techniques and complexity analysis.",
        languages: ["english", "hindi"],
        downloadUrl: "https://example.com/downloads/cs/sem4/design-analysis-algorithms.pdf"
      },
      {
        id: "comp-4-3",
        title: "Microprocessors and Interfacing",
        description: "Architecture and programming of microprocessors.",
        languages: ["hindi"],
        downloadUrl: "https://example.com/downloads/cs/sem4/microprocessors-interfacing.pdf"
      },
      {
        id: "comp-4-4",
        title: "Object-Oriented Software Engineering",
        description: "Design patterns and OO analysis and design.",
        languages: ["english"],
        downloadUrl: "https://example.com/downloads/cs/sem4/object-oriented-software-engineering.pdf"
      },
      {
        id: "comp-4-5",
        title: "Web Development",
        description: "Server-side programming and web frameworks.",
        languages: ["english", "hindi"],
        downloadUrl: "https://example.com/downloads/cs/sem4/web-development.pdf"
      },
      {
        id: "comp-4-6",
        title: "Probability and Statistics",
        description: "Statistical methods for data analysis.",
        languages: ["english"],
        downloadUrl: "https://example.com/downloads/cs/sem4/probability-statistics.pdf"
      }
    ]
  },
  {
    id: "semester-5",
    name: "5th Semester",
    subjects: [
      {
        id: "comp-5-1",
        title: "Artificial Intelligence",
        description: "Search algorithms, knowledge representation, and reasoning.",
        languages: ["english", "hindi"],
        downloadUrl: "https://example.com/downloads/cs/sem5/artificial-intelligence.pdf"
      },
      {
        id: "comp-5-2",
        title: "Compiler Design",
        description: "Lexical analysis, parsing, and code generation.",
        languages: ["english"],
        downloadUrl: "https://example.com/downloads/cs/sem5/compiler-design.pdf"
      },
      {
        id: "comp-5-3",
        title: "Information Security",
        description: "Cryptography, network security, and secure coding.",
        languages: ["hindi"],
        downloadUrl: "https://example.com/downloads/cs/sem5/information-security.pdf"
      },
      {
        id: "comp-5-4",
        title: "Mobile Application Development",
        description: "Android/iOS app development principles and practices.",
        languages: ["english"],
        downloadUrl: "https://example.com/downloads/cs/sem5/mobile-application-development.pdf"
      },
      {
        id: "comp-5-5",
        title: "Data Mining",
        description: "Pattern discovery and knowledge extraction from data.",
        languages: ["english", "hindi"],
        downloadUrl: "https://example.com/downloads/cs/sem5/data-mining.pdf"
      },
      {
        id: "comp-5-6",
        title: "Cloud Computing",
        description: "Cloud service models, virtualization, and deployment.",
        languages: ["english"],
        downloadUrl: "https://example.com/downloads/cs/sem5/cloud-computing.pdf"
      }
    ]
  },
  {
    id: "semester-6",
    name: "6th Semester",
    subjects: [
      {
        id: "comp-6-1",
        title: "Machine Learning",
        description: "Supervised and unsupervised learning algorithms.",
        languages: ["english"],
        downloadUrl: "https://example.com/downloads/cs/sem6/machine-learning.pdf"
      },
      {
        id: "comp-6-2",
        title: "Big Data Analytics",
        description: "Hadoop ecosystem and large-scale data processing.",
        languages: ["english", "hindi"],
        downloadUrl: "https://example.com/downloads/cs/sem6/big-data-analytics.pdf"
      },
      {
        id: "comp-6-3",
        title: "Internet of Things",
        description: "IoT architecture, protocols, and applications.",
        languages: ["hindi"],
        downloadUrl: "https://example.com/downloads/cs/sem6/internet-of-things.pdf"
      },
      {
        id: "comp-6-4",
        title: "Computer Graphics",
        description: "2D/3D graphics, rendering, and visualization.",
        languages: ["english"],
        downloadUrl: "https://example.com/downloads/cs/sem6/computer-graphics.pdf"
      },
      {
        id: "comp-6-5",
        title: "Software Testing",
        description: "Testing techniques, tools, and quality assurance.",
        languages: ["english", "hindi"],
        downloadUrl: "https://example.com/downloads/cs/sem6/software-testing.pdf"
      },
      {
        id: "comp-6-6",
        title: "Blockchain Technology",
        description: "Distributed ledger technology and smart contracts.",
        languages: ["english"],
        downloadUrl: "https://example.com/downloads/cs/sem6/blockchain-technology.pdf"
      }
    ]
  }
];

// Departments Data
const departments: Record<string, Department> = {
  civil: {
    id: "civil",
    semesters: civilSemesters,
    importantTopics: [
      {
        id: "civil-imp-1",
        title: "RCC Design Concepts",
        description: "Key topics for understanding reinforced concrete design.",
        languages: ["hindi", "english"],
        downloadUrl: "https://example.com/downloads/civil/topics/rcc-design.pdf"
      },
      {
        id: "civil-imp-2",
        title: "Transportation Engineering",
        description: "Important concepts and formulas for transportation engineering.",
        languages: ["english"],
        downloadUrl: "https://example.com/downloads/civil/topics/transportation.pdf"
      },
      {
        id: "civil-imp-3",
        title: "Structural Analysis Formulas",
        description: "Essential formulas and methods for structural engineering.",
        languages: ["hindi"],
        downloadUrl: "https://example.com/downloads/civil/topics/structural-analysis.pdf"
      },
      {
        id: "civil-imp-4",
        title: "Geotechnical Engineering Concepts",
        description: "Fundamental soil mechanics principles and applications.",
        languages: ["english", "hindi"],
        downloadUrl: "https://example.com/downloads/civil/topics/geotechnical.pdf"
      }
    ],
    syllabus: [
      {
        id: "civil-syl-1",
        title: "3rd Semester Syllabus",
        description: "Complete syllabus for 3rd semester Civil Engineering.",
        downloadUrl: "https://example.com/downloads/civil/syllabus/sem3.pdf"
      },
      {
        id: "civil-syl-2",
        title: "4th Semester Syllabus",
        description: "Complete syllabus for 4th semester Civil Engineering.",
        downloadUrl: "https://example.com/downloads/civil/syllabus/sem4.pdf"
      },
      {
        id: "civil-syl-3",
        title: "5th Semester Syllabus",
        description: "Complete syllabus for 5th semester Civil Engineering.",
        downloadUrl: "https://example.com/downloads/civil/syllabus/sem5.pdf"
      },
      {
        id: "civil-syl-4",
        title: "6th Semester Syllabus",
        description: "Complete syllabus for 6th semester Civil Engineering.",
        downloadUrl: "https://example.com/downloads/civil/syllabus/sem6.pdf"
      }
    ],
    previousPapers: [
      {
        id: "civil-pp-1",
        title: "Structural Analysis (2024)",
        description: "Previous year question paper with solutions.",
        downloadUrl: "https://example.com/downloads/civil/papers/structural-2024.pdf"
      },
      {
        id: "civil-pp-2",
        title: "Environmental Engineering (2023)",
        description: "Previous year question paper with solutions.",
        downloadUrl: "https://example.com/downloads/civil/papers/environmental-2023.pdf"
      },
      {
        id: "civil-pp-3",
        title: "Geotechnical Engineering (2024)",
        description: "Previous year question paper with solutions.",
        downloadUrl: "https://example.com/downloads/civil/papers/geotechnical-2024.pdf"
      },
      {
        id: "civil-pp-4",
        title: "Transportation Engineering (2023)",
        description: "Previous year question paper with solutions.",
        downloadUrl: "https://example.com/downloads/civil/papers/transportation-2023.pdf"
      }
    ]
  },
  mechanical: {
    id: "mechanical",
    semesters: mechanicalSemesters,
    importantTopics: [
      {
        id: "mech-imp-1",
        title: "Heat Transfer Analysis",
        description: "Key topics and formulas for heat transfer calculations.",
        languages: ["english"],
        downloadUrl: "https://example.com/downloads/mechanical/topics/heat-transfer.pdf"
      },
      {
        id: "mech-imp-2",
        title: "Manufacturing Processes",
        description: "Important manufacturing techniques and principles.",
        languages: ["hindi", "english"],
        downloadUrl: "https://example.com/downloads/mechanical/topics/manufacturing.pdf"
      },
      {
        id: "mech-imp-3",
        title: "Machine Design Calculations",
        description: "Critical formulas and methods for mechanical components design.",
        languages: ["english"],
        downloadUrl: "https://example.com/downloads/mechanical/topics/machine-design.pdf"
      },
      {
        id: "mech-imp-4",
        title: "Thermodynamics Laws and Cycles",
        description: "Comprehensive overview of thermodynamic principles.",
        languages: ["hindi"],
        downloadUrl: "https://example.com/downloads/mechanical/topics/thermodynamics.pdf"
      }
    ],
    syllabus: [
      {
        id: "mech-syl-1",
        title: "3rd Semester Syllabus",
        description: "Complete syllabus for 3rd semester Mechanical Engineering.",
        downloadUrl: "https://example.com/downloads/mechanical/syllabus/sem3.pdf"
      },
      {
        id: "mech-syl-2",
        title: "4th Semester Syllabus",
        description: "Complete syllabus for 4th semester Mechanical Engineering.",
        downloadUrl: "https://example.com/downloads/mechanical/syllabus/sem4.pdf"
      },
      {
        id: "mech-syl-3",
        title: "5th Semester Syllabus",
        description: "Complete syllabus for 5th semester Mechanical Engineering.",
        downloadUrl: "https://example.com/downloads/mechanical/syllabus/sem5.pdf"
      },
      {
        id: "mech-syl-4",
        title: "6th Semester Syllabus",
        description: "Complete syllabus for 6th semester Mechanical Engineering.",
        downloadUrl: "https://example.com/downloads/mechanical/syllabus/sem6.pdf"
      }
    ],
    previousPapers: [
      {
        id: "mech-pp-1",
        title: "Thermodynamics (2024)",
        description: "Previous year question paper with solutions.",
        downloadUrl: "https://example.com/downloads/mechanical/papers/thermodynamics-2024.pdf"
      },
      {
        id: "mech-pp-2",
        title: "Engineering Mechanics (2023)",
        description: "Previous year question paper with solutions.",
        downloadUrl: "https://example.com/downloads/mechanical/papers/mechanics-2023.pdf"
      },
      {
        id: "mech-pp-3",
        title: "Manufacturing Technology (2024)",
        description: "Previous year question paper with solutions.",
        downloadUrl: "https://example.com/downloads/mechanical/papers/manufacturing-2024.pdf"
      },
      {
        id: "mech-pp-4",
        title: "Machine Design (2023)",
        description: "Previous year question paper with solutions.",
        downloadUrl: "https://example.com/downloads/mechanical/papers/machine-design-2023.pdf"
      }
    ]
  },
  computer: {
    id: "computer",
    semesters: computerSemesters,
    importantTopics: [
      {
        id: "comp-imp-1",
        title: "Object-Oriented Programming",
        description: "Key OOP concepts with examples in Java and C++.",
        languages: ["hindi", "english"],
        downloadUrl: "https://example.com/downloads/cs/topics/oop.pdf"
      },
      {
        id: "comp-imp-2",
        title: "Computer Networks",
        description: "Important networking protocols and architectures.",
        languages: ["english"],
        downloadUrl: "https://example.com/downloads/cs/topics/networking.pdf"
      },
      {
        id: "comp-imp-3",
        title: "Database Management Systems",
        description: "SQL queries, normalization, and database design.",
        languages: ["hindi", "english"],
        downloadUrl: "https://example.com/downloads/cs/topics/database.pdf"
      },
      {
        id: "comp-imp-4",
        title: "Algorithm Analysis",
        description: "Big O notation and complexity analysis of common algorithms.",
        languages: ["english"],
        downloadUrl: "https://example.com/downloads/cs/topics/algorithms.pdf"
      }
    ],
    syllabus: [
      {
        id: "comp-syl-1",
        title: "3rd Semester Syllabus",
        description: "Complete syllabus for 3rd semester Computer Science.",
        downloadUrl: "https://example.com/downloads/cs/syllabus/sem3.pdf"
      },
      {
        id: "comp-syl-2",
        title: "4th Semester Syllabus",
        description: "Complete syllabus for 4th semester Computer Science.",
        downloadUrl: "https://example.com/downloads/cs/syllabus/sem4.pdf"
      },
      {
        id: "comp-syl-3",
        title: "5th Semester Syllabus",
        description: "Complete syllabus for 5th semester Computer Science.",
        downloadUrl: "https://example.com/downloads/cs/syllabus/sem5.pdf"
      },
      {
        id: "comp-syl-4",
        title: "6th Semester Syllabus",
        description: "Complete syllabus for 6th semester Computer Science.",
        downloadUrl: "https://example.com/downloads/cs/syllabus/sem6.pdf"
      }
    ],
    previousPapers: [
      {
        id: "comp-pp-1",
        title: "Data Structures (2024)",
        description: "Previous year question paper with solutions.",
        downloadUrl: "https://example.com/downloads/cs/papers/ds-2024.pdf"
      },
      {
        id: "comp-pp-2",
        title: "Artificial Intelligence (2023)",
        description: "Previous year question paper with solutions.",
        downloadUrl: "https://example.com/downloads/cs/papers/ai-2023.pdf"
      },
      {
        id: "comp-pp-3",
        title: "Web Development (2024)",
        description: "Previous year question paper with solutions.",
        downloadUrl: "https://example.com/downloads/cs/papers/web-2024.pdf"
      },
      {
        id: "comp-pp-4",
        title: "Operating Systems (2023)",
        description: "Previous year question paper with solutions.",
        downloadUrl: "https://example.com/downloads/cs/papers/os-2023.pdf"
      }
    ]
  }
};

export default departments;
