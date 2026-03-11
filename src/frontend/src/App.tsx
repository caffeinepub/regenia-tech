import { Button } from "@/components/ui/button";
import {
  BookOpen,
  ChevronDown,
  Code2,
  ExternalLink,
  Layers,
  Lightbulb,
  Menu,
  Music,
  Palette,
  TrendingUp,
  X,
} from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useEffect, useState } from "react";

const NAV_LINKS = [
  { label: "Services", href: "#services" },
  { label: "Properties", href: "#properties" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

const SERVICES = [
  {
    icon: Code2,
    title: "Web Development",
    description:
      "Crafting high-performance, pixel-perfect web experiences that captivate users and drive results.",
  },
  {
    icon: Layers,
    title: "Digital Solutions",
    description:
      "End-to-end digital transformation strategies tailored to your unique business challenges.",
  },
  {
    icon: TrendingUp,
    title: "Tech Consulting",
    description:
      "Strategic guidance to help your organization navigate the rapidly evolving technology landscape.",
  },
  {
    icon: Lightbulb,
    title: "Innovation Lab",
    description:
      "Experimental ventures pushing boundaries in AI, automation, and next-generation platforms.",
  },
];

const PROPERTIES = [
  {
    name: "Goat Music Company",
    description:
      "An immersive platform connecting artists, labels, and fans through innovative music experiences.",
    url: "https://goat-music-company24-8ga.caffeine.xyz",
    icon: Music,
    tag: "Music & Entertainment",
  },
  {
    name: "Epic Teaching Learn Hub",
    description:
      "A comprehensive educational ecosystem empowering learners and educators with cutting-edge tools.",
    url: "https://epic-teaching-learn-hub.base44.app",
    icon: BookOpen,
    tag: "Education & Learning",
  },
  {
    name: "Stripclub Comics",
    description:
      "A bold, boundary-breaking comics platform celebrating independent creators and visual storytelling.",
    url: "https://stripclub-comics26-7om.caffeine.xyz",
    icon: Palette,
    tag: "Comics & Creative",
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 32 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
    },
  },
};

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  const scrollTo = (href: string) => {
    setMenuOpen(false);
    const el = document.querySelector(href);
    el?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-[oklch(0.07_0_0)] text-[oklch(0.96_0_0)] font-sans">
      {/* ── Navbar ── */}
      <header
        className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
          scrolled ? "glass-nav" : "bg-transparent"
        }`}
      >
        <div className="max-w-[1200px] mx-auto px-6 flex items-center justify-between h-14">
          {/* Logo as button */}
          <button
            type="button"
            data-ocid="nav.link"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="font-display font-bold text-lg tracking-tight text-[oklch(0.96_0_0)] hover:opacity-80 transition-opacity"
          >
            Regenia Tech
          </button>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-7">
            {NAV_LINKS.map((link) => (
              <button
                type="button"
                key={link.label}
                data-ocid={`nav.${link.label.toLowerCase()}.link`}
                onClick={() => scrollTo(link.href)}
                className="text-sm text-[oklch(0.75_0_0)] hover:text-[oklch(0.96_0_0)] transition-colors duration-200 font-medium"
              >
                {link.label}
              </button>
            ))}
            <Button
              size="sm"
              data-ocid="nav.contact.primary_button"
              onClick={() => scrollTo("#contact")}
              className="bg-[oklch(0.96_0_0)] text-[oklch(0.07_0_0)] hover:bg-[oklch(0.88_0_0)] rounded-full px-5 text-sm font-semibold h-8"
            >
              Get Started
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            type="button"
            data-ocid="nav.toggle"
            className="md:hidden p-2 text-[oklch(0.75_0_0)] hover:text-[oklch(0.96_0_0)]"
            onClick={() => setMenuOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {/* Mobile Drawer */}
        <AnimatePresence>
          {menuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
              className="md:hidden glass-nav border-t border-[oklch(1_0_0/0.07)] px-6 pb-6 pt-3 flex flex-col gap-4"
            >
              {NAV_LINKS.map((link) => (
                <button
                  type="button"
                  key={link.label}
                  onClick={() => scrollTo(link.href)}
                  className="text-left text-base text-[oklch(0.8_0_0)] hover:text-[oklch(0.96_0_0)] transition-colors font-medium"
                >
                  {link.label}
                </button>
              ))}
              <Button
                data-ocid="nav.mobile.primary_button"
                onClick={() => scrollTo("#contact")}
                className="bg-[oklch(0.96_0_0)] text-[oklch(0.07_0_0)] hover:bg-[oklch(0.88_0_0)] rounded-full w-full font-semibold"
              >
                Get Started
              </Button>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* ── Hero ── */}
      <section
        id="hero"
        className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden px-6 text-center"
      >
        {/* Background mesh */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse 80% 60% at 50% 0%, oklch(0.22 0 0) 0%, oklch(0.07 0 0) 70%)",
          }}
        />
        <div
          className="absolute inset-0 pointer-events-none opacity-30"
          style={{
            backgroundImage:
              "radial-gradient(circle at 20% 60%, oklch(0.35 0.04 250) 0%, transparent 50%), radial-gradient(circle at 80% 30%, oklch(0.25 0.03 200) 0%, transparent 40%)",
          }}
        />

        <motion.div
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          className="relative z-10 max-w-4xl mx-auto flex flex-col items-center gap-6"
        >
          <motion.div variants={itemVariants}>
            <span className="inline-block text-xs font-semibold tracking-[0.2em] uppercase text-[oklch(0.6_0_0)] mb-4">
              Welcome to Regenia Tech
            </span>
          </motion.div>

          <motion.h1
            variants={itemVariants}
            className="font-display text-5xl md:text-7xl lg:text-8xl font-bold leading-[1.05] tracking-tight"
          >
            Technology.
            <br />
            <span className="text-gradient">Reimagined.</span>
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="text-lg md:text-xl text-[oklch(0.62_0_0)] max-w-xl leading-relaxed"
          >
            Regenia Tech is a forward-thinking technology company building
            exceptional digital experiences, platforms, and solutions for the
            modern world.
          </motion.p>

          <motion.div
            variants={itemVariants}
            className="flex flex-wrap gap-3 justify-center mt-2"
          >
            <Button
              data-ocid="hero.primary_button"
              onClick={() => scrollTo("#services")}
              className="bg-[oklch(0.96_0_0)] text-[oklch(0.07_0_0)] hover:bg-[oklch(0.88_0_0)] rounded-full px-8 py-3 h-auto text-base font-semibold"
            >
              Explore Services
            </Button>
            <Button
              data-ocid="hero.secondary_button"
              variant="outline"
              onClick={() => scrollTo("#about")}
              className="border-[oklch(0.35_0_0)] text-[oklch(0.85_0_0)] hover:bg-[oklch(0.14_0_0)] hover:text-[oklch(0.96_0_0)] rounded-full px-8 py-3 h-auto text-base font-semibold bg-transparent"
            >
              Learn More
            </Button>
          </motion.div>
        </motion.div>

        {/* Scroll cue */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.6 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-[oklch(0.4_0_0)]"
        >
          <span className="text-xs tracking-widest uppercase">Scroll</span>
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{
              repeat: Number.POSITIVE_INFINITY,
              duration: 1.8,
              ease: "easeInOut",
            }}
          >
            <ChevronDown size={16} />
          </motion.div>
        </motion.div>
      </section>

      {/* ── Services ── */}
      <section id="services" className="py-32 px-6 bg-[oklch(0.97_0_0)]">
        <div className="max-w-[1200px] mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={containerVariants}
            className="mb-16"
          >
            <motion.p
              variants={itemVariants}
              className="text-xs font-semibold tracking-[0.2em] uppercase text-[oklch(0.55_0_0)] mb-3"
            >
              What We Do
            </motion.p>
            <motion.h2
              variants={itemVariants}
              className="font-display text-4xl md:text-5xl font-bold text-[oklch(0.1_0_0)] tracking-tight"
            >
              Built for the future.
            </motion.h2>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            variants={containerVariants}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4"
          >
            {SERVICES.map((service, i) => {
              const Icon = service.icon;
              return (
                <motion.div
                  key={service.title}
                  variants={itemVariants}
                  data-ocid={`services.item.${i + 1}`}
                  className="group bg-white rounded-2xl p-7 flex flex-col gap-4 border border-[oklch(0.92_0_0)] hover:shadow-[0_8px_40px_oklch(0_0_0/0.08)] hover:-translate-y-1 transition-all duration-300"
                >
                  <div className="w-11 h-11 rounded-xl bg-[oklch(0.94_0_0)] flex items-center justify-center group-hover:bg-[oklch(0.1_0_0)] transition-colors duration-300">
                    <Icon
                      size={20}
                      className="text-[oklch(0.3_0_0)] group-hover:text-[oklch(0.96_0_0)] transition-colors duration-300"
                    />
                  </div>
                  <h3 className="font-display font-semibold text-lg text-[oklch(0.1_0_0)] leading-snug">
                    {service.title}
                  </h3>
                  <p className="text-sm text-[oklch(0.45_0_0)] leading-relaxed">
                    {service.description}
                  </p>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* ── Properties ── */}
      <section id="properties" className="py-32 px-6 bg-[oklch(0.07_0_0)]">
        <div className="max-w-[1200px] mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={containerVariants}
            className="mb-16"
          >
            <motion.p
              variants={itemVariants}
              className="text-xs font-semibold tracking-[0.2em] uppercase text-[oklch(0.5_0_0)] mb-3"
            >
              Our Portfolio
            </motion.p>
            <motion.h2
              variants={itemVariants}
              className="font-display text-4xl md:text-5xl font-bold text-gradient tracking-tight"
            >
              Our Properties.
            </motion.h2>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            variants={containerVariants}
            className="grid grid-cols-1 md:grid-cols-3 gap-5"
          >
            {PROPERTIES.map((prop, i) => {
              const Icon = prop.icon;
              return (
                <motion.a
                  key={prop.name}
                  href={prop.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  variants={itemVariants}
                  data-ocid={`properties.item.${i + 1}`}
                  className="group relative bg-[oklch(0.11_0_0)] rounded-2xl p-8 border border-[oklch(0.18_0_0)] hover:border-[oklch(0.32_0_0)] hover:-translate-y-1 transition-all duration-300 overflow-hidden flex flex-col gap-5"
                >
                  {/* subtle glow on hover */}
                  <div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                    style={{
                      background:
                        "radial-gradient(ellipse 60% 40% at 50% 0%, oklch(0.28 0 0) 0%, transparent 70%)",
                    }}
                  />

                  <div className="flex items-start justify-between">
                    <div className="w-12 h-12 rounded-xl bg-[oklch(0.17_0_0)] flex items-center justify-center">
                      <Icon size={22} className="text-[oklch(0.75_0_0)]" />
                    </div>
                    <ExternalLink
                      size={16}
                      className="text-[oklch(0.35_0_0)] group-hover:text-[oklch(0.6_0_0)] transition-colors mt-1"
                    />
                  </div>

                  <div className="flex flex-col gap-2">
                    <span className="text-[10px] font-semibold tracking-[0.15em] uppercase text-[oklch(0.45_0_0)]">
                      {prop.tag}
                    </span>
                    <h3 className="font-display font-semibold text-xl text-[oklch(0.94_0_0)] leading-snug">
                      {prop.name}
                    </h3>
                    <p className="text-sm text-[oklch(0.5_0_0)] leading-relaxed">
                      {prop.description}
                    </p>
                  </div>

                  <span className="text-xs font-medium text-[oklch(0.55_0_0)] group-hover:text-[oklch(0.8_0_0)] transition-colors flex items-center gap-1 mt-auto">
                    Visit Site <ExternalLink size={11} />
                  </span>
                </motion.a>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* ── About ── */}
      <section id="about" className="py-32 px-6 bg-[oklch(0.97_0_0)]">
        <div className="max-w-[1200px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-80px" }}
              variants={containerVariants}
              className="flex flex-col gap-6"
            >
              <motion.p
                variants={itemVariants}
                className="text-xs font-semibold tracking-[0.2em] uppercase text-[oklch(0.55_0_0)]"
              >
                About Us
              </motion.p>
              <motion.h2
                variants={itemVariants}
                className="font-display text-4xl md:text-5xl font-bold text-[oklch(0.1_0_0)] tracking-tight leading-[1.1]"
              >
                We build what
                <br />
                <em className="not-italic text-[oklch(0.35_0_0)]">
                  matters most.
                </em>
              </motion.h2>
              <motion.p
                variants={itemVariants}
                className="text-base text-[oklch(0.4_0_0)] leading-relaxed"
              >
                Regenia Tech is a forward-thinking technology company dedicated
                to creating digital products and platforms that empower
                individuals, businesses, and communities.
              </motion.p>
              <motion.p
                variants={itemVariants}
                className="text-base text-[oklch(0.4_0_0)] leading-relaxed"
              >
                From music to education to entertainment, we invest in bold
                ideas and build the infrastructure that helps them thrive — with
                precision, craft, and purpose.
              </motion.p>
              <motion.div variants={itemVariants}>
                <Button
                  data-ocid="about.primary_button"
                  onClick={() => scrollTo("#contact")}
                  className="bg-[oklch(0.1_0_0)] text-[oklch(0.97_0_0)] hover:bg-[oklch(0.2_0_0)] rounded-full px-8 py-3 h-auto font-semibold mt-2"
                >
                  Work With Us
                </Button>
              </motion.div>
            </motion.div>

            {/* Stats block */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-80px" }}
              variants={containerVariants}
              className="grid grid-cols-2 gap-4"
            >
              {[
                { number: "3+", label: "Active Properties" },
                { number: "100%", label: "Digital-First" },
                { number: "\u221e", label: "Innovation Mindset" },
                { number: "1", label: "Mission: Empower" },
              ].map((stat, i) => (
                <motion.div
                  key={stat.label}
                  variants={itemVariants}
                  data-ocid={`about.item.${i + 1}`}
                  className="bg-white rounded-2xl p-6 border border-[oklch(0.91_0_0)] flex flex-col gap-1"
                >
                  <span className="font-display text-4xl font-bold text-[oklch(0.1_0_0)]">
                    {stat.number}
                  </span>
                  <span className="text-sm text-[oklch(0.5_0_0)]">
                    {stat.label}
                  </span>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── Contact / CTA ── */}
      <section
        id="contact"
        className="py-32 px-6 bg-[oklch(0.07_0_0)] relative overflow-hidden"
      >
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse 70% 50% at 50% 50%, oklch(0.2 0 0) 0%, oklch(0.07 0 0) 70%)",
          }}
        />
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={containerVariants}
          className="relative z-10 max-w-2xl mx-auto text-center flex flex-col items-center gap-6"
        >
          <motion.p
            variants={itemVariants}
            className="text-xs font-semibold tracking-[0.2em] uppercase text-[oklch(0.5_0_0)]"
          >
            Get In Touch
          </motion.p>
          <motion.h2
            variants={itemVariants}
            className="font-display text-4xl md:text-6xl font-bold text-gradient tracking-tight"
          >
            Ready to build something great?
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className="text-base text-[oklch(0.55_0_0)] leading-relaxed"
          >
            Have an idea, a project, or a challenge? Regenia Tech is ready to
            help you turn vision into reality.
          </motion.p>
          <motion.div
            variants={itemVariants}
            className="flex flex-wrap gap-3 justify-center mt-2"
          >
            <Button
              data-ocid="contact.primary_button"
              className="bg-[oklch(0.96_0_0)] text-[oklch(0.07_0_0)] hover:bg-[oklch(0.88_0_0)] rounded-full px-10 py-3 h-auto text-base font-semibold"
              asChild
            >
              <a href="mailto:hello@regeniatech.com">Contact Us</a>
            </Button>
          </motion.div>
        </motion.div>
      </section>

      {/* ── Footer ── */}
      <footer className="bg-[oklch(0.05_0_0)] py-10 px-6 border-t border-[oklch(0.13_0_0)]">
        <div className="max-w-[1200px] mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <span className="font-display font-bold text-[oklch(0.55_0_0)] text-sm">
            Regenia Tech
          </span>
          <p className="text-xs text-[oklch(0.4_0_0)] text-center">
            2026 Regenia tech. powered by Caffiene ai. All rights reserved.
          </p>
          <div className="flex gap-5">
            {NAV_LINKS.map((link) => (
              <button
                type="button"
                key={link.label}
                onClick={() => scrollTo(link.href)}
                className="text-xs text-[oklch(0.4_0_0)] hover:text-[oklch(0.7_0_0)] transition-colors"
              >
                {link.label}
              </button>
            ))}
          </div>
        </div>
      </footer>
    </div>
  );
}
