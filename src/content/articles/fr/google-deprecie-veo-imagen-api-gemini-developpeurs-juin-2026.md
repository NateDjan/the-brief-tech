---
title: "Google déprécie Veo 2/3 et Imagen 4 : les développeurs ont jusqu'au 30 juin pour migrer"
description: "Google a annoncé la dépréciation urgente de ses modèles Veo 2/3 et Imagen 4 via l'API Gemini. Les développeurs doivent migrer avant le 30 juin 2026 sous peine d'interruption de service."
pubDate: 2026-06-17
heroImage: "https://images.unsplash.com/photo-1573804633927-bfcbcd909acd?w=1200&auto=format&q=80"
category: "tech"
tags: ["Google", "Gemini API", "Veo", "Imagen", "dépréciation", "développeurs", "IA générative", "migration"]
author: "The Brief"
lang: "fr"
featured: false
readingTime: 7
---

Les développeurs qui utilisent l'API Gemini de Google pour générer des vidéos ou des images ont reçu un avertissement urgent : **plusieurs modèles phares seront définitivement désactivés dans moins de deux semaines**. La vague de dépréciations annoncée le 15 juin 2026 touche notamment les modèles **Veo 2.0 et Veo 3.0** pour la génération vidéo, ainsi que les modèles **Imagen 4** pour les images. Une migration rapide est indispensable pour éviter toute interruption de service.

---

## Qu'est-ce qui est déprécié et quand ?

Google a publié un calendrier de dépréciation détaillé dans ses notes de version officielles. Voici les échéances à retenir :

### 🎬 Modèles vidéo — Arrêt le 30 juin 2026 (urgent !)

Les modèles suivants seront **désactivés le 30 juin 2026** :

- `veo-2.0-generate-001`
- `veo-3.0-generate-001`
- `veo-3.0-fast-generate-001`

La migration recommandée est vers **Veo 3.1**, disponible en prévisualisation via les IDs `veo-3.1-generate-preview` et `veo-3.1-fast-generate-preview`. Pour les applications production critiques, Google recommande les **modèles GA Veo 3.1** disponibles via la plateforme **Gemini Enterprise Agent Platform**.

### 🖼️ Modèles image — Arrêt le 17 août 2026

Les modèles Imagen 4 et certains modèles Gemini Image disposeront d'un délai légèrement plus long :

- `imagen-4.0-generate-001`
- `imagen-4.0-ultra-generate-001`
- `imagen-4.0-fast-generate-001`

Ces modèles seront arrêtés le **17 août 2026**. La migration se fait vers les nouvelles versions encore en cours de finalisation par Google.

### 🔄 Modèles Gemini Image également touchés

Deux modèles de génération d'images intégrés à Gemini sont eux aussi dépréciés :

- `gemini-3.1-flash-image-preview` — arrêt le **25 juin 2026**
- `gemini-3-pro-image-preview` — arrêt le **25 juin 2026**

---

## Pourquoi cette vague de dépréciations ?

La dépréciation massive des modèles Veo 2/3 et Imagen 4 illustre la **cadence d'innovation accélérée** de Google dans le domaine de l'IA générative — mais aussi les tensions que cela crée pour les développeurs qui construisent sur ces fondations.

### Un cycle de remplacement de plus en plus court

En juin 2026, Google a déjà procédé à plusieurs vagues de dépréciation majeures. Le 1er juin, les modèles Gemini 2.0 Flash avaient été désactivés, remplacés par Gemini 3.5 Flash. Les développeurs qui n'avaient pas migré à temps avaient subi des interruptions de service.

La logique de Google est simple : maintenir un nombre restreint de modèles "production-ready" en rotation, plutôt que d'accumuler une longue liste de versions héritées coûteuses à maintenir.

### Veo 3.1 : ce qui change réellement

Le passage de **Veo 3.0 à Veo 3.1** n'est pas qu'un simple changement de numéro de version. D'après la documentation technique de Google, Veo 3.1 apporte :

- **Meilleure cohérence temporelle** dans les vidéos générées (moins d'artefacts visuels entre les frames)
- **Support de la génération vidéo à partir d'une image** (image-to-video), une fonctionnalité très demandée
- **Résolution 720p** pour les extensions vidéo
- **Vitesse améliorée** sur le modèle `veo-3.1-fast-generate-preview`

Ces améliorations justifient techniquement le passage obligatoire, mais le délai très court laissé aux développeurs (moins de deux semaines pour la dépréciation Veo) crée une pression réelle.

---

## L'impact pour les développeurs : concret et immédiat

### Qui est concerné ?

Cette vague de dépréciation touche principalement :

- Les **startups** qui ont intégré des fonctionnalités de génération vidéo via l'API Gemini
- Les **agences créatives** utilisant Veo pour automatiser la production de contenu vidéo
- Les **plateformes EdTech** qui génèrent des vidéos pédagogiques à la demande
- Les **outils marketing et publicité** basés sur la génération d'images IA

### Les risques en cas de non-migration

Si un développeur n'a pas migré vers Veo 3.1 avant le **30 juin 2026**, les appels API vers les modèles Veo 2 et Veo 3 retourneront des erreurs. Pour une application en production, c'est une interruption de service directement visible par les utilisateurs finaux.

### Comment migrer concrètement ?

Google fournit une documentation technique détaillée pour la migration. En pratique, pour les modèles Veo, il suffit dans la plupart des cas de **remplacer le nom du modèle** dans l'appel API :

```python
# Avant (sera désactivé le 30 juin)
operation = client.models.generate_videos(
    model="veo-3.0-generate-001",
    prompt=prompt,
)

# Après (modèle Veo 3.1)
operation = client.models.generate_videos(
    model="veo-3.1-generate-preview",
    prompt=prompt,
)
```

Pour les applications plus complexes utilisant des paramètres spécifiques, une revue plus attentive de la documentation est nécessaire pour vérifier la compatibilité des paramètres.

---

## Plus large : la stratégie de dépréciation de Google

Cette vague n'est pas un événement isolé. Depuis début 2026, Google a accéléré la cadence de renouvellement de ses modèles IA. Voici le fil chronologique des principales dépréciations :

| Date | Modèles désactivés | Remplacement |
|------|-------------------|--------------|
| 1er juin 2026 | Gemini 2.0 Flash (toutes variantes) | Gemini 3.5 Flash |
| 8 juin 2026 | `gemini-3.1-flash-image-preview` | Gemini 3.5 Flash Image |
| 25 juin 2026 | `gemini-3-pro-image-preview` | En cours |
| 30 juin 2026 | Veo 2.0, Veo 3.0 | Veo 3.1 |
| 17 août 2026 | Imagen 4 (toutes variantes) | Imagen 5 (attendu) |

Ce calendrier révèle une **accélération des cycles de version** sans précédent dans l'industrie. Il y a trois ans, un modèle "flagship" durait 18 à 24 mois. En 2026, certains modèles sont remplacés en moins de six mois.

---

## La critique des développeurs : un rythme insoutenable ?

Sur les forums développeurs (Reddit, GitHub Discussions, Discord), la frustration est palpable. De nombreux ingénieurs pointent le **coût humain et financier** de ces migrations fréquentes :

> *"Chaque fois qu'on a terminé de migrer vers une nouvelle version, Google annonce la suivante. On passe plus de temps à maintenir les intégrations qu'à construire de nouvelles fonctionnalités."*

> *"Le délai de deux semaines pour Veo, c'est irrespectueux pour les équipes qui travaillent avec des cycles de sprint. On n'a pas le temps de tester correctement."*

Google, de son côté, argue que les améliorations de performance et de qualité justifient ces transitions rapides, et que les modèles de substitution sont systématiquement disponibles avant la désactivation des anciens.

---

## Les alternatives à l'API Gemini de Google

Face à cette instabilité, certains développeurs envisagent de diversifier leurs fournisseurs de génération vidéo et image :

### Pour la génération vidéo
- **Runway ML** (Gen-3) : API stable, modèle reconnu dans l'industrie créative
- **Pika Labs** : solution orientée créateurs, API disponible
- **Sora d'OpenAI** : disponible via l'API, bonne qualité mais coût élevé

### Pour la génération d'images
- **DALL-E 3 (OpenAI)** : API mature, très documentée
- **Stable Diffusion (Stability AI)** : open source, déployable en self-hosted
- **Midjourney API** : qualité artistique reconnue, disponibilité limitée

Cela dit, pour les développeurs déjà intégrés dans l'écosystème Google Cloud, la migration vers Veo 3.1 reste la voie la moins coûteuse — à condition de la traiter en priorité immédiate.

---

## Ce qu'il faut retenir

- **Veo 2.0 et Veo 3.0** seront désactivés le **30 juin 2026** — il reste moins de deux semaines
- **Imagen 4** sera désactivé le **17 août 2026**
- La migration vers **Veo 3.1** est techniquement simple dans la plupart des cas
- Cette vague s'inscrit dans une **stratégie de rotation accélérée** des modèles chez Google
- Les développeurs doivent tester leurs migrations en **environnement de staging** avant la date limite
- La frustration des développeurs grandit face à des **cycles de dépréciation trop courts**

Si vous utilisez l'API Gemini pour la génération vidéo ou image : n'attendez pas la dernière minute. Le 30 juin approche.

*Pour en savoir plus sur les dernières évolutions de Google dans l'IA, consultez notre article sur [Gemini Omni et la génération vidéo IA](/fr/articles/gemini-omni-google-generation-video-ia-2026).*
