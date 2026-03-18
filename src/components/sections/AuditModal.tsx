import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import { Button } from "@/components/ui/button";

interface AuditModalProps {
  open: boolean;
  onClose: () => void;
}

const AuditModal = ({ open, onClose }: AuditModalProps) => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <AnimatePresence>
      {open && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-background/80 backdrop-blur-sm"
            onClick={onClose}
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 z-50 flex items-center justify-center p-6 pointer-events-none"
          >
            <div className="w-full max-w-md bg-card border border-border rounded-2xl p-8 card-depth pointer-events-auto">
              <div className="flex items-center justify-between mb-8">
                <h3 className="text-xl font-semibold tracking-tight text-foreground">
                  {submitted ? "We'll Be in Touch" : "Get Your Free Audit"}
                </h3>
                <button
                  onClick={() => { onClose(); setSubmitted(false); }}
                  className="w-8 h-8 rounded-full border border-border flex items-center justify-center hover:bg-secondary transition-colors"
                >
                  <X className="w-4 h-4 text-muted-foreground" />
                </button>
              </div>

              {submitted ? (
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Thanks for reaching out. We'll review your business and get back to you within 24 hours with a full audit report.
                </p>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                  {[
                    { name: "name", placeholder: "Your Name", type: "text" },
                    { name: "business", placeholder: "Business Name", type: "text" },
                    { name: "phone", placeholder: "Phone Number", type: "tel" },
                    { name: "location", placeholder: "Business Location", type: "text" },
                  ].map((field) => (
                    <input
                      key={field.name}
                      type={field.type}
                      placeholder={field.placeholder}
                      required
                      className="h-12 px-4 rounded-xl bg-secondary border border-border text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-ring transition-all"
                    />
                  ))}
                  <Button
                    type="submit"
                    className="h-12 mt-2 rounded-xl bg-foreground text-background hover:bg-foreground/90 text-sm font-medium active:scale-[0.97] transition-all"
                  >
                    Request Free Audit
                  </Button>
                </form>
              )}
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default AuditModal;
