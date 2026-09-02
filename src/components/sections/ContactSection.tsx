import { useState } from "react";
import { motion } from "framer-motion";
import { fadeIn, staggerContainer } from "@/lib/motion";
import { Mail, Phone, MapPin, Send, MessageCircle, CheckCircle2, Loader2 } from "lucide-react";
import { submitToFormspree } from "@/lib/formspree";
import { toast } from "@/hooks/use-toast";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    service: "Web Development",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMessage("");

    const res = await submitToFormspree({
      name: formData.name,
      email: formData.email,
      service: formData.service,
      message: formData.message,
      _subject: `New Inquiry from ${formData.name || 'Website Contact Form'}`,
    });

    setIsSubmitting(false);

    if (res.success) {
      setIsSubmitted(true);
      toast({
        title: "Message Sent!",
        description: "Thank you for reaching out. We will get back to you shortly.",
      });
      setFormData({ name: "", email: "", service: "Web Development", message: "" });
    } else {
      setErrorMessage(res.error || "Failed to send message. Please try again.");
      toast({
        title: "Submission Failed",
        description: res.error || "Failed to send message.",
        variant: "destructive",
      });
    }
  };

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

            {isSubmitted ? (
              <div className="py-12 text-center relative z-10">
                <div className="w-16 h-16 bg-gold/15 text-gold-dark rounded-full flex items-center justify-center mx-auto mb-6">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h4 className="text-2xl font-black font-display text-foreground mb-3">Message Received!</h4>
                <p className="text-sm text-foreground/60 leading-relaxed font-light mb-8 max-w-md mx-auto">
                  Thank you for contacting DevDhara Technologies. Our engineering team has received your message via Formspree and will respond within 24 hours.
                </p>
                <button
                  onClick={() => setIsSubmitted(false)}
                  className="bg-zinc-950 text-white hover:bg-zinc-900 rounded-xl px-8 h-12 font-display font-bold text-xs uppercase tracking-widest transition-all"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form className="space-y-6 relative z-10" onSubmit={handleSubmit}>
                {errorMessage && (
                  <div className="p-4 rounded-xl bg-red-500/10 border border-red-500/20 text-red-600 text-xs font-medium">
                    {errorMessage}
                  </div>
                )}
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-[10px] font-bold uppercase tracking-[0.15em] text-foreground/60">Your Name</label>
                    <input 
                      type="text" 
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      placeholder="John Doe"
                      className="w-full bg-[#F8F8F6] border border-black/[0.06] rounded-xl p-4 text-xs text-foreground placeholder:text-foreground/30 focus:outline-none focus:border-gold/50 transition-all font-light"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-bold uppercase tracking-[0.15em] text-foreground/60">Email Address</label>
                    <input 
                      type="email" 
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      placeholder="john@example.com"
                      className="w-full bg-[#F8F8F6] border border-black/[0.06] rounded-xl p-4 text-xs text-foreground placeholder:text-foreground/30 focus:outline-none focus:border-gold/50 transition-all font-light"
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <label className="text-[10px] font-bold uppercase tracking-[0.15em] text-foreground/60">Service Required</label>
                  <select 
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className="w-full bg-[#F8F8F6] border border-black/[0.06] rounded-xl p-4 text-xs text-foreground/75 focus:outline-none focus:border-gold/50 transition-all font-light appearance-none"
                  >
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
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={4}
                    placeholder="Tell us about your project..."
                    className="w-full bg-[#F8F8F6] border border-black/[0.06] rounded-xl p-4 text-xs text-foreground placeholder:text-foreground/30 focus:outline-none focus:border-gold/50 transition-all font-light"
                  />
                </div>
                
                <button 
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-zinc-950 text-white hover:bg-zinc-900 disabled:opacity-70 rounded-xl h-14 font-display font-bold text-xs uppercase tracking-widest flex items-center justify-center gap-2 group transition-all"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      Send Message
                      <Send className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                    </>
                  )}
                </button>
              </form>
            )}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
