
export interface Subject {
  id: string;
  title: string;
  description: string;
  languages: string[];
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
        languages: ["english"]
      },
      {
        id: "civil-1-2",
        title: "Engineering Physics",
        description: "Comprehensive study material for mechanics, waves, and optics.",
        languages: ["english", "hindi"]
      },
      {
        id: "civil-1-3",
        title: "Engineering Chemistry",
        description: "Detailed notes on chemical bonding, thermodynamics, and polymers.",
        languages: ["english"]
      },
      {
        id: "civil-1-4",
        title: "Engineering Graphics",
        description: "Step-by-step guide to engineering drawing and orthographic projections.",
        languages: ["hindi"]
      },
      {
        id: "civil-1-5",
        title: "Basic Electrical Engineering",
        description: "Introduction to electrical circuits, transformers, and machines.",
        languages: ["english", "hindi"]
      },
      {
        id: "civil-1-6",
        title: "Programming Fundamentals",
        description: "Basics of computer programming with C/C++.",
        languages: ["english"]
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
        languages: ["english"]
      },
      {
        id: "civil-2-2",
        title: "Engineering Mechanics",
        description: "Principles of statics and dynamics with problem-solving approaches.",
        languages: ["english", "hindi"]
      },
      {
        id: "civil-2-3",
        title: "Building Materials",
        description: "Properties and applications of construction materials.",
        languages: ["hindi"]
      },
      {
        id: "civil-2-4",
        title: "Surveying I",
        description: "Basic principles and techniques of land surveying.",
        languages: ["english"]
      },
      {
        id: "civil-2-5",
        title: "Environmental Science",
        description: "Study of ecosystems, pollution, and environmental protection.",
        languages: ["english", "hindi"]
      },
      {
        id: "civil-2-6",
        title: "Communication Skills",
        description: "Effective techniques for technical communication and presentations.",
        languages: ["english"]
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
        languages: ["english", "hindi"]
      },
      {
        id: "civil-3-2",
        title: "Fluid Mechanics",
        description: "Principles of fluid statics and dynamics with applications.",
        languages: ["english"]
      },
      {
        id: "civil-3-3",
        title: "Building Construction",
        description: "Techniques and methods for building construction practices.",
        languages: ["hindi"]
      },
      {
        id: "civil-3-4",
        title: "Concrete Technology",
        description: "Properties, testing, and design of concrete mixes.",
        languages: ["english", "hindi"]
      },
      {
        id: "civil-3-5",
        title: "Surveying II",
        description: "Advanced surveying techniques including theodolite surveying.",
        languages: ["english"]
      },
      {
        id: "civil-3-6",
        title: "Geotechnical Engineering I",
        description: "Soil properties, classification, and compaction.",
        languages: ["hindi"]
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
        languages: ["english"]
      },
      {
        id: "civil-4-2",
        title: "Design of Concrete Structures I",
        description: "Design principles for reinforced concrete elements.",
        languages: ["english", "hindi"]
      },
      {
        id: "civil-4-3",
        title: "Hydraulics Engineering",
        description: "Flow through pipes, channels, and hydraulic machines.",
        languages: ["hindi"]
      },
      {
        id: "civil-4-4",
        title: "Transportation Engineering I",
        description: "Principles of highway planning, design, and construction.",
        languages: ["english"]
      },
      {
        id: "civil-4-5",
        title: "Geotechnical Engineering II",
        description: "Shear strength, bearing capacity, and earth pressure theories.",
        languages: ["english", "hindi"]
      },
      {
        id: "civil-4-6",
        title: "Engineering Economics",
        description: "Economic analysis methods for engineering projects.",
        languages: ["english"]
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
        languages: ["english", "hindi"]
      },
      {
        id: "civil-5-2",
        title: "Design of Steel Structures",
        description: "Analysis and design of steel structural elements.",
        languages: ["english"]
      },
      {
        id: "civil-5-3",
        title: "Water Resources Engineering",
        description: "Hydrology, irrigation, and water resource management.",
        languages: ["hindi"]
      },
      {
        id: "civil-5-4",
        title: "Environmental Engineering I",
        description: "Water supply engineering and treatment systems.",
        languages: ["english", "hindi"]
      },
      {
        id: "civil-5-5",
        title: "Transportation Engineering II",
        description: "Railways, airports, and traffic engineering principles.",
        languages: ["english"]
      },
      {
        id: "civil-5-6",
        title: "Construction Management",
        description: "Project planning, scheduling, and management techniques.",
        languages: ["hindi"]
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
        languages: ["english"]
      },
      {
        id: "civil-6-2",
        title: "Environmental Engineering II",
        description: "Wastewater treatment and solid waste management.",
        languages: ["english", "hindi"]
      },
      {
        id: "civil-6-3",
        title: "Foundation Engineering",
        description: "Design of shallow and deep foundations for structures.",
        languages: ["hindi"]
      },
      {
        id: "civil-6-4",
        title: "Remote Sensing and GIS",
        description: "Principles and applications of remote sensing technology.",
        languages: ["english"]
      },
      {
        id: "civil-6-5",
        title: "Estimating and Costing",
        description: "Methods for estimating quantities and costs for construction.",
        languages: ["english", "hindi"]
      },
      {
        id: "civil-6-6",
        title: "Professional Ethics",
        description: "Ethical considerations in civil engineering practice.",
        languages: ["english"]
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
        languages: ["english"]
      },
      {
        id: "mech-1-2",
        title: "Engineering Physics",
        description: "Fundamental physics principles with engineering focus.",
        languages: ["english", "hindi"]
      },
      {
        id: "mech-1-3",
        title: "Engineering Chemistry",
        description: "Chemical concepts relevant to mechanical engineering.",
        languages: ["hindi"]
      },
      {
        id: "mech-1-4",
        title: "Engineering Graphics",
        description: "Technical drawing and design representation techniques.",
        languages: ["english"]
      },
      {
        id: "mech-1-5",
        title: "Basic Electrical Engineering",
        description: "Fundamentals of electrical systems and circuits.",
        languages: ["english", "hindi"]
      },
      {
        id: "mech-1-6",
        title: "Workshop Practice",
        description: "Basic manufacturing processes and tools handling.",
        languages: ["hindi"]
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
        languages: ["english"]
      },
      {
        id: "mech-2-2",
        title: "Engineering Mechanics",
        description: "Static and dynamic force analysis in mechanical systems.",
        languages: ["english", "hindi"]
      },
      {
        id: "mech-2-3",
        title: "Materials Science",
        description: "Properties and behavior of engineering materials.",
        languages: ["english"]
      },
      {
        id: "mech-2-4",
        title: "Thermodynamics",
        description: "Laws of thermodynamics and energy transformation.",
        languages: ["hindi"]
      },
      {
        id: "mech-2-5",
        title: "Programming Fundamentals",
        description: "Introduction to computer programming for engineers.",
        languages: ["english"]
      },
      {
        id: "mech-2-6",
        title: "Communication Skills",
        description: "Technical writing and presentation techniques.",
        languages: ["english", "hindi"]
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
        languages: ["english", "hindi"]
      },
      {
        id: "mech-3-2",
        title: "Manufacturing Processes I",
        description: "Casting, forming, and joining processes.",
        languages: ["english"]
      },
      {
        id: "mech-3-3",
        title: "Fluid Mechanics",
        description: "Behavior of fluids at rest and in motion.",
        languages: ["hindi"]
      },
      {
        id: "mech-3-4",
        title: "Machine Drawing",
        description: "Detailed drawing of machine elements and assemblies.",
        languages: ["english"]
      },
      {
        id: "mech-3-5",
        title: "Engineering Mathematics III",
        description: "Numerical methods and statistical techniques.",
        languages: ["english", "hindi"]
      },
      {
        id: "mech-3-6",
        title: "Measurement and Metrology",
        description: "Principles of measurement and measuring instruments.",
        languages: ["hindi"]
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
        languages: ["english"]
      },
      {
        id: "mech-4-2",
        title: "Dynamics of Machinery",
        description: "Kinematics and kinetics of machines and mechanisms.",
        languages: ["english", "hindi"]
      },
      {
        id: "mech-4-3",
        title: "Machine Design I",
        description: "Design principles for basic machine elements.",
        languages: ["hindi"]
      },
      {
        id: "mech-4-4",
        title: "Manufacturing Processes II",
        description: "Machining operations and advanced manufacturing.",
        languages: ["english"]
      },
      {
        id: "mech-4-5",
        title: "Heat Transfer",
        description: "Principles and applications of conduction, convection, and radiation.",
        languages: ["english", "hindi"]
      },
      {
        id: "mech-4-6",
        title: "Numerical Methods",
        description: "Computational techniques for solving engineering problems.",
        languages: ["english"]
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
        languages: ["english", "hindi"]
      },
      {
        id: "mech-5-2",
        title: "Machine Design II",
        description: "Advanced machine component design and analysis.",
        languages: ["english"]
      },
      {
        id: "mech-5-3",
        title: "Manufacturing Technology",
        description: "Modern manufacturing systems and automation.",
        languages: ["hindi"]
      },
      {
        id: "mech-5-4",
        title: "Control Systems",
        description: "Analysis and design of mechanical control systems.",
        languages: ["english", "hindi"]
      },
      {
        id: "mech-5-5",
        title: "Operations Research",
        description: "Optimization techniques for industrial problems.",
        languages: ["english"]
      },
      {
        id: "mech-5-6",
        title: "Refrigeration and Air Conditioning",
        description: "Principles and design of cooling systems.",
        languages: ["hindi"]
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
        languages: ["english"]
      },
      {
        id: "mech-6-2",
        title: "CAD/CAM",
        description: "Computer-aided design and manufacturing techniques.",
        languages: ["english", "hindi"]
      },
      {
        id: "mech-6-3",
        title: "Vibration Engineering",
        description: "Analysis and control of mechanical vibrations.",
        languages: ["hindi"]
      },
      {
        id: "mech-6-4",
        title: "Industrial Engineering",
        description: "Production planning, quality control, and management.",
        languages: ["english"]
      },
      {
        id: "mech-6-5",
        title: "Finite Element Analysis",
        description: "Numerical technique for solving engineering problems.",
        languages: ["english", "hindi"]
      },
      {
        id: "mech-6-6",
        title: "Automobile Engineering",
        description: "Design and working principles of automotive systems.",
        languages: ["hindi"]
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
        languages: ["english"]
      },
      {
        id: "comp-1-2",
        title: "Physics for Computing",
        description: "Physical principles related to computing and electronics.",
        languages: ["english", "hindi"]
      },
      {
        id: "comp-1-3",
        title: "Introduction to Programming",
        description: "Fundamentals of programming using C language.",
        languages: ["english"]
      },
      {
        id: "comp-1-4",
        title: "Digital Logic Design",
        description: "Boolean algebra, logic gates, and digital circuits.",
        languages: ["hindi"]
      },
      {
        id: "comp-1-5",
        title: "Basic Electronics",
        description: "Electronic components and basic circuit analysis.",
        languages: ["english", "hindi"]
      },
      {
        id: "comp-1-6",
        title: "Communication Skills",
        description: "Technical communication and soft skills development.",
        languages: ["english"]
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
        languages: ["english"]
      },
      {
        id: "comp-2-2",
        title: "Data Structures",
        description: "Implementation and analysis of basic data structures.",
        languages: ["english", "hindi"]
      },
      {
        id: "comp-2-3",
        title: "Object-Oriented Programming",
        description: "OOP concepts using C++ or Java.",
        languages: ["english"]
      },
      {
        id: "comp-2-4",
        title: "Computer Organization",
        description: "Computer architecture and assembly language programming.",
        languages: ["hindi"]
      },
      {
        id: "comp-2-5",
        title: "Environmental Studies",
        description: "Environmental awareness and sustainability.",
        languages: ["english"]
      },
      {
        id: "comp-2-6",
        title: "Web Technologies",
        description: "HTML, CSS, and basics of web development.",
        languages: ["english", "hindi"]
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
        languages: ["english", "hindi"]
      },
      {
        id: "comp-3-2",
        title: "Database Management Systems",
        description: "Relational databases, SQL, and normalization.",
        languages: ["english"]
      },
      {
        id: "comp-3-3",
        title: "Operating Systems",
        description: "Process management, memory management, and file systems.",
        languages: ["hindi"]
      },
      {
        id: "comp-3-4",
        title: "Theory of Computation",
        description: "Automata theory and formal languages.",
        languages: ["english"]
      },
      {
        id: "comp-3-5",
        title: "Software Engineering",
        description: "Software development life cycle and project management.",
        languages: ["english", "hindi"]
      },
      {
        id: "comp-3-6",
        title: "Discrete Structures",
        description: "Mathematical structures for computer science applications.",
        languages: ["english"]
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
        languages: ["english"]
      },
      {
        id: "comp-4-2",
        title: "Design and Analysis of Algorithms",
        description: "Algorithm design techniques and complexity analysis.",
        languages: ["english", "hindi"]
      },
      {
        id: "comp-4-3",
        title: "Microprocessors and Interfacing",
        description: "Architecture and programming of microprocessors.",
        languages: ["hindi"]
      },
      {
        id: "comp-4-4",
        title: "Object-Oriented Software Engineering",
        description: "Design patterns and OO analysis and design.",
        languages: ["english"]
      },
      {
        id: "comp-4-5",
        title: "Web Development",
        description: "Server-side programming and web frameworks.",
        languages: ["english", "hindi"]
      },
      {
        id: "comp-4-6",
        title: "Probability and Statistics",
        description: "Statistical methods for data analysis.",
        languages: ["english"]
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
        languages: ["english", "hindi"]
      },
      {
        id: "comp-5-2",
        title: "Compiler Design",
        description: "Lexical analysis, parsing, and code generation.",
        languages: ["english"]
      },
      {
        id: "comp-5-3",
        title: "Information Security",
        description: "Cryptography, network security, and secure coding.",
        languages: ["hindi"]
      },
      {
        id: "comp-5-4",
        title: "Mobile Application Development",
        description: "Android/iOS app development principles and practices.",
        languages: ["english"]
      },
      {
        id: "comp-5-5",
        title: "Data Mining",
        description: "Pattern discovery and knowledge extraction from data.",
        languages: ["english", "hindi"]
      },
      {
        id: "comp-5-6",
        title: "Cloud Computing",
        description: "Cloud service models, virtualization, and deployment.",
        languages: ["english"]
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
        languages: ["english"]
      },
      {
        id: "comp-6-2",
        title: "Big Data Analytics",
        description: "Hadoop ecosystem and large-scale data processing.",
        languages: ["english", "hindi"]
      },
      {
        id: "comp-6-3",
        title: "Internet of Things",
        description: "IoT architecture, protocols, and applications.",
        languages: ["hindi"]
      },
      {
        id: "comp-6-4",
        title: "Computer Graphics",
        description: "2D/3D graphics, rendering, and visualization.",
        languages: ["english"]
      },
      {
        id: "comp-6-5",
        title: "Software Testing",
        description: "Testing techniques, tools, and quality assurance.",
        languages: ["english", "hindi"]
      },
      {
        id: "comp-6-6",
        title: "Blockchain Technology",
        description: "Distributed ledger technology and smart contracts.",
        languages: ["english"]
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
        languages: ["hindi", "english"]
      },
      {
        id: "civil-imp-2",
        title: "Transportation Engineering",
        description: "Important concepts and formulas for transportation engineering.",
        languages: ["english"]
      },
      {
        id: "civil-imp-3",
        title: "Structural Analysis Formulas",
        description: "Essential formulas and methods for structural engineering.",
        languages: ["hindi"]
      },
      {
        id: "civil-imp-4",
        title: "Geotechnical Engineering Concepts",
        description: "Fundamental soil mechanics principles and applications.",
        languages: ["english", "hindi"]
      }
    ],
    syllabus: [
      {
        id: "civil-syl-1",
        title: "3rd Semester Syllabus",
        description: "Complete syllabus for 3rd semester Civil Engineering."
      },
      {
        id: "civil-syl-2",
        title: "4th Semester Syllabus",
        description: "Complete syllabus for 4th semester Civil Engineering."
      },
      {
        id: "civil-syl-3",
        title: "5th Semester Syllabus",
        description: "Complete syllabus for 5th semester Civil Engineering."
      },
      {
        id: "civil-syl-4",
        title: "6th Semester Syllabus",
        description: "Complete syllabus for 6th semester Civil Engineering."
      }
    ],
    previousPapers: [
      {
        id: "civil-pp-1",
        title: "Structural Analysis (2024)",
        description: "Previous year question paper with solutions."
      },
      {
        id: "civil-pp-2",
        title: "Environmental Engineering (2023)",
        description: "Previous year question paper with solutions."
      },
      {
        id: "civil-pp-3",
        title: "Geotechnical Engineering (2024)",
        description: "Previous year question paper with solutions."
      },
      {
        id: "civil-pp-4",
        title: "Transportation Engineering (2023)",
        description: "Previous year question paper with solutions."
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
        languages: ["english"]
      },
      {
        id: "mech-imp-2",
        title: "Manufacturing Processes",
        description: "Important manufacturing techniques and principles.",
        languages: ["hindi", "english"]
      },
      {
        id: "mech-imp-3",
        title: "Machine Design Calculations",
        description: "Critical formulas and methods for mechanical components design.",
        languages: ["english"]
      },
      {
        id: "mech-imp-4",
        title: "Thermodynamics Laws and Cycles",
        description: "Comprehensive overview of thermodynamic principles.",
        languages: ["hindi"]
      }
    ],
    syllabus: [
      {
        id: "mech-syl-1",
        title: "3rd Semester Syllabus",
        description: "Complete syllabus for 3rd semester Mechanical Engineering."
      },
      {
        id: "mech-syl-2",
        title: "4th Semester Syllabus",
        description: "Complete syllabus for 4th semester Mechanical Engineering."
      },
      {
        id: "mech-syl-3",
        title: "5th Semester Syllabus",
        description: "Complete syllabus for 5th semester Mechanical Engineering."
      },
      {
        id: "mech-syl-4",
        title: "6th Semester Syllabus",
        description: "Complete syllabus for 6th semester Mechanical Engineering."
      }
    ],
    previousPapers: [
      {
        id: "mech-pp-1",
        title: "Thermodynamics (2024)",
        description: "Previous year question paper with solutions."
      },
      {
        id: "mech-pp-2",
        title: "Engineering Mechanics (2023)",
        description: "Previous year question paper with solutions."
      },
      {
        id: "mech-pp-3",
        title: "Manufacturing Technology (2024)",
        description: "Previous year question paper with solutions."
      },
      {
        id: "mech-pp-4",
        title: "Machine Design (2023)",
        description: "Previous year question paper with solutions."
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
        languages: ["hindi", "english"]
      },
      {
        id: "comp-imp-2",
        title: "Computer Networks",
        description: "Important networking protocols and architectures.",
        languages: ["english"]
      },
      {
        id: "comp-imp-3",
        title: "Database Management Systems",
        description: "SQL queries, normalization, and database design.",
        languages: ["hindi", "english"]
      },
      {
        id: "comp-imp-4",
        title: "Algorithm Analysis",
        description: "Big O notation and complexity analysis of common algorithms.",
        languages: ["english"]
      }
    ],
    syllabus: [
      {
        id: "comp-syl-1",
        title: "3rd Semester Syllabus",
        description: "Complete syllabus for 3rd semester Computer Science."
      },
      {
        id: "comp-syl-2",
        title: "4th Semester Syllabus",
        description: "Complete syllabus for 4th semester Computer Science."
      },
      {
        id: "comp-syl-3",
        title: "5th Semester Syllabus",
        description: "Complete syllabus for 5th semester Computer Science."
      },
      {
        id: "comp-syl-4",
        title: "6th Semester Syllabus",
        description: "Complete syllabus for 6th semester Computer Science."
      }
    ],
    previousPapers: [
      {
        id: "comp-pp-1",
        title: "Data Structures (2024)",
        description: "Previous year question paper with solutions."
      },
      {
        id: "comp-pp-2",
        title: "Artificial Intelligence (2023)",
        description: "Previous year question paper with solutions."
      },
      {
        id: "comp-pp-3",
        title: "Web Development (2024)",
        description: "Previous year question paper with solutions."
      },
      {
        id: "comp-pp-4",
        title: "Operating Systems (2023)",
        description: "Previous year question paper with solutions."
      }
    ]
  }
};

export default departments;
