'use client';

import { useState } from 'react';

export default function RFQPage() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    objective: '', // gift, event, exhibition
    quantity: 500,
    budgetPerUnit: '',
    deadline: '',
    brandName: '',
    details: '',
  });

  return (
    <div className="min-h-screen bg-white py-20 px-4">
      <div className="max-w-3xl mx-auto space-y-12">
        <div className="text-center space-y-4">
          <h1 className="text-4xl font-extrabold text-slate-900 tracking-tight">Corporate Solutions RFQ</h1>
          <p className="text-slate-500 max-w-lg mx-auto">
            Our Senior Advisors will help you transform your brand into a premium building block experience.
          </p>
        </div>

        {/* Step Indicator */}
        <div className="flex justify-between max-w-xs mx-auto mb-12">
          {[1, 2, 3].map(s => (
            <div key={s} className={`w-10 h-10 rounded-full flex items-center justify-center font-bold border-2 ${step >= s ? 'bg-blue-600 border-blue-600 text-white' : 'border-slate-200 text-slate-300'}`}>
              {s}
            </div>
          ))}
        </div>

        <div className="bg-slate-50 p-10 rounded-[2.5rem] border border-slate-100">
          {step === 1 && (
            <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
              <h2 className="text-2xl font-bold">What is your project objective?</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {['Corporate Gift', 'Marketing Event', 'Exhibition Display', 'Employee Incentive'].map(opt => (
                  <button 
                    key={opt}
                    onClick={() => { setFormData({...formData, objective: opt}); setStep(2); }}
                    className="p-6 bg-white border border-slate-200 rounded-2xl text-left hover:border-blue-600 hover:shadow-lg hover:shadow-blue-50 transition-all group"
                  >
                    <div className="font-bold text-slate-900 group-hover:text-blue-600">{opt}</div>
                    <div className="text-xs text-slate-400 mt-1">Professional custom solutions</div>
                  </button>
                ))}
              </div>
            </div>
          )}

          {step === 2 && (
            <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
              <h2 className="text-2xl font-bold">Project Specifics</h2>
              <div className="grid sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-slate-500">Brand Name</label>
                  <input 
                    type="text" 
                    className="w-full px-5 py-3 rounded-xl border border-slate-200 outline-none focus:ring-2 focus:ring-blue-600"
                    placeholder="e.g. Google, Nike, etc."
                    value={formData.brandName}
                    onChange={(e) => setFormData({...formData, brandName: e.target.value})}
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-slate-500">Estimated Quantity</label>
                  <input 
                    type="number" 
                    className="w-full px-5 py-3 rounded-xl border border-slate-200 outline-none focus:ring-2 focus:ring-blue-600"
                    placeholder="500"
                    value={formData.quantity}
                    onChange={(e) => setFormData({...formData, quantity: parseInt(e.target.value)})}
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-slate-500">Target Delivery Date</label>
                  <input 
                    type="date" 
                    className="w-full px-5 py-3 rounded-xl border border-slate-200 outline-none focus:ring-2 focus:ring-blue-600"
                    value={formData.deadline}
                    onChange={(e) => setFormData({...formData, deadline: e.target.value})}
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-slate-500">Budget Per Unit (USD)</label>
                  <input 
                    type="text" 
                    className="w-full px-5 py-3 rounded-xl border border-slate-200 outline-none focus:ring-2 focus:ring-blue-600"
                    placeholder="$20 - $50"
                    value={formData.budgetPerUnit}
                    onChange={(e) => setFormData({...formData, budgetPerUnit: e.target.value})}
                  />
                </div>
              </div>
              <div className="flex gap-4 pt-6">
                <button onClick={() => setStep(1)} className="px-8 py-4 font-bold text-slate-500">Back</button>
                <button onClick={() => setStep(3)} className="flex-1 bg-blue-600 text-white py-4 rounded-xl font-bold shadow-lg shadow-blue-100 hover:bg-blue-700 transition-all">
                  Next Step
                </button>
              </div>
            </div>
          )}

          {step === 3 && (
            <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500 text-center py-8">
              <div className="w-20 h-20 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                </svg>
              </div>
              <h2 className="text-3xl font-bold text-slate-900">RFQ Sent to Advisors</h2>
              <p className="text-slate-500 max-w-sm mx-auto leading-relaxed">
                Your request for <span className="text-slate-900 font-bold">{formData.brandName}</span> has been received. Our team will prepare a custom design proposal and factory production timeline for you.
              </p>
              <button 
                onClick={() => window.location.href = '/'}
                className="mt-8 px-12 py-4 bg-slate-900 text-white rounded-xl font-bold hover:bg-slate-800 transition-all"
              >
                Return to Home
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
