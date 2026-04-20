'use client';

import { useState, useEffect } from 'react';
import { calculateWholesalePrice } from '@/lib/pricing';
import { Brick3D } from '@/components/Brick3D';

export default function B2BDashboard() {
  const [tier, setTier] = useState<'A' | 'B' | 'C'>('C');
  const [qty, setQty] = useState(5000);
  const retailPrice = 0.50; // Example for a 2x4 Brick
  const wholesalePrice = calculateWholesalePrice(retailPrice, tier, qty);

  return (
    <div className="min-h-screen bg-slate-50 p-8">
      <div className="max-w-6xl mx-auto space-y-8">
        <header className="flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold">Wholesale Portal</h1>
            <p className="text-slate-500">Tier {tier} Account - Direct Factory Pricing</p>
          </div>
          <div className="flex gap-2">
             <button onClick={() => setTier('C')} className={`px-4 py-2 rounded-lg border ${tier === 'C' ? 'bg-blue-600 text-white' : 'bg-white'}`}>Tier C</button>
             <button onClick={() => setTier('B')} className={`px-4 py-2 rounded-lg border ${tier === 'B' ? 'bg-blue-600 text-white' : 'bg-white'}`}>Tier B</button>
             <button onClick={() => setTier('A')} className={`px-4 py-2 rounded-lg border ${tier === 'A' ? 'bg-blue-600 text-white' : 'bg-white'}`}>Tier A</button>
          </div>
        </header>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Price Calculator Card */}
          <div className="md:col-span-2 bg-white p-8 rounded-3xl shadow-sm border border-slate-100 space-y-6">
            <h2 className="text-xl font-bold">Live Price Calculator</h2>
            <div className="space-y-4">
              <div className="flex justify-between items-center p-4 bg-slate-50 rounded-xl">
                <span>Part: <span className="font-bold">GDS-3001 (Brick 2x4)</span></span>
                <span>Retail: <span className="font-bold text-slate-400">$0.50</span></span>
              </div>
              
              <div className="space-y-2">
                <label className="text-sm font-bold text-slate-500">ORDER QUANTITY</label>
                <input 
                  type="range" min="100" max="50000" step="100" 
                  value={qty} 
                  onChange={(e) => setQty(parseInt(e.target.value))}
                  className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-blue-600"
                />
                <div className="flex justify-between text-sm font-bold">
                  <span>100</span>
                  <span className="text-blue-600">{qty.toLocaleString()} units</span>
                  <span>50,000+</span>
                </div>
              </div>

              <div className="pt-6 border-t flex justify-between items-end">
                <div>
                  <div className="text-sm text-slate-500 font-bold uppercase tracking-widest">Your Unit Price</div>
                  <div className="text-5xl font-extrabold text-blue-600">${wholesalePrice.toFixed(3)}</div>
                </div>
                <div className="text-right">
                  <div className="text-sm text-slate-500 font-bold uppercase tracking-widest">Total Value</div>
                  <div className="text-3xl font-bold text-slate-900">${(wholesalePrice * qty).toLocaleString()}</div>
                </div>
              </div>
            </div>
            
            <button className="w-full py-4 bg-slate-900 text-white rounded-xl font-bold hover:bg-slate-800 transition-all">
              Add to Production Queue
            </button>
          </div>

          {/* Tier Info */}
          <div className="bg-blue-600 text-white p-8 rounded-3xl space-y-6">
            <h3 className="text-xl font-bold text-center">Digital Twin</h3>
            <div className="flex justify-center py-4">
              <Brick3D color="#ffffff" size="md" />
            </div>
            <h3 className="text-xl font-bold">Volume Incentives</h3>
            <div className="space-y-4">
              <div className="flex justify-between text-sm">
                <span>1k+ Units</span>
                <span className="font-bold">-5%</span>
              </div>
              <div className="flex justify-between text-sm">
                <span>5k+ Units</span>
                <span className="font-bold">-10%</span>
              </div>
              <div className="flex justify-between text-sm">
                <span>10k+ Units</span>
                <span className="font-bold">-15%</span>
              </div>
            </div>
            <div className="pt-6 border-t border-blue-500 text-xs leading-relaxed text-blue-100">
              *Prices are synced directly from the factory ERP. Additional discounts are automatically applied based on your account tier and cumulative monthly volume.
            </div>
          </div>
        </div>

        {/* Factory Production Schedule (Kanban) */}
        <div className="space-y-6">
          <div className="flex justify-between items-end">
            <h2 className="text-2xl font-extrabold text-slate-900">Active Production Schedule</h2>
            <span className="text-xs font-bold text-blue-600 bg-blue-50 px-3 py-1 rounded-full uppercase tracking-widest">Live ERP Feed</span>
          </div>
          
          <div className="grid md:grid-cols-4 gap-6">
            {[
              { status: 'Queued', orders: 3, color: 'bg-slate-200' },
              { status: 'Molding', orders: 5, color: 'bg-blue-100' },
              { status: 'Quality Check', orders: 2, color: 'bg-amber-100' },
              { status: 'Packing', orders: 8, color: 'bg-green-100' },
            ].map((col, i) => (
              <div key={i} className={`${col.color} p-6 rounded-[2rem] space-y-4`}>
                <div className="flex justify-between items-center">
                  <span className="font-bold text-slate-700 uppercase tracking-tighter text-sm">{col.status}</span>
                  <span className="w-6 h-6 bg-white rounded-full flex items-center justify-center text-xs font-bold shadow-sm">{col.orders}</span>
                </div>
                
                {[...Array(col.orders)].slice(0, 2).map((_, j) => (
                  <div key={j} className="bg-white p-4 rounded-2xl shadow-sm border border-black/5 space-y-2">
                    <div className="flex justify-between">
                      <span className="text-[10px] font-bold text-slate-400">#ORD-{(8234 + i + j * 10).toString()}</span>
                      <span className="text-[10px] font-bold text-blue-600">GDS-PRO</span>
                    </div>
                    <div className="text-sm font-bold text-slate-800">5,000x Brick 2x4</div>
                    <div className="w-full bg-slate-100 h-1.5 rounded-full overflow-hidden">
                      <div className="bg-blue-600 h-full" style={{ width: `${Math.random() * 80 + 20}%` }}></div>
                    </div>
                  </div>
                ))}
                {col.orders > 2 && <div className="text-center text-[10px] font-bold text-slate-400 uppercase tracking-widest">+ {col.orders - 2} more orders</div>}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
