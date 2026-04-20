import { User, Part } from '@/types';

/**
 * B2B Tiered Pricing Logic
 * 
 * Tier A: Premium Distributor (Highest discount)
 * Tier B: Regional Wholesaler
 * Tier C: Standard Retailer
 */

export const B2B_DISCOUNT_TIERS = {
  'A': 0.70, // 30% off retail
  'B': 0.80, // 20% off retail
  'C': 0.90, // 10% off retail
};

export const QUANTITY_BREAKS = [
  { min: 1000, multiplier: 0.95 }, // Additional 5% off for >1000 units
  { min: 5000, multiplier: 0.90 }, // Additional 10% off for >5000 units
  { min: 10000, multiplier: 0.85 }, // Additional 15% off for >10000 units
];

/**
 * Calculates the final unit price for a B2B client.
 */
export function calculateWholesalePrice(
  basePrice: number,
  userTier: 'A' | 'B' | 'C',
  quantity: number
): number {
  // 1. Apply Tier Discount
  let price = basePrice * B2B_DISCOUNT_TIERS[userTier];

  // 2. Apply Bulk Quantity Break
  const breakPoint = [...QUANTITY_BREAKS].reverse().find(b => quantity >= b.min);
  if (breakPoint) {
    price *= breakPoint.multiplier;
  }

  return Math.round(price * 1000) / 1000; // 3 decimal places for precision
}

/**
 * Generates a quote for a bulk part order.
 */
export function generateBulkQuote(
  part: Part,
  quantity: number,
  userTier: 'A' | 'B' | 'C'
) {
  const unitPrice = calculateWholesalePrice(part.priceRetail, userTier, quantity);
  const total = unitPrice * quantity;
  
  return {
    partId: part.id,
    quantity,
    unitPrice,
    total,
    savings: (part.priceRetail * quantity) - total
  };
}
