# Architecture Overview

The Eonsunbird web app is built around a simple flow where a scanned product identifier is used to retrieve structured product data and present it in the app.

## High-level flow

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
D1 database / product catalogue
  ↓
Product data
  ↓
Product Passport view
