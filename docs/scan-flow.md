# Product Scan Flow

The scan flow connects a scanned product identifier to structured product data in the Eonsunbird web app.

## Flow

```text
QR / GS1 Digital Link
        ↓
GTIN extracted
        ↓
API request
        ↓
Product lookup
        ↓
Structured product data
        ↓
Product Passport
```

The flow also handles invalid scans, missing products and API/network errors.

This case only shows the technical approach. Production URLs, private endpoints and internal product data are not included.
