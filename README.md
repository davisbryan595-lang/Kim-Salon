# Kim's Salon Website

A premium, modern website for Kim's Salon—a family-friendly hair and beauty salon in Burbank, CA. Built with Next.js, Tailwind CSS, and Framer Motion for smooth animations.

## Features

- **Responsive Design**: Fully responsive across all devices
- **Smooth Animations**: Micro-interactions with Framer Motion
- **Glass Morphism**: Frosted glass effect panels over animated gradient background
- **Booking System**: Easy-to-use appointment booking form
- **Gallery**: Filterable portfolio gallery with service categories
- **Testimonials**: Client testimonials carousel
- **Contact Forms**: Contact and booking forms with validation
- **Accessibility**: WCAG compliant with keyboard navigation and screen reader support
- **SEO Optimized**: Meta tags, Open Graph, and local business schema

## Tech Stack

- **Framework**: Next.js 16+ (App Router)
- **Styling**: Tailwind CSS v4
- **Animations**: Framer Motion
- **Icons**: lucide-react
- **Images**: Next.js Image component with optimization
- **Typography**: Google Fonts (Geist, Geist Mono)

## Getting Started

### Installation

1. Clone this repository or download the ZIP
2. Install dependencies:
   \`\`\`bash
   npm install
   \`\`\`

3. Run the development server:
   \`\`\`bash
   npm run dev
   \`\`\`

4. Open [http://localhost:3000](http://localhost:3000) to see the site

### Build for Production

\`\`\`bash
npm run build
npm run start
\`\`\`

## Customization

### Theme Colors

Edit the color variables in `app/globals.css`:

\`\`\`css
:root {
  --brand-charcoal: #2B2B2B;
  --brand-cream: #F6E9E1;
  --brand-rose: #D49AB8;
  --brand-gold: #B0895A;
  --brand-light-rose: #E8D5DE;
}
\`\`\`

### Logo & Images

1. **Logo**: Replace references in `components/navbar.tsx` with your logo path
2. **Hero Background**: Update the hero image URL in `components/hero.tsx`
3. **Gallery Images**: Replace placeholder URLs in `components/gallery-section.tsx` with your actual images
4. **Testimonial Images**: Update image paths in `components/testimonials-section.tsx`

### Business Information

Update these files with your business details:

- **Contact Info**: `components/contact-section.tsx` and `components/footer.tsx`
- **Services**: `components/services-section.tsx` and `components/pricing-section.tsx`
- **Hours**: `components/contact-section.tsx`
- **Meta Tags**: `app/layout.tsx`

### Content

All text content can be easily customized:

- Service descriptions in `components/services-section.tsx`
- Pricing in `components/pricing-section.tsx`
- Testimonials in `components/testimonials-section.tsx`
- Contact information throughout the site

## Optional Features

### Stripe Integration (Payments)

To enable appointment deposits or product purchases:

1. Add your Stripe keys to environment variables
2. Uncomment the Stripe code in `components/booking-form.tsx`
3. Create a `/api/checkout` route for payment processing

\`\`\`env
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=your_key
STRIPE_SECRET_KEY=your_key
\`\`\`

### Email Notifications (Nodemailer)

To send booking confirmation emails:

1. Set up nodemailer in a Server Action or API route
2. Update `components/booking-form.tsx` to call your email API
3. Configure your email provider

\`\`\`env
SMTP_EMAIL=your_email
SMTP_PASSWORD=your_password
\`\`\`

## Deployment

### Deploy to Vercel (Recommended)

1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com) and import your repository
3. Vercel will automatically detect Next.js and configure the build
4. Click "Deploy"

### Other Platforms

This site can be deployed to any platform that supports Next.js (Netlify, AWS, Google Cloud, etc.)

## File Structure

\`\`\`
├── app/
│   ├── layout.tsx          # Root layout with metadata
│   ├── page.tsx            # Home page
│   └── globals.css         # Global styles and theme
├── components/
│   ├── navbar.tsx          # Navigation bar
│   ├── hero.tsx            # Hero section
│   ├── services-section.tsx    # Services grid
│   ├── pricing-section.tsx     # Pricing tiers
│   ├── gallery-section.tsx     # Portfolio gallery
│   ├── testimonials-section.tsx  # Testimonials carousel
│   ├── booking-form.tsx        # Appointment booking
│   ├── contact-section.tsx     # Contact info & form
│   └── footer.tsx              # Footer
├── public/
│   ├── *.jpg / *.png       # Gallery and portrait images
│   └── favicon.ico         # Favicon
├── README.md               # This file
└── package.json            # Dependencies
\`\`\`

## Performance

- **Image Optimization**: Next.js Image component for automatic optimization
- **Code Splitting**: Automatic route-based code splitting
- **CSS Optimization**: Tailwind CSS purging unused styles
- **Animation Performance**: GPU-accelerated Framer Motion animations

## Accessibility

- **Semantic HTML**: Proper heading hierarchy and landmark elements
- **ARIA Labels**: Form labels and button descriptions
- **Keyboard Navigation**: All interactive elements are keyboard accessible
- **Reduced Motion**: Respects `prefers-reduced-motion` preference
- **Color Contrast**: WCAG AA compliant contrast ratios

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

Created for Kim's Salon. All rights reserved.

## Support

For questions or issues, contact Kim's Salon at (818) 359-1660 or visit in person at 2300 W. Victory Blvd #G, Burbank, CA 91506.

---

**Built with ❤️ for exceptional salon experiences**
