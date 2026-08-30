export default function Home() {
  return (
    <main className="min-h-screen max-w-4xl mx-auto px-6 py-12 flex flex-col gap-10 font-sans">
      
      {/* Hero / Header Section */}
      <section className="flex flex-col md:flex-row items-center gap-8 bg-slate-900/60 p-8 rounded-2xl border border-slate-800 shadow-xl backdrop-blur-sm">
        <img 
          src="/avatar.jpg" 
          alt="Anik Chakraborty" 
          className="w-36 h-36 rounded-2xl object-cover border-2 border-cyan-500/50 shadow-lg shadow-cyan-500/10"
        />
        <div className="flex flex-col gap-3 text-center md:text-left">
          <span className="text-xs font-semibold uppercase tracking-wider text-cyan-400 bg-cyan-950/80 border border-cyan-800/50 px-3 py-1 rounded-full w-fit mx-auto md:mx-0">
            🎓 Computer Science & Engineering Graduate
          </span>
          <h1 className="text-4xl font-extrabold tracking-tight text-white">Anik Chakraborty</h1>
          <p className="text-slate-400 text-sm leading-relaxed max-w-xl">
            Dedicated CSE Graduate with a strong foundation in Large Language Models, Prompt Engineering, and technical documentation. Quick learner passionate about AI exploration and problem-solving.
          </p>
          
          {/* Contact Details */}
          <div className="flex flex-wrap gap-4 justify-center md:justify-start pt-2 text-xs text-slate-300">
            <a href="mailto:anikchakraborty998@gmail.com" className="flex items-center gap-1.5 bg-slate-800/80 hover:bg-slate-800 border border-slate-700 px-3 py-1.5 rounded-lg transition">
              <i className="fas fa-envelope text-cyan-400"></i> anikchakraborty998@gmail.com
            </a>
            <a href="tel:01533337365" className="flex items-center gap-1.5 bg-slate-800/80 hover:bg-slate-800 border border-slate-700 px-3 py-1.5 rounded-lg transition">
              <i className="fas fa-phone text-cyan-400"></i> 01533337365
            </a>
            <span className="flex items-center gap-1.5 bg-slate-800/80 border border-slate-700 px-3 py-1.5 rounded-lg text-slate-400">
              <i className="fas fa-location-dot text-cyan-400"></i> Chattogram, Bangladesh
            </span>
          </div>
        </div>
      </section>

      {/* Featured Thesis Research */}
      <section className="flex flex-col gap-4">
        <h2 className="text-2xl font-bold tracking-tight text-slate-100 flex items-center gap-2">
          <span className="text-cyan-400">🔬</span> Thesis & Academic Research
        </h2>
        <div className="bg-slate-900/40 p-6 rounded-xl border border-slate-800 flex flex-col gap-3">
          <div className="flex justify-between items-start flex-wrap gap-2">
            <h3 className="font-bold text-slate-100 text-lg">
              A-RICD: Adapter-based Resource-efficient Induce-then-Contrast Decoding
            </h3>
            <span className="text-xs font-semibold text-cyan-400 bg-cyan-950 px-2.5 py-1 rounded border border-cyan-800/40">
              LLM Hallucination Reduction
            </span>
          </div>
          <p className="text-slate-400 text-xs leading-relaxed">
            Researched decoding strategies for Large Language Models to reduce hallucinations. Worked as part of an academic team participating in data compilation, performance evaluation, and experiment reporting.
          </p>
        </div>
      </section>

      {/* Skills Summary */}
      <section className="flex flex-col gap-4">
        <h2 className="text-2xl font-bold tracking-tight text-slate-100 flex items-center gap-2">
          <span className="text-cyan-400">⚡</span> Skills Summary
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-slate-900/40 p-5 rounded-xl border border-slate-800/80 flex flex-col gap-2">
            <h3 className="font-semibold text-cyan-300 text-sm">Digital & AI Tools</h3>
            <div className="flex flex-wrap gap-2 pt-1 text-xs">
              {['Prompt Generation & Utilization', 'Web Research', 'AI Tool Exploration', 'Computer Fundamentals'].map((skill) => (
                <span key={skill} className="bg-slate-800/60 text-slate-300 px-2.5 py-1 rounded-md border border-slate-700/50">
                  {skill}
                </span>
              ))}
            </div>
          </div>

          <div className="bg-slate-900/40 p-5 rounded-xl border border-slate-800/80 flex flex-col gap-2">
            <h3 className="font-semibold text-cyan-300 text-sm">Documentation & Office</h3>
            <div className="flex flex-wrap gap-2 pt-1 text-xs">
              {['MS Excel (Pivot, VLOOKUP, IF)', 'MS PowerPoint (Design)', 'Technical Documentation', 'Project Reports'].map((skill) => (
                <span key={skill} className="bg-slate-800/60 text-slate-300 px-2.5 py-1 rounded-md border border-slate-700/50">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Academic Qualifications */}
      <section className="flex flex-col gap-4">
        <h2 className="text-2xl font-bold tracking-tight text-slate-100 flex items-center gap-2">
          <span className="text-cyan-400">🎓</span> Education
        </h2>
        <div className="flex flex-col gap-3">
          <div className="bg-slate-900/40 p-5 rounded-xl border border-slate-800 flex justify-between items-center flex-wrap gap-2">
            <div>
              <h3 className="font-bold text-slate-200">B.Sc in Computer Science & Engineering</h3>
              <p className="text-xs text-slate-400">Port City International University, Chattogram</p>
            </div>
            <div className="text-right">
              <span className="text-xs font-semibold text-cyan-400 bg-slate-800 px-3 py-1 rounded-full border border-slate-700">CGPA: 3.15</span>
              <p className="text-xs text-slate-500 mt-1">Passing Year: 2026</p>
            </div>
          </div>

          <div className="bg-slate-900/40 p-5 rounded-xl border border-slate-800 flex justify-between items-center flex-wrap gap-2">
            <div>
              <h3 className="font-bold text-slate-200">Higher Secondary Certificate (HSC)</h3>
              <p className="text-xs text-slate-400">Kazem Ali School and College | Board: Chattogram</p>
            </div>
            <div className="text-right">
              <span className="text-xs font-semibold text-slate-300 bg-slate-800 px-3 py-1 rounded-full border border-slate-700">GPA: 3.33</span>
              <p className="text-xs text-slate-500 mt-1">Passing Year: 2019</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="text-center text-xs text-slate-600 pt-8 border-t border-slate-900">
        © {new Date().getFullYear()} Anik Chakraborty. All rights reserved.
      </footer>
    </main>
  )
}
