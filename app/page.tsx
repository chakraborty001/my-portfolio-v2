"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail, ExternalLink, Code2, Sparkles, Brain, Briefcase } from "lucide-react";

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-100 font-sans selection:bg-cyan-500 selection:text-slate-950">
      {/* Background Effect */}
      <div className="fixed inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.15),rgba(255,255,255,0))]" />

      <div className="max-w-5xl mx-auto px-6 py-16 relative z-10">
        {/* Header / Hero Section with Photo */}
        <section className="text-center space-y-6 flex flex-col items-center">
          
          {/* Animated Profile Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="mb-8"
          >
            <div className="relative group">
              {/* Outer Glow Effect */}
              <div className="absolute -inset-0.5 bg-gradient-to-r from-cyan-500 to-slate-600 rounded-full blur opacity-50 group-hover:opacity-100 transition-opacity" />
              <Image 
                src="/avatar.jpg" // public/avatar.jpg থেকে ছবি লোড করবে
                alt="Anik Chakraborty Portrait"
                width={160} 
                height={160} 
                className="relative rounded-full aspect-square object-cover object-top border-4 border-slate-900 group-hover:border-cyan-500 transition-colors shadow-2xl"
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="px-4 py-1.5 rounded-full border border-cyan-500/30 bg-cyan-500/10 text-cyan-400 text-sm font-medium inline-flex items-center gap-2">
              <Sparkles className="w-4 h-4" /> AI & Software Engineering
            </span>
          </motion.div>

          <motion.h1 
            className="text-5xl md:text-7xl font-extrabold tracking-tight bg-gradient-to-r from-white via-slate-200 to-slate-400 bg-clip-text text-transparent"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Anik Chakraborty
          </motion.h1>

          <motion.p 
            className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Building intelligent multimodal systems, fine-tuning LLMs, and crafting scalable software solutions.
          </motion.p>

          <motion.div 
            className="flex justify-center gap-4 pt-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <a href="https://github.com" target="_blank" className="p-3 bg-slate-900 border border-slate-800 rounded-xl hover:border-cyan-500 transition-colors">
              <Github className="w-5 h-5 text-slate-300" />
            </a>
            <a href="https://linkedin.com" target="_blank" className="p-3 bg-slate-900 border border-slate-800 rounded-xl hover:border-cyan-500 transition-colors">
              <Linkedin className="w-5 h-5 text-slate-300" />
            </a>
            <a href="mailto:example@gmail.com" className="p-3 bg-slate-900 border border-slate-800 rounded-xl hover:border-cyan-500 transition-colors">
              <Mail className="w-5 h-5 text-slate-300" />
            </a>
          </motion.div>
        </section>

        {/* Core Expertise */}
        <section className="mt-24 space-y-8">
          <h2 className="text-2xl font-bold text-slate-200 flex items-center gap-2">
            <Brain className="text-cyan-400" /> Core Expertise
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { title: "LLM & VLM Engineering", desc: "Fine-tuning with LoRA, Multimodal IDP Frameworks, and Prompt Systems." },
              { title: "RAG & Agentic Systems", desc: "Building intelligent agents, vector search pipelines, and DiagAgent architectures." },
              { title: "Full-Stack Development", desc: "Modern web applications using Next.js, TypeScript, React, and Python APIs." }
            ].map((skill, index) => (
              <div key={index} className="p-6 bg-slate-900/50 border border-slate-800 rounded-2xl hover:border-slate-700 transition-all">
                <h3 className="text-lg font-semibold text-slate-100 mb-2">{skill.title}</h3>
                <p className="text-sm text-slate-400 leading-relaxed">{skill.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Featured Projects */}
        <section className="mt-24 space-y-8">
          <h2 className="text-2xl font-bold text-slate-200 flex items-center gap-2">
            <Code2 className="text-cyan-400" /> Featured Projects
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                title: "Multimodal IDP Framework",
                desc: "An adaptable LLM-based Intelligent Document Processing system for automated structural extraction.",
                tech: ["LLM", "VLM", "Python", "Next.js"]
              },
              {
                title: "DiagAgent System",
                desc: "An automated multi-agent framework tailored for complex diagnostic and domain-specific workflows.",
                tech: ["LangChain", "RAG", "FastAPI"]
              }
            ].map((proj, index) => (
              <div key={index} className="p-6 bg-slate-900/40 border border-slate-800/80 rounded-2xl hover:border-cyan-500/50 transition-all group">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-semibold text-slate-100 group-hover:text-cyan-400 transition-colors">{proj.title}</h3>
                  <ExternalLink className="w-5 h-5 text-slate-500 group-hover:text-slate-300" />
                </div>
                <p className="text-sm text-slate-400 mb-6 leading-relaxed">{proj.desc}</p>
                <div className="flex flex-wrap gap-2">
                  {proj.tech.map((t, i) => (
                    <span key={i} className="px-2.5 py-1 text-xs bg-slate-800 text-slate-300 rounded-md">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}