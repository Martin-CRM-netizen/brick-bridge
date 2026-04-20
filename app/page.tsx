import { Brick3D } from "@/components/Brick3D";

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans">
      {/* Navigation */}
      <nav className="flex items-center justify-between px-8 py-6 border-b border-slate-100">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-blue-600 rounded-sm flex items-center justify-center text-white font-bold">B</div>
          <span className="text-xl font-bold tracking-tight">BrickBridge<span className="text-blue-600">.io</span></span>
        </div>
        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-600">
          <a href="#designers" className="hover:text-blue-600 transition-colors">Designers</a>
          <a href="#builders" className="hover:text-blue-600 transition-colors">Builders</a>
          <a href="#b2b" className="hover:text-blue-600 transition-colors">B2B & Distribution</a>
          <a href="#solutions" className="hover:text-blue-600 transition-colors">Solutions</a>
        </div>
        <button className="bg-slate-900 text-white px-5 py-2 rounded-full text-sm font-semibold hover:bg-slate-800 transition-all">
          Contact Advisor
        </button>
      </nav>

      {/* Hero Section */}
      <section className="px-8 py-20 md:py-32 max-w-7xl mx-auto text-center md:text-left flex flex-col md:flex-row items-center gap-12">
        <div className="flex-1 space-y-6">
          <div className="inline-block px-4 py-1.5 bg-blue-50 text-blue-700 rounded-full text-xs font-bold uppercase tracking-wider">
            Global Building Block Industry Connector
          </div>
          <h1 className="text-5xl md:text-7xl font-extrabold leading-[1.1] tracking-tight text-slate-900">
            Bridging <span className="text-blue-600">Design</span> to <span className="text-slate-400">Production</span>
          </h1>
          <p className="text-lg text-slate-600 max-w-2xl leading-relaxed">
            We are the ultimate bridge between global MOC designers and top-tier industrial manufacturing. Direct Industrial ID matching, zero conversion loss, and full-chain fulfillment for enthusiasts and B2B clients worldwide.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center md:justify-start">
            <button className="bg-blue-600 text-white px-8 py-4 rounded-xl font-bold shadow-lg shadow-blue-200 hover:bg-blue-700 hover:-translate-y-0.5 transition-all">
              Explore MOC Solutions
            </button>
            <button className="bg-white border-2 border-slate-200 text-slate-700 px-8 py-4 rounded-xl font-bold hover:bg-slate-50 transition-all">
              B2B Portal
            </button>
          </div>
        </div>
        <div className="flex-1 relative">
          <div className="w-full h-80 md:h-[500px] bg-slate-100 rounded-[3rem] overflow-hidden shadow-2xl border-8 border-white flex items-center justify-center relative">
             <Brick3D color="#2563eb" size="lg" className="z-10" />
             <Brick3D color="#fbbf24" size="md" className="absolute top-20 right-20 -rotate-12" />
             <Brick3D color="#ef4444" size="sm" className="absolute bottom-20 left-20 rotate-45" />
             <div className="absolute bottom-8 text-slate-400 font-bold tracking-widest text-xs uppercase">
               High-Fidelity GDS Digital Twin
             </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="bg-slate-50 py-24 px-8">
        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-12">
          <div className="space-y-4">
            <div className="w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center text-blue-600">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold">Industrial ID Fidelity</h3>
            <p className="text-slate-600 leading-relaxed">
              No more LEGO-to-GDS conversion errors. Use factory-native IDs directly for 100% accuracy and instant inventory matching.
            </p>
          </div>
          <div className="space-y-4">
            <div className="w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center text-blue-600">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
              </svg>
            </div>
            <h3 className="text-xl font-bold">Zero-Blind Factory Network</h3>
            <p className="text-slate-600 leading-relaxed">
              Our network covers the entire spectrum of building blocks. If a part exists, we can source and manufacture it.
            </p>
          </div>
          <div className="space-y-4">
            <div className="w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center text-blue-600">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold">Designer Profit Ecosystem</h3>
            <p className="text-slate-600 leading-relaxed">
              Collaborate with us. We handle the packaging, logistics, and sales. Designers receive automated profit sharing for every set sold.
            </p>
          </div>
        </div>
      </section>

      {/* B2B Section */}
      <section id="b2b" className="py-24 px-8 max-w-7xl mx-auto">
        <div className="bg-slate-900 rounded-[2.5rem] p-12 md:p-20 text-white flex flex-col md:flex-row items-center gap-16">
          <div className="flex-1 space-y-8">
            <h2 className="text-4xl font-extrabold leading-tight">Professional Solutions for B2B Partners</h2>
            <div className="space-y-4">
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-blue-500 flex items-center justify-center text-xs">鉁?/div>
                <p className="text-slate-300">Scalable supply chain for wholesalers and distributors.</p>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-blue-500 flex items-center justify-center text-xs">鉁?/div>
                <p className="text-slate-300">White-label and custom corporate gift solutions.</p>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-blue-500 flex items-center justify-center text-xs">鉁?/div>
                <p className="text-slate-300">Direct ERP integration for automated high-volume ordering.</p>
              </div>
            </div>
            <button className="bg-white text-slate-900 px-8 py-4 rounded-xl font-bold hover:bg-slate-100 transition-all">
              Request B2B Access
            </button>
          </div>
          <div className="flex-1 grid grid-cols-2 gap-4">
            <div className="aspect-square bg-slate-800 rounded-2xl flex flex-col items-center justify-center p-6 text-center space-y-2">
              <span className="text-3xl font-bold">5k+</span>
              <span className="text-xs text-slate-400 uppercase tracking-widest font-bold">Designers</span>
            </div>
            <div className="aspect-square bg-slate-800 rounded-2xl flex flex-col items-center justify-center p-6 text-center space-y-2">
              <span className="text-3xl font-bold">100%</span>
              <span className="text-xs text-slate-400 uppercase tracking-widest font-bold">Fulfillment</span>
            </div>
            <div className="aspect-square bg-slate-800 rounded-2xl flex flex-col items-center justify-center p-6 text-center space-y-2">
              <span className="text-3xl font-bold">24h</span>
              <span className="text-xs text-slate-400 uppercase tracking-widest font-bold">Quotation</span>
            </div>
            <div className="aspect-square bg-slate-800 rounded-2xl flex flex-col items-center justify-center p-6 text-center space-y-2">
              <span className="text-3xl font-bold">Global</span>
              <span className="text-xs text-slate-400 uppercase tracking-widest font-bold">Distribution</span>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-8 border-t border-slate-100 text-center text-slate-500 text-sm">
        <p>漏 2026 BrickBridge.io - The Ultimate Building Block Solutions Bridge.</p>
      </footer>
    </div>
  );
}
