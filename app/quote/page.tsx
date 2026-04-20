'use client';

import { useState } from 'react';
import { parseDesignFile, FileQuotationResult } from '@/lib/parser';

export default function QuotePort() {
  const [isUploading, setIsUploading] = useState(false);
  const [result, setResult] = useState<FileQuotationResult | null>(null);

  const handleFileUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    setIsUploading(true);
    
    // Simulate API delay
    setTimeout(async () => {
      const mockResult = await parseDesignFile(file.name, "content");
      setResult(mockResult);
      setIsUploading(false);
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-slate-50 py-16 px-4">
      <div className="max-w-5xl mx-auto space-y-8">
        <header className="text-center space-y-4">
          <h1 className="text-4xl font-extrabold text-slate-900 tracking-tight">Industrial Quotation Port</h1>
          <p className="text-slate-500 max-w-xl mx-auto">
            Upload your <span className="text-slate-900 font-bold">.io, .ldr, or .csv</span> design file. 
            Our system will instantly match your parts to <span className="text-blue-600 font-bold">GDS Industrial IDs</span> and provide a factory-direct quote.
          </p>
        </header>

        {/* Upload Zone */}
        {!result && (
          <div className={`relative border-4 border-dashed rounded-[3rem] p-20 text-center transition-all ${isUploading ? 'bg-blue-50 border-blue-200' : 'bg-white border-slate-200 hover:border-blue-400'}`}>
            <input 
              type="file" 
              className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
              onChange={handleFileUpload}
              disabled={isUploading}
            />
            {isUploading ? (
              <div className="space-y-4">
                <div className="w-12 h-12 border-4 border-blue-600 border-t-transparent rounded-full animate-spin mx-auto"></div>
                <p className="text-blue-600 font-bold">Analyzing parts and matching Industrial IDs...</p>
              </div>
            ) : (
              <div className="space-y-4">
                <div className="w-20 h-20 bg-slate-100 rounded-full flex items-center justify-center mx-auto text-slate-400">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-bold">Drop your design file here</h3>
                  <p className="text-slate-400 text-sm mt-2">Maximum file size: 25MB. Supports Studio 2.0 and LDraw files.</p>
                </div>
                <button className="bg-slate-900 text-white px-8 py-3 rounded-xl font-bold">Browse Files</button>
              </div>
            )}
          </div>
        )}

        {/* Result Area */}
        {result && (
          <div className="space-y-8 animate-in fade-in zoom-in duration-500">
            {/* Design Flaw Warning Section */}
            <div className="bg-amber-50 border-2 border-amber-200 rounded-3xl p-8 space-y-4">
              <div className="flex items-center gap-3 text-amber-800">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                </svg>
                <h2 className="text-xl font-bold">Design Defect Analysis</h2>
              </div>
              <div className="grid md:grid-cols-2 gap-4">
                {result.defects.map((defect, idx) => (
                  <div key={idx} className="bg-white/50 p-4 rounded-2xl border border-amber-100 flex gap-4">
                    <div className={`flex-shrink-0 w-2 h-full rounded-full ${defect.severity === 'high' ? 'bg-red-500' : 'bg-amber-400'}`}></div>
                    <div>
                      <div className="text-sm font-bold uppercase tracking-wider text-amber-900 opacity-60">{defect.type.replace('_', ' ')}</div>
                      <p className="text-slate-700 font-medium">{defect.message}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white rounded-[2rem] shadow-sm border border-slate-100 overflow-hidden">
              <div className="p-8 border-b bg-slate-900 text-white flex justify-between items-center">
                <div>
                  <h2 className="text-2xl font-bold">{result.fileName}</h2>
                  <p className="text-slate-400 text-sm">{result.totalParts} total parts | {result.uniqueParts} unique GDS IDs</p>
                </div>
                <button onClick={() => setResult(null)} className="text-xs font-bold uppercase tracking-widest text-slate-400 hover:text-white">Upload New</button>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full text-left">
                  <thead className="bg-slate-50 text-xs font-bold uppercase tracking-widest text-slate-500">
                    <tr>
                      <th className="px-8 py-4">GDS Part ID</th>
                      <th className="px-8 py-4">Original ID</th>
                      <th className="px-8 py-4">Color</th>
                      <th className="px-8 py-4 text-center">Qty</th>
                      <th className="px-8 py-4 text-right">Unit Price</th>
                      <th className="px-8 py-4 text-right">Subtotal</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100">
                    {result.items.map((item, idx) => (
                      <tr key={idx} className={`hover:bg-slate-50 transition-colors ${item.status === 'design_flaw' ? 'bg-red-50' : ''}`}>
                        <td className="px-8 py-4 font-mono font-bold text-blue-600">
                          {item.partId}
                          {item.status === 'design_flaw' && (
                            <span className="ml-2 px-2 py-0.5 bg-red-100 text-red-600 rounded text-[10px] uppercase">Flaw</span>
                          )}
                        </td>
                        <td className="px-8 py-4 text-slate-400">{item.originalId}</td>
                        <td className="px-8 py-4">
                          <span className="flex items-center gap-2">
                            <span className="w-3 h-3 rounded-full border border-slate-200" style={{ backgroundColor: item.color.toLowerCase() }}></span>
                            {item.color}
                          </span>
                        </td>
                        <td className="px-8 py-4 text-center font-bold">{item.quantity}</td>
                        <td className="px-8 py-4 text-right">${item.unitPrice.toFixed(3)}</td>
                        <td className="px-8 py-4 text-right font-bold">
                          ${item.lineTotal.toFixed(2)}
                          {item.warningMessage && (
                            <div className="text-[10px] text-red-500 font-medium mt-1">{item.warningMessage}</div>
                          )}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <div className="p-8 bg-slate-50 border-t flex justify-end">
                <div className="w-64 space-y-2">
                  <div className="flex justify-between text-slate-500">
                    <span>Parts Subtotal:</span>
                    <span className="font-bold">${result.subTotal.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between text-slate-500 border-b pb-2">
                    <span>Packaging & Sorting:</span>
                    <span className="font-bold">${result.tax.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between text-2xl font-extrabold text-slate-900 pt-2">
                    <span>Total:</span>
                    <span>${result.grandTotal.toFixed(2)}</span>
                  </div>
                  <button className="w-full mt-6 py-4 bg-blue-600 text-white rounded-xl font-bold shadow-lg shadow-blue-100 hover:bg-blue-700 transition-all">
                    Checkout & Manufacture
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
