# Modern Admin Dashboard Template

A production-ready, themeable admin dashboard starter for SaaS, CRM, HRM, ERP & internal tools built with modern web technologies.

## 🚀 Features

- **Next.js 14** with App Router and TypeScript
- **TailwindCSS** + **Shadcn UI** design system
- **Dark/Light mode** with next-themes
- **Dashboard analytics** with KPIs and charts
- **User Management** with search, filters, and pagination
- **Authentication pages** (Login, Register, Forgot Password)
- **Form validation** with React Hook Form + Zod
- **Charts** with Recharts
- **Responsive design** for all devices
- **Clean architecture** with ESLint + Prettier

## 🛠️ Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: TailwindCSS
- **UI Components**: Shadcn UI
- **Icons**: Lucide React
- **Forms**: React Hook Form + Zod
- **Charts**: Recharts
- **Theme**: next-themes

## 📦 Getting Started

1. **Clone the repository**
```bash
git clone https://github.com/nguyenhoangdanh/admin-dashboard.git
cd admin-dashboard
```

2. **Install dependencies**
```bash
npm install
```

3. **Set up environment variables**
```bash
cp .env.example .env.local
```

4. **Run the development server**
```bash
npm run dev
```

5. **Open in browser**
Navigate to [http://localhost:3000](http://localhost:3000)

## 📁 Project Structure

```
src/
├── app/                # Next.js 14 App Router
├── components/         # Reusable components
│   ├── ui/            # Shadcn UI components
│   ├── layout/        # Layout components
│   ├── forms/         # Form components
│   └── charts/        # Chart components
├── lib/               # Utility functions
└── types/             # TypeScript types
```

## 🎨 Customization

### Colors
Update your brand colors in `src/app/globals.css`:

```css
:root {
  --primary: 250 60% 40%;    /* Deep Blue */
  --accent: 45 93% 47%;      /* Warm Orange */
  /* ... other colors */
}
```

### Components
All UI components are customizable through Shadcn UI. Update `components.json` for configuration.

## 📱 Responsive Design

The dashboard is fully responsive with:
- **Desktop**: Fixed sidebar layout
- **Tablet**: Collapsible sidebar
- **Mobile**: Slide-over drawer

## 🔧 Development

```bash
npm run dev          # Development server
npm run build        # Production build
npm run lint         # ESLint
npm run format       # Prettier
npm run type-check   # TypeScript check
```

## 📄 License

MIT License - see [LICENSE](LICENSE) file for details.

## 🤝 Support

For support, email support@yourcompany.com or create an issue.
