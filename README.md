# Woody Touch 🪑

**Premium Cane Furniture Showcase Website**

A modern, elegant showcase website for Woody Touch - a premium cane furniture store specializing in handcrafted, sustainable furniture pieces. This is a product showcase platform with inquiry and contact features, designed to highlight the natural beauty and craftsmanship of cane furniture.

---

## 📋 Project Overview

Woody Touch is a client project for a cane furniture business that needs a digital presence to showcase their products, engage with potential customers, and facilitate inquiries. The website focuses on visual appeal, smooth animations, and an intuitive user experience.

### 🎯 Current Phase: Showcase Platform

- Product catalog with detailed views
- Pricing information display
- Contact and inquiry system
- About the brand and craftsmanship story
- Gallery of furniture pieces

### 🚀 Future Enhancements (Planned)

- E-commerce integration (shopping cart, checkout)
- Payment gateway integration
- Order management system
- Customer accounts and order tracking
- Inventory management

---

## ✨ Key Features

### Current Features

- **Product Showcase**: Beautiful gallery of cane furniture with high-quality images
- **Product Details**: Individual product pages with specifications, dimensions, materials, and pricing
- **Contact System**: Inquiry forms and contact information for customer reach-out
- **About Section**: Brand story, craftsmanship philosophy, and sustainability commitment
- **Responsive Design**: Mobile-first approach ensuring great experience across all devices
- **Advanced Animations**: GSAP-powered smooth animations and micro-interactions

### Design Features

- Modern, clean interface with premium aesthetics
- Smooth scroll effects and parallax backgrounds
- Interactive product cards with hover effects
- Image galleries with lightbox functionality
- Animated page transitions

---

## 🎨 Design System

### Color Palette

The **Woody Touch** brand uses a natural, warm color scheme that reflects the essence of cane furniture:

#### Primary Colors

- **Warm Brown** `#8B5E34` - Primary brand color (cane/wood tones)
- **Rich Walnut** `#6B4423` - Darker accent for depth
- **Light Tan** `#D4A574` - Lighter accent for highlights
- **Cream** `#F5E6D3` - Soft backgrounds

#### Neutral Colors

- **Pure White** `#FFFFFF` - Clean backgrounds
- **Off-White** `#FAF8F5` - Subtle background variation
- **Charcoal** `#2C2C2C` - Text and headings
- **Warm Gray** `#8A8A8A` - Secondary text

#### Accent Colors

- **Forest Green** `#3A5A40` - Natural, eco-friendly accent
- **Terracotta** `#C67C4E` - Warm call-to-action elements
- **Gold** `#D4AF37` - Premium highlights

### Typography

- **Headings**: Playfair Display, Cormorant Garamond (elegant serif fonts)
- **Body**: Inter, Poppins (clean, modern sans-serif)
- **Accents**: Montserrat (for buttons and labels)

### Design Principles

- **Natural & Organic**: Curved edges, flowing animations
- **Premium Feel**: High-quality imagery, elegant typography, generous whitespace
- **Warmth**: Brown tones evoke comfort and natural materials
- **Clarity**: Clean layouts with clear visual hierarchy
- **Sustainability**: Green accents emphasize eco-friendly materials

---

## 🛠 Tech Stack

### Frontend Framework

- **[Next.js 15](https://nextjs.org/)** - React framework with App Router
- **[React 19](https://react.dev/)** - UI library
- **[TypeScript](https://www.typescriptlang.org/)** - Type-safe development

### Styling & Animation

- **CSS Modules** - Component-scoped styling
- **[GSAP (GreenSock)](https://greensock.com/gsap/)** - Advanced animations and scroll effects
- **[ScrollTrigger](https://greensock.com/scrolltrigger/)** - Scroll-based animations
- **[Framer Motion](https://www.framer.com/motion/)** (Optional) - React animation library

### Additional Tools

- **[next/font](https://nextjs.org/docs/app/building-your-application/optimizing/fonts)** - Optimized font loading
- **[Sharp](https://sharp.pixelplumbing.com/)** - Image optimization
- **React Icons** - Icon library

---

## 📁 Project Structure

```
woody_touch/
├── public/
│   ├── images/
│   │   ├── products/          # Product images
│   │   ├── hero/              # Hero section images
│   │   └── about/             # About page images
│   └── fonts/                 # Custom fonts
├── src/
│   ├── app/
│   │   ├── layout.tsx         # Root layout
│   │   ├── page.tsx           # Home page
│   │   ├── products/          # Products pages
│   │   ├── about/             # About page
│   │   └── contact/           # Contact page
│   ├── components/
│   │   ├── ui/                # Reusable UI components
│   │   ├── layout/            # Layout components (Header, Footer)
│   │   ├── home/              # Home page sections
│   │   └── products/          # Product-related components
│   ├── lib/
│   │   ├── animations/        # GSAP animation configurations
│   │   └── utils/             # Utility functions
│   ├── styles/
│   │   ├── globals.css        # Global styles
│   │   └── variables.css      # CSS custom properties
│   └── types/                 # TypeScript type definitions
└── README.md
```

---

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ installed
- npm, yarn, pnpm, or bun package manager

### Installation

1. **Clone the repository** (if applicable)

```bash
git clone <repository-url>
cd woody_touch
```

2. **Install dependencies**

```bash
npm install
# or
yarn install
# or
pnpm install
```

3. **Run the development server**

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

4. **Open in browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

### Build for Production

```bash
npm run build
npm run start
```

---

## 🎬 Animation Guidelines

### GSAP Best Practices

- Use `ScrollTrigger` for scroll-based animations
- Implement entrance animations for product cards
- Add subtle parallax effects to hero sections
- Create smooth page transitions
- Optimize performance with `will-change` CSS property

### Animation Types

- **Fade In**: Product entries, text reveals
- **Slide In**: Navigation menus, modals
- **Parallax**: Hero backgrounds, image layers
- **Hover Effects**: Interactive cards, buttons
- **Scroll Animations**: Section reveals, image galleries

---

## 📱 Responsive Breakpoints

```css
/* Mobile First Approach */
- Mobile: 320px - 640px
- Tablet: 641px - 1024px
- Desktop: 1025px - 1440px
- Large Desktop: 1441px+
```

---

## 🔮 Future Roadmap

### Phase 2: E-Commerce Integration

- [ ] Shopping cart functionality
- [ ] User authentication and accounts
- [ ] Payment gateway (Stripe/Razorpay)
- [ ] Order management system
- [ ] Product inventory tracking
- [ ] Customer dashboard
- [ ] Order history and tracking
- [ ] Wishlist functionality

### Phase 3: Advanced Features

- [ ] Product reviews and ratings
- [ ] AR visualization (furniture in your space)
- [ ] Custom furniture configurator
- [ ] Blog/Magazine section
- [ ] Newsletter integration
- [ ] Social media integration

---

## 📄 License

This project is proprietary and confidential. All rights reserved by Woody Touch.

---

## 👥 Development Team

- **Developer**: [Your Name]
- **Client**: Woody Touch Furniture Store
- **Project Type**: Product Showcase Website

---

## 📞 Contact

For project inquiries or support:

- **Email**: [contact@woodytouch.com]
- **Website**: [www.woodytouch.com] (once live)

---

**Built with 💚 for sustainable, handcrafted furniture**
