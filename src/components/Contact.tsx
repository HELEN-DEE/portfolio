"use client"

import React, { useState } from 'react'
import { Mail, User, Sparkles, MessageCircle, ArrowRight, CheckCircle2 } from 'lucide-react'

interface FormData {
  name: string
  email: string
  message: string
}

interface FocusState {
  name: boolean
  email: boolean
  message: boolean
}

const ContactForm = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    message: ''
  })
  
  const [isFocused, setIsFocused] = useState<FocusState>({
    name: false,
    email: false,
    message: false
  })
  
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isHovering, setIsHovering] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleFocus = (field: keyof FocusState) => {
    setIsFocused({ ...isFocused, [field]: true })
  }

  const handleBlur = (field: keyof FocusState) => {
    setIsFocused({ ...isFocused, [field]: false })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Add your form submission logic here (e.g., API call)
    console.log('Form submitted:', formData)
    
    setIsSubmitted(true)
    setTimeout(() => {
      setIsSubmitted(false)
      setFormData({ name: '', email: '', message: '' })
    }, 3000)
  }

  return (
    <section id="contact" className="min-h-screen bg-gradient-to-br from-[#0F0F13] via-[#1A142D] to-[#0F0F13] text-slate-100 flex items-center relative overflow-hidden py-20 px-6">
      {/* Ambient background effects */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/4 left-20 w-96 h-96 bg-gradient-to-br from-[#6A1B9A] to-[#4A148C] rounded-full mix-blend-multiply filter blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-20 w-80 h-80 bg-gradient-to-br from-[#283593] to-[#1A237E] rounded-full mix-blend-multiply filter blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-gradient-to-br from-[#AD1457] to-[#880E4F] rounded-full mix-blend-multiply filter blur-3xl animate-pulse delay-2000"></div>
      </div>

      <div className="container mx-auto max-w-2xl relative z-10">
        {/* Header Section */}
        <div className="text-center space-y-6 mb-12">
          <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 text-sm border border-white/20">
            <Sparkles className="w-4 h-4 text-amber-300" />
            <span>Let&apos;s Create Together</span>
          </div>
          
          <h2 className="text-5xl lg:text-6xl font-bold bg-gradient-to-r from-white via-slate-200 to-purple-200 bg-clip-text text-transparent leading-tight">
            Send a Message
          </h2>
        </div>

        {/* Contact Form Card */}
        <div className="relative">
          <div className="relative bg-white/5 backdrop-blur-xl rounded-3xl border border-white/10 p-8 lg:p-10 shadow-2xl">
            {/* Decorative gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-pink-500/5 rounded-3xl pointer-events-none"></div>
            
            <form onSubmit={handleSubmit} className="relative space-y-6">
              {/* Name Input */}
              <div className="relative group">
                <label htmlFor="name" className="block text-sm font-medium text-slate-300 mb-2 flex items-center space-x-2">
                  <User className="w-4 h-4 text-purple-300" />
                  <span>Your Name</span>
                </label>
                <div className="relative">
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    onFocus={() => handleFocus('name')}
                    onBlur={() => handleBlur('name')}
                    placeholder="Jane Doe"
                    required
                    className={`w-full bg-white/5 backdrop-blur-sm border ${
                      isFocused.name ? 'border-purple-400/60' : 'border-white/20'
                    } rounded-xl px-4 py-4 text-slate-100 placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-purple-400/20 transition-all duration-300`}
                  />
                  {isFocused.name && (
                    <div className="absolute -top-1 -right-1 w-3 h-3 bg-purple-400 rounded-full animate-pulse"></div>
                  )}
                </div>
              </div>

              {/* Email Input */}
              <div className="relative group">
                <label htmlFor="email" className="block text-sm font-medium text-slate-300 mb-2 flex items-center space-x-2">
                  <Mail className="w-4 h-4 text-teal-300" />
                  <span>Email Address</span>
                </label>
                <div className="relative">
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    onFocus={() => handleFocus('email')}
                    onBlur={() => handleBlur('email')}
                    placeholder="jane@company.com"
                    required
                    className={`w-full bg-white/5 backdrop-blur-sm border ${
                      isFocused.email ? 'border-teal-400/60' : 'border-white/20'
                    } rounded-xl px-4 py-4 text-slate-100 placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-teal-400/20 transition-all duration-300`}
                  />
                  {isFocused.email && (
                    <div className="absolute -top-1 -right-1 w-3 h-3 bg-teal-400 rounded-full animate-pulse"></div>
                  )}
                </div>
              </div>

              {/* Message Textarea */}
              <div className="relative group">
                <label htmlFor="message" className="block text-sm font-medium text-slate-300 mb-2 flex items-center space-x-2">
                  <MessageCircle className="w-4 h-4 text-amber-300" />
                  <span>Your Message</span>
                </label>
                <div className="relative">
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    onFocus={() => handleFocus('message')}
                    onBlur={() => handleBlur('message')}
                    placeholder="Hi! I'd like to develop a website. How soon can you hop on that?"
                    rows={6}
                    required
                    className={`w-full bg-white/5 backdrop-blur-sm border ${
                      isFocused.message ? 'border-amber-400/60' : 'border-white/20'
                    } rounded-xl px-4 py-4 text-slate-100 placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-amber-400/20 transition-all duration-300 resize-none`}
                  />
                  {isFocused.message && (
                    <div className="absolute -top-1 -right-1 w-3 h-3 bg-amber-400 rounded-full animate-pulse"></div>
                  )}
                </div>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                onMouseEnter={() => setIsHovering(true)}
                onMouseLeave={() => setIsHovering(false)}
                disabled={isSubmitted}
                className={`group relative w-full ${
                  isSubmitted
                    ? 'bg-gradient-to-r from-green-600 to-emerald-600'
                    : 'bg-gradient-to-br from-[#ffd53d] to-[#ff9327] hover:from-[#6A1B9A] hover:to-[#AD1457]'
                } text-white px-8 py-5 rounded-xl font-semibold transition-all duration-300 transform hover:scale-[1.02] hover:shadow-2xl flex items-center justify-center space-x-3 overflow-hidden disabled:cursor-not-allowed`}
              >
                {/* Animated background gradient on hover */}
                {isHovering && !isSubmitted && (
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-400/20 to-pink-400/20 animate-pulse"></div>
                )}
                
                <span className="relative z-10 text-lg">
                  {isSubmitted ? 'Message Sent!' : 'Send Message'}
                </span>
                {isSubmitted ? (
                  <CheckCircle2 className="w-6 h-6 relative z-10 animate-bounce" />
                ) : (
                  <ArrowRight className="w-6 h-6 relative z-10 group-hover:translate-x-1 transition-transform duration-200" />
                )}
              </button>
            </form>

            {/* Success message overlay */}
            {isSubmitted && (
              <div className="absolute inset-0 bg-gradient-to-br from-[#3B0B47]/95 via-[#1B1833]/95 to-[#0D0C1A]/95 backdrop-blur-sm rounded-3xl flex items-center justify-center z-20">
                <div className="text-center space-y-4">
                  <div className="w-20 h-20 bg-gradient-to-br from-green-400 to-emerald-500 rounded-full mx-auto flex items-center justify-center">
                    <CheckCircle2 className="w-10 h-10 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-2">Thanks for reaching out!</h3>
                    <p className="text-slate-400">I&apos;ll get back to you soon.</p>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Subtle grid pattern overlay */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 0h60v1H0zM0 0v60h1V0z' fill='%23ffffff' fill-opacity='0.1'/%3E%3C/svg%3E")`
        }}></div>
      </div>
    </section>
  )
}

export default ContactForm
