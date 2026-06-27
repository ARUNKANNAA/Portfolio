export const PERSONAL_INFO = {
  name: "Arunkannaa S",
  tagline: "Robotics | Embedded Systems | IoT | AI | Computer Vision",
  shortIntro: "I'm a passionate Robotics & Automation student focused on building innovative real-world solutions using Embedded Systems, IoT, AI, and Robotics.",
  about: "I am a passionate and creative B.E. Robotics & Automation student with strong interests in Embedded Systems, IoT, Robotics, AI, and Computer Vision.\n\nI enjoy building real-world engineering solutions that combine hardware, software, and automation.\n\nMy experience includes working with ESP32, Arduino, Raspberry Pi, sensors, wireless communication systems, RTOS, AI-powered applications, and CAD design using SolidWorks.\n\nI am also a GUVI Campus Ambassador and an active participant in hackathons, innovation events, and technical communities.\n\nOutside engineering, I create tech content on YouTube and Instagram sharing robotics projects, electronics tutorials, engineering builds, and creative tech content.",
  location: "Chennai, India",
  phone: "+91 80725 22040",
  email: "mail2sarunkannaa@gmail.com",
  socials: {
    linkedin: "https://www.linkedin.com/in/arunkannaa-s21/",
    github: "https://github.com/ARUNKANNAA",
    youtube: "https://www.youtube.com/@arun_hobbies",
    instagram: "https://www.instagram.com/arun_hobbies?igsh=MXpheTlzeXd3ZHF3"
  }
};

export const PROJECTS = [
  {
    id: 1,
    title: "Aid for All – Smart Assistive Monitoring & Emergency Support System",
    description: "An IoT-based assistive healthcare device developed for elderly people, wheelchair users, and patients requiring continuous monitoring.",
    features: [
      "Fall detection using MPU6050",
      "Temperature and humidity monitoring",
      "GPS-based live location tracking",
      "Voice assistance and emergency audio alerts",
      "SMS alerts using Twilio",
      "Internal web server for monitoring",
      "AP mode Wi Fi provisioning"
    ],
    hardware: ["ESP32", "DHT11 Sensor", "MPU6050", "AI Thinker GP02 GPS Module", "JQ6500 Audio Module + Speaker", "LCD Display", "IP5360 Power Module"],
    technologies: ["FreeRTOS (RTOS)", "IoT Systems", "Twilio API", "Embedded Web Server", "SolidWorks", "3D Printing"]
  },
  {
    id: 2,
    title: "AI-Based Smart Assistive Wearable for Alzheimer's Patients",
    description: "A wearable AI support system designed to assist Alzheimer's patients with memory support and caregiver communication.",
    features: [
      "AI-powered face recognition",
      "Audio cues through headphones",
      "Medicine reminders",
      "Live location tracking",
      "SMS alerts using Twilio"
    ],
    hardware: ["Raspberry Pi", "Camera Module", "Headphones / Earbuds"],
    technologies: ["Face Recognition", "Flask", "Twilio API"]
  },
  {
    id: 3,
    title: "Nitroasis – AI Powered Smart Farming System",
    description: "An AI and IoT-based smart agriculture system designed to improve crop productivity using TinyML and automation.",
    features: [
      "Real-time environmental monitoring",
      "AI-based crop prediction using TinyML",
      "OLED live data visualization",
      "Local AI farming chatbot"
    ],
    hardware: ["ESP32 / ESP32-S3", "DHT11 Sensor", "Soil Moisture Sensor", "LDR Sensor", "SH1106 OLED Display", "Water Pumps"],
    technologies: ["Edge Impulse", "TinyML", "FreeRTOS", "Streamlit", "Ollama", "Llama3", "Python"]
  },
  {
    id: 4,
    title: "Twinkle – Interactive Desktop Companion Robot",
    description: "An interactive desktop companion robot with animated facial expressions and touch interaction.",
    features: [
      "Animated OLED facial expressions",
      "Touch-based interaction",
      "OLED menu interface",
      "Audio playback system",
      "Wi Fi setup portal"
    ],
    hardware: ["ESP32-C3 SuperMini", "SH1106 OLED Display", "JQ6500 MP3 Module", "Speaker", "Capacitive Touch Sensor"],
    technologies: ["Arduino IDE", "Internal Web Server", "NTP Time Synchronization"]
  },
  {
    id: 5,
    title: "ESP32-CAM Wireless Surveillance System",
    description: "A portable wireless surveillance and live-streaming system using the ESP32-CAM with external antenna support.",
    features: [
      "Real-time wireless video streaming",
      "Push-button image capture",
      "AP mode operation without internet",
      "Portable battery-powered design",
      "RTOS-based task handling for streaming and device operations"
    ],
    hardware: ["ESP32-CAM", "2.4 GHz External Antenna", "IP5306", "3000mAh Battery"],
    technologies: ["FreeRTOS (RTOS)", "Embedded Streaming", "Wi Fi AP Networking", "Camera Streaming Server"]
  },
  {
    id: 6,
    title: "Smart Helmet Safety System",
    description: "An IoT-based smart helmet safety system developed for rider safety and emergency monitoring.",
    features: [
      "Fall detection",
      "Live GPS tracking",
      "Emergency SMS alerts using Twilio",
      "Accident detection and safety monitoring"
    ],
    hardware: ["ESP32", "MPU6050", "AI Thinker GP02 GPS Module"],
    technologies: ["IoT Systems", "Twilio API", "Embedded Monitoring"]
  },
  {
    id: 7,
    title: "Robotics & Smart Vehicle Projects",
    description: "Developed multiple robotics and embedded vehicle systems focused on wireless control, autonomous movement, and computer vision integration.",
    features: [
      "Bluetooth Controlled Car",
      "Wi Fi Controlled Car",
      "Gesture Controlled Car",
      "Human Following Robot",
      "Line Following Robot",
      "Obstacle Avoiding Robot",
      "ESP32 CAM Surveillance Car"
    ],
    hardware: ["ESP32", "Motor Drivers", "Ultrasonic Sensors", "ESP32 CAM", "DC Motors", "Battery Systems"],
    technologies: ["Embedded Systems", "Wireless Communication", "Computer Vision", "Motor Control", "IoT"]
  },
  {
    id: 8,
    title: "Solar Panel Cleaning & Monitoring System",
    description: "An automated solar panel cleaning and monitoring system designed to improve solar efficiency.",
    features: [
      "Automatic dust detection",
      "Servo-based cleaning mechanism",
      "Real-time monitoring dashboard"
    ],
    hardware: ["ESP32", "MG995 Servo Motor", "Solar Panel", "Color / Light Sensor"],
    technologies: ["IoT Systems", "Embedded Web Dashboard", "Servo Automation"]
  },
  {
    id: 9,
    title: "Bluetooth Speaker System",
    description: "Portable Bluetooth speaker system with custom enclosure integration and rechargeable battery support.",
    features: [
      "Custom 3D-printed enclosure",
      "Rechargeable battery operation",
      "Bluetooth audio streaming"
    ],
    hardware: ["PAM8403 Amplifier", "Bluetooth Audio Module", "Speaker", "IP5306 Power Module", "Rechargeable Battery"],
    technologies: ["Embedded Audio Systems", "SolidWorks", "3D Printing"]
  },
  {
    id: 10,
    title: "Smart Fish Tank Automation",
    description: "Smart aquarium automation — automated feeding, water maintenance, and wireless mobile control.",
    features: [
      "Automated water change system",
      "Mobile-controlled aquarium management",
      "Automatic fish feeding (stepper-based)",
      "Wireless Bluetooth control",
      "Remote monitoring and control",
      "Modular and expandable architecture"
    ],
    hardware: ["Arduino Uno", "HC-05 Bluetooth Module", "Stepper Motor", "Submersible Water Pump", "Relay Module", "Power Supply"],
    technologies: ["Arduino IDE", "Embedded Systems", "Home Automation", "Bluetooth Communication", "Motor Control"]
  }
];

export const ACHIEVEMENTS = {
  firstPlace: [
    { title: "1st Place – HARDWIRED (INFOTSAV'26 Hardware Hackathon)", institution: "ABV-IIITM Gwalior", date: "2026" },
    { title: "1st Prize – Project Expo (IEEE CS Tech Savants Carnival'24)", institution: "S.A. Engineering College", date: "Apr 2024" },
    { title: "1st Prize – Chitti'24 (Robo Expo)", institution: "S.A. Engineering College", date: "Apr 2024" },
    { title: "1st Place – Innovation Challenge (AID 4 ALL)", institution: "Aarupadai Veedu Institute of Technology", date: "Feb 2025" },
    { title: "1st Place – Paper Presentation (GNISTA 2K25)", institution: "T.J.S. Engineering College", date: "Apr 2025" },
    { title: "1st Prize – CEASELESS (INNOVION'25 – IT Dept. & IIC)", institution: "Rajalakshmi Engineering College", date: "Mar 2025" },
    { title: "1st Prize – Tech4Tomorrow Hackathon", institution: "Chennai Institute of Technology", date: "Sep 2024" },
    { title: "1st Prize – Innovarium (30-hour Hackathon)", institution: "Sri Krishna College of Engineering & Technology", date: "Oct 2024" },
    { title: "1st Place – V-MEDITHON", institution: "VIT Chennai & Yenepoya Medical University", date: "Sep 2024" },
    { title: "1st Place – Elevator Pitch 2024", institution: "Rajalakshmi Institute of Technology", date: "Dec 2024" },
    { title: "1st Prize – Robo Forge (TRI-Tech Nexus'24)", institution: "S.A. Engineering College", date: "Oct 2024" },
    { title: "1st Place – TechFusion'25 (National Project Expo)", institution: "Crescent Institute of Science & Technology", date: "Jan 2025" },
    { title: "1st Place – SPARK EXPO (Nakshatra'25)", institution: "S.A. Engineering College", date: "Sep 2025" },
    { title: "1st Place – GLYTCH Hardware Hackathon", institution: "VIT", date: "2026" },
    { title: "1st Place – Hackathon 2K26", institution: "St. Joseph's College of Engineering", date: "2026" },
    { title: "1st Place – ENERGATHON'26 Hackathon", institution: "SIMATS Engineering", date: "2026" }
  ],
  secondPlace: [
    { title: "2nd Place – PROTO-TRONICS S (EPOCH RUNNERS, Tantrotsav'24)", institution: "Amrita Vishwa Vidyapeetham", date: "Mar 2024" },
    { title: "2nd Prize – Electric Wonders (COULOMB 2024)", institution: "Rajalakshmi Engineering College", date: "Apr 2024" },
    { title: "2nd Prize – Shutter Fest (COULOMB 2024)", institution: "Rajalakshmi Engineering College", date: "Apr 2024" },
    { title: "2nd Place – ROBOFIESTA 2K25 Hack Fest", institution: "Karpaga Vinayaga College of Engineering & Technology", date: "Mar 2025" },
    { title: "2nd Position – National Entrepreneurship Challenge (Social Domain)", institution: "Rajalakshmi Institute of Technology (IIT Bombay E-Cell)", date: "Aug 2025" },
    { title: "2nd Place – ULTRON 9.0 Hackathon", institution: "SRM Institute of Science and Technology", date: "2026" },
    { title: "2nd Place – Hardware Hackathon", institution: "PCB Cupid", date: "2026" },
    { title: "Runner – TechXpo'25", institution: "Jeppiaar Institute of Technology", date: "Aug 2025" }
  ],
  thirdPlace: [
    { title: "3rd Place – Mini Hackathon (IEEE BREADTHS)", institution: "Rajalakshmi Engineering College", date: "Sep 2024" },
    { title: "3rd Place – DRESTEIN'26", institution: "Saveetha Engineering College", date: "2026" },
    { title: "3rd Place – IQUEST'26 (Department Level)", institution: "Rajalakshmi Engineering College", date: "2026" },
    { title: "3rd Place – LITHOS 2K26", institution: "Chennai Institute of Technology", date: "2026" }
  ],
  special: [
    { title: "Tech Buddy 2.0 – ₹6000 Gift Voucher", institution: "Rajalakshmi Institutions", date: "2024" },
    { title: "Best Sustainable Project – DESIGN-A-THON 24–25", institution: "Rajalakshmi Engineering College", date: "Oct 2024" },
    { title: "Best Paper Award – NCARAM '24 (Aid for Communication)", institution: "Rajalakshmi Engineering College", date: "Apr 2024" }
  ]
};

export const EXPERIENCE = [
  {
    role: "Campus Ambassador",
    company: "GUVI",
    points: [
      "Promoted technical learning initiatives",
      "Conducted student outreach programs",
      "Encouraged participation in technical communities"
    ]
  },
  {
    role: "Tech Team Lead",
    company: "DEVS",
    points: [
      "Led technical teams",
      "Mentored students",
      "Managed project development activities"
    ]
  },
  {
    role: "Technical Associate",
    company: "Entrepreneurship Development Cell",
    points: [
      "Supported startup and innovation initiatives",
      "Assisted in organizing entrepreneurship events"
    ]
  },
  {
    role: "Freelance Embedded Systems Developer",
    company: "Freelance",
    points: [
      "Developed custom IoT and automation solutions",
      "Built robotics and embedded system prototypes",
      "Delivered client-based engineering projects"
    ]
  },
  {
    role: "Workshop & Technical Event Contributor",
    company: "Various",
    points: [
      "Conducted IoT Workshop at Geekify DevFest",
      "Contributed to P2P Networking sessions",
      "Participated in XploreX technical activities",
      "Mentored students in Embedded Systems and IoT"
    ]
  }
];

export const EDUCATION = [
  {
    degree: "Bachelor of Engineering (B.E.)",
    major: "Robotics & Automation Engineering",
    institution: "Rajalakshmi Engineering College",
    duration: "2023 – Present"
  },
  {
    degree: "Higher Secondary School Certificate",
    major: "",
    institution: "DAV Group of Schools (TNAES)",
    duration: "Completed April 2023"
  }
];
