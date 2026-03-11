import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import {
  AlertTriangle,
  BookOpen,
  CheckCircle,
  ChevronDown,
  Code2,
  ExternalLink,
  Eye,
  Globe,
  Layers,
  Lightbulb,
  Lock,
  Menu,
  Music,
  Palette,
  Shield,
  ShieldCheck,
  TrendingUp,
  Wifi,
  X,
} from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useEffect, useState } from "react";

const NAV_LINKS = [
  { label: "Services", href: "#services" },
  { label: "Properties", href: "#properties" },
  { label: "Safe Internet", href: "#safe-internet" },
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

const SECURITY_FEATURES = [
  {
    icon: Lock,
    title: "End-to-End Encryption",
    description:
      "All data transmitted between you and our servers is encrypted with military-grade AES-256 encryption. Hackers cannot read your data in transit.",
  },
  {
    icon: Eye,
    title: "Anonymous Browsing",
    description:
      "Browse all Regenia Tech properties with full anonymity. Your IP address is masked, and your identity stays hidden from third parties.",
  },
  {
    icon: Shield,
    title: "Hacker Protection",
    description:
      "Advanced threat detection blocks malicious actors in real time. Our systems monitor for intrusion attempts so you never have to worry.",
  },
  {
    icon: Wifi,
    title: "Secure Data Transfer",
    description:
      "Every byte of data you share with our platforms travels through a secure tunnel, preventing interception even on public Wi-Fi networks.",
  },
];

const VPN_PROVIDERS = [
  {
    name: "ProtonVPN",
    description:
      "Swiss-based, open-source VPN with a strict no-logs policy. Offers a free tier with unlimited bandwidth. Trusted by journalists and privacy advocates worldwide.",
    url: "https://protonvpn.com",
    badge: "Free Tier Available",
  },
  {
    name: "Windscribe",
    description:
      "Generous 10GB/month free plan with servers in 11 countries. Built-in ad blocker and firewall. Easy to set up on all major devices.",
    url: "https://windscribe.com",
    badge: "10GB Free/Month",
  },
  {
    name: "NordVPN",
    description:
      "Industry-leading VPN with 5,400+ servers across 60 countries. Double VPN and Onion over VPN for maximum security and privacy.",
    url: "https://nordvpn.com",
    badge: "Premium",
  },
  {
    name: "ExpressVPN",
    description:
      "Ultra-fast speeds with servers in 94 countries. TrustedServer technology ensures no data is ever written to a hard drive.",
    url: "https://expressvpn.com",
    badge: "Premium",
  },
];

const VPN_STEPS = [
  {
    step: 1,
    title: "Choose a VPN Provider",
    description:
      "Select one of our recommended VPN providers below. For the best free option, we recommend ProtonVPN or Windscribe.",
  },
  {
    step: 2,
    title: "Download & Install",
    description:
      "Download the VPN app for your device (Windows, Mac, iOS, Android). Install and create a free account.",
  },
  {
    step: 3,
    title: "Connect to a Server",
    description:
      "Open the app and tap Connect. Choose a server location — any country works. Your IP is now hidden.",
  },
  {
    step: 4,
    title: "Browse Regenia Tech Safely",
    description:
      "With your VPN active, visit any of our properties. Your data is encrypted and your identity is protected from hackers.",
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
  const [vpnActive, setVpnActive] = useState(false);

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
                data-ocid={`nav.${link.label.toLowerCase().replace(" ", "_")}.link`}
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

      {/* ── Safe Internet ── */}
      <section
        id="safe-internet"
        data-ocid="safe_internet.tab"
        className="py-32 px-6 bg-[oklch(0.05_0_0)] relative overflow-hidden"
      >
        {/* Background atmosphere */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage:
              "radial-gradient(ellipse 70% 50% at 20% 50%, oklch(0.15 0.06 220 / 0.4) 0%, transparent 60%), radial-gradient(ellipse 50% 60% at 80% 30%, oklch(0.12 0.04 160 / 0.3) 0%, transparent 50%)",
          }}
        />
        <div
          className="absolute inset-0 pointer-events-none opacity-[0.03]"
          style={{
            backgroundImage:
              "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")",
          }}
        />

        <div className="relative z-10 max-w-[1200px] mx-auto">
          {/* Section header */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={containerVariants}
            className="mb-20 text-center"
          >
            <motion.div
              variants={itemVariants}
              className="inline-flex items-center gap-2 bg-[oklch(0.12_0.04_220/0.6)] border border-[oklch(0.3_0.06_220/0.4)] rounded-full px-4 py-1.5 mb-5"
            >
              <Shield size={13} className="text-[oklch(0.65_0.12_220)]" />
              <span className="text-xs font-semibold tracking-[0.15em] uppercase text-[oklch(0.6_0.08_220)]">
                Privacy & Security
              </span>
            </motion.div>
            <motion.h2
              variants={itemVariants}
              className="font-display text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-[oklch(0.96_0_0)] mb-4"
            >
              Safe Internet
            </motion.h2>
            <motion.p
              variants={itemVariants}
              className="text-lg text-[oklch(0.55_0.03_220)] max-w-2xl mx-auto leading-relaxed"
            >
              Protect Your Data. Browse Securely. Hackers cannot access your
              information when you use a VPN on our platforms.
            </motion.p>
          </motion.div>

          {/* VPN Protection Toggle */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            variants={containerVariants}
            className="mb-20"
          >
            <motion.div
              variants={itemVariants}
              className="max-w-xl mx-auto rounded-3xl border overflow-hidden"
              style={{
                background: vpnActive
                  ? "linear-gradient(135deg, oklch(0.1 0.06 155) 0%, oklch(0.08 0.04 170) 100%)"
                  : "linear-gradient(135deg, oklch(0.11 0 0) 0%, oklch(0.09 0 0) 100%)",
                borderColor: vpnActive
                  ? "oklch(0.3 0.1 155 / 0.6)"
                  : "oklch(0.2 0 0)",
                transition: "all 0.5s ease",
              }}
            >
              <div className="p-8 flex flex-col items-center gap-6">
                {/* Shield icon with pulse */}
                <div className="relative">
                  <div
                    className="absolute inset-0 rounded-full blur-xl"
                    style={{
                      background: vpnActive
                        ? "oklch(0.55 0.2 155 / 0.3)"
                        : "oklch(0.4 0 0 / 0.2)",
                      transition: "all 0.5s ease",
                    }}
                  />
                  <div
                    className="relative w-20 h-20 rounded-full flex items-center justify-center"
                    style={{
                      background: vpnActive
                        ? "oklch(0.25 0.1 155)"
                        : "oklch(0.18 0 0)",
                      transition: "all 0.5s ease",
                    }}
                  >
                    <AnimatePresence mode="wait">
                      {vpnActive ? (
                        <motion.div
                          key="active"
                          initial={{ scale: 0.5, opacity: 0 }}
                          animate={{ scale: 1, opacity: 1 }}
                          exit={{ scale: 0.5, opacity: 0 }}
                          transition={{ duration: 0.3 }}
                        >
                          <ShieldCheck
                            size={36}
                            style={{ color: "oklch(0.75 0.18 155)" }}
                          />
                        </motion.div>
                      ) : (
                        <motion.div
                          key="inactive"
                          initial={{ scale: 0.5, opacity: 0 }}
                          animate={{ scale: 1, opacity: 1 }}
                          exit={{ scale: 0.5, opacity: 0 }}
                          transition={{ duration: 0.3 }}
                        >
                          <Shield
                            size={36}
                            style={{ color: "oklch(0.45 0 0)" }}
                          />
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </div>

                {/* Status text */}
                <div className="text-center">
                  <p
                    className="font-display text-2xl font-bold mb-1"
                    style={{
                      color: vpnActive
                        ? "oklch(0.8 0.15 155)"
                        : "oklch(0.6 0 0)",
                      transition: "color 0.4s ease",
                    }}
                  >
                    {vpnActive ? "VPN Protected" : "VPN Inactive"}
                  </p>
                  <p
                    className="text-sm"
                    style={{
                      color: vpnActive
                        ? "oklch(0.55 0.08 155)"
                        : "oklch(0.4 0 0)",
                      transition: "color 0.4s ease",
                    }}
                  >
                    {vpnActive
                      ? "Connection encrypted · Identity hidden"
                      : "Your connection is not protected"}
                  </p>
                </div>

                {/* Toggle */}
                <div className="flex items-center gap-4">
                  <span
                    className="text-sm font-medium"
                    style={{
                      color: vpnActive
                        ? "oklch(0.5 0.05 155)"
                        : "oklch(0.6 0 0)",
                    }}
                  >
                    OFF
                  </span>
                  <Switch
                    data-ocid="safe_internet.vpn.toggle"
                    checked={vpnActive}
                    onCheckedChange={setVpnActive}
                    className="data-[state=checked]:bg-[oklch(0.55_0.18_155)] scale-125"
                  />
                  <span
                    className="text-sm font-medium"
                    style={{
                      color: vpnActive
                        ? "oklch(0.75 0.15 155)"
                        : "oklch(0.35 0 0)",
                    }}
                  >
                    ON
                  </span>
                </div>

                {/* Status message */}
                <AnimatePresence mode="wait">
                  {vpnActive ? (
                    <motion.div
                      key="protected"
                      data-ocid="safe_internet.vpn.success_state"
                      initial={{ opacity: 0, y: 8, scale: 0.96 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: -8, scale: 0.96 }}
                      transition={{ duration: 0.3 }}
                      className="w-full rounded-2xl p-4 flex items-start gap-3"
                      style={{
                        background: "oklch(0.15 0.06 155 / 0.6)",
                        border: "1px solid oklch(0.3 0.1 155 / 0.4)",
                      }}
                    >
                      <CheckCircle
                        size={18}
                        className="mt-0.5 flex-shrink-0"
                        style={{ color: "oklch(0.7 0.15 155)" }}
                      />
                      <p
                        className="text-sm leading-relaxed"
                        style={{ color: "oklch(0.75 0.1 155)" }}
                      >
                        <strong>VPN Active</strong> — Your connection is
                        encrypted. Hackers cannot access your data while
                        browsing Regenia Tech websites.
                      </p>
                    </motion.div>
                  ) : (
                    <motion.div
                      key="unprotected"
                      data-ocid="safe_internet.vpn.error_state"
                      initial={{ opacity: 0, y: 8, scale: 0.96 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: -8, scale: 0.96 }}
                      transition={{ duration: 0.3 }}
                      className="w-full rounded-2xl p-4 flex items-start gap-3"
                      style={{
                        background: "oklch(0.14 0.05 25 / 0.5)",
                        border: "1px solid oklch(0.3 0.1 25 / 0.4)",
                      }}
                    >
                      <AlertTriangle
                        size={18}
                        className="mt-0.5 flex-shrink-0"
                        style={{ color: "oklch(0.7 0.15 50)" }}
                      />
                      <p
                        className="text-sm leading-relaxed"
                        style={{ color: "oklch(0.65 0.1 50)" }}
                      >
                        <strong>Warning:</strong> Your connection is not
                        protected. We recommend enabling a VPN to secure your
                        browsing session.
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          </motion.div>

          {/* VPN Setup Guide */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            variants={containerVariants}
            className="mb-20"
          >
            <motion.div variants={itemVariants} className="mb-10">
              <p className="text-xs font-semibold tracking-[0.2em] uppercase text-[oklch(0.45_0.06_220)] mb-2">
                Step-by-Step
              </p>
              <h3 className="font-display text-3xl md:text-4xl font-bold text-[oklch(0.94_0_0)] tracking-tight">
                How to Set Up Your VPN
              </h3>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {VPN_STEPS.map((step, i) => (
                <motion.div
                  key={step.step}
                  variants={itemVariants}
                  className="relative bg-[oklch(0.1_0_0)] rounded-2xl p-6 border border-[oklch(0.17_0_0)] flex flex-col gap-4 hover:border-[oklch(0.28_0.04_220/0.6)] transition-colors duration-300"
                >
                  <div
                    className="w-10 h-10 rounded-full flex items-center justify-center font-display font-bold text-sm"
                    style={{
                      background: "oklch(0.18 0.06 220 / 0.5)",
                      color: "oklch(0.7 0.12 220)",
                      border: "1px solid oklch(0.3 0.08 220 / 0.4)",
                    }}
                  >
                    {step.step}
                  </div>
                  <h4 className="font-display font-semibold text-[oklch(0.9_0_0)] leading-snug">
                    {step.title}
                  </h4>
                  <p className="text-sm text-[oklch(0.48_0_0)] leading-relaxed">
                    {step.description}
                  </p>
                  {i < VPN_STEPS.length - 1 && (
                    <div
                      className="hidden lg:block absolute top-1/2 -right-2 w-4 h-0.5"
                      style={{ background: "oklch(0.22 0.04 220 / 0.5)" }}
                    />
                  )}
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Security Features Grid */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            variants={containerVariants}
            className="mb-20"
          >
            <motion.div variants={itemVariants} className="mb-10">
              <p className="text-xs font-semibold tracking-[0.2em] uppercase text-[oklch(0.45_0.06_220)] mb-2">
                Built-in Protection
              </p>
              <h3 className="font-display text-3xl md:text-4xl font-bold text-[oklch(0.94_0_0)] tracking-tight">
                Security Features
              </h3>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {SECURITY_FEATURES.map((feature, i) => {
                const Icon = feature.icon;
                return (
                  <motion.div
                    key={feature.title}
                    variants={itemVariants}
                    data-ocid={`safe_internet.feature.item.${i + 1}`}
                    className="group bg-[oklch(0.1_0_0)] rounded-2xl p-7 flex flex-col gap-4 border border-[oklch(0.17_0_0)] hover:border-[oklch(0.28_0.06_220/0.5)] hover:-translate-y-1 transition-all duration-300"
                  >
                    <div
                      className="w-11 h-11 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300"
                      style={{
                        background: "oklch(0.16 0.06 220 / 0.4)",
                        border: "1px solid oklch(0.28 0.08 220 / 0.3)",
                      }}
                    >
                      <Icon
                        size={20}
                        style={{ color: "oklch(0.65 0.12 220)" }}
                      />
                    </div>
                    <h4 className="font-display font-semibold text-[oklch(0.9_0_0)] leading-snug">
                      {feature.title}
                    </h4>
                    <p className="text-sm text-[oklch(0.48_0_0)] leading-relaxed">
                      {feature.description}
                    </p>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>

          {/* Recommended VPN Providers */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            variants={containerVariants}
          >
            <motion.div variants={itemVariants} className="mb-10">
              <p className="text-xs font-semibold tracking-[0.2em] uppercase text-[oklch(0.45_0.06_220)] mb-2">
                Trusted Partners
              </p>
              <h3 className="font-display text-3xl md:text-4xl font-bold text-[oklch(0.94_0_0)] tracking-tight">
                Recommended VPN Providers
              </h3>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {VPN_PROVIDERS.map((provider, i) => (
                <motion.div
                  key={provider.name}
                  variants={itemVariants}
                  data-ocid={`safe_internet.provider.item.${i + 1}`}
                  className="group bg-[oklch(0.1_0_0)] rounded-2xl p-7 border border-[oklch(0.17_0_0)] hover:border-[oklch(0.28_0.06_220/0.5)] hover:-translate-y-0.5 transition-all duration-300 flex flex-col gap-4"
                >
                  <div className="flex items-start justify-between gap-3">
                    <div className="flex items-center gap-3">
                      <div
                        className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                        style={{
                          background: "oklch(0.16 0.06 220 / 0.4)",
                          border: "1px solid oklch(0.28 0.08 220 / 0.3)",
                        }}
                      >
                        <Globe
                          size={18}
                          style={{ color: "oklch(0.65 0.12 220)" }}
                        />
                      </div>
                      <h4 className="font-display font-semibold text-[oklch(0.92_0_0)] text-lg">
                        {provider.name}
                      </h4>
                    </div>
                    <span
                      className="text-[10px] font-semibold tracking-wide uppercase px-2.5 py-1 rounded-full flex-shrink-0"
                      style={{
                        background: "oklch(0.18 0.06 220 / 0.5)",
                        color: "oklch(0.65 0.1 220)",
                        border: "1px solid oklch(0.3 0.08 220 / 0.3)",
                      }}
                    >
                      {provider.badge}
                    </span>
                  </div>
                  <p className="text-sm text-[oklch(0.48_0_0)] leading-relaxed">
                    {provider.description}
                  </p>
                  <a
                    href={provider.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-sm font-medium transition-colors duration-200"
                    style={{ color: "oklch(0.6 0.1 220)" }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.color = "oklch(0.78 0.12 220)";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.color = "oklch(0.6 0.1 220)";
                    }}
                  >
                    Learn More <ExternalLink size={13} />
                  </a>
                </motion.div>
              ))}
            </div>
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
          <div className="flex flex-wrap gap-5 justify-center">
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
