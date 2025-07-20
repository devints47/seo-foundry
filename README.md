# SEO Foundry

**SEO Foundry** is a modular, pluggable toolkit for automated SEO asset generation and optimization. It is designed to work with other tools such as [`pixel-forge`](https://github.com/devints47/pixel-forge), which powers social media previews, favicons, and visual assets.

---

## 🧱 Monorepo Structure

This repo uses a **monorepo structure** with the following characteristics:

* **Submodules** for shared tooling (e.g., `pixel-forge`)
* **PNPM workspaces** to handle build orchestration
* Clean separation of publishable packages

```
seo-foundry/
├── .gitmodules
├── packages/
│   └── pixel-forge/        # Git submodule
├── pnpm-workspace.yaml
└── package.json
```

---

## 🔗 Submodule Instructions

`pixel-forge` is included as a Git submodule so that it can be developed independently or as part of this toolkit.

### ✅ To clone this repo with all submodules:

```bash
git clone --recurse-submodules https://github.com/devints47/seo-foundry.git
```

### 🔄 To update the submodule to the latest version:

```bash
cd packages/pixel-forge
git pull origin main
cd ../..
git add packages/pixel-forge
git commit -m "Update pixel-forge to latest"
```

---

## 📦 Workspaces & Package Management

This repo uses [`pnpm`](https://pnpm.io/) with workspaces. The `pnpm-workspace.yaml` file includes:

```yaml
packages:
  - 'packages/*'
```

> Note: Since `pixel-forge` is a submodule, we **do not add** it as a `dependency` in the root `package.json`. The workspace tooling resolves it via path.

---

## 📁 .gitignore Highlights

This repo has a carefully tuned `.gitignore` to:

* Exclude build artifacts, `node_modules`, IDE files
* Track the submodule pointer (`.git` file inside `packages/pixel-forge`)
* Avoid committing lock files for reproducibility across tools

No need to worry about `.git status` showing the entire package contents — only the pointer is tracked.

---

## 🚀 Publishing

This repo is configured with:

```json
"private": false
```

This allows for future publication of `seo-foundry` or any of its components, such as `pixel-forge`, if they are separated into their own publishable packages.

You can publish individual packages by navigating to the directory and running:

```bash
cd packages/pixel-forge
npm publish
```

---

## 📚 Related Projects

* [`pixel-forge`](https://github.com/devints47/pixel-forge): Image and icon generation CLI

---

## 💡 License

This project is [MIT Licensed](./LICENSE) and maintained by [Devin Singh](mailto:devin@devinops.com) and [Kendall Jackson](mailto:kendallkj00@gmail.com).

---

## 🙋 FAQ

### Why use a Git submodule instead of a local workspace?

Submodules allow tools like `pixel-forge` to exist and be versioned independently while still being used in a broader monorepo setup.

### Can I use `pixel-forge` without cloning all of `seo-foundry`?

Absolutely. Just clone [`pixel-forge`](https://github.com/devints47/pixel-forge) directly and install it standalone.

---

## 🛠 Setup & Development

```bash
# Install dependencies
pnpm install

# Build all packages
pnpm build

# Dev on pixel-forge only
cd packages/pixel-forge
pnpm dev
```

---

For suggestions, issues, or pull requests, feel free to open a discussion or issue on GitHub.

---

Happy building! 🚀
