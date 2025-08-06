export interface LandingPageConfig {
  brand: {
    name: string;
    tagline: string;
  };
  hero: {
    title: string;
    highlight: string;
    description: string;
    primaryButton: string;
    secondaryButton: string;
  };
  features: {
    title: string;
    subtitle: string;
    items: Array<{
      icon: string;
      title: string;
      description: string;
    }>;
  };
  cta: {
    title: string;
    description: string;
    buttonText: string;
  };
  footer: {
    brand: {
      name: string;
      description: string;
    };
    links: {
      product: Array<{ label: string; href: string }>;
      company: Array<{ label: string; href: string }>;
      legal: Array<{ label: string; href: string }>;
    };
    copyright: string;
  };
}

export const defaultConfig: LandingPageConfig = {
  brand: {
    name: "Yomake.ai",
    tagline: "The Global Maker Platform"
  },
  hero: {
    title: "Welcome to the age of",
    highlight: " instant creation",
    description: "If you can explain it, you can launch it. Transform your app ideas into reality with our AI-powered development platform. Build React applications faster than ever with intelligent suggestions and seamless deployment.",
    primaryButton: "Launch Yomake App",
    secondaryButton: "View Live Demo"
  },
  features: {
    title: "Build anything, beautifully",
    subtitle: "From dashboards to landing pages, create stunning applications with our AI-powered platform",
    items: [
      {
        icon: "🤖",
        title: "AI-Powered Development",
        description: "Describe your app idea and watch our AI generate production-ready code with intelligent suggestions and real-time collaboration."
      },
      {
        icon: "⚡",
        title: "Lightning Fast Deployment",
        description: "One-click deployment to multiple platforms. Go from idea to live application in minutes, not weeks."
      },
      {
        icon: "🎨",
        title: "Modern Tech Stack",
        description: "Built with TypeScript, React, and Tailwind CSS. Generate beautiful, responsive applications with modern development practices."
      }
    ]
  },
  cta: {
    title: "Ready to Start Building?",
    description: "Join thousands of developers who are already building faster with Yomake. Trusted by 10,000+ makers worldwide with a 4.9/5 rating.",
    buttonText: "Start Free Trial"
  },
  footer: {
    brand: {
      name: "Yomake.ai",
      description: "The global AI-powered maker platform. Built with ❤️ from Africa."
    },
    links: {
      product: [
        { label: "Platform", href: "https://app.yomake.ai" },
        { label: "Templates", href: "https://yomake.ai/templates" },
        { label: "Documentation", href: "https://docs.yomake.ai" }
      ],
      company: [
        { label: "About", href: "https://yomake.ai/about" },
        { label: "Blog", href: "https://yomake.ai/blog" },
        { label: "Support", href: "https://yomake.ai/support" }
      ],
      legal: [
        { label: "Privacy", href: "https://yomake.ai/privacy" },
        { label: "Terms", href: "https://yomake.ai/terms" },
        { label: "Security", href: "https://yomake.ai/security" }
      ]
    },
    copyright: "© 2025 Yomake.ai. All rights reserved."
  }
};