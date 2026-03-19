/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { 
  Dumbbell, 
  CheckCircle2, 
  Clock, 
  MapPin, 
  Phone, 
  MessageCircle, 
  Menu, 
  X, 
  ArrowRight,
  Zap,
  ShieldCheck,
  Users,
  Heart
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

const WHATSAPP_LINK = "https://wa.me/6238860285";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Pricing', href: '#pricing' },
    { name: 'Facilities', href: '#facilities' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-background/90 backdrop-blur-md py-4 shadow-lg border-b border-white/5' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <a href="#home" className="flex items-center gap-2 group">
          <div className="bg-accent p-1.5 rounded-lg group-hover:scale-110 transition-transform">
            <Dumbbell className="w-6 h-6 text-white" />
          </div>
          <span className="text-xl font-bold tracking-tighter uppercase italic">Bharath <span className="text-accent">Fitness</span></span>
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              className="text-sm font-medium text-gray-300 hover:text-accent transition-colors uppercase tracking-widest"
            >
              {link.name}
            </a>
          ))}
          <a 
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-accent hover:bg-accent-hover text-white px-6 py-2 rounded-full text-sm font-bold transition-all hover:scale-105 active:scale-95"
          >
            JOIN NOW
          </a>
        </div>

        {/* Mobile Menu Toggle */}
        <button className="md:hidden text-white" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-background border-b border-white/5 overflow-hidden"
          >
            <div className="flex flex-col p-6 gap-4">
              {navLinks.map((link) => (
                <a 
                  key={link.name} 
                  href={link.href} 
                  onClick={() => setIsOpen(false)}
                  className="text-lg font-medium text-gray-300 hover:text-accent transition-colors"
                >
                  {link.name}
                </a>
              ))}
              <a 
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-accent text-white px-6 py-3 rounded-xl text-center font-bold"
              >
                JOIN NOW
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-1/4 -left-20 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
      
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center relative z-10">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-flex items-center gap-2 bg-white/5 border border-white/10 px-4 py-1.5 rounded-full mb-6">
            <span className="w-2 h-2 bg-accent rounded-full animate-pulse" />
            <span className="text-xs font-bold uppercase tracking-widest text-gray-300">50+ Members | Beginner Friendly</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-black leading-[1.1] mb-6 italic uppercase tracking-tighter">
            Get Fit. <br />
            Build <span className="text-accent">Strength.</span> <br />
            Join Today.
          </h1>
          <p className="text-xl text-gray-400 mb-10 max-w-lg leading-relaxed">
            Affordable fitness. Real results. Start your journey at the most supportive gym in Aroor.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a 
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-accent hover:bg-accent-hover text-white px-10 py-4 rounded-xl font-black text-lg flex items-center justify-center gap-2 transition-all hover:scale-105 active:scale-95 shadow-lg shadow-accent/20"
            >
              JOIN NOW <ArrowRight className="w-5 h-5" />
            </a>
            <a 
              href="#pricing"
              className="bg-white/5 hover:bg-white/10 border border-white/10 text-white px-10 py-4 rounded-xl font-bold text-lg flex items-center justify-center transition-all"
            >
              VIEW PRICING
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="relative hidden md:block"
        >
          <div className="aspect-square rounded-3xl overflow-hidden border border-white/10 relative group">
            <img 
              src="https://raw.githubusercontent.com/aswinapai250/sms/main/unnamed.jpg" 
              alt="Bharath Fitness Gym" 
              className="w-full h-full object-cover grayscale opacity-60 group-hover:scale-110 transition-transform duration-700"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-linear-to-t from-background via-transparent to-transparent" />
            
            {/* Floating Stats Card */}
            <div className="absolute bottom-8 left-8 right-8 bg-white/5 backdrop-blur-xl border border-white/10 p-6 rounded-2xl">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-accent rounded-xl flex items-center justify-center">
                  <Zap className="w-6 h-6 text-white" />
                </div>
                <div>
                  <p className="text-2xl font-black italic">₹1000<span className="text-sm font-normal not-italic text-gray-400">/month</span></p>
                  <p className="text-xs uppercase tracking-widest text-accent font-bold">Most Affordable Plan</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const About = () => {
  return (
    <section id="about" className="py-24 bg-white/[0.02]">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto"
        >
          <h2 className="text-accent text-sm font-bold uppercase tracking-[0.3em] mb-4">About Us</h2>
          <h3 className="text-3xl md:text-5xl font-black mb-8 italic uppercase tracking-tight">Your Local Fitness Hub</h3>
          <p className="text-xl text-gray-400 leading-relaxed">
            Bharath Fitness is a local gym dedicated to helping you improve your strength, fitness, and confidence in a supportive and motivating environment. We believe fitness should be accessible to everyone.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

const WhyChooseUs = () => {
  const features = [
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Affordable Plans",
      desc: "Get premium gym access at just ₹1000/month. No hidden charges."
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Beginner Friendly",
      desc: "A supportive environment perfect for those starting their journey."
    },
    {
      icon: <Dumbbell className="w-6 h-6" />,
      title: "Modern Equipment",
      desc: "Well-maintained machines for strength and cardio training."
    },
    {
      icon: <Heart className="w-6 h-6" />,
      title: "Fitness Culture",
      desc: "Join a community that motivates you to push your limits every day."
    }
  ];

  return (
    <section className="py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-accent text-sm font-bold uppercase tracking-[0.3em] mb-4">Why Choose Us</h2>
          <h3 className="text-3xl md:text-5xl font-black italic uppercase tracking-tight">Built for Results</h3>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((f, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-white/5 border border-white/10 p-8 rounded-3xl hover:border-accent/50 transition-colors group"
            >
              <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center text-accent mb-6 group-hover:bg-accent group-hover:text-white transition-all">
                {f.icon}
              </div>
              <h4 className="text-xl font-bold mb-3 uppercase italic tracking-tight">{f.title}</h4>
              <p className="text-gray-400 text-sm leading-relaxed">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Pricing = () => {
  return (
    <section id="pricing" className="py-24 bg-white/[0.02]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-accent text-sm font-bold uppercase tracking-[0.3em] mb-4">Pricing</h2>
          <h3 className="text-3xl md:text-5xl font-black italic uppercase tracking-tight">Simple & Transparent</h3>
        </div>
        
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="max-w-md mx-auto bg-linear-to-b from-accent to-accent-hover p-[1px] rounded-[2.5rem] shadow-2xl shadow-accent/20"
        >
          <div className="bg-background rounded-[2.45rem] p-10 text-center">
            <h4 className="text-xl font-bold uppercase tracking-widest mb-2">Monthly Membership</h4>
            <div className="flex items-center justify-center gap-1 mb-8">
              <span className="text-4xl font-black">₹</span>
              <span className="text-7xl font-black italic">1000</span>
              <span className="text-gray-400 font-medium">/month</span>
            </div>
            
            <ul className="space-y-4 mb-10 text-left">
              {[
                "Full gym access",
                "Access to all equipment",
                "Suitable for all fitness levels",
                "Supportive community",
                "Morning & Evening slots"
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-gray-300">
                  <CheckCircle2 className="w-5 h-5 text-accent shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            
            <a 
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full bg-accent hover:bg-accent-hover text-white py-4 rounded-2xl font-black text-lg transition-all hover:scale-[1.02] active:scale-95"
            >
              JOIN NOW
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const Facilities = () => {
  const items = [
    { title: "Strength Training Area", image: "https://raw.githubusercontent.com/aswinapai250/sms/main/unnamed.jpg" },
    { title: "Cardio Equipment", image: "https://raw.githubusercontent.com/aswinapai250/sms/main/Heavy-Lifting-M-710x488.jpg" },
    { title: "Clean Workout Space", image: "https://raw.githubusercontent.com/aswinapai250/sms/main/Heavy-Lifting-M-710x488.jpg" }
  ];

  return (
    <section id="facilities" className="py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-accent text-sm font-bold uppercase tracking-[0.3em] mb-4">Facilities</h2>
          <h3 className="text-3xl md:text-5xl font-black italic uppercase tracking-tight">What You Get</h3>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {items.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group relative aspect-4/3 rounded-3xl overflow-hidden border border-white/10"
            >
              <img 
                src={item.image} 
                alt={item.title} 
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-700 opacity-60 group-hover:opacity-100"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-linear-to-t from-background via-background/20 to-transparent" />
              <div className="absolute bottom-6 left-6">
                <h4 className="text-xl font-black italic uppercase tracking-tight">{item.title}</h4>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const CTA = () => {
  return (
    <section className="py-24 px-6">
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="max-w-5xl mx-auto bg-accent rounded-[3rem] p-12 md:p-20 text-center relative overflow-hidden"
      >
        <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
          <div className="absolute top-[-10%] left-[-10%] w-1/2 h-1/2 bg-white rounded-full blur-[100px]" />
        </div>
        
        <div className="relative z-10">
          <h2 className="text-4xl md:text-6xl font-black italic uppercase tracking-tighter mb-8 leading-tight">
            Start Your Fitness <br /> Journey Today
          </h2>
          <a 
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-white text-accent px-10 py-5 rounded-2xl font-black text-xl hover:scale-105 active:scale-95 transition-all shadow-2xl shadow-black/20"
          >
            <MessageCircle className="w-6 h-6" /> CONTACT ON WHATSAPP
          </a>
        </div>
      </motion.div>
    </section>
  );
};

const Contact = () => {
  return (
    <section id="contact" className="py-24 bg-white/[0.02]">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16">
        <div>
          <h2 className="text-accent text-sm font-bold uppercase tracking-[0.3em] mb-4">Contact Info</h2>
          <h3 className="text-3xl md:text-5xl font-black italic uppercase tracking-tight mb-8">Get In Touch</h3>
          
          <div className="space-y-8">
            <div className="flex gap-6">
              <div className="w-14 h-14 bg-white/5 rounded-2xl flex items-center justify-center text-accent shrink-0">
                <MapPin className="w-6 h-6" />
              </div>
              <div>
                <p className="text-gray-400 text-sm uppercase tracking-widest font-bold mb-1">Location</p>
                <p className="text-lg font-medium leading-relaxed">
                  First floor, Kalathara Building,<br />
                  Aroor Gram Panchayath
                </p>
              </div>
            </div>

            <div className="flex gap-6">
              <div className="w-14 h-14 bg-white/5 rounded-2xl flex items-center justify-center text-accent shrink-0">
                <Phone className="w-6 h-6" />
              </div>
              <div>
                <p className="text-gray-400 text-sm uppercase tracking-widest font-bold mb-1">Call Us</p>
                <p className="text-lg font-medium">+91 62388 60285</p>
              </div>
            </div>

            <div className="flex gap-6">
              <div className="w-14 h-14 bg-white/5 rounded-2xl flex items-center justify-center text-accent shrink-0">
                <Clock className="w-6 h-6" />
              </div>
              <div>
                <p className="text-gray-400 text-sm uppercase tracking-widest font-bold mb-1">Timings</p>
                <div className="text-lg font-medium">
                  <p>Morning: 6:00 AM – 10:00 AM</p>
                  <p>Evening: 5:30 PM – 10:00 PM</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white/5 rounded-[2.5rem] p-8 md:p-12 border border-white/10">
          <h4 className="text-2xl font-black italic uppercase mb-6">Find Us Here</h4>
          <div className="aspect-video rounded-2xl overflow-hidden grayscale opacity-70 border border-white/10">
            {/* Placeholder for Map - In a real app, use Google Maps iframe */}
            <div className="w-full h-full bg-white/5 flex items-center justify-center flex-col gap-4">
              <MapPin className="w-12 h-12 text-accent" />
              <p className="text-gray-500 text-sm font-medium">Aroor Gram Panchayath, Kerala</p>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-white/10">
            <p className="text-gray-400 text-sm mb-4">Ready to transform your body?</p>
            <a 
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 w-full bg-accent text-white py-4 rounded-xl font-bold hover:bg-accent-hover transition-colors"
            >
              <MessageCircle className="w-5 h-5" /> CHAT WITH US
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="py-12 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="flex items-center gap-2">
          <div className="bg-accent p-1.5 rounded-lg">
            <Dumbbell className="w-5 h-5 text-white" />
          </div>
          <span className="text-lg font-bold tracking-tighter uppercase italic">Bharath <span className="text-accent">Fitness</span></span>
        </div>
        
        <p className="text-gray-500 text-sm">
          © {new Date().getFullYear()} Bharath Fitness. All rights reserved.
        </p>
        
        <div className="flex items-center gap-4">
          <a 
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors text-sm font-bold uppercase tracking-widest"
          >
            <MessageCircle className="w-4 h-4 text-accent" />
            +91 62388 60285
          </a>
        </div>
      </div>
    </footer>
  );
};

const FloatingWhatsApp = () => {
  return (
    <motion.a
      href={WHATSAPP_LINK}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      className="fixed bottom-8 right-8 z-50 bg-[#25D366] text-white p-4 rounded-full shadow-2xl shadow-green-500/30 flex items-center justify-center"
    >
      <MessageCircle className="w-8 h-8" />
      <span className="absolute -top-2 -right-2 w-5 h-5 bg-accent rounded-full border-2 border-white animate-bounce" />
    </motion.a>
  );
};

export default function App() {
  return (
    <div className="selection:bg-accent selection:text-white">
      <Navbar />
      <main>
        <Hero />
        <About />
        <WhyChooseUs />
        <Pricing />
        <Facilities />
        <CTA />
        <Contact />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}
