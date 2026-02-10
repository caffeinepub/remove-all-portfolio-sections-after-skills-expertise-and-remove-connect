export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export interface Experience {
  id: string;
  title: string;
  organization: string;
  location?: string;
  period: string;
  description: string;
  highlights: string[];
}

export interface SkillCategory {
  category: string;
  skills: string[];
}

export interface GalleryItem {
  id: string;
  title: string;
  caption: string;
  image: string;
  category: 'photography' | 'videography' | 'design';
}

export interface ContactInfo {
  email: string;
  phoneNumber?: string;
  location?: string;
  resumePath: string;
  social: {
    platform: string;
    url: string;
    icon: string;
  }[];
}

export const services: Service[] = [
  {
    id: 'social-media',
    title: 'Social Media Management',
    description: 'End-to-end social media handle management including content strategy, scheduling, community engagement, and analytics tracking for organizations.',
    icon: 'social'
  },
  {
    id: 'content-writing',
    title: 'Content Writing',
    description: 'Professional writing services for blogs, websites, e-commerce product descriptions, and marketing copy that drives engagement and conversions.',
    icon: 'writing'
  },
  {
    id: 'design',
    title: 'Graphic Design',
    description: 'Creative design work using Photoshop and Canva for social media graphics, marketing materials, and brand assets.',
    icon: 'design'
  },
  {
    id: 'ecommerce',
    title: 'E-commerce Content',
    description: 'Compelling product descriptions, category pages, and promotional content optimized for online stores and marketplaces.',
    icon: 'ecommerce'
  },
  {
    id: 'photography',
    title: 'Professional Photography',
    description: 'High-quality photography services with professional camera equipment for products, events, portraits, and brand storytelling.',
    icon: 'photography'
  },
  {
    id: 'videography',
    title: 'Videography',
    description: 'Professional video production including filming, editing, and post-production for promotional content, social media, and brand campaigns.',
    icon: 'videography'
  }
];

export const experiences: Experience[] = [
  {
    id: 'exp-1',
    title: 'Content Writer',
    organization: 'Jeena Sikho Lifecare Limited',
    location: 'Zirakpur',
    period: '04/2025 - Current',
    description: 'Creating comprehensive content for website, products, blogs, and PR materials while managing team operations.',
    highlights: [
      'Worked on website content, product-related content, blogs, and PR Content.',
      'Worked on content for new brand - Grovya Organics.',
      'Experience in handling the team.'
    ]
  },
  {
    id: 'exp-2',
    title: 'ORM Content Writer & Strategist',
    organization: 'Chanadigarh Group Of Colleges (CGC University)',
    location: 'Jhanjeri (Mohali)',
    period: '09/2024 - 04/2025',
    description: 'Led online reputation management and content strategy while managing faculty marketing team and event coverage.',
    highlights: [
      'Positive & Negative Marketing for the Organisation.',
      'Reels Creation, Videos Creation, Scripting, Video Ideas.',
      'Handles the team of faculty for marketing.',
      'Photography & Videography with event coverage in the institute.'
    ]
  },
  {
    id: 'exp-3',
    title: 'Social Media Content Writer',
    organization: 'A Digital Blogger (Youtuber)',
    location: 'Mohali',
    period: '06/2024 - 09/2024',
    description: 'Developed content strategy for YouTube and Instagram with focus on SEO optimization and visual content creation.',
    highlights: [
      'Here writes content for YT and Insta.',
      'YT content strategist, Title & Thumbnail creation helps SEO for YouTube.',
      'Photography & Videography for Reels and Videos.'
    ]
  },
  {
    id: 'exp-4',
    title: 'Social Media Executive',
    organization: 'Jeena Sikho Lifecare Limited',
    location: 'Zirakpur',
    period: '05/2023 - 04/2024',
    description: 'Managed all social media channels and led team of social media executives while handling community engagement.',
    highlights: [
      'Handle all Social Media Handles, including YT, FB, Insta, etc.',
      'Manages team of SMEs as CO-TL.',
      'Handles Comments, Chats, and Content.'
    ]
  },
  {
    id: 'exp-5',
    title: 'Social Media Manager/Content Writer',
    organization: 'Cricline',
    location: 'Zirakpur',
    period: '01/2022 - 03/2023',
    description: 'Managed social media channels with focus on content creation, scheduling, and posting strategies.',
    highlights: [
      'Handle their Social Media Channels.',
      'Post creation, content writing, and Content Scheduling & Posting.'
    ]
  }
];

export const skillCategories: SkillCategory[] = [
  {
    category: 'Content & Writing',
    skills: ['Content Writing', 'Content Strategy', 'SEO Writing', 'Creative Storytelling', 'Copywriting', 'Content Creation', 'Content Ideas', 'Writing, editing, and proofreading']
  },
  {
    category: 'Social Media',
    skills: ['Social Media Management', 'Analytics', 'Trend analysis', 'Research', 'Team leadership', 'Creative thinking']
  },
  {
    category: 'Design & Tools',
    skills: ['Adobe Photoshop', 'Canva', 'Graphic Design', 'Content Creation Tools']
  },
  {
    category: 'Photography & Video',
    skills: ['Professional Photography', 'Videography', 'Video Editing', 'Reels Creation', 'Event Coverage', 'Scripting']
  }
];

export const galleryItems: GalleryItem[] = [
  {
    id: 'gallery-1',
    title: 'Brand Photography',
    caption: 'Professional product photography for e-commerce brands',
    image: '/assets/generated/gallery-placeholder-01.dim_800x600.png',
    category: 'photography'
  },
  {
    id: 'gallery-2',
    title: 'Social Media Campaign',
    caption: 'Visual content created for social media marketing campaign',
    image: '/assets/generated/gallery-placeholder-02.dim_800x600.png',
    category: 'design'
  },
  {
    id: 'gallery-3',
    title: 'Video Production',
    caption: 'Behind-the-scenes of professional video shoot',
    image: '/assets/generated/gallery-placeholder-03.dim_800x600.png',
    category: 'videography'
  },
  {
    id: 'gallery-4',
    title: 'Event Coverage',
    caption: 'Professional event photography and documentation',
    image: '/assets/generated/gallery-placeholder-01.dim_800x600.png',
    category: 'photography'
  },
  {
    id: 'gallery-5',
    title: 'Design Portfolio',
    caption: 'Graphic design work for various clients',
    image: '/assets/generated/gallery-placeholder-02.dim_800x600.png',
    category: 'design'
  },
  {
    id: 'gallery-6',
    title: 'Content Creation',
    caption: 'Multi-platform content creation showcase',
    image: '/assets/generated/gallery-placeholder-03.dim_800x600.png',
    category: 'videography'
  }
];

export const contactInfo: ContactInfo = {
  email: 'maitypradip213@gmail.com',
  phoneNumber: '8591543194',
  location: 'Derabassi 140507',
  resumePath: '/assets/pradip-maity-resume.pdf',
  social: [
    { platform: 'LinkedIn', url: 'https://linkedin.com', icon: 'linkedin' },
    { platform: 'Instagram', url: 'https://instagram.com', icon: 'instagram' },
    { platform: 'Twitter', url: 'https://twitter.com', icon: 'twitter' },
    { platform: 'Behance', url: 'https://behance.net', icon: 'behance' }
  ]
};
