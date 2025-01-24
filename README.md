# Nuxt Boilerplate

A production-ready starter template built with Nuxt 4, featuring a modern tech stack and best practices. This boilerplate combines the power of Nuxt UI 3 for beautiful, accessible components, TailwindCSS 4 for utility-first styling, and TypeScript for enhanced development experience.

Designed to help you kickstart your next project with:
- Zero configuration required
- Beautiful UI components out of the box
- Dark mode support with smooth transitions
- Fully responsive design patterns
- Performance optimized
- SEO-friendly structure
- Modern development tools
- Custom icon system with Iconify integration
- Vue Motion

Perfect for building:
- Web Applications
- Landing Pages
- Admin Dashboards
- Documentation Sites
- Progressive Web Apps (PWA)

## Features

- [Nuxt 4](https://nuxt.com) - The Intuitive Vue Framework
- [Nuxt UI 3](https://ui.nuxt.com) - Beautiful and accessible components
- [TailwindCSS 4](https://tailwindcss.com) - A utility-first CSS framework
- [TypeScript](https://www.typescriptlang.org/) - Type safety and better DX
- [ESLint](https://eslint.org/) - Code linting
- Dark Mode Support
- Fully Responsive Design
- Custom Icon System

## Prerequisites

- Node.js (v18.0.0 or newer)
- pnpm (v8.0.0 or newer)

## Quick Start

1. Clone the repository:
```bash
git clone [your-repo-url]
cd nuxt-boilerplate
```

2. Install dependencies:
```bash
pnpm install
```

3. Run the development server:
```bash
pnpm dev
```

Visit `http://localhost:3000` to see your application.

## Project Structure

```
nuxt-boilerplate/
├── app/                    # Application source code
│   ├── assets/            # Static assets (CSS, images)
│   │   ├── css/          # Global CSS
│   │   └── icons/        # Custom SVG icons
│   ├── components/        # Vue components
│   │   └── core/         # Core UI components
│   ├── layouts/          # Page layouts
│   └── pages/            # Application pages
├── public/               # Public static files
└── nuxt.config.ts       # Nuxt configuration
```

## Custom Icons

This boilerplate includes a custom icon system. To use custom icons:

1. Place your SVG icons in `app/assets/icons/`
2. Use them in components:
```vue
<UIcon name="i-custom-[icon-name]" />
```

## Available Scripts

- `pnpm dev` - Start development server
- `pnpm build` - Build for production
- `pnpm preview` - Preview production build
- `pnpm lint` - Lint code
- `pnpm lint:fix` - Fix lint issues

## Environment Variables

Create a `.env` file in the root directory:

```env
# Add your environment variables here
```

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- [Nuxt](https://nuxt.com)
- [Nuxt UI](https://ui.nuxt.com)
- [TailwindCSS](https://tailwindcss.com)
- [Vue.js](https://vuejs.org)
