export interface Project {
  id: number;
  title: string;
  description: string;
  techStack: string[];
  githubUrl: string;
  liveUrl: string | null;
  featured: boolean;
  category?: 'web' | 'ai' | 'mobile' | 'other';
  image?: string;
  longDescription?: string;
  keyFeatures?: string[];
}

const projects: Project[] = [
  {
    id: 1,
    title: 'OpenSpace',
    description:
      'A full-stack Room Reservation Platform built with TypeScript, React, Express.js, and MongoDB (Mongoose). It allows users to book various types of spaces — room stays, conference rooms, and event venues — while also supporting host functionality for users who want to list their own rooms.',
    longDescription:
      'OpenSpace is a comprehensive room reservation platform that bridges the gap between space seekers and space providers. Built with modern web technologies, it features a robust booking system, real-time availability checking, secure payment integration, and an intuitive user interface. The platform supports multiple space types including hotel rooms, conference facilities, and event venues, making it a one-stop solution for space management.',
    techStack: [
      'TypeScript',
      'React',
      'Tailwind CSS',
      'Express',
      'MongoDB',
      'Supabase',
    ],
    githubUrl: 'https://github.com/joshfermano/Open_Space',
    liveUrl: 'https://openspace-reserve.vercel.app',
    featured: true,
    category: 'web',
    image: '/assets/projects/openspace.png',
    keyFeatures: [
      'Real-time room availability checking and booking system',
      'Dual-role functionality: Book spaces as guest or list as host',
      'Secure payment integration with transaction history',
      'Advanced search and filtering by location, amenities, and price',
      'Responsive design optimized for mobile and desktop users'
    ],
  },
  {
    id: 2,
    title: 'ASL Alphabet Recognition Using YOLOv11: A Vision-Based System',
    description:
      'Developed an AI-powered sign language recognition system with own datasets using YOLOv11, Roboflow, and OpenCV.',
    longDescription:
      'This project focuses on developing an advanced computer vision system for American Sign Language (ASL) alphabet recognition. Using the latest YOLOv11 architecture, the system can accurately detect and classify ASL hand gestures in real-time. The project involved creating custom datasets, training deep learning models, and implementing real-time detection capabilities with high accuracy rates.',
    techStack: [
      'Python',
      'YOLO',
      'NumPy',
      'Scikit-learn',
      'OpenCV',
      'Roboflow',
    ],
    githubUrl: 'https://github.com/joshfermano/ASL-Recognition-YOLOv11',
    liveUrl: null,
    featured: true,
    category: 'ai',
    image: '/assets/projects/asl.png',
    keyFeatures: [
      'Real-time ASL alphabet recognition using YOLOv11 architecture',
      'Custom dataset creation and annotation with Roboflow',
      'High accuracy detection with optimized computer vision algorithms',
      'Live webcam integration for instant gesture recognition',
      'Educational tool for learning American Sign Language'
    ],
  },
  {
    id: 3,
    title: 'Pitaka - Mobile Banking App',
    description:
      'Pitaka is a secure and user-friendly mobile banking app built with TypeScript, Expo, React Native, Nativewind, Express, and MongoDB. It allows users to manage digital wallets, view transaction history, and handle payments with ease.',
    longDescription:
      'Pitaka is a comprehensive mobile banking application designed to provide users with a secure and intuitive financial management experience. Built with React Native and modern mobile development practices, it features real-time transaction processing, secure authentication, digital wallet management, and comprehensive financial analytics. The app prioritizes user experience with smooth animations and responsive design.',
    techStack: ['React Native', 'Nativewind', 'Expo', 'Express', 'MongoDB'],
    githubUrl: 'https://github.com/joshfermano/pitaka-mobile-banking',
    liveUrl: null,
    featured: true,
    category: 'mobile',
    image: '/assets/projects/pitaka.jpg',
    keyFeatures: [
      'Secure biometric authentication and PIN protection',
      'Real-time transaction processing and instant notifications',
      'Digital wallet management with multiple account support',
      'Comprehensive transaction history and financial analytics',
      'Cross-platform mobile app with native performance'
    ],
  },
  {
    id: 4,
    title: 'Perps Chatbot',
    description:
      'This project is a full-stack chatbot app for our Artificial Intelligence subject. The chatbot, called "Perps Bot," is designed for the University of Perpetual Help System Dalta - Molino Campus. The app is built using TypeScript, React, Tailwind CSS, Express, MongoDB, and Mongoose ODM.',
    longDescription:
      "Perps Chatbot is an intelligent conversational AI system specifically designed for university students and staff. Powered by Google's Gemini API, it provides instant responses to queries about campus facilities, academic programs, enrollment procedures, and general university information. The system features conversation history, context awareness, and a modern chat interface.",
    techStack: [
      'TypeScript',
      'React',
      'Tailwind CSS',
      'Gemini API',
      'Express',
      'MongoDB',
      'Mongoose',
    ],
    githubUrl: 'https://github.com/joshfermano/perps-chatbot',
    liveUrl: 'https://perpsbot-joshfermano.vercel.app/',
    featured: false,
    category: 'ai',
    image: '/assets/projects/perpsbot.png',
    keyFeatures: [
      'AI-powered responses using Google Gemini API',
      'University-specific knowledge base for campus information',
      'Persistent conversation history and context awareness',
      'Real-time chat interface with typing indicators',
      'Academic inquiry support for students and faculty'
    ],
  },
  {
    id: 5,
    title: 'STIeve Chatbot',
    description:
      'This project is a full-stack chatbot app for our Artificial Intelligence subject. The chatbot, called "STIeve," is designed for the STI College Sta. Rosa, Laguna. The app is built using TypeScript, React, Tailwind CSS, Express, MongoDB, and Mongoose ODM.',
    longDescription:
      'STIeve Chatbot is an AI-powered assistant specifically designed for STI College students and faculty. The system provides intelligent responses to academic inquiries, campus information, and student services. Built with modern web technologies, it features a responsive chat interface, conversation persistence, and context-aware responses.',
    techStack: [
      'TypeScript',
      'React',
      'Gemini API',
      'Tailwind CSS',
      'Express',
      'MongoDB',
      'Mongoose',
    ],
    githubUrl: 'https://github.com/joshfermano/stieve-chatbot',
    liveUrl: 'https://stieve-chatbot.vercel.app/',
    featured: false,
    category: 'ai',
    image: '/assets/projects/stievebot.png',
    keyFeatures: [
      'Intelligent conversational AI with natural language processing',
      'STI College-specific information and student services',
      'Context-aware responses with conversation memory',
      'Modern chat interface with smooth animations',
      'Administrative support for enrollment and academic queries'
    ],
  },
  {
    id: 6,
    title: 'Hospital ER Simulation',
    description:
      'A modern web application that simulates the dynamics of a hospital emergency department using queuing theory principles. This project demonstrates patient flow optimization through an interactive simulation model',
    longDescription:
      'Hospital ER Simulation is an educational web application that models emergency room operations using advanced queuing theory and statistical analysis. The simulation helps understand patient flow, resource allocation, and wait time optimization in healthcare settings. Built with React and interactive visualizations, it provides real-time insights into emergency department dynamics.',
    techStack: ['React', 'Tailwind CSS', 'Framer Motion'],
    githubUrl: 'https://github.com/joshfermano/hospital-er-simulation',
    liveUrl: 'https://hospital-er-simulation.vercel.app/',
    featured: false,
    category: 'web',
    image: '/assets/projects/hospitaler.png',
    keyFeatures: [
      'Interactive emergency room simulation using queuing theory',
      'Real-time patient flow visualization and analytics',
      'Statistical analysis of wait times and resource utilization',
      'Educational tool for healthcare management concepts',
      'Dynamic animations showing patient movement and triage'
    ],
  },
];

export default projects;

export const featuredProjects = projects.filter((project) => project.featured);
export const webProjects = projects.filter(
  (project) => project.category === 'web'
);
export const aiProjects = projects.filter(
  (project) => project.category === 'ai'
);
export const mobileProjects = projects.filter(
  (project) => project.category === 'mobile'
);
