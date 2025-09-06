# DevAutomation Portfolio

A modern, professional portfolio website built with React, TypeScript, and Tailwind CSS showcasing full-stack development and AI automation expertise.

## 🚀 Features

- **Modern Design**: Clean, professional interface with smooth animations
- **Interactive ROI Calculator**: Real-time savings calculations for automation projects
- **Case Studies**: Detailed project showcases with measurable business impact
- **Contact Forms**: Multi-type contact forms for different business needs
- **Responsive Design**: Mobile-first approach with excellent UX across devices
- **SEO Optimized**: Meta tags, semantic HTML, and performance optimized
- **Accessibility**: WCAG AA compliant with proper ARIA labels

## 🛠 Tech Stack

- **Frontend**: React 18, TypeScript, Tailwind CSS
- **Routing**: React Router v6
- **State Management**: React Hooks, TanStack Query
- **UI Components**: Radix UI (shadcn/ui)
- **Icons**: Lucide React
- **Build Tool**: Vite
- **Deployment**: Ready for Vercel, Netlify, or AWS

## 📁 Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── ui/             # Base UI components (shadcn/ui)
│   ├── layout/         # Layout components (Navbar, Footer)
│   ├── sections/       # Page sections (Hero, Services, etc.)
│   ├── forms/          # Form components
│   └── tools/          # Interactive tools (Calculator)
├── pages/              # Route pages
├── services/           # API services and mock data
├── types/              # TypeScript type definitions
├── data/               # Static data and mock APIs
└── lib/                # Utility functions
```

## 🏃‍♂️ Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <your-git-url>
cd <your-project-name>
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open [http://localhost:8080](http://localhost:8080) in your browser

### Build for Production

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

## 📱 Pages & Features

### Home Page
- Hero section with value proposition
- Services overview
- Featured projects showcase
- Clear CTAs for different user types

### About Page
- Professional background and philosophy
- Technical skills and experience
- Process overview

### Services Page
- Detailed service offerings
- Process workflow
- Guarantees and commitments

### Projects Page
- Filterable project gallery
- Detailed case studies with ROI metrics
- Technology stack highlighting

### Contact Page
- Multi-type contact forms (Client/Employment/Investment)
- Contact information
- Project type explanations

### ROI Calculator
- Interactive savings calculator
- Real-time projections
- Implementation timeline estimates

## 🎨 Design System

The portfolio uses a professional design system built with:

- **Colors**: Navy blue primary with bright blue and green accents
- **Typography**: Inter font family for modern, readable text
- **Components**: Custom shadcn/ui components with business-focused variants
- **Animations**: Subtle hover effects and transitions
- **Responsive**: Mobile-first design with Tailwind breakpoints

## 🔧 Customization

### Content Updates

1. **Projects**: Update `src/data/projects.json` with your actual projects
2. **Services**: Modify service offerings in `src/components/sections/Services.tsx`
3. **About**: Update experience and skills in `src/pages/About.tsx`
4. **Contact**: Configure contact methods in `src/pages/Contact.tsx`

### Styling

1. **Colors**: Update design tokens in `src/index.css`
2. **Components**: Customize component variants in `src/components/ui/`
3. **Layout**: Modify layouts in `src/components/layout/`

### API Integration

Replace mock data with real APIs:

1. Update `src/services/api.ts` with your backend endpoints
2. Configure environment variables for API keys
3. Update contact form to integrate with your email service

## 📊 SEO & Performance

### SEO Features
- Semantic HTML structure
- Meta tags and Open Graph
- Descriptive alt texts for images
- Clean URL structure
- Mobile optimization

### Performance
- Code splitting with React.lazy
- Optimized images and assets
- Minimal bundle size
- Fast loading times

## 🚀 Deployment

### Vercel (Recommended)
```bash
npm install -g vercel
vercel
```

### Netlify
1. Connect your repository to Netlify
2. Set build command: `npm run build`
3. Set publish directory: `dist`

### AWS S3 + CloudFront
1. Build the project: `npm run build`
2. Upload `dist` folder to S3 bucket
3. Configure CloudFront distribution

## 📧 Contact & Support

For questions about this portfolio template or custom development:

- Email: hello@devautomation.com
- LinkedIn: [linkedin.com/in/devautomation](https://linkedin.com/in/devautomation)
- Portfolio: [www.devautomation.com](https://www.devautomation.com)

## 📄 License

This project is licensed under the MIT License. Feel free to use it as a template for your own portfolio.

---

Built with ❤️ using React, TypeScript, and Tailwind CSS