import React from 'react'
import { Code2, Palette, Coffee, BookOpen, Target, Users, ArrowUpRight, Play, Twitter, FileText } from 'lucide-react'

const About = () => {
  const skills = [
    { name: 'React & Next.js', level: 95, color: 'from-blue-500 to-cyan-500' },
    { name: 'TypeScript', level: 88, color: 'from-purple-500 to-pink-500' },
    { name: 'UI/UX Design', level: 85, color: 'from-orange-500 to-red-500' },
    { name: 'Git', level: 82, color: 'from-green-500 to-teal-500' },
    { name: 'Responsive Design', level: 96, color: 'from-indigo-500 to-purple-500' },
    { name: 'Performance Optimization', level: 89, color: 'from-yellow-500 to-orange-500' }
  ]

  const values = [
    {
      icon: <Code2 className="w-6 h-6" />,
      title: 'Clean Code',
      description: 'Writing maintainable, scalable code that stands the test of time'
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: 'Collaboration',
      description: 'Building meaningful relationships and working seamlessly with teams'
    },
    {
      icon: <Target className="w-6 h-6" />,
      title: 'Problem Solving',
      description: 'Turning complex challenges into elegant, user-friendly solutions'
    },
    {
      icon: <BookOpen className="w-6 h-6" />,
      title: 'Continuous Learning',
      description: 'Staying ahead of industry trends and constantly improving my craft'
    }
  ]

  const interests = [
    { icon: <Play className="w-5 h-5" />, text: 'Video Content Creation' },
    { icon: <FileText className="w-5 h-5" />, text: 'Technical Writing' },
    { icon: <Twitter className="w-5 h-5" />, text: 'Community Building' },
    { icon: <Coffee className="w-5 h-5" />, text: 'Coffee Brewing' }
  ]

  return (
    <section className="min-h-screen bg-gradient-to-br from-[#1C1B1F] via-[#2D1B3D] to-[#1A1A2E] text-slate-100 py-20 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-40 left-20 w-64 h-64 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full filter blur-3xl animate-pulse"></div>
        <div className="absolute bottom-40 right-20 w-80 h-80 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-full filter blur-3xl animate-pulse delay-700"></div>
      </div>

      <div className="container mx-auto px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 text-sm border border-white/20 mb-6">
            <Palette className="w-4 h-4 text-purple-300" />
            <span>Get to know me</span>
          </div>
          <h2 className="text-5xl lg:text-7xl font-bold bg-gradient-to-r from-white via-purple-200 to-pink-200 bg-clip-text text-transparent mb-6">
            About Me
          </h2>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto">
            Where curiosity meets code, and passion drives innovation
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left Column - Story */}
          <div className="space-y-8">
            <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-8 border border-white/10 hover:border-white/20 transition-all duration-300">
              <h3 className="text-2xl font-semibold mb-6 text-purple-300">My Journey</h3>
              <div className="space-y-6 text-slate-300 leading-relaxed">
                <p>
                  I&apos;m a passionate frontend developer who entered the tech space driven by an insatiable curiosity and love for crafting digital experiences. What started as fascination with how websites work has evolved into a deep passion for building solutions that make a difference.
                </p>
                <p>
                  My approach to development goes beyond just writing code—I believe in creating experiences that are not only visually stunning but also performant, accessible, and user-centered. Every project is an opportunity to push boundaries and solve real-world problems through clean, maintainable code.
                </p>
                <p>
                  When I&apos;m not immersed in code, you&apos;ll find me creating video content, writing technical pieces that help fellow developers, or being one of X (Formerly Twitter) biggest motivators—spreading positivity and knowledge in the developer community. I thrive on challenges because they push me to grow and discover new possibilities.
                </p>
                <p className="text-purple-200 font-medium">
                  In tech, learning never stops, and that&apos;s exactly what I love about it. Every day brings new opportunities to improve, innovate, and impact lives through technology.
                </p>
              </div>
            </div>

            {/* Core Values */}
            <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-8 border border-white/10">
              <h3 className="text-2xl font-semibold mb-6 text-purple-300">What Drives Me</h3>
              <div className="grid gap-6">
                {values.map((value, index) => (
                  <div key={index} className="flex items-start space-x-4 p-4 rounded-xl bg-white/5 hover:bg-white/10 transition-all duration-300">
                    <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center text-white">
                      {value.icon}
                    </div>
                    <div>
                      <h4 className="font-semibold text-white mb-2">{value.title}</h4>
                      <p className="text-slate-400 text-sm">{value.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column - Skills & Details */}
          <div className="space-y-8">
            {/* Skills */}
            <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-8 border border-white/10">
              <h3 className="text-2xl font-semibold mb-8 text-purple-300">Technical Expertise</h3>
              <div className="space-y-6">
                {skills.map((skill, index) => (
                  <div key={index} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="font-medium text-white">{skill.name}</span>
                      <span className="text-sm text-slate-400">{skill.level}%</span>
                    </div>
                    <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                      <div 
                        className={`h-full bg-gradient-to-r ${skill.color} rounded-full transition-all duration-1000 ease-out`}
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Quick Facts */}
            <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-8 border border-white/10">
              <h3 className="text-2xl font-semibold mb-6 text-purple-300">Quick Facts</h3>
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center p-4 bg-white/5 rounded-xl">
                  <div className="text-3xl font-bold text-purple-300 mb-2">3+</div>
                  <div className="text-sm text-slate-400">Years Experience</div>
                </div>
                <div className="text-center p-4 bg-white/5 rounded-xl">
                  <div className="text-3xl font-bold text-pink-300 mb-2">25+</div>
                  <div className="text-sm text-slate-400">Projects Completed</div>
                </div>
                <div className="text-center p-4 bg-white/5 rounded-xl">
                  <div className="text-3xl font-bold text-blue-300 mb-2">100%</div>
                  <div className="text-sm text-slate-400">Client Satisfaction</div>
                </div>
                <div className="text-center p-4 bg-white/5 rounded-xl">
                  <div className="text-3xl font-bold text-green-300 mb-2">24/7</div>
                  <div className="text-sm text-slate-400">Learning Mode</div>
                </div>
              </div>
            </div>

            {/* Interests & Hobbies */}
            <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-8 border border-white/10">
              <h3 className="text-2xl font-semibold mb-6 text-purple-300">Beyond Code</h3>
              <div className="grid grid-cols-2 gap-4">
                {interests.map((interest, index) => (
                  <div key={index} className="flex items-center space-x-3 p-3 bg-white/5 rounded-lg hover:bg-white/10 transition-all duration-300">
                    <div className="text-purple-300">
                      {interest.icon}
                    </div>
                    <span className="text-sm text-slate-300">{interest.text}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA */}
            <div className="bg-gradient-to-r from-purple-500/10 to-pink-500/10 backdrop-blur-sm rounded-3xl p-8 border border-purple-300/20">
              <h3 className="text-xl font-semibold mb-4 text-white">Let&apos;s Work Together</h3>
              <p className="text-slate-300 mb-6 text-sm leading-relaxed">
                Ready to bring your next project to life? I&apos;m always excited to tackle new challenges and create something amazing together.
              </p>
              <button className="group bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white px-6 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 flex items-center space-x-2">
                <span>Start a Project</span>
                <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-200" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About


