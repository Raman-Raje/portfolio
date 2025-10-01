export const socialLinks = [
    {
      href: "https://www.linkedin.com/in/raman-shinde-562950b2/",
      iconSrc: "/social/linkedin.svg",
      alt: "LinkedIn",
      label: "LinkedIn",
      platform: "linkedin"
    },
    {
      href: "https://github.com/Raman-Raje",
      iconSrc: "/social/github.svg",
      alt: "GitHub",
      label: "GitHub",
      platform: "github"
    },
    {
      href: "https://x.com/RamanRaje",
      iconSrc: "/social/x.svg",
      alt: "Twitter", 
      label: "Twitter",
      platform: "twitter"
    },
    {
      href: "https://medium.com/@raman.shinde15",
      iconSrc: "/social/medium.svg",
      alt: "Medium",
      label: "Medium",
      platform: "medium"
    }
  ];

export const socialSrc = {
  twitter:"/social/x.svg",
  linkedin:"/social/linkedin.svg"
};

export const declaration = "2025 Raman Shinde. All rights reserved. Built with passion for Tech.";

export const experienceData = [
    {
      startDate: { month: "March", year: "2024" },
      endDate: { month: "Present", year: "" },
      title: "Senior Lead Engineer - AI Research",
      company: "Qualcomm",
      description: [
        "Drove significant ML performance gains on Adreno GPUs by enhancing the TVM framework.",
        "Implemented texture support and a custom memory planner, which cut inference time by over 50% and enabled large-scale LLM deployment in constrained memory.",
        "Additionally, expanded TVM/MLCLLM to run advanced LLMs and Diffusion models and integrated CLML acceleration into the GGML and LLaMA.cpp frameworks."
      ]
    },
    {
      startDate: { month: "Sep", year: "2021" },
      endDate: { month: "March", year: "2024" },
      title: "Deep Learning Engineer",
      company: "Imagination Technologies",
      description: [
        "Spearheaded the creation of a TVM-based Graph Compiler and a Neural Compute SDK to deploy optimized machine learning models on Imagination's edge hardware.",
        "led the development of the entire execution pipeline, from build to runtime, and implemented advanced graph transformations.",
        "The SDK was enhanced with quantization support and expanded capabilities for models like LSTMs and RNNs from major frameworks, including PyTorch and TensorFlow."
      ]
    },
    {
      startDate: { month: "March", year: "2024" },
      endDate: { month: "Present", year: "" },
      title: "Data Scientist",
      company: "Xpansion Technologies",
      description: ["Developed diverse AI/ML solutions, including a pipeline to extract and classify information from medical documents using NLP and OCR.",
        "Built reusable components for an innovation team, such as recommendation systems and QA modules.",
        "Led computer vision projects focused on object detection, image segmentation, and gesture recognition."]
    },
    {
      startDate: { month: "Dec.", year: "2018" },
      endDate: { month: "Nov.", year: "2019" },
      title: "Product Development Engineer",
      company: "Siemens",
      description: ["Developed a specialized application within Siemens NX to optimize manufacturing design sequences, significantly increasing assembly line efficiency and precision. Additionally, I proactively resolved coding issues to improve the performance and reliability of subsequent NX product releases."]
    },
    {
      startDate: { month: "Dec", year: "2015" },
      endDate: { month: "Mov", year: "2018" },
      title: "Software Developer",
      company: "TCS",
      description: ["Developed real-time monitoring and control applications for NCRA and provided production support for critical financial applications at Morgan Stanley.",
        "Delivered diverse, tailored software solutions for various clients using Python and C++."]
    }
  ];

export const navItems = [
  { id: 'experience', label: 'Experience', href:"#experience" },
  { id: 'projects', label: 'Projects' , href: '#projects'},
  { id: 'contact', label: 'Contact', href:'#contact' },
];

export const blogNavItems = [
  { id: 'experience', label: 'Experience' },
];

export const skillsData = [
    {
      title: "Languages",
      skills: ["Python", "C" ,"C++", "NodeJs", "JS"]
    },
    {
      title: "AI/ML", 
      skills: ["Scikit-leanr", "Keras", "Pytorch", "pandas", "openCV", "REST APIs"]
    },
    {
      title: "Database & Cloud",
      skills: ["PostgreSQL", "MongoDB", "Redis", "AWS", "Docker", "Kubernetes"]
    },
    {
      title: "Tools",
      skills: ["Git", "Jest", "CI/CD", "Agile", "VS Code", "Jenkins"]
    }
  ];

export const projectsData = [
  {
    title: "Medyzer",
    timeline: "2022 - 2023",
    image: "/projects/medyzer.png", // Corrected image name
    status: "Shutdown",
    summary: "A SaaS platform designed to help doctors digitize their clinic workflow, from patient appointments to digital prescriptions.",
    link: "https://www.ingreli.com",
    description: [
      "Enabled doctors to manage appointments, patient records, and prescriptions across multiple clinics.",
      "Provided patients with QR-code appointment booking and access to their digital health records.",
      "Successfully onboarded practicing doctors and generated over 1,000 digital prescriptions.",
    ],
  },
  {
    title: "Ingreli",
    timeline: "2025 - Present",
    image: "/projects/ingreli.svg",
    status: "In Progress",
    link: "https://www.ingreli.com",
    summary: "A mobile app that helps families make informed food choices by scanning product labels for simple ingredient analysis, safety alerts, and healthier alternatives.",
    description: [
      "Allows users to create personalized health profiles for their entire family to track unique dietary goals and restrictions.",
      "Instantly alerts users to harmful ingredients like allergens and carcinogens using a powerful OCR label scanner.",
      "Recommends healthier product alternatives tailored to individual dietary needs and preferences."
    ],
  },
  {
    title: "tickFair",
    timeline: "2025 - Present",
    status: "Progress",
    summary: "A SaaS platform designed to help doctors digitize their clinic workflow, from patient appointments to digital prescriptions.",
    link: "https://www.ingreli.com",
    description: [
      "Enabled doctors to manage appointments, patient records, and prescriptions across multiple clinics.",
      "Provided patients with QR-code appointment booking and access to their digital health records.",
      "Successfully onboarded practicing doctors and generated over 1,000 digital prescriptions.",
    ],
  },      
];  