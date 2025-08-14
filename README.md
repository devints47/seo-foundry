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

### Install SEO Foundry (Aggregator)
```bash
# Global install (recommended for CLI usage)
pnpm add -g seo-foundry

# Or as a project dependency
pnpm add seo-foundry
```

### Install Individual Tools
```bash
# Typically not required—`seo-foundry` includes them. If you want a tool standalone:
pnpm add pixel-forge
pnpm add -g pixel-forge
```

### Generate SEO Assets (via unified CLI)
```bash
# Discover available tools and commands
seo-foundry --help

# Run pixel-forge subcommands through the aggregator
seo-foundry pixel-forge generate --config ./seo-config.json
seo-foundry pixel-forge favicon --input ./logo.png
seo-foundry pixel-forge social --template modern --title "My Awesome Site"
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

## 🧰 After Cloning (Maintainers)

```bash
# 1) Install dependencies
pnpm install

# 2) Sanity-check the aggregator CLI locally
pnpm run cli -- --help
pnpm run cli -- pixel-forge --version

# 3) Build all packages (no-op for aggregator; useful for workspaces)
pnpm build
```

### Optional: Work on a tool locally
If you’re developing a tool (e.g., `pixel-forge`) locally and want the aggregator to use your local build, you have two options:

1) Use NPM/Yarn/Pnpm link
```bash
cd packages/pixel-forge
pnpm install
pnpm build
pnpm link --global

cd ../../
pnpm link --global pixel-forge
```

2) Temporarily point the dependency to a file/path (not for publishing)
```json
// package.json (root)
{
  "dependencies": {
    "pixel-forge": "file:packages/pixel-forge"
  }
}
```

Revert to a semver version (e.g., `^1.0.4`) before publishing `seo-foundry`.

---

## ➕ Adding New Tools

1) Build and publish the new tool from its own repo (ensure it has an NPM `bin` entry)
2) Add it to `dependencies` in the root `package.json`
3) Map it in `bin/seo-foundry.js` so `seo-foundry <tool> ...` works
4) Update this README (Available Tools + examples)

This keeps each tool independent while providing a unified UX.

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
