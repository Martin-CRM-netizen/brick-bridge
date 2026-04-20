import { PartID } from '@/types';

/**
 * Mock File Parser for .io (Studio) / .ldr (LDraw) / CSV
 * 
 * In a real-world scenario, this would use an XML parser for .io 
 * or a text-based line parser for .ldr.
 * For this project, we implement the logic that maps design files to GDS IDs.
 */

export interface QuotedItem {
  partId: PartID;
  originalId: string; // The ID from the file (e.g. LEGO ID)
  color: string;
  quantity: number;
  unitPrice: number;
  lineTotal: number;
  status: 'available' | 'substitution_needed' | 'out_of_stock' | 'design_flaw';
  warningMessage?: string;
}

export interface DesignDefect {
  severity: 'high' | 'medium' | 'low';
  type: 'color_unavailable' | 'structural_issue' | 'rare_part';
  message: string;
  affectedParts: string[];
}

export interface FileQuotationResult {
  fileName: string;
  totalParts: number;
  uniqueParts: number;
  items: QuotedItem[];
  defects: DesignDefect[];
  subTotal: number;
  tax: number;
  grandTotal: number;
}

/**
 * Simulates parsing a file and matching it against the factory catalog.
 */
export async function parseDesignFile(fileName: string, content: string): Promise<FileQuotationResult> {
  // Logic: 
  // 1. Identify file type from extension
  // 2. Extract list of { part_id, color_id, qty }
  // 3. Match against GDS (Industrial) database
  
  console.log(`Parsing file: ${fileName}`);

  // Mocked result reflecting your "Zero Blind Zone" and "Direct Industrial ID" requirements
  const mockItems: QuotedItem[] = [
    { partId: 'GDS-3001', originalId: '3001', color: 'Red', quantity: 50, unitPrice: 0.12, lineTotal: 6.00, status: 'available' },
    { partId: 'GDS-3003', originalId: '3003', color: 'Blue', quantity: 20, unitPrice: 0.15, lineTotal: 3.00, status: 'available' },
    { 
      partId: 'GDS-3020', 
      originalId: '3020', 
      color: 'Metallic Gold', 
      quantity: 100, 
      unitPrice: 0.08, 
      lineTotal: 8.00, 
      status: 'design_flaw', 
      warningMessage: 'Factory production for Metallic Gold on Plate 2x4 is currently paused.' 
    },
    { partId: 'GDS-3024', originalId: '3024', color: 'Trans-Clear', quantity: 15, unitPrice: 0.20, lineTotal: 3.00, status: 'available' },
  ];

  const defects: DesignDefect[] = [
    {
      severity: 'high',
      type: 'color_unavailable',
      message: 'Part 3020 in Metallic Gold is not in the current factory color cycle.',
      affectedParts: ['GDS-3020']
    },
    {
      severity: 'medium',
      type: 'structural_issue',
      message: 'Large cantilever detected in sub-model "Roof". Structural reinforcement recommended.',
      affectedParts: ['GDS-3003']
    }
  ];

  const subTotal = mockItems.reduce((acc, item) => acc + item.lineTotal, 0);

  return {
    fileName,
    totalParts: mockItems.reduce((acc, item) => acc + item.quantity, 0),
    uniqueParts: mockItems.length,
    items: mockItems,
    defects,
    subTotal,
    tax: subTotal * 0.1,
    grandTotal: subTotal * 1.1
  };
}
