"use client";

import React, { useState } from 'react';
import { Mail, User, MessageCircle, ArrowRight, CheckCircle2, Send, Clock } from 'lucide-react';
import { motion } from 'motion/react';
import { useTheme } from '@/app/context/ThemeContext';

interface FormData {
  name: string;
  email: string;
  message: string;
}

const ContactForm = () => {
  const { theme } = useTheme();
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    message: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
    setError(''); // Clear error on input change
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError('');

    try {
      // Using Web3Forms (free email service for static sites)
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          access_key: '1d29aea0-f354-4ae7-84ea-9ed58decff41', // Get free key from web3forms.com
          name: formData.name,
          email: formData.email,
          message: formData.message,
          subject: `New Contact Form Submission from ${formData.name}`,
        }),
      });

      const result = await response.json();

      if (result.success) {
        setIsSubmitted(true);
        setFormData({ name: '', email: '', message: '' });
        
        // Reset success message after 5 seconds
        setTimeout(() => {
          setIsSubmitted(false);
        }, 5000);
      } else {
        setError('Failed to send message. Please try again.');
      }
    } catch {
      setError('Something went wrong. Please try again later.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const textClass = theme === 'dark' ? 'text-slate-300' : 'text-slate-700';
  const headingClass = theme === 'dark' ? 'text-white' : 'text-slate-900';
  const inputClass = `w-full px-4 py-3.5 rounded-lg transition-all duration-200 ${
    theme === 'dark'
      ? 'bg-slate-900/50 border-slate-800 text-white placeholder-slate-500 focus:border-purple-600'
      : 'bg-white border-slate-200 text-slate-900 placeholder-slate-400 focus:border-purple-600'
  } border-2 focus:outline-none focus:ring-2 focus:ring-purple-600/20`;

  return (
    <section 
      id="contact" 
      className={`min-h-screen  transition-colors py-20 ${
        theme === 'dark' ? 'bg-slate-950' : 'bg-white'
      }`}
    >
      <div className="container mx-auto px-6 lg:px-12 max-w-7xl">
        
        {/* Header */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6 border ${
            theme === 'dark' ? 'bg-slate-900/80 border-slate-800' : 'bg-slate-50 border-slate-200'
          }`}>
            <Send className="w-4 h-4 text-purple-600" />
            <span className={`text-sm font-medium ${textClass}`}>Let&apos;s Connect</span>
          </div>
          <h2 className={`text-4xl sm:text-5xl lg:text-6xl font-bold mb-4 ${headingClass}`}>
            Get In Touch
          </h2>
          <p className={`text-lg max-w-2xl mx-auto ${theme === 'dark' ? 'text-slate-400' : 'text-slate-600'}`}>
            Have a project in mind? Let&apos;s discuss how I can help bring your ideas to life
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-12 max-w-6xl mx-auto">
          
          {/* Contact Info Cards */}
          <motion.div 
            className="lg:col-span-1 space-y-6"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className={`p-6 rounded-2xl border ${
              theme === 'dark' 
                ? 'bg-slate-900/50 border-slate-800' 
                : 'bg-slate-50 border-slate-200'
            }`}>
              <div className="w-12 h-12 bg-purple-600 rounded-lg flex items-center justify-center mb-4">
                <Mail className="w-6 h-6 text-white" />
              </div>
              <h3 className={`text-lg font-semibold mb-2 ${headingClass}`}>Email Me</h3>
              <a 
                href="mailto:your-email@example.com" 
                className="text-purple-600 hover:text-purple-700 transition-colors break-all"
              >
                helendeee12@gmail.com
              </a>
              <p className={`text-xs mt-2 ${theme === 'dark' ? 'text-slate-500' : 'text-slate-500'}`}>
                I&apos;ll respond within 24 hours
              </p>
            </div>

            <div className={`p-6 rounded-2xl border ${
              theme === 'dark' 
                ? 'bg-slate-900/50 border-slate-800' 
                : 'bg-slate-50 border-slate-200'
            }`}>
              <div className="w-12 h-12 bg-purple-600 rounded-lg flex items-center justify-center mb-4">
                <Clock className="w-6 h-6 text-white" />
              </div>
              <h3 className={`text-lg font-semibold mb-2 ${headingClass}`}>Response Time</h3>
              <p className={textClass}>Usually within 24 hours</p>
              <p className={`text-xs mt-2 ${theme === 'dark' ? 'text-slate-500' : 'text-slate-500'}`}>
                I prioritize client communication
              </p>
            </div>

            <div className={`p-6 rounded-2xl border ${
              theme === 'dark' 
                ? 'bg-slate-900/50 border-slate-800' 
                : 'bg-slate-50 border-slate-200'
            }`}>
              <div className="w-12 h-12 bg-purple-600 rounded-lg flex items-center justify-center mb-4">
                <Send className="w-6 h-6 text-white" />
              </div>
              <h3 className={`text-lg font-semibold mb-2 ${headingClass}`}>Let&apos;s Work Together</h3>
              <p className={textClass}>Available for freelance projects</p>
              <p className={`text-xs mt-2 ${theme === 'dark' ? 'text-slate-500' : 'text-slate-500'}`}>
                Remote collaboration worldwide
              </p>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div 
            className="lg:col-span-2"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className={`p-8 rounded-2xl border ${
              theme === 'dark' 
                ? 'bg-slate-900/50 border-slate-800' 
                : 'bg-white border-slate-200 shadow-lg'
            }`}>
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name Input */}
                <div>
                  <label htmlFor="name" className={`text-sm font-medium mb-2 flex items-center gap-2 ${textClass}`}>
                    <User className="w-4 h-4" />
                    <span>Your Name</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="John Doe"
                    required
                    disabled={isSubmitting}
                    className={inputClass}
                  />
                </div>

                {/* Email Input */}
                <div>
                  <label htmlFor="email" className={`text-sm font-medium mb-2 flex items-center gap-2 ${textClass}`}>
                    <Mail className="w-4 h-4" />
                    <span>Email Address</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="john@company.com"
                    required
                    disabled={isSubmitting}
                    className={inputClass}
                  />
                </div>

                {/* Message Textarea */}
                <div>
                  <label htmlFor="message" className={`text-sm font-medium mb-2 flex items-center gap-2 ${textClass}`}>
                    <MessageCircle className="w-4 h-4" />
                    <span>Your Message</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell me about your project..."
                    rows={6}
                    required
                    disabled={isSubmitting}
                    className={`${inputClass} resize-none`}
                  />
                </div>

                {/* Error Message */}
                {error && (
                  <div className="p-4 rounded-lg bg-red-500/10 border border-red-500/20 text-red-500 text-sm">
                    {error}
                  </div>
                )}

                {/* Success Message */}
                {isSubmitted && (
                  <motion.div 
                    className="p-4 rounded-lg bg-emerald-500/10 border border-emerald-500/20 text-emerald-500 flex items-center gap-3"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                  >
                    <CheckCircle2 className="w-5 h-5" />
                    <span className="font-medium">Message sent successfully! I&apos;ll get back to you soon.</span>
                  </motion.div>
                )}

                {/* Submit Button */}
                <motion.button
                  type="submit"
                  disabled={isSubmitting || isSubmitted}
                  className={`w-full py-4 rounded-lg font-semibold transition-all flex items-center justify-center gap-2 ${
                    isSubmitting || isSubmitted
                      ? 'bg-purple-400 cursor-not-allowed'
                      : 'bg-purple-600 hover:bg-purple-700'
                  } text-white shadow-lg shadow-purple-500/25`}
                  whileHover={!isSubmitting && !isSubmitted ? { scale: 1.02 } : {}}
                  whileTap={!isSubmitting && !isSubmitted ? { scale: 0.98 } : {}}
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      <span>Sending...</span>
                    </>
                  ) : isSubmitted ? (
                    <>
                      <CheckCircle2 className="w-5 h-5" />
                      <span>Sent!</span>
                    </>
                  ) : (
                    <>
                      <span>Send Message</span>
                      <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </>
                  )}
                </motion.button>
              </form>
            </div>
          </motion.div>
        </div>

        {/* Additional Info */}
        {/* <motion.div 
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <p className={`text-sm ${theme === 'dark' ? 'text-slate-500' : 'text-slate-500'}`}>
            Prefer social media? Connect with me on{' '}
            <a href="https://twitter.com/yourhandle" target="_blank" rel="noopener noreferrer" className="text-purple-600 hover:text-purple-700 font-medium">
              Twitter
            </a>
            {' '}or{' '}
            <a href="https://linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer" className="text-purple-600 hover:text-purple-700 font-medium">
              LinkedIn
            </a>
          </p>
        </motion.div> */}
      </div>
    </section>
  );
};

export default ContactForm;