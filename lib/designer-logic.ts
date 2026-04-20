import { MOC, MOCPart, Part } from '@/types';

/**
 * Designer Ecosystem Logic: Profit Sharing & Packaging
 * 
 * This module handles the automated calculation of MOC package pricing,
 * integrating part costs, designer royalties, and platform service fees.
 */

const PLATFORM_FEE_RATE = 0.15; // 15% platform fee

export interface PricingBreakdown {
  rawPartCost: number;
  packagingFee: number;
  designerCommission: number;
  platformFee: number;
  totalRetailPrice: number;
}

/**
 * Calculates the total retail price for an MOC package based on factory part costs.
 */
export function calculateMOCPackagePricing(
  moc: MOC, 
  partsCatalog: Record<string, Part>
): PricingBreakdown {
  let rawPartCost = 0;

  // 1. Calculate base cost from industrial part IDs
  moc.parts.forEach((mocPart: MOCPart) => {
    const part = partsCatalog[mocPart.partId];
    if (part) {
      rawPartCost += part.priceRetail * mocPart.quantity;
    }
  });

  // 2. Fixed packaging and sorting fee (factory labor)
  const packagingFee = rawPartCost * 0.05 + 2.0; // 5% of parts + $2 base

  // 3. Designer Commission (Royalty)
  const designerCommission = rawPartCost * moc.designerCommissionRate;

  // 4. Platform Fee
  const platformFee = (rawPartCost + packagingFee + designerCommission) * PLATFORM_FEE_RATE;

  // 5. Final Total
  const totalRetailPrice = rawPartCost + packagingFee + designerCommission + platformFee;

  return {
    rawPartCost,
    packagingFee,
    designerCommission,
    platformFee,
    totalRetailPrice: Math.round(totalRetailPrice * 100) / 100
  };
}

/**
 * Distributes profit to designer's balance upon successful order delivery.
 */
export function processDesignerPayout(orderAmount: number, commissionRate: number) {
  // Logic to update designer's profitShareBalance in the database
  const payout = orderAmount * commissionRate;
  console.log(`Processing payout for designer: $${payout.toFixed(2)}`);
  return payout;
}
