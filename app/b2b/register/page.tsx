'use client';

import { useState } from 'react';

export default function B2BRegister() {
  const [formData, setFormData] = useState({
    companyName: '',
    contactName: '',
    email: '',
    businessType: 'distributor',
    taxId: '',
    website: '',
    region: 'North America',
    annualVolume: '100-500 sets',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, this would hit /api/b2b/register
    console.log('Submitting B2B Application:', formData);
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-slate-50 px-4">
        <div className="max-w-md w-full bg-white p-12 rounded-[2rem] shadow-xl text-center space-y-6">
          <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h2 className="text-3xl font-bold text-slate-900">Application Received</h2>
          <p className="text-slate-600">
            Thank you for applying to the BrickBridge B2B Portal. Our Senior Advisor team will review your business credentials and contact you within 24-48 hours.
          </p>
          <button 
            onClick={() => window.location.href = '/'}
            className="w-full py-4 bg-slate-900 text-white rounded-xl font-bold hover:bg-slate-800 transition-all"
          >
            Back to Home
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-50 py-20 px-4">
      <div className="max-w-4xl mx-auto grid md:grid-cols-5 gap-12">
        {/* Info Column */}
        <div className="md:col-span-2 space-y-8">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-blue-600 rounded-sm flex items-center justify-center text-white font-bold text-xs">B</div>
            <span className="text-xl font-bold tracking-tight">BrickBridge<span className="text-blue-600">.io</span></span>
          </div>
          <div className="space-y-6">
            <h1 className="text-4xl font-extrabold text-slate-900 leading-tight">Professional B2B Onboarding</h1>
            <p className="text-slate-600">
              Join our global distribution network. Gain direct access to industrial-grade building block fulfillment and exclusive designer MOC collections.
            </p>
            <ul className="space-y-4 text-sm font-medium text-slate-700">
              <li className="flex gap-3">
                <span className="text-blue-600">鈼?/span> Tiered Wholesale Pricing
              </li>
              <li className="flex gap-3">
                <span className="text-blue-600">鈼?/span> Custom Packaging Solutions
              </li>
              <li className="flex gap-3">
                <span className="text-blue-600">鈼?/span> Direct ERP Integration
              </li>
              <li className="flex gap-3">
                <span className="text-blue-600">鈼?/span> Priority Logistics Support
              </li>
            </ul>
          </div>
        </div>

        {/* Form Column */}
        <div className="md:col-span-3 bg-white p-8 md:p-10 rounded-[2rem] shadow-sm border border-slate-100">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-wider text-slate-500">Company Name</label>
                <input 
                  required
                  type="text" 
                  className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                  placeholder="Acme Bricks Ltd."
                  value={formData.companyName}
                  onChange={(e) => setFormData({...formData, companyName: e.target.value})}
                />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-wider text-slate-500">Business Type</label>
                <select 
                  className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                  value={formData.businessType}
                  onChange={(e) => setFormData({...formData, businessType: e.target.value})}
                >
                  <option value="distributor">Distributor / Wholesaler</option>
                  <option value="retail">Retail Chain / Supermarket</option>
                  <option value="corporate">Corporate Customization</option>
                  <option value="educational">Educational Institution</option>
                </select>
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-xs font-bold uppercase tracking-wider text-slate-500">Work Email</label>
              <input 
                required
                type="email" 
                className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                placeholder="purchasing@company.com"
                value={formData.email}
                onChange={(e) => setFormData({...formData, email: e.target.value})}
              />
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-wider text-slate-500">Tax ID / Business Reg #</label>
                <input 
                  required
                  type="text" 
                  className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                  placeholder="VAT / EIN / Business #"
                  value={formData.taxId}
                  onChange={(e) => setFormData({...formData, taxId: e.target.value})}
                />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-wider text-slate-500">Target Region</label>
                <select 
                  className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                  value={formData.region}
                  onChange={(e) => setFormData({...formData, region: e.target.value})}
                >
                  <option>North America</option>
                  <option>Western Europe</option>
                  <option>East Asia</option>
                  <option>Other</option>
                </select>
              </div>
            </div>

            <button 
              type="submit"
              className="w-full py-4 bg-blue-600 text-white rounded-xl font-bold shadow-lg shadow-blue-100 hover:bg-blue-700 hover:-translate-y-0.5 transition-all"
            >
              Submit Application
            </button>
            <p className="text-[10px] text-center text-slate-400">
              By submitting, you agree to our B2B Terms of Service and Privacy Policy. All applications are subject to verification.
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}
