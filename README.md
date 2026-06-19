# The Brief — the-brief.tech

Votre briefing tech & IA quotidien. / Your daily tech & AI briefing.

## 🚀 Quick Start

```bash
# Installer les dépendances
bun install    # ou: npm install

# Lancer en développement
bun run dev    # ou: npm run dev

# Construire pour la production
bun run build  # ou: npm run build

# Prévisualiser le build
bun run preview
```

## 📁 Structure du projet

```
the-brief/
├── public/                # Fichiers statiques (images, favicon, robots.txt)
├── src/
│   ├── components/        # Composants réutilisables
│   │   ├── Header.astro   # Navigation avec switch de langue + dark mode
│   │   ├── Footer.astro   # Pied de page avec liens sociaux
│   │   ├── ArticleCard.astro   # Carte d'article pour les grilles
│   │   ├── AdBanner.astro      # Composant publicitaire (AdSense ready)
│   │   ├── Newsletter.astro    # Formulaire d'inscription newsletter
│   │   └── SEO.astro           # Meta tags, Open Graph, Schema.org
│   ├── content/
│   │   └── articles/      # Articles en Markdown
│   │       ├── fr/        # Articles français
│   │       └── en/        # Articles anglais
│   ├── i18n/              # Traductions FR/EN
│   ├── layouts/           # Layouts de page
│   ├── pages/             # Routes (fr/ et en/)
│   └── styles/            # CSS global
├── astro.config.mjs       # Configuration Astro
├── netlify.toml           # Configuration Netlify
└── package.json
```

## ✍️ Écrire un article

Créez un fichier `.md` dans `src/content/articles/fr/` (ou `en/`) :

```markdown
---
title: "Titre de l'article"
description: "Description courte pour le SEO (150 caractères max)"
pubDate: 2025-06-10
heroImage: "https://images.unsplash.com/photo-xxx?w=800"
category: "tech"           # tech, ai, business, crypto, startups
tags: ["apple", "ios"]
author: "The Brief"
lang: "fr"                 # fr ou en
featured: false            # true pour mettre en avant
readingTime: 5
draft: false               # true pour cacher
---

Contenu de l'article en Markdown...
```

### Catégories disponibles
- `tech` — Actualités tech (Apple, Google, Samsung...)
- `ai` — Intelligence Artificielle (OpenAI, Anthropic, modèles...)
- `business` — Business & Finance (marchés, investissement, startups)
- `crypto` — Crypto & Web3 (Bitcoin, Ethereum, DeFi...)
- `startups` — Startups & innovation

## 🌍 Internationalisation (FR/EN)

- Les articles français vont dans `src/content/articles/fr/`
- Les articles anglais vont dans `src/content/articles/en/`
- Les traductions de l'interface sont dans `src/i18n/fr.json` et `en.json`
- Le switch de langue est dans le header

## 💰 Monétisation

### Google AdSense
1. Créez un compte sur [adsense.google.com](https://adsense.google.com)
2. Dans `src/layouts/BaseLayout.astro`, remplacez `ca-pub-XXXXXXXXXXXXXXXX` par votre ID éditeur
3. Dans `src/components/AdBanner.astro`, ajoutez vos IDs de blocs publicitaires
4. Décommentez les balises `<ins>` et `<script>`

### Emplacements publicitaires
- Bannière après le hero (page d'accueil)
- Rectangle après les articles
- Bannière dans le contenu des articles

### Migration vers Ezoic/Mediavine
Quand vous atteignez 10K+ visites/mois, postulez pour des réseaux premium :
- **Ezoic** : 10K+ pages vues/mois
- **Mediavine** : 50K+ sessions/mois

## 📊 Google Analytics

1. Créez une propriété GA4 sur [analytics.google.com](https://analytics.google.com)
2. Dans `src/layouts/BaseLayout.astro`, remplacez `G-XXXXXXXXXX` par votre ID de mesure
3. Décommentez le script GA

## 🚀 Déploiement sur Netlify

1. Poussez le code sur GitHub
2. Connectez le repo à [Netlify](https://netlify.com)
3. Les paramètres de build sont déjà configurés dans `netlify.toml`
4. Ajoutez votre domaine `the-brief.tech` dans les paramètres DNS

### DNS Configuration
Ajoutez ces enregistrements DNS chez votre registrar :
```
Type    Nom     Valeur
A       @       75.2.60.5
CNAME   www     your-site-name.netlify.app
```

## 🎨 Personnalisation

### Couleurs
Modifiez les variables CSS dans `src/styles/global.css` :
```css
:root {
  --color-primary: #4361ee;    /* Bleu principal */
  --color-accent: #f72585;     /* Accent */
}
```

### Logo
Remplacez le fichier `public/favicon.svg` et les logos dans le header/footer.

## 📝 License

MIT
