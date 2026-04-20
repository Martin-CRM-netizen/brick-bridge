'use client';

import { useState } from 'react';

export default function DesignerPortal() {
  return (
    <div className="min-h-screen bg-white">
      <nav className="border-b px-8 py-4 flex justify-between items-center">
        <h2 className="font-bold text-xl">Designer Portal</h2>
        <div className="text-sm text-slate-500">Welcome, MOC Master</div>
      </nav>

      <main className="max-w-5xl mx-auto p-8 space-y-12">
        <header className="flex justify-between items-end">
          <div>
            <h1 className="text-3xl font-bold">Your MOC Collection</h1>
            <p className="text-slate-500">Upload and manage your designs for global distribution.</p>
          </div>
          <button className="bg-blue-600 text-white px-6 py-3 rounded-xl font-bold hover:bg-blue-700 transition-all">
            + New Design
          </button>
        </header>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 border rounded-2xl bg-slate-50">
            <span className="text-sm font-medium text-slate-500">Active Designs</span>
            <div className="text-3xl font-bold mt-1">12</div>
          </div>
          <div className="p-6 border rounded-2xl bg-slate-50">
            <span className="text-sm font-medium text-slate-500">Units Sold (Monthly)</span>
            <div className="text-3xl font-bold mt-1">1,248</div>
          </div>
          <div className="p-6 border rounded-2xl bg-green-50 border-green-100">
            <span className="text-sm font-medium text-green-700">Total Profit Share</span>
            <div className="text-3xl font-bold mt-1 text-green-700">$4,320.50</div>
          </div>
        </div>

        {/* Upload Simulation Section */}
        <div className="border-2 border-dashed border-slate-200 rounded-3xl p-16 text-center space-y-4">
           <div className="w-16 h-16 bg-slate-100 rounded-full flex items-center justify-center mx-auto text-slate-400">
             <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
             </svg>
           </div>
           <div>
             <h3 className="text-lg font-bold">Drop your .io or .ldr file here</h3>
             <p className="text-slate-500 text-sm">System will auto-match parts with Factory Industrial IDs.</p>
           </div>
           <button className="text-blue-600 font-bold text-sm">Browse Files</button>
        </div>
      </main>
    </div>
  );
}
