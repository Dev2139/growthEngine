import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, CheckCircle2, Rocket, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { submitToFormspree } from "@/lib/formspree";
import { toast } from "@/hooks/use-toast";

interface AuditModalProps {
  open: boolean;
  onClose: () => void;
}

const AuditModal = ({ open, onClose }: AuditModalProps) => {
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    businessName: "",
    service: "Select Service",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMsg("");

    const res = await submitToFormspree({
      name: formData.name,
      email: formData.email,
      businessName: formData.businessName,
      service: formData.service,
      message: formData.message,
      _subject: `Free Quote Request from ${formData.name || 'Audit Modal'}`,
    });

    setIsSubmitting(false);

    if (res.success) {
      setSubmitted(true);
      toast({
        title: "Quote Request Sent!",
        description: "We have received your audit request and will respond within 24 hours.",
      });
      setFormData({
        name: "",
        email: "",
        businessName: "",
        service: "Select Service",
        message: "",
      });
    } else {
      setErrorMsg(res.error || "Failed to submit request. Please try again.");
      toast({
        title: "Submission Failed",
        description: res.error || "Failed to submit request.",
        variant: "destructive",
      });
    }
  };

  return (
    <AnimatePresence>
      {open && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[150] bg-blue/20 backdrop-blur-md"
            onClick={onClose}
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="fixed inset-0 z-[200] flex items-center justify-center p-6 pointer-events-none"
          >
            <div className="w-full max-w-lg bg-white rounded-[40px] shadow-[0_40px_100px_-20px_rgba(30,58,138,0.3)] p-10 relative pointer-events-auto border border-blue/5 overflow-hidden">
              {/* Decoration */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-blue/5 rounded-full -translate-y-1/2 translate-x-1/2" />
              
              <button
                onClick={() => { onClose(); setTimeout(() => setSubmitted(false), 300); }}
                className="absolute top-8 right-8 w-10 h-10 rounded-full bg-blue/5 flex items-center justify-center text-blue hover:bg-blue hover:text-white transition-all"
              >
                <X className="w-5 h-5" />
              </button>

              {submitted ? (
                <div className="text-center py-10">
                  <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-8">
                    <CheckCircle2 className="w-10 h-10 text-green-600" />
                  </div>
                  <h3 className="text-3xl font-black text-foreground mb-4 font-display">Success!</h3>
                  <p className="text-muted-foreground text-lg leading-relaxed mb-8">
                    Your request has been received. Our senior engineer will review your requirements and get back to you within 24 hours.
                  </p>
                  <Button
                    onClick={onClose}
                    className="bg-blue text-white rounded-full px-8 h-12 font-bold"
                  >
                    Close
                  </Button>
                </div>
              ) : (
                <>
                  <div className="mb-10">
                    <div className="inline-flex items-center gap-2 bg-blue/5 px-4 py-2 rounded-full mb-4 text-blue">
                      <Rocket className="w-4 h-4 text-gold" />
                      <span className="text-[10px] font-bold uppercase tracking-widest">Free Consultation</span>
                    </div>
                    <h3 className="text-3xl font-black text-foreground font-display">
                      Get Your <span className="text-blue">Free Quote</span>
                    </h3>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-4">
                    {errorMsg && (
                      <div className="p-3 rounded-xl bg-red-500/10 border border-red-500/20 text-red-600 text-xs font-medium">
                        {errorMsg}
                      </div>
                    )}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Your Name"
                        required
                        className="h-14 px-6 rounded-2xl bg-blue/5 border-none text-sm text-foreground placeholder:text-muted-foreground focus:ring-2 focus:ring-blue transition-all"
                      />
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="Email Address"
                        required
                        className="h-14 px-6 rounded-2xl bg-blue/5 border-none text-sm text-foreground placeholder:text-muted-foreground focus:ring-2 focus:ring-blue transition-all"
                      />
                    </div>
                    <input
                      type="text"
                      name="businessName"
                      value={formData.businessName}
                      onChange={handleChange}
                      placeholder="Business Name"
                      className="w-full h-14 px-6 rounded-2xl bg-blue/5 border-none text-sm text-foreground placeholder:text-muted-foreground focus:ring-2 focus:ring-blue transition-all"
                    />
                    <select 
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      className="w-full h-14 px-6 rounded-2xl bg-blue/5 border-none text-sm text-foreground focus:ring-2 focus:ring-blue transition-all"
                    >
                      <option>Select Service</option>
                      <option>Social Media Marketing</option>
                      <option>Web Development</option>
                      <option>Mobile App Development</option>
                      <option>Custom Software</option>
                      <option>UI/UX Design</option>
                      <option>SEO / Google Ranking</option>
                    </select>
                    <textarea 
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell us about your project requirements..."
                      rows={3}
                      className="w-full p-6 rounded-2xl bg-blue/5 border-none text-sm text-foreground placeholder:text-muted-foreground focus:ring-2 focus:ring-blue transition-all"
                    />
                    
                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full h-16 mt-4 rounded-2xl bg-blue text-white hover:bg-blue/90 text-lg font-bold shadow-xl shadow-blue/20 transition-all flex items-center justify-center gap-2"
                    >
                      {isSubmitting ? (
                        <>
                          <Loader2 className="w-5 h-5 animate-spin" />
                          Submitting...
                        </>
                      ) : (
                        "Send Request"
                      )}
                    </Button>
                    <p className="text-[10px] text-center text-muted-foreground mt-4">
                      We respect your privacy. No spam, ever.
                    </p>
                  </form>
                </>
              )}
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default AuditModal;
