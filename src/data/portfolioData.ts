import myPhoto from "../assets/Arijit profile 02.jpg"; 
import { Project, Experience, Education, Achievement } from '../types/portfolio';

export const personalInfo = {
  name: 'Arijit Sen',
  title: 'ECE Student | C & C++ Programmer | Web Developer',
  bio: 'Passionate about creating innovative solutions through technology. I blend electronics engineering knowledge with software development skills to build impactful projects. Always eager to learn and explore new technologies.',
  email: 'arijitsenarijitsen58@gmail.com',
  location: 'Kalyani,West Bengal, India',
  profileImage: myPhoto,

  resumeLink: '/Arijit New CV Copy.pdf',
  social: {
    github: 'https://github.com/Arijitsen-ece',
    linkedin: 'https://www.linkedin.com/in/arijit-sen-188864228',
    email: 'arijitsenarijitsen58@gmail.com'
  }
};

export const aboutHighlights = [
  {
    icon: 'Code2',
    title: 'C++ Experience',
    description: 'Strong foundation in object-oriented programming and data structures'
  },
  {
    icon: 'Globe',
    title: 'Web Development',
    description: 'Building responsive and interactive web applications'
  },
  {
    icon: 'Cpu',
    title: 'Electronics Engineering',
    description: '⚙️ Interested in circuit design, embedded systems, and real-world electronics projects.'
  }
];

export const skills = {
  programming: ['C', 'C++', 'Data Structures', 'MySQL', 'JavaScript', 'TypeScript'],
  webDevelopment: ['HTML', 'CSS', 'JS', 'React', 'Tailwind CSS', 'Node.js'],
  tools: ['Git', 'Supabase','VS Code', 'Arduino', 'MATLAB', 'Figma'],
  softSkills: ['Circuit Design & Simulation', 'Working with ESP32', 'Problem Solving', 'Team Collaboration', 'Communication', 'Time Management']
};

export const projects: Project[] = [
  {
    id: '1',
    title: 'AI Motion Detection & Intruder Alert System',
    description: 'Smart security system that detects motion using AI-assisted image analysis and sends real-time alerts to a mobile device.',
    techStack: ['Arduino · PIR Sensor · ESP32-CAM · Python · OpenCV · IoT '],
    image: 'https://dfsservices.co.in/blog/wp-content/uploads/2024/02/04V1cjqRa2VfMLDHGSlVovC-8..v1646419995.jpeg',
    category: 'hardware'
  },
  {
    id: '2',
    title: 'Air Quality Monitoring System',
    description: 'Real-time air pollution monitoring using gas sensors, displaying AQI data locally and optionally sending it to the cloud.',
    techStack: ['Arduino · MQ-135 Sensor · LCD/OLED · ESP8266 · C++ · Breadboard'],
    image: 'https://techatronic.com/wp-content/uploads/2024/01/Untitled-design-2-800x419.jpg',
    category: 'hardware'
  },
  {
    id: '3',
    title: 'Weather Monitoring System',
    description: 'A real-time IoT system that measures temperature, humidity, and environmental conditions using sensors. The data is sent to the cloud via ESP8266 and visualized on a responsive web dashboard with live charts and indicators.',
    techStack: ['Arduino · DHT22 Sensor · ESP8266 · C++ · IoT · Realtime Dashboard · Firebase'],
    image: 'https://5.imimg.com/data5/SELLER/Default/2022/11/HC/LK/VM/10351001/digital-weather-monitoring-station.jpg',
    category: 'hardware'
  },
  {
    id: '4',
    title: 'HealthPulse AI',
    description: 'An AI-powered health assistance platform that helps users get instant medical guidance, check symptoms, access nearby doctors, and quickly reach emergency services. Designed for fast, reliable, and user-friendly health support.',
    techStack: ['React · TypeScript · Tailwind CSS · Node.js · AI API · Healthcare · Web App'],
    githubLink: 'https://github.com/Arijitsen-ece/Healthpulse-AI',
    liveLink: 'https://arijitsen-ece.github.io/Healthpulse-AI/',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRk1agy8-T4Kl24sA5dMezWQabe3JnvwplWuQ&s',
    category: 'fullstack'
  },
  {
    id: '5',
    title: '2D Console Cricket Game (C++)',
    description: 'A C++-based cricket scoring and gameplay simulation where users can bat, bowl, and track runs, wickets, and overs in real time. Built using object-oriented programming with clean logic and interactive console UI.',
    techStack: ['C++ · OOP · File Handling · Game Logic · Console Application'],
    image: 'https://play-lh.googleusercontent.com/B3YoscTh85gvWwlVXFHz6g6-gX091xGBcX7Hey1r7Jmr7uQnfkAzYxnaDosYNuKz7w=w526-h296-rw',
    category: 'web'
  },
  {
    id: '6',
    title: 'E-Commerce Web (Shopping Platform)',
    description: 'A modern shopping platform with a smooth, responsive UI where users can browse products, manage their cart, and complete orders effortlessly. Features an intuitive design, seamless checkout flow, and optional admin tools for product and order management.',
    techStack: ['React · TypeScript · Tailwind CSS · Framer Motion · Node.js · Express · MongoDB · Stripe/Razorpay · Full Stack · Frontend UI/UX'],
    image: 'https://dmxmarketing.com/wp-content/uploads/2020/12/AdobeStock_241431868-1-scaled-1.jpeg',
    category: 'web'
  }
];

export const experiences: Experience[] = [
  {
    id: '1',
    title: 'Embedded Developer – Virtual Internship',
    company: 'Microchip University',
    duration: 'Jun 2025 - Aug 2025',
    description: [
      'Developed and tested embedded applications using Arduino, ESP8266, and microcontrollers.',
      'Worked with sensors, actuators, and communication protocols (UART, I2C, SPI).',
      'Collaborated in a virtual environment and documented project workflows.'
    ]
  },
  {
    id: '2',
    title: 'Graphic Design Intern',
    company: 'IAG Foundation',
    duration: 'Mar 2025 - May 2025',
    description: [
      'Designed visually appealing social media posts, banners, posters, and brand assets.',
      'Created clean layouts using Figma, Canva, Photoshop and followed brand guidelines.',
      'Worked with the team to develop marketing visuals and improve design consistency.'
    ]
  },
  {
    id: '3',
    title: 'Technical Volunteer',
    company: 'College Tech Fest',
    duration: 'Sep 2024 - Dec 2024',
    description: [
      'Organized technical workshops and coding competitions',
      'Assisted in organizing technical events, guiding participants, and managing event operations.',
      'Managed event website and registration system'
      
    ]
  }
];

export const education: Education[] = [
  {
    id: '1',
    degree: 'Higher Secondary Examination',
    institution: 'Vidyasagar Vidyapith ,Midnapore ',
    duration: '2022 - 2024',
    highlights: [
      'Stream: Science',
      'Percentage: 73%',
      'West Bengal Council of Higher Secondary Education (WBCHSE)'
    ]
  },
  {
    id: '2',
    degree: 'B.Tech in Electronics and Communication Engineering',
    institution: 'JIS College of Engineering',
    duration: '2024 - 2028',
    highlights: [
      'CGPA: 7.8/10',
      'Academic Coursework: Frontend Development, Web Technologies, Digital Electronics, Microprocessors',
      'Member of Coding Club, Music Club and Robotics Club'
    ]
  }
];


export const achievements: Achievement[] = [
  {
    id: '1',
    title: 'TATA Data Visualization Job Simulation',
    description: 'Finished a virtual internship with TATA focusing on data visualization, insights generation, and building impactful business dashboards.',
    date: '2025'
  },
  {
    id: '2',
    title: 'Google Cloud Computing Foundations with AI',
    description: 'Completed comprehensive cloud computing certification',
    date: '2024'
  },
  {
    id: '3',
    title: 'Google for Education – Gemini Certified Student',
    description: 'Earned certification for demonstrating foundational knowledge, skills, and competencies in using Google AI (Gemini) for real-world problem-solving.',
    date: '2025'
  },
  {
    id: '4',
    title: 'HackerRank C Certification',
    description: 'Achieved a 4-star C++ rating on HackerRank by solving algorithmic, OOP, and data-structure challenges.',
    date: '2025'
  },
  {
  id: '5',
  title: 'Inter-College Coding Competition - 3rd Place',
  description: 'Secured second position among 20+ participants',
  date: '2024'
},
{
  id: '6',
  title: 'Frontend Development Bootcamp',
  description: 'Completed an intensive bootcamp covering React, TypeScript, and UI/UX fundamentals.',
  date: '2024'
}

];
