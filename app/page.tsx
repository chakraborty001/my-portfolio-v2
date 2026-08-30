export default function Home() {
  return (
    <main className="min-h-screen max-w-4xl mx-auto px-6 py-12 flex flex-col gap-10">
      
      {/* Header */}
      <section className="bg-slate-900/60 p-8 rounded-2xl border border-slate-800 shadow-xl flex flex-col md:flex-row items-center gap-8">
        <img 
          src="/avatar.jpg" 
          alt="Anik Chakraborty" 
          className="w-36 h-36 rounded-2xl object-cover border-2 border-cyan-500/50 shadow-lg"
        />
        <div className="flex flex-col gap-3 text-center md:text-left">
          <span className="text-xs font-semibold uppercase text-cyan-400 bg-cyan-950 border border-cyan-800/50 px-3 py-1 rounded-full w-fit mx-auto md:mx-0">
            CSE Graduate
          </span>
          <h1 className="text-4xl font-extrabold text-white">Anik Chakraborty</h1>
          <p className="text-slate-400 text-sm leading-relaxed max-w-xl">
            Computer Science & Engineering Graduate passionate about Large Language Models, Prompt Engineering, and AI research.
          </p>
          
          <div className="flex flex-wrap gap-3 justify-center md:justify-start pt-2 text-xs text-slate-300">
            <a href="mailto:anikchakraborty998@gmail.com" className="bg-slate-800 border border-slate-700 px-3 py-1.5 rounded-lg hover:border-cyan-500">
              📧 anikchakraborty998@gmail.com
            </a>
            <a href="tel:01533337365" className="bg-slate-800 border border-slate-700 px-3 py-1.5 rounded-lg hover:border-cyan-500">
              📞 01533337365
            </a>
          </div>
        </div>
      </section>

      {/* Thesis Research */}
      <section className="flex flex-col gap-4">
        <h2 className="text-2xl font-bold text-slate-100">🔬 Thesis & Research</h2>
        <div className="bg-slate-900/40 p-6 rounded-xl border border-slate-800 flex flex-col gap-2">
          <h3 className="font-bold text-slate-100 text-lg">
            A-RICD: Adapter-based Resource-efficient Induce-then-Contrast Decoding
          </h3>
          <span className="text-xs text-cyan-400 font-medium">LLM Hallucination Reduction</span>
          <p className="text-slate-400 text-xs leading-relaxed">
            Researched decoding strategies for Large Language Models to reduce hallucinations. Worked on data compilation, performance evaluation, and experiment reporting.
          </p>
        </div>
      </section>

      {/* Skills */}
      <section className="flex flex-col gap-4">
        <h2 className="text-2xl font-bold text-slate-100">⚡ Skills</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-slate-900/40 p-5 rounded-xl border border-slate-800 flex flex-col gap-2">
            <h3 className="font-semibold text-cyan-300 text-sm">Digital & AI Tools</h3>
            <div className="flex flex-wrap gap-2 text-xs">
              <span className="bg-slate-800 text-slate-300 px-2.5 py-1 rounded border border-slate-700">Prompt Generation</span>
              <span className="bg-slate-800 text-slate-300 px-2.5 py-1 rounded border border-slate-700">Web Research</span>
              <span className="bg-slate-800 text-slate-300 px-2.5 py-1 rounded border border-slate-700">Computer Fundamentals</span>
            </div>
          </div>
          <div className="bg-slate-900/40 p-5 rounded-xl border border-slate-800 flex flex-col gap-2">
            <h3 className="font-semibold text-cyan-300 text-sm">Documentation & Office</h3>
            <div className="flex flex-wrap gap-2 text-xs">
              <span className="bg-slate-800 text-slate-300 px-2.5 py-1 rounded border border-slate-700">MS Excel (Pivot, VLOOKUP)</span>
              <span className="bg-slate-800 text-slate-300 px-2.5 py-1 rounded border border-slate-700">MS PowerPoint</span>
              <span className="bg-slate-800 text-slate-300 px-2.5 py-1 rounded border border-slate-700">Technical Writing</span>
            </div>
          </div>
        </div>
      </section>

      {/* Education */}
      <section className="flex flex-col gap-4">
        <h2 className="text-2xl font-bold text-slate-100">🎓 Education</h2>
        <div className="bg-slate-900/40 p-5 rounded-xl border border-slate-800 flex justify-between items-center flex-wrap gap-2">
          <div>
            <h3 className="font-bold text-slate-200">B.Sc in Computer Science & Engineering</h3>
            <p className="text-xs text-slate-400">Port City International University, Chattogram</p>
          </div>
          <span className="text-xs font-semibold text-cyan-400 bg-slate-800 px-3 py-1 rounded-full border border-slate-700">CGPA: 3.15 (2026)</span>
        </div>
      </section>

      {/* Footer */}
      <footer className="text-center text-xs text-slate-600 pt-6 border-t border-slate-900">
        © {new Date().getFullYear()} Anik Chakraborty
      </footer>
    </main>
  )
}
