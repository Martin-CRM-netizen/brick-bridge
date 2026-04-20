# ERP Integration API Specification (BrickBridge.io)

This document defines the interface between the BrickBridge.io platform and the factory-side ERP system. To ensure "zero conversion loss," all communications use **Industrial IDs** (e.g., GDS codes).

## 1. Inventory Sync (Inbound to Platform)
**Endpoint:** `GET /api/erp/inventory`
**Purpose:** Real-time stock status from the factory floor.

**Response Structure:**
```json
{
  "part_id": "GDS-3001",
  "color_id": "C10",
  "stock_on_hand": 45000,
  "allocated": 5000,
  "available": 40000,
  "production_status": "active"
}
```

## 2. Order Submission (Outbound to ERP)
**Endpoint:** `POST /api/erp/orders`
**Purpose:** Push verified customer orders (B2C/B2B) directly into the manufacturing queue.

**Payload Structure:**
```json
{
  "bridge_order_id": "ORD-98234",
  "order_type": "MOC_PACKAGE",
  "priority": "normal",
  "items": [
    {
      "industrial_id": "GDS-3001",
      "quantity": 250,
      "color": "Red"
    }
  ],
  "packaging_instructions": "Wholesale_Bulk_Box",
  "shipping_label_url": "https://..."
}
```

## 3. Production Tracking (Inbound to Platform)
**Webhook:** `POST /api/webhooks/production-update`
**Purpose:** ERP notifies the platform of manufacturing milestones.

**Status Codes:**
- `QUEUED`: Order received by ERP.
- `PICKING`: Parts being gathered.
- `PACKAGING`: Final box assembly.
- `SHIPPED`: Handed over to logistics.

## 4. Master Data Sync (Periodic)
**Purpose:** Sync new part designs or color variants introduced at the factory level.
**Rule:** The ERP is the "Single Source of Truth" for Part IDs. The Bridge platform never generates new Part IDs.
