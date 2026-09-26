# Architecture Overview

The Eonsunbird web app connects a scanned product identifier to structured product data through a simple API-based flow.

## High-level architecture

```text
User
  ↓
Web App
  ↓
QR / GTIN scan
  ↓
API request
  ↓
Cloudflare Worker
  ↓
D1 product catalogue
  ↓
Structured product data
  ↓
Product Passport
```

## Main components

- **Web app:** React + TypeScript
- **API:** Cloudflare Workers
- **Database / catalogue:** Cloudflare D1
- **Product identification:** QR / GTIN / GS1 Digital Link

The full production codebase, private endpoints and internal product data are not included in this case.
