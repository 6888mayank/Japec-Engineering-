# JAPEC ENGINEERING — Precision Engineering & Manufacturing Website

> **Official Tagline:** *“World-class Precision Engineering Company. Built on Precision Dies & Tooling. Driven by Quality Molding Services.”*

An industrial manufacturing website developed for **JAPEC ENGINEERING**, located in **Rabale MIDC, Navi Mumbai, Maharashtra, India**.

---

## 🏭 Company Information & Facts

- **Company Name:** JAPEC ENGINEERING
- **Proprietor:** Mrs. Chonyoso Shaiza
- **Manufacturing Location:** Rabale MIDC, Navi Mumbai, Maharashtra, India
- **Official B2B Enquiry Email:** [`japec.engineering@yahoo.com`](mailto:japec.engineering@yahoo.com)
- **Business Classification:** B2B precision engineering, tooling, and industrial component manufacturing.

---

## 🛠️ Manufacturing Capabilities

1. **Plastic Injection Molding** (`/capabilities/plastic-injection-molding`)
   - Commodity & engineering polymers: PP, ABS, Nylon, Nylon 6 GF, Nylon 66 GF, PC, PPA, PPS, SAN, PS, PMMA, POM, PBT, PVC, TPR, TPE, TPV, PU.
   - Applications: Housings, enclosures, fittings, electrical parts, insert molding.
2. **Precision Dies & Mold Development** (`/capabilities/mold-die-development`)
   - Thermoplastic injection tooling, thermoset molds, extrusion die tooling.
3. **Plastic Extrusion Dies & Products** (`/capabilities/plastic-extrusion`)
   - Continuous profiles, strips, and sections in PP, Flexible PVC, Rigid PVC, PC, PMMA.
4. **Thermoset & Hydraulic Compression Molding** (`/capabilities/compression-molding`)
   - DMC, SMC, Bakelite (Phenolic), Urea, and Melamine compounds.
5. **Rubber & Elastomer Molding** (`/capabilities/rubber-elastomer-molding`)
   - Vulcanized seals, gaskets, and dampers in Natural Rubber, Silicone, and NBR.
6. **Sheet Metal Pressing & Stamping** (`/capabilities/sheet-metal-stamping`)
   - Stamped press parts, brackets, clips, and chassis elements in CRCA, SS, Brass, Aluminum.
7. **Precision Turned Components & Metal Inserts** (`/capabilities/precision-turned-components`)
   - Diamond-knurled threaded brass inserts, shafts, bushings, and turned metal fittings.

---

## 🌐 Complete Website Structure

| Route | Page | Purpose & Description |
|---|---|---|
| `/` | **Homepage** | Hero with official tagline, 3 highlights, company intro, 7 capability cards, filterable product gallery, 8 target industries, why choose us, 7-stage workflow, quality section, footer |
| `/about` | **About Us** | Factual company story, Proprietor Mrs. Chonyoso Shaiza, Rabale MIDC hub, core disciplines |
| `/capabilities` | **Capabilities Overview** | Comprehensive technical directory of all 7 manufacturing processes with material lists |
| `/capabilities/:slug` | **Capability Detail Pages** | 7 dedicated routes with deep-dive technical steps, materials, applications, and RFQ triggers |
| `/products` | **Products & Applications** | 9-category filterable gallery with interactive modal preview and RFQ prefill |
| `/industries` | **Industries Served** | 8 industrial sectors including specific component/tooling support for flameproof equipment OEMs |
| `/quality` | **Quality & Engineering** | 6 quality pillars, tooling precision, material behavior analysis, inspection protocols |
| `/quote` | **Request a Quote** | Validated B2B RFQ form with drawing upload, format checking, and direct mailto integration |
| `/contact` | **Contact Us** | Confirmed company info, Rabale MIDC manufacturing hub, direct contact form |
| `/privacy-policy` | **Privacy Policy** | Technical drawing confidentiality, NDA terms, quotation data protection |
| `/terms` | **Terms & Conditions** | B2B quotation terms, tooling agreements, drawing confidentiality, governing law |
| `*` | **404 Page** | Industrial component not found screen with helpful navigation |

---

## 🎨 Industrial Design System

- **Deep Navy Blue:** `#102A43`
- **Industrial Blue:** `#245A91`
- **Graphite Grey:** `#303B46`
- **Metallic Silver:** `#B8C2CC`
- **Clean White:** `#FFFFFF`
- **Light Background Grey:** `#F3F5F7`
- **Accent Orange:** `#EA580C` (restrained highlight for primary actions)
- **Typography:** Inter, Manrope, JetBrains Mono via Google Fonts.

---

## 🚀 Getting Started

### Prerequisites
- Node.js (v18+ or v20+)
- npm or yarn

### Installation
```bash
# Clone or navigate to the project directory
cd "Japec Engineering"

# Install dependencies
npm install

# Start development server
npm run dev
```
The website will be available at `http://localhost:5173/`.

### Production Build
```bash
# Compile TypeScript and bundle assets with Vite
npm run build

# Preview production build locally
npm run preview
```

---

## ✉️ Enquiry Email & Production Backend Integration

The enquiry portal is configured to direct inquiries to:
**`japec.engineering@yahoo.com`**

### Instant Client-Side Dispatch:
The form formats the entire technical inquiry and opens an email draft directly addressing `japec.engineering@yahoo.com` with the RFQ reference ID.

### Server-Side Email API Integration (Optional):
To connect a cloud transactional email provider (such as Resend, SendGrid, or AWS SES), set the following environment variables in your deployment hosting service:

```env
# Production Server Environment Variables (Do NOT commit secrets to Git)
VITE_ENQUIRY_EMAIL=japec.engineering@yahoo.com
EMAIL_SERVICE_PROVIDER=resend
EMAIL_API_KEY=re_xxxxxxxxxxxxxxxxxxxx
```

---

## 🔍 SEO & Web Standards

- **Semantic HTML5:** Single `<h1>` per page, descriptive landmarks (`nav`, `main`, `section`, `footer`).
- **Structured JSON-LD Data:** Schema.org `Organization` and `Service` descriptors for tooling and molding services in Rabale MIDC, Navi Mumbai.
- **Sitemap & Robots:** `/sitemap.xml` and `/robots.txt` generated for search engine indexing.
- **Accessibility:** Keyboard navigable, accessible form labels, high-contrast industrial palette.
