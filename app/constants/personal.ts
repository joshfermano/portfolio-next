export interface PersonalInfo {
  name: string;
  title: string;
  bio: string[];
  currentRole: string;
  currentCompany: string;
  experience: Array<{
    role: string;
    company: string;
    location: string;
    year: string;
    current?: boolean;
  }>;
  education: {
    degree: string;
    institution: string;
    year: string;
  };
  location: string;
  email: string;
  socialLinks: {
    linkedin: string;
    github: string;
    instagram: string;
    facebook: string;
  };
  interests: string[];
}

export const personalInfo: PersonalInfo = {
  name: 'Josh Khovick Fermano',
  title: 'Freelance Software Engineer & Computer Science Student',
  bio: [
    "Hello, I'm **Josh Khovick Fermano**, a **4th year Computer Science student** at **Technological University of the Philippines Manila** and currently working remotely as a **Freelance Software Engineer** at **Mangoe** in **Sydney, Australia**.",
    'With a passion for **full-stack development**, I specialize in building scalable web and mobile applications using modern technologies including **React**, **TypeScript**, **Next.js**, **React Native**, and **Tailwind CSS**. My expertise extends to database management with **SQL and NoSQL systems**, **cloud storage solutions**, and **API integration**.',
    'I thrive in **collaborative environments** where I can leverage my **problem-solving skills** and technical expertise to deliver high-quality solutions. My experience focuses on creating **responsive, performant applications** with **clean, maintainable code** and exceptional user experiences.',
    'Currently contributing to innovative projects at **Mangoe** as a **freelancer** while remaining **open to new opportunities**. I bring a strong foundation in **software engineering principles**, **agile methodologies**, and a keen eye for **performance optimization** and modern development practices.',
  ],
  currentRole: 'Freelance Software Engineer',
  currentCompany: 'Mangoe',
  experience: [
    {
      role: 'Freelance Software Engineer',
      company: 'Mangoe',
      location: 'Sydney, Australia (Remote)',
      year: '2025',
      current: true,
    },
    {
      role: 'Innovations Strategy Lead',
      company: 'GDG on Campus - TUP Manila',
      location: 'Manila, Philippines',
      year: '2024-2025',
    },
  ],
  education: {
    degree: 'BS Computer Science (4th Year)',
    institution: 'Technological University of the Philippines Manila',
    year: '2022-2026',
  },
  location: 'Mandaluyong City, Philippines',
  email: 'fermanojoshkhovick@gmail.com',
  socialLinks: {
    linkedin: 'https://www.linkedin.com/in/joshfermano/',
    github: 'https://github.com/joshfermano',
    instagram: 'https://www.instagram.com/joshfermano_/',
    facebook: 'https://www.facebook.com/joshkhovick/',
  },
  interests: [
    "Beyond coding, I find balance through basketball's strategic gameplay and combat sports' discipline, both teaching me patience and problem-solving under pressure. My **Christian faith in Jesus Christ** is the cornerstone of my life, guiding my values, work ethic, and purpose to use technology for positive impact. Whether I'm on the court, in training, or building applications, my faith reminds me that every skill is a gift to be stewarded responsibly, helping me stay grounded while striving for excellence in all I do.",
  ],
};

export const seoData = {
  structuredData: {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: personalInfo.name,
    jobTitle: personalInfo.title,
    url: 'https://joshfermano.me',
    sameAs: Object.values(personalInfo.socialLinks),
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Mandaluyong City',
      addressRegion: 'Philippines',
    },
    alumniOf: {
      '@type': 'CollegeOrUniversity',
      name: personalInfo.education.institution,
    },
    knowsAbout: [
      'Web Development',
      'Full Stack Development',
      'React',
      'TypeScript',
      'Node.js',
      'AI/ML',
    ],
  },
};
