export default function Home() {
  return (
    <main className="min-h-screen max-w-4xl mx-auto px-6 py-12 flex flex-col gap-12">
      {/* Header / Hero Section */}
      <section className="flex flex-col md:flex-row items-center gap-8 bg-slate-900/60 p-8 rounded-2xl border border-slate-800 shadow-xl backdrop-blur-sm">
        <img 
          src="/avatar.jpg" 
          alt="Anik Chakraborty" 
          className="w-36 h-36 rounded-2xl object-cover border-2 border-cyan-500/50 shadow-lg shadow-cyan-500/10"
        />
        <div className="flex flex-col gap-3 text-center md:text-left">
          <span className="text-xs font-semibold uppercase tracking-wider text-cyan-400 bg-cyan-950/80 border border-cyan-800/50 px-3 py-1 rounded-full w-fit mx-auto md:mx-0">
            ✨ AI & Software Engineering
          </span>
          <h1 className="text-4xl font-extrabold tracking-tight text-white">Anik Chakraborty</h1>
          <p className="text-slate-400 text-sm leading-relaxed max-w-xl">
            Building intelligent multimodal systems, fine-tuning LLMs, and crafting scalable software solutions.
          </p>
          <div className="flex gap-4 justify-center md:justify-start pt-2 text-xl text-slate-400">
            <a href="https://github.com" target="_blank" className="hover:text-cyan-400 transition-colors"><i className="fab border-cyan border-slate-700 hover:border-cyan-500 p-2 rounded-lg bg-slate-800/50 fa-github"></i></a>
            <a href="https://linkedin.com" target="_blank" className="hover:text-cyan-400 transition-colors"><i className="fab border-cyan border-slate-700 hover:border-cyan-500 p-2 rounded-lg bg-slate-800/50 fa-linkedin"></i></a>
            <a href="mailto:contact@example.com" className="hover:text-cyan-400 transition-colors"><i className="fas border-cyan border-slate-700 hover:border-cyan-500 p-2 rounded-lg bg-slate-800/50 fa-envelope"></i></a>
          </div>
        </div>
      </section>

      {/* Core Expertise Section */}
      <section className="flex flex-col gap-6">
        <h2 className="text-2xl font-bold tracking-tight text-slate-100 flex items-center gap-2">
          <span className="text-cyan-400">🧠</span> Core Expertise
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-slate-900/40 p-5 rounded-xl border border-slate-800/80 hover:border-slate-700 transition-all flex flex-col gap-2">
            <h3 className="font-semibold text-cyan-300">LLM & VLM Engineering</h3>
            <p className="text-slate-400 text-xs leading-relaxed">Fine-tuning with LoRA, Multimodal IDP Frameworks, and Prompt Systems.</p>
          </div>

          <div className="bg-slate-900/40 p-5 rounded-xl border border-slate-800/80 hover:border-slate-700 transition-all flex flex-col gap-2">
            <h3 className="font-semibold text-cyan-300">RAG & Agentic Systems</h3>
            <p className="text-slate-400 text-xs leading-relaxed">Building intelligent agents, vector search pipelines, and DiagAgent architectures.</p>
          </div>

          <div className="bg-slate-900/40 p-5 rounded-xl border border-slate-800/80 hover:border-slate-700 transition-all flex flex-col gap-2">
            <h3 className="font-semibold text-cyan-300">Full-Stack Development</h3>
            <p className="text-slate-400 text-xs leading-relaxed">Modern web applications built with Next.js, React, and Python backend ecosystems.</p>
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
