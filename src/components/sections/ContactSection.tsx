import { motion } from "framer-motion";
import { fadeIn, staggerContainer } from "@/lib/motion";
import { Mail, Phone, MapPin, Send, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const ContactSection = () => {
  return (
    <section id="contact" className="py-28 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: "-80px" }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center"
        >
          {/* Left Content */}
          <motion.div variants={fadeIn}>
            <h2 className="text-xs uppercase tracking-[0.3em] text-blue font-bold mb-4">Contact Us</h2>
            <h3 className="text-4xl md:text-5xl font-black tracking-tight text-foreground font-display mb-8">
              Let's Start a <span className="text-blue">Conversation</span>
            </h3>
            <p className="text-lg text-muted-foreground leading-relaxed mb-12 max-w-xl">
              Have a project in mind? We'd love to hear about it. Our team is ready to help you navigate your digital transformation.
            </p>

            <div className="space-y-8">
              <div className="flex gap-6 items-center group">
                <div className="w-14 h-14 rounded-2xl bg-blue/5 flex items-center justify-center text-blue group-hover:bg-blue group-hover:text-white transition-all duration-300">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-xs font-bold uppercase tracking-widest text-muted-foreground mb-1">Email Us</div>
                  <div className="text-xl font-bold text-foreground">info@devdhar.in</div>
                </div>
              </div>
              
              <div className="flex gap-6 items-center group">
                <div className="w-14 h-14 rounded-2xl bg-gold/10 flex items-center justify-center text-gold group-hover:bg-gold group-hover:text-white transition-all duration-300">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-xs font-bold uppercase tracking-widest text-muted-foreground mb-1">Call Us</div>
                  <div className="text-xl font-bold text-foreground">+91 63542 36105</div>
                </div>
              </div>

              <div className="flex gap-6 items-center group">
                <div className="w-14 h-14 rounded-2xl bg-blue/5 flex items-center justify-center text-blue group-hover:bg-blue group-hover:text-white transition-all duration-300">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-xs font-bold uppercase tracking-widest text-muted-foreground mb-1">Visit Us</div>
                  <div className="text-xl font-bold text-foreground">Ahmedabad, Gujarat, India</div>
                </div>
              </div>
            </div>
            
            <div className="mt-12 pt-12 border-t border-blue/5">
              <Button className="bg-green-600 hover:bg-green-700 text-white rounded-full px-8 h-12 font-bold flex gap-2">
                <MessageCircle className="w-5 h-5" />
                Chat on WhatsApp
              </Button>
            </div>
          </motion.div>

          {/* Right - Contact Form Visual */}
          <motion.div
            variants={fadeIn}
            className="bg-white p-10 rounded-[40px] border border-blue/5 shadow-[0_32px_80px_-20px_rgba(30,58,138,0.1)] relative"
          >
            <form className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-bold text-foreground">Your Name</label>
                  <input 
                    type="text" 
                    placeholder="John Doe"
                    className="w-full bg-blue/5 border-none rounded-2xl p-4 text-sm focus:ring-2 focus:ring-blue transition-all"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-foreground">Email Address</label>
                  <input 
                    type="email" 
                    placeholder="john@example.com"
                    className="w-full bg-blue/5 border-none rounded-2xl p-4 text-sm focus:ring-2 focus:ring-blue transition-all"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-foreground">Service Required</label>
                <select className="w-full bg-blue/5 border-none rounded-2xl p-4 text-sm focus:ring-2 focus:ring-blue transition-all">
                  <option>Web Development</option>
                  <option>Software Development</option>
                  <option>Mobile App Development</option>
                  <option>UI/UX Design</option>
                  <option>SEO Services</option>
                </select>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-foreground">Project Details</label>
                <textarea 
                  rows={4}
                  placeholder="Tell us about your project..."
                  className="w-full bg-blue/5 border-none rounded-2xl p-4 text-sm focus:ring-2 focus:ring-blue transition-all"
                />
              </div>
              <Button className="w-full bg-blue text-white hover:bg-blue/90 rounded-2xl h-14 font-bold text-lg flex gap-2 group shadow-xl shadow-blue/20">
                Send Message
                <Send className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </Button>
            </form>
            
            {/* Visual decoration */}
            <div className="absolute -z-10 -bottom-10 -right-10 w-40 h-40 bg-gold/10 rounded-full blur-3xl" />
            <div className="absolute -z-10 -top-10 -left-10 w-40 h-40 bg-blue/5 rounded-full blur-3xl" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
