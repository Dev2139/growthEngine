import { motion } from "framer-motion";
import { fadeIn, staggerContainer } from "@/lib/motion";
import { Mail, Phone, MapPin, Send, MessageCircle } from "lucide-react";

const ContactSection = () => {
  return (
    <section id="contact" className="py-32 px-6 bg-[#F8F8F6] relative overflow-hidden border-t border-black/[0.03]">
      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: "-80px" }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center"
        >
          {/* Left Content */}
          <motion.div variants={fadeIn}>
            <span className="text-xs uppercase tracking-[0.3em] text-gold font-bold mb-4 block">Contact Us</span>
            <h3 className="text-4xl md:text-5xl font-black tracking-tight text-foreground font-display mb-8 leading-[1.15]">
              Let's start a <span className="font-serif-italic font-light text-gold text-5xl">conversation</span>
            </h3>
            <p className="text-base text-foreground/50 leading-relaxed font-light mb-12 max-w-xl">
              Have a project in mind? We'd love to hear about it. Our team is ready to help you navigate your digital transformation.
            </p>

            <div className="space-y-8">
              <div className="flex gap-5 items-center group">
                <div className="w-12 h-12 rounded-xl bg-gold/5 text-gold flex items-center justify-center transition-colors duration-300 group-hover:bg-gold group-hover:text-zinc-950">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-[10px] font-bold uppercase tracking-[0.15em] text-foreground/40 mb-0.5">Email Us</div>
                  <div className="text-lg font-bold text-foreground font-display tracking-tight">info@devdhar.in</div>
                </div>
              </div>
              
              <div className="flex gap-5 items-center group">
                <div className="w-12 h-12 rounded-xl bg-gold/5 text-gold flex items-center justify-center transition-colors duration-300 group-hover:bg-gold group-hover:text-zinc-950">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-[10px] font-bold uppercase tracking-[0.15em] text-foreground/40 mb-0.5">Call Us</div>
                  <div className="text-lg font-bold text-foreground font-display tracking-tight">+91 63542 36105</div>
                </div>
              </div>

              <div className="flex gap-5 items-center group">
                <div className="w-12 h-12 rounded-xl bg-gold/5 text-gold flex items-center justify-center transition-colors duration-300 group-hover:bg-gold group-hover:text-zinc-950">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-[10px] font-bold uppercase tracking-[0.15em] text-foreground/40 mb-0.5">Visit Us</div>
                  <div className="text-lg font-bold text-foreground font-display tracking-tight">Ahmedabad, Gujarat, India</div>
                </div>
              </div>
            </div>
            
            <div className="mt-12 pt-12 border-t border-black/[0.04]">
              <a 
                href="https://wa.me/916354236105" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-emerald-500/5 hover:bg-emerald-500/10 border border-emerald-500/20 text-emerald-600 rounded-full px-6 h-12 text-xs font-display font-bold uppercase tracking-[0.12em] transition-all duration-300 hover:scale-102"
              >
                <MessageCircle className="w-4 h-4" />
                Chat on WhatsApp
              </a>
            </div>
          </motion.div>

          {/* Right - Contact Form Visual */}
          <motion.div
            variants={fadeIn}
            className="card-premium-modern p-10 md:p-12 rounded-[40px] relative overflow-hidden"
          >
            {/* Subtle glow background */}
            <div className="absolute right-[-10%] top-[-10%] w-40 h-40 bg-gold/5 rounded-full blur-3xl pointer-events-none" />

            <form className="space-y-6 relative z-10" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-[10px] font-bold uppercase tracking-[0.15em] text-foreground/60">Your Name</label>
                  <input 
                    type="text" 
                    placeholder="John Doe"
                    className="w-full bg-[#F8F8F6] border border-black/[0.06] rounded-xl p-4 text-xs text-foreground placeholder:text-foreground/30 focus:outline-none focus:border-gold/50 transition-all font-light"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-bold uppercase tracking-[0.15em] text-foreground/60">Email Address</label>
                  <input 
                    type="email" 
                    placeholder="john@example.com"
                    className="w-full bg-[#F8F8F6] border border-black/[0.06] rounded-xl p-4 text-xs text-[#F8F8F6] placeholder:text-foreground/30 focus:outline-none focus:border-gold/50 transition-all font-light"
                    style={{ color: 'hsl(var(--foreground))' }}
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <label className="text-[10px] font-bold uppercase tracking-[0.15em] text-foreground/60">Service Required</label>
                <select className="w-full bg-[#F8F8F6] border border-black/[0.06] rounded-xl p-4 text-xs text-foreground/75 focus:outline-none focus:border-gold/50 transition-all font-light appearance-none">
                  <option>Web Development</option>
                  <option>Software Development</option>
                  <option>Mobile App Development</option>
                  <option>UI/UX Design</option>
                  <option>SEO Services</option>
                </select>
              </div>
              
              <div className="space-y-2">
                <label className="text-[10px] font-bold uppercase tracking-[0.15em] text-foreground/60">Project Details</label>
                <textarea 
                  rows={4}
                  placeholder="Tell us about your project..."
                  className="w-full bg-[#F8F8F6] border border-black/[0.06] rounded-xl p-4 text-xs text-foreground placeholder:text-foreground/30 focus:outline-none focus:border-gold/50 transition-all font-light"
                />
              </div>
              
              <button className="w-full bg-zinc-950 text-white hover:bg-zinc-900 rounded-xl h-14 font-display font-bold text-xs uppercase tracking-widest flex items-center justify-center gap-2 group transition-all">
                Send Message
                <Send className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </button>
            </form>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
