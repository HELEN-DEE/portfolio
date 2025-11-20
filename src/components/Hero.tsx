"use client";
import React from 'react'
import Image from 'next/image'
import { ArrowRight, Code2, Sparkles, Globe,  } from 'lucide-react'
import imgHelen from "../../public/assets/Helen-site.png"
import {motion} from 'motion/react'

const Hero = () => {
return (
    <section id="home" className="min-h-screen bg-gradient-to-br from-[#0F0F13] via-[#1A142D] to-[#0F0F13] text-slate-100 flex items-center relative overflow-hidden pt-20 lg:pt-24 pb-10 ">
      {/* Subtle glowing background shapes */}
        <div className="absolute inset-0 opacity-10">
            <div className="absolute top-40 left-20 w-64 h-64 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full filter blur-3xl animate-pulse"></div>
            <div className="absolute bottom-40 right-20 w-80 h-80 bg-gradient-to-br from-pink-500 to-purple-700 rounded-full filter blur-3xl animate-pulse delay-700"></div>
        </div>
        {/* <div className="absolute inset-0 opacity-15">
            <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-br from-[#6A1B9A] to-[#4A148C] rounded-full mix-blend-multiply filter blur-3xl animate-pulse"></div>
            <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-br from-[#283593] to-[#1A237E] rounded-full mix-blend-multiply filter blur-3xl animate-pulse delay-300"></div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-gradient-to-br from-[#AD1457] to-[#880E4F] rounded-full mix-blend-multiply filter blur-3xl animate-pulse delay-700"></div>
        </div> */}
        <div className="container mx-auto px-6 lg:px-2  relative z-10">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left: Text Content */}
            <div className="space-y-8 lg:pr-8">
                <div className="space-y-2">
                <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 text-sm border border-white/20">
                    <Sparkles className="w-4 h-4 text-amber-300" />
                    <span>Available for exciting projects</span>
                </div>
                <h1 className="text-5xl lg:text-7xl font-bold bg-[#F5F5F5] bg-clip-text text-transparent leading-tight">
                    Hi, I&apos;m Helen
                </h1>
                <h2 className="text-2xl lg:text-3xl font-semibold text-slate-300 mt-4">
                    Frontend Developer & Digital Craftsperson
                </h2>
                </div>

                <p className="text-lg lg:text-xl text-slate-400 leading-relaxed max-w-xl">
                I transform ideas into exceptional digital experiences through clean, performant code and thoughtful design. Specializing in modern React applications that don&apos;t just look beautiful - they perform seamlessly and solve real business challenges.
                </p>

                {/* Skills highlight */}
                <div className="flex flex-wrap gap-3">
                <div className="flex items-center space-x-2 bg-white/5 backdrop-blur-sm rounded-lg px-3 py-2 border border-white/10">
                    <Code2 className="w-4 h-4 text-purple-300" />
                    <span className="text-sm font-medium">React & Next.js</span>
                </div>
                <div className="flex items-center space-x-2 bg-white/5 backdrop-blur-sm rounded-lg px-3 py-2 border border-white/10">
                    <Globe className="w-4 h-4 text-teal-300" />
                    <span className="text-sm font-medium">Exploring Web3</span>
                </div>
                <div className="flex items-center space-x-2 bg-white/5 backdrop-blur-sm rounded-lg px-3 py-2 border border-white/10">
                    <Sparkles className="w-4 h-4 text-amber-300" />
                    <span className="text-sm font-medium">UI/UX Focused</span>
                </div>
                </div>

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <button className="group bg-gradient-to-br from-[#ffd53d] to-[#ff9327] hover:to-[#AD1457] text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-xl flex items-center justify-center space-x-2">
                    <span>View My Work</span>
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
                </button>
                <button className="border border-white/30 hover:border-white/60 text-slate-100 px-8 py-4 rounded-full font-semibold transition-all duration-300 hover:bg-white/10 backdrop-blur-sm">
                    Let&apos;s Connect
                </button>
                </div>
            </div>


            
            {/* Right Image */}

            {/* <div className=''>
                <Image src={imgHelen} alt="Image-Helen" className='w-[400px]'/>
            </div> */}
            

            <div className="lg:justify-self-end relative lg:bottom-12">
    <div className="relative w-64 h-72 md:w-80 md:h-96 lg:w-[500px] lg:h-[550px] mx-auto">
        {/* Circular border BEHIND the image */}
        <div className="absolute inset-0 flex items-end justify-center">
            <div className="w-[280px] h-[280px] md:w-[350px] md:h-[350px] lg:w-[500px] lg:h-[500px] rounded-full border-[30px] md:border-[50px] lg:border-[80px] border-[#C49BFF] backdrop-blur-sm flex items-end justify-center 
        shadow-[0_0_15px_5px_#C49BFF] lg:shadow-[0_0_10px_5px_#C49BFF]">
                {/* This creates the "border behind" effect */}
            </div>
        </div>
        
        {/* Main Image - responsive sizing */}
        <div className="absolute inset-0 flex items-end justify-center">
            <div className="w-[240px] h-[320px] md:w-[300px] md:h-[420px] lg:w-[400px] lg:h-[550px] rounded-t-full overflow-hidden">
                <Image 
                    src={imgHelen} 
                    alt="Image-Helen" 
                    className='w-full h-full object-cover object-center scale-100'
                    priority
                />
            </div>
        </div>
        
        {/* Orbiting icons - responsive containers and sizes */}
        <motion.div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[280px] h-[280px] md:w-[350px] md:h-[350px] lg:w-[500px] lg:h-[500px]"
            animate={{ rotate: 360 }}
            transition={{
                duration: 20,
                repeat: Infinity,
                ease: "linear"
            }}
        >
            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 bg-[#1A142D] rounded-full flex items-center justify-center shadow-lg border border-white/20">
                <Code2 className="w-4 h-4 md:w-5 md:h-5 lg:w-6 lg:h-6 text-[#C49BFF]" />
            </div>
        </motion.div>

        <motion.div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[240px] h-[240px] md:w-[300px] md:h-[300px] lg:w-[460px] lg:h-[460px]"
            animate={{ rotate: 360 }}
            transition={{
                duration: 20,
                repeat: Infinity,
                ease: "linear"
            }}
        >
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-7 h-7 md:w-8 md:h-8 lg:w-12 lg:h-12 bg-[#1A142D] rounded-full flex items-center justify-center shadow-lg border border-white/20">
                <Sparkles className="w-4 h-4 md:w-5 md:h-5 lg:w-6 lg:h-6 text-[#C49BFF]" />
            </div>
        </motion.div>

        <motion.div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[240px] h-[240px] md:w-[300px] md:h-[300px] lg:w-[460px] lg:h-[460px]"
            animate={{ rotate: 360 }}
            transition={{
                duration: 20,
                repeat: Infinity,
                ease: "linear"
            }}
        >
            <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 w-7 h-7 md:w-8 md:h-8 lg:w-12 lg:h-12 bg-[#1A142D] rounded-full flex items-center justify-center shadow-lg border border-white/20">
                <Globe className="w-2.5 h-2.5 md:w-3 md:h-3 lg:w-5 lg:h-5 text-[#C49BFF]" />
            </div>
        </motion.div>
    </div>
</div>
            


            {/* Scroll indicator */}
            {/* <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
            <div className="w-6 h-10 border-2 border-white/40 rounded-full flex justify-center">
                <div className="w-1 h-3 bg-white/60 rounded-full mt-2 animate-pulse"></div>
            </div>
        </div> */}

            
            </div>
        </div>
    </section>
    )
}

export default Hero
