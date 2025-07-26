# SEO Foundry

**SEO Foundry** is a monorepo of tools designed to enhance the SEO of a web developer's website. Our collection of packages helps automate the generation and optimization of SEO assets, social media previews, favicons, and other visual elements that improve your site's search engine visibility and social sharing performance.

---

## 🛠 Available Tools

### [`pixel-forge`](./packages/pixel-forge)
A comprehensive generator for social media previews, favicons, and visual assets across all platforms. Perfect for:
- **Open Graph images** for Facebook, LinkedIn, and other social platforms
- **Twitter Cards** for enhanced tweet previews
- **Favicons** in all required sizes and formats
- **PWA icons** for progressive web applications
- **Platform-specific assets** for Instagram, TikTok, and more

---

## 🏗 Monorepo Structure

This project uses a **monorepo structure** with PNPM workspaces to manage multiple SEO-focused packages:

```
seo-foundry/
├── packages/
│   └── pixel-forge/        # Visual asset generation
├── pnpm-workspace.yaml     # Workspace configuration
└── package.json           # Root package configuration
```

---

## 🚀 Quick Start

### Install SEO Foundry
```bash
npm install seo-foundry
```

### Install Individual Tools
```bash
# Install pixel-forge for visual asset generation
npm install pixel-forge

# Or use globally
npm install -g pixel-forge
```

### Generate SEO Assets
```bash
# Generate complete SEO asset suite
npx pixel-forge generate --config ./seo-config.json

# Quick favicon generation
npx pixel-forge favicon --input ./logo.png

# Social media preview generation
npx pixel-forge social --template modern --title "My Awesome Site"
```

---

## 📦 Package Management

This monorepo uses [`pnpm`](https://pnpm.io/) with workspaces for efficient dependency management:

```bash
# Install all dependencies
pnpm install

# Build all packages
pnpm build

# Work on a specific package
cd packages/pixel-forge
pnpm dev
```

---

## 🎯 SEO Benefits

Our tools help improve your website's SEO through:

- **Social Media Optimization**: Generate proper Open Graph and Twitter Card images
- **Favicon Management**: Ensure your site has all required favicon formats
- **Visual Consistency**: Maintain brand consistency across all platforms
- **Performance**: Optimized asset generation with proper sizing and compression
- **Accessibility**: Generate assets that meet modern web standards

---

## 🔧 Development

### Setup
```bash
# Clone the repository
git clone https://github.com/devints47/seo-foundry.git
cd seo-foundry

# Install dependencies
pnpm install

# Build all packages
pnpm build
```

### Working with Packages
```bash
# Develop a specific package
cd packages/pixel-forge
pnpm dev

# Run tests across all packages
pnpm -r test

# Lint all packages
pnpm -r lint
```

---

## 📚 Documentation

Each package contains its own documentation:
- [`pixel-forge` Documentation](./packages/pixel-forge/README.md)

---

## 🤝 Contributing

We welcome contributions! Here's how to get started:

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/amazing-seo-tool`
3. Make your changes and add tests
4. Ensure all tests pass: `pnpm -r test`
5. Submit a pull request

### Adding New SEO Tools

When adding new packages to this monorepo:
1. Create a new directory in `packages/`
2. Follow the existing package structure
3. Add relevant SEO-focused keywords to `package.json`
4. Update this README to document the new tool

---

## 📋 Roadmap

Planned SEO tools for future releases:
- **aria tags**: Automated aria tag generation and optimization
- **meta tags**: Automated meta tag generation and optimization
- **schema builder**: Structured data and JSON-LD generation
- **sitemap generator**: Dynamic sitemap creation and maintenance
- **performance optimizers**: Core Web Vitals and performance analysis

---

## 💡 License

This project is [MIT Licensed](./LICENSE) and maintained by [Devin Singh](mailto:devin@devinops.com) and [Kendall Jackson](mailto:kendallkj00@gmail.com).

---

## 🙋 Support

- **Issues**: [GitHub Issues](https://github.com/devints47/seo-foundry/issues)
- **Discussions**: [GitHub Discussions](https://github.com/devints47/seo-foundry/discussions)
- **Email**: [devin@devinops.com](mailto:devin@devinops.com)

---

**Happy building!** 🚀 Make your website SEO-ready with SEO Foundry.
