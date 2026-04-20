/**
 * Core Data Models for BrickBridge.io
 */

export type PartID = string; // Industrial ID (e.g., GDS-3001)

export interface Part {
  id: PartID;
  name: string;
  category: string;
  colorCode: string;
  weight: number; // in grams
  priceRetail: number;
  priceWholesale: number;
  stockStatus: 'in_stock' | 'low_stock' | 'out_of_stock' | 'pre_order';
  factoryLeadTime?: number; // days
}

export interface MOCPart {
  partId: PartID;
  quantity: number;
  colorId: string;
}

export interface MOC {
  id: string;
  title: string;
  designerId: string;
  description: string;
  parts: MOCPart[];
  instructionUrl: string;
  basePrice: number; // calculated from parts
  designerCommissionRate: number; // e.g., 0.1 for 10%
  totalPrice: number; // final retail price
  tags: string[];
  status: 'draft' | 'pending_review' | 'active' | 'archived';
}

export interface User {
  id: string;
  name: string;
  email: string;
  role: 'admin' | 'designer' | 'builder' | 'distributor';
  profitShareBalance: number;
  companyName?: string; // for B2B
  taxId?: string;
}

export interface OrderItem {
  type: 'moc_package' | 'loose_parts';
  targetId: string; // MOC ID or Part ID
  quantity: number;
  priceAtOrder: number;
}

export interface Order {
  id: string;
  userId: string;
  items: OrderItem[];
  totalAmount: number;
  status: 'pending' | 'paid' | 'erp_syncing' | 'manufacturing' | 'shipped' | 'delivered';
  shippingAddress: string;
  erpOrderId?: string; // Link to factory ERP
  createdAt: Date;
}
