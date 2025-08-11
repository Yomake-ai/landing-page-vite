import {
  Navbar,
  NavBody,
  NavItems,
  MobileNav,
  NavbarLogo,
  NavbarButton,
  MobileNavHeader,
  MobileNavToggle,
  MobileNavMenu,
} from "@/components/ui/resizable-navbar";
import { useState } from "react";
import { motion } from "motion/react";
import { ContainerScroll } from "@/components/ui/container-scroll-animation";
import { GlowingEffect } from "@/components/ui/glowing-effect";
import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";
import { TypewriterEffect } from "@/components/ui/typewriter-effect";
import { 
  IconRocket, 
  IconShieldCheck, 
  IconSparkles,
  IconBrandGithub,
  IconBrandTwitter,
  IconMail,
  IconCheck,
  IconArrowRight,
  IconCode,
  IconCloud,
  IconDeviceMobile
} from "@tabler/icons-react";

const firstRowTestimonials = [
  {
    quote: "This platform has completely transformed our development workflow. The speed and reliability are absolutely unmatched in the industry.",
    name: "Sarah Johnson",
    title: "CTO at TechCorp"
  },
  {
    quote: "The developer experience is phenomenal. Everything just works seamlessly, and the documentation is incredibly comprehensive and helpful.",
    name: "Mike Chen",
    title: "Lead Developer at InnovateLabs"
  },
  {
    quote: "We scaled from 0 to 100k users without any issues. The platform handled everything seamlessly with automatic scaling.",
    name: "Emily Rodriguez",
    title: "Startup Founder at GrowthTech"
  },
  {
    quote: "The deployment process is so smooth. What used to take hours now takes minutes. It's a game changer for our team.",
    name: "David Kim",
    title: "DevOps Engineer at CloudFlow"
  },
  {
    quote: "Security features are top-notch. We feel confident deploying our applications knowing they're protected by enterprise-grade security.",
    name: "Lisa Wang",
    title: "Security Lead at SecureBase"
  }
];

const secondRowTestimonials = [
  {
    quote: "The customer support team is incredible. They respond quickly and actually understand the technical challenges we face.",
    name: "Alex Thompson",
    title: "Technical Director at BuildFast"
  },
  {
    quote: "Integration with our existing tools was seamless. No complicated setup, just plug and play. Exactly what we needed.",
    name: "Maria Garcia",
    title: "Engineering Manager at FlexiCode"
  },
  {
    quote: "The performance improvements we've seen are remarkable. Our applications run faster and more efficiently than ever before.",
    name: "James Wilson",
    title: "Senior Developer at OptimizeNow"
  },
  {
    quote: "The monitoring and analytics features give us insights we never had before. We can optimize our applications like never before.",
    name: "Rachel Brown",
    title: "Data Engineer at InsightTech"
  },
  {
    quote: "Cost-effective solution that scales with our business. We're saving money while getting better performance. Win-win.",
    name: "Tom Anderson",
    title: "VP of Engineering at ScaleUp"
  }
];

const typewriterWords = [
  {
    text: "Ready",
  },
  {
    text: "to",
  },
  {
    text: "build",
  },
  {
    text: "something",
  },
  {
    text: "amazing?",
    className: "text-blue-600 dark:text-blue-400",
  },
];

export default function LandingPage() {
  const navItems = [
    {
      name: "Features",
      link: "#features",
    },
    {
      name: "Pricing",
      link: "#pricing",
    },
    {
      name: "Testimonials",
      link: "#testimonials",
    },
    {
      name: "Contact",
      link: "#contact",
    },
  ];

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="relative w-full">
      <Navbar>
        {/* Desktop Navigation */}
        <NavBody>
          <NavbarLogo />
          <NavItems items={navItems} />
          <div className="flex items-center gap-4">
            <NavbarButton variant="secondary">Login</NavbarButton>
            <NavbarButton variant="gradient">Get Started</NavbarButton>
          </div>
        </NavBody>

        {/* Mobile Navigation */}
        <MobileNav>
          <MobileNavHeader>
            <NavbarLogo />
            <MobileNavToggle
              isOpen={isMobileMenuOpen}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            />
          </MobileNavHeader>

          <MobileNavMenu
            isOpen={isMobileMenuOpen}
            onClose={() => setIsMobileMenuOpen(false)}
          >
            {navItems.map((item, idx) => (
              <a
                key={`mobile-link-${idx}`}
                href={item.link}
                onClick={() => setIsMobileMenuOpen(false)}
                className="relative text-neutral-600 dark:text-neutral-300"
              >
                <span className="block">{item.name}</span>
              </a>
            ))}
            <div className="flex w-full flex-col gap-4">
              <NavbarButton
                onClick={() => setIsMobileMenuOpen(false)}
                variant="secondary"
                className="w-full"
              >
                Login
              </NavbarButton>
              <NavbarButton
                onClick={() => setIsMobileMenuOpen(false)}
                variant="gradient"
                className="w-full"
              >
                Get Started
              </NavbarButton>
            </div>
          </MobileNavMenu>
        </MobileNav>
      </Navbar>

      {/* Hero Section with Container Scroll */}
      <section className="relative bg-gradient-to-b from-blue-50 via-slate-50/30 to-white dark:from-neutral-950 dark:via-neutral-900 dark:to-neutral-950 overflow-hidden">
        <div className="absolute inset-0 bg-grid-black/[0.02] dark:bg-grid-white/[0.02]" />
        
        <div className="pt-32 pb-10 relative z-10">
          <ContainerScroll
            titleComponent={
              <div className="flex flex-col items-center">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-blue-100 to-slate-100 dark:from-blue-900/30 dark:to-slate-900/30 text-blue-700 dark:text-blue-300 text-sm font-medium mb-8"
                >
                  <IconSparkles className="w-4 h-4" />
                  <span>Trusted by 10,000+ developers worldwide</span>
                </motion.div>
                
                <motion.h1
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.1 }}
                  className="text-4xl md:text-5xl lg:text-7xl font-bold text-black dark:text-white mb-4"
                >
                  Build at the speed of
                  <span className="text-4xl md:text-5xl lg:text-7xl font-bold mt-1 leading-none bg-gradient-to-r from-blue-600 to-slate-700 bg-clip-text text-transparent block">
                    imagination
                  </span>
                </motion.h1>
                
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  className="text-lg md:text-xl text-gray-600 dark:text-gray-400 mb-10 max-w-2xl mx-auto text-center"
                >
                  The all-in-one platform for modern teams to build, deploy, and scale applications faster than ever before.
                </motion.p>
                
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.3 }}
                  className="flex flex-col sm:flex-row gap-4 justify-center mb-16"
                >
                  <NavbarButton variant="gradient" className="text-lg px-8 py-4 shadow-xl hover:shadow-2xl transition-shadow">
                    Start Free Trial
                    <IconArrowRight className="inline-block ml-2 w-5 h-5" />
                  </NavbarButton>
                  <NavbarButton variant="primary" className="text-lg px-8 py-4">
                    <IconBrandGithub className="inline-block mr-2 w-5 h-5" />
                    View Demo
                  </NavbarButton>
                </motion.div>
              </div>
            }
          >
            <img
              src="/dashboard.svg"
              alt="Product Dashboard"
              className="mx-auto rounded-2xl object-cover h-full w-full object-left-top"
              draggable={false}
            />
          </ContainerScroll>
        </div>

        {/* Stats Section */}
        <div className="relative z-10 pb-20">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="text-center"
              >
                <div className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent">10k+</div>
                <div className="text-sm text-gray-600 dark:text-gray-400 mt-2">Active Teams</div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="text-center"
              >
                <div className="text-4xl font-bold bg-gradient-to-r from-purple-600 to-purple-400 bg-clip-text text-transparent">99.9%</div>
                <div className="text-sm text-gray-600 dark:text-gray-400 mt-2">Uptime SLA</div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="text-center"
              >
                <div className="text-4xl font-bold bg-gradient-to-r from-slate-600 to-slate-400 bg-clip-text text-transparent">500M+</div>
                <div className="text-sm text-gray-600 dark:text-gray-400 mt-2">API Requests</div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="text-center"
              >
                <div className="text-4xl font-bold bg-gradient-to-r from-fuchsia-600 to-fuchsia-400 bg-clip-text text-transparent">24/7</div>
                <div className="text-sm text-gray-600 dark:text-gray-400 mt-2">Expert Support</div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-24 bg-white dark:bg-neutral-900">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Everything you need to succeed
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Powerful features designed to help you build and scale your applications effortlessly
            </p>
          </motion.div>

          <div className="max-w-7xl mx-auto">
            <ul className="grid grid-cols-1 grid-rows-none gap-4 md:grid-cols-12 md:grid-rows-3 lg:gap-4 xl:max-h-[34rem] xl:grid-rows-2">
              <GridItem
                area="md:[grid-area:1/1/2/7] xl:[grid-area:1/1/2/5]"
                icon={<IconRocket className="h-4 w-4 text-black dark:text-neutral-400" />}
                title="Lightning Fast Deployment"
                description="Deploy to production with a single command and automatic scaling. Optimized performance with sub-second load times."
              />

              <GridItem
                area="md:[grid-area:1/7/2/13] xl:[grid-area:2/1/3/5]"
                icon={<IconShieldCheck className="h-4 w-4 text-black dark:text-neutral-400" />}
                title="Enterprise Security"
                description="Bank-grade encryption and security features to protect your data with advanced threat protection."
              />

              <GridItem
                area="md:[grid-area:2/1/3/7] xl:[grid-area:1/5/3/8]"
                icon={<IconCode className="h-4 w-4 text-black dark:text-neutral-400" />}
                title="Developer Experience First"
                description="Built by developers, for developers with extensive API documentation and intuitive workflows."
              />

              <GridItem
                area="md:[grid-area:2/7/3/13] xl:[grid-area:1/8/2/13]"
                icon={<IconCloud className="h-4 w-4 text-black dark:text-neutral-400" />}
                title="Cloud Native Architecture"
                description="Seamlessly integrate with your favorite cloud providers and scale automatically."
              />

              <GridItem
                area="md:[grid-area:3/1/4/13] xl:[grid-area:2/8/3/13]"
                icon={<IconDeviceMobile className="h-4 w-4 text-black dark:text-neutral-400" />}
                title="Mobile Ready & Responsive"
                description="Responsive design that works perfectly on all devices with native mobile performance."
              />
            </ul>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-24 bg-gradient-to-br from-slate-50 via-blue-50/30 to-gray-50 dark:bg-neutral-950">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Simple, transparent pricing
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Choose the perfect plan for your needs. Always flexible to scale
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              {
                name: "Starter",
                price: "$9",
                description: "Perfect for side projects",
                features: ["Up to 3 projects", "1GB storage", "Community support", "Basic analytics"],
                cta: "Start Free",
                variant: "primary" as const
              },
              {
                name: "Pro",
                price: "$29",
                description: "For growing businesses",
                features: ["Unlimited projects", "10GB storage", "Priority support", "Advanced analytics", "Custom domain", "Team collaboration"],
                cta: "Start Free Trial",
                variant: "gradient" as const,
                popular: true
              },
              {
                name: "Enterprise",
                price: "Custom",
                description: "For large organizations",
                features: ["Everything in Pro", "Unlimited storage", "24/7 phone support", "Custom integrations", "SLA guarantee", "Dedicated account manager"],
                cta: "Contact Sales",
                variant: "dark" as const
              }
            ].map((plan, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className={`relative p-8 rounded-2xl ${
                  plan.popular 
                    ? 'bg-gradient-to-b from-blue-600 to-slate-700 text-white shadow-2xl shadow-blue-600/25' 
                    : 'bg-white dark:bg-neutral-900 border border-gray-200 dark:border-neutral-800 hover:shadow-lg hover:shadow-blue-600/10 transition-shadow'
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="px-4 py-1 rounded-full bg-gradient-to-r from-blue-400 to-slate-400 text-white text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="mb-8">
                  <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                  <p className={`text-sm ${plan.popular ? 'text-blue-100' : 'text-gray-600 dark:text-gray-400'}`}>
                    {plan.description}
                  </p>
                </div>
                
                <div className="mb-8">
                  <span className="text-4xl font-bold">{plan.price}</span>
                  {plan.price !== "Custom" && <span className={plan.popular ? 'text-slate-200' : 'text-gray-600 dark:text-gray-400'}>/month</span>}
                </div>
                
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <IconCheck className={`w-5 h-5 mt-0.5 ${plan.popular ? 'text-white' : 'text-blue-500'}`} />
                      <span className={`text-sm ${plan.popular ? 'text-white' : 'text-gray-700 dark:text-gray-300'}`}>
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
                
                <NavbarButton 
                  variant={plan.popular ? "primary" : plan.variant} 
                  className="w-full"
                >
                  {plan.cta}
                </NavbarButton>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-24 bg-white dark:bg-neutral-900 relative overflow-hidden">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Loved by developers worldwide
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              See what our customers have to say about their experience
            </p>
          </motion.div>

          <div className="space-y-8">
            {/* First row - scrolling left */}
            <InfiniteMovingCards
              items={firstRowTestimonials}
              direction="right"
              speed="slow"
            />
            
            {/* Second row - scrolling right */}
            <InfiniteMovingCards
              items={secondRowTestimonials}
              direction="left"
              speed="slow"
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-slate-50 via-blue-50/30 to-gray-50 dark:bg-neutral-950">
        <div className="container mx-auto px-4">
          <div className="flex flex-col items-center justify-center text-center">
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-slate-600 dark:text-slate-300 text-base mb-8 text-center"
            >
              Join thousands of developers building the future
            </motion.p>
            
            <div className="mb-8">
              <TypewriterEffect words={typewriterWords} />
            </div>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="flex flex-col md:flex-row space-y-4 md:space-y-0 space-x-0 md:space-x-4"
            >
              <button className="w-40 h-12 rounded-xl bg-gradient-to-r from-blue-600 to-slate-700 border border-transparent text-white text-sm font-medium hover:shadow-lg transition-shadow">
                Start Free Trial
              </button>
              <button className="w-40 h-12 rounded-xl bg-white text-slate-900 border border-slate-300 text-sm font-medium hover:bg-slate-50 transition-colors dark:bg-neutral-800 dark:text-white dark:border-neutral-700 dark:hover:bg-neutral-750">
                Schedule Demo
              </button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="py-12 bg-gray-900 text-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div>
              <h3 className="text-lg font-semibold mb-4">Product</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-white transition">Features</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition">Pricing</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition">Documentation</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition">API Reference</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4">Company</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-white transition">About</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition">Blog</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition">Careers</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition">Press</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4">Resources</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-white transition">Community</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition">Support</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition">Status</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition">Security</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4">Connect</h3>
              <div className="flex gap-4">
                <a href="#" className="text-gray-400 hover:text-white transition">
                  <IconBrandTwitter className="w-6 h-6" />
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition">
                  <IconBrandGithub className="w-6 h-6" />
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition">
                  <IconMail className="w-6 h-6" />
                </a>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400 text-sm mb-4 md:mb-0">
              © 2024 Startup. All rights reserved.
            </div>
            <div className="flex gap-6 text-sm">
              <a href="#" className="text-gray-400 hover:text-white transition">Privacy Policy</a>
              <a href="#" className="text-gray-400 hover:text-white transition">Terms of Service</a>
              <a href="#" className="text-gray-400 hover:text-white transition">Cookie Policy</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

interface GridItemProps {
  area: string;
  icon: React.ReactNode;
  title: string;
  description: React.ReactNode;
}

const GridItem = ({ area, icon, title, description }: GridItemProps) => {
  return (
    <li className={`min-h-[14rem] list-none ${area}`}>
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="relative h-full rounded-2xl border border-gray-200 dark:border-gray-800 p-2 md:rounded-3xl md:p-3"
      >
        <GlowingEffect
          blur={0}
          borderWidth={3}
          spread={80}
          glow={true}
          disabled={false}
          proximity={64}
          inactiveZone={0.01}
        />
        <div className="border-0.75 relative flex h-full flex-col justify-between gap-6 overflow-hidden rounded-xl p-6 md:p-6 bg-white dark:bg-neutral-900 dark:shadow-[0px_0px_27px_0px_#2D2D2D]">
          <div className="relative flex flex-1 flex-col justify-between gap-3">
            <div className="w-fit rounded-lg border border-gray-300 dark:border-gray-600 p-2">
              {icon}
            </div>
            <div className="space-y-3">
              <h3 className="-tracking-4 pt-0.5 font-sans text-xl/[1.375rem] font-semibold text-balance text-black md:text-2xl/[1.875rem] dark:text-white">
                {title}
              </h3>
              <h2 className="font-sans text-sm/[1.125rem] text-black md:text-base/[1.375rem] dark:text-neutral-400 [&_b]:md:font-semibold [&_strong]:md:font-semibold">
                {description}
              </h2>
            </div>
          </div>
        </div>
      </motion.div>
    </li>
  );
};