
import { motion } from 'framer-motion';
import { Mail, MapPin, Phone, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useState } from 'react';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Handle form submission
  };

  const contactInfo = [
    { icon: Mail, label: 'Email', value: 'your.email@example.com', href: 'mailto:your.email@example.com' },
    { icon: Phone, label: 'Phone', value: '+1 (555) 123-4567', href: 'tel:+15551234567' },
    { icon: MapPin, label: 'Location', value: 'Your City, Country', href: '#' },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="p-6 space-y-6"
    >
      {/* Code Comment Header */}
      <div className="font-mono text-vs-green">
        <div>{"// Contact.md"}</div>
        <div>{"// Get in touch for collaborations and opportunities"}</div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Contact Info */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
          className="space-y-6"
        >
          {/* Terminal-style contact info */}
          <div className="bg-vs-bg-secondary rounded-lg p-6 border border-vs-border">
            <div className="font-mono space-y-4">
              <div className="text-vs-green">
                <span>$ </span>
                <span className="syntax-function">whoami</span>
              </div>
              
              <div className="ml-4 space-y-2">
                {contactInfo.map((info, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 + (index * 0.1) }}
                    className="flex items-center gap-3 p-3 rounded hover:bg-vs-bg-tertiary transition-colors"
                  >
                    <info.icon className="w-5 h-5 text-vs-accent" />
                    <div>
                      <div className="text-vs-text-muted text-sm">{info.label}</div>
                      <a
                        href={info.href}
                        className="text-vs-text-primary hover:text-vs-blue transition-colors"
                      >
                        {info.value}
                      </a>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>

          {/* Status */}
          <div className="bg-vs-bg-tertiary rounded-lg p-6 border border-vs-border">
            <div className="font-mono space-y-2">
              <div className="text-vs-green">
                <span>$ </span>
                <span className="syntax-function">status</span>
              </div>
              <div className="ml-4">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-vs-green animate-pulse"></div>
                  <span className="text-vs-text-secondary">Available for opportunities</span>
                </div>
                <div className="flex items-center gap-2 mt-1">
                  <div className="w-2 h-2 rounded-full bg-vs-blue"></div>
                  <span className="text-vs-text-secondary">Open to collaborations</span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Contact Form */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4 }}
          className="bg-vs-bg-secondary rounded-lg p-6 border border-vs-border"
        >
          <h3 className="font-mono text-vs-blue font-medium mb-6">Send Message</h3>
          
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-vs-text-muted font-mono text-sm mb-2">
                Name
              </label>
              <Input
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="bg-vs-bg-tertiary border-vs-border text-vs-text-primary font-mono focus:border-vs-accent"
                placeholder="Your name"
                required
              />
            </div>
            
            <div>
              <label className="block text-vs-text-muted font-mono text-sm mb-2">
                Email
              </label>
              <Input
                type="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="bg-vs-bg-tertiary border-vs-border text-vs-text-primary font-mono focus:border-vs-accent"
                placeholder="your@email.com"
                required
              />
            </div>
            
            <div>
              <label className="block text-vs-text-muted font-mono text-sm mb-2">
                Message
              </label>
              <Textarea
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="bg-vs-bg-tertiary border-vs-border text-vs-text-primary font-mono focus:border-vs-accent min-h-[120px]"
                placeholder="Your message..."
                required
              />
            </div>
            
            <Button
              type="submit"
              className="w-full bg-vs-accent hover:bg-vs-blue text-vs-text-primary font-mono gap-2"
            >
              <Send className="w-4 h-4" />
              Send Message
            </Button>
          </form>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default ContactSection;
