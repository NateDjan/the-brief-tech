---
title: "Apple Foundation Models 3 : cinq modèles IA dont un géant multimodal de 20 milliards de paramètres"
description: "Apple dévoile AFM 3, une famille de cinq modèles IA développés avec Google, incluant un modèle on-device de 20Mds de paramètres. Siri propulsé vers une nouvelle ère."
pubDate: 2026-06-14
heroImage: "https://images.unsplash.com/photo-1542744094-24638eff58bb?w=1200&auto=format&q=80"
category: "tech"
tags: ["Apple", "Apple Intelligence", "AFM 3", "Siri", "modèles IA", "multimodal", "Private Cloud Compute"]
author: "The Brief"
lang: "fr"
featured: false
readingTime: 9
---

Derrière la keynote de la WWDC 2026 se cachait une révolution silencieuse mais fondamentale : Apple a publié les détails techniques de sa troisième génération d'**Apple Foundation Models** (AFM 3), une famille de cinq modèles d'intelligence artificielle construits en étroite collaboration avec Google. Ce n'est pas une simple mise à jour — c'est une refonte architecturale complète, avec des modèles on-device inédits par leur puissance et un écosystème cloud préservant la confidentialité des données à un niveau sans précédent.

Pour la première fois dans l'histoire d'Apple, la firme de Cupertino a choisi de co-développer ses modèles de fondation avec un partenaire externe — Google, le même qui fournit les modèles Gemini sous-jacents à la nouvelle version de Siri. Cette alliance stratégique marque un tournant majeur dans l'industrie de l'IA et repositionne Apple comme un acteur de premier plan dans la course aux grands modèles.

---

## Cinq modèles pour couvrir tous les usages

La famille AFM 3 se compose de **cinq modèles distincts**, chacun optimisé pour un contexte d'usage spécifique :

### Les deux modèles on-device

**AFM 3 Core** est le successeur direct du modèle on-device d'Apple Intelligence. Avec ses 3 milliards de paramètres dans une architecture dense, il offre une qualité significativement améliorée pour les tâches courantes : résumé de texte, réponses contextuelles, complétion intelligente. Il fonctionne entièrement sur l'appareil, sans connexion réseau.

**AFM 3 Core Advanced** est la véritable surprise. Ce modèle de **20 milliards de paramètres** fonctionne lui aussi directement sur l'appareil, mais avec une architecture sparse : il n'active que **1 à 4 milliards de paramètres selon la requête**, ce qui lui permet de tenir dans la mémoire des puces Apple Silicon les plus récentes. Il est **nativement multimodal** — comprend images, texte, voix — et débloque des fonctionnalités comme la dictée haute précision et les nouvelles voix expressives de Siri.

Ce modèle n'est disponible que sur les appareils équipés d'Apple Silicon de dernière génération. Concrètement : les iPhone, iPad et Mac les plus récents avec suffisamment de mémoire unifiée pourront en bénéficier pleinement.

### Les trois modèles cloud

Pour les tâches les plus complexes qui nécessitent davantage de puissance de calcul, Apple déploie trois modèles côté serveur, fonctionnant dans son infrastructure **Private Cloud Compute** :

- **AFM 3 Cloud** : le modèle de référence côté serveur, optimisé pour la vitesse et l'efficacité. Il traite les requêtes ordinaires qui dépassent les capacités on-device.
- **ADM 3 Cloud (Image)** : spécialisé dans la génération et l'édition d'images, il alimente Image Playground et les nouveaux outils de retouche photo d'Apple.
- **AFM 3 Cloud Pro** : le modèle le plus capable de la gamme, conçu pour l'utilisation agentique complexe — la capacité à enchaîner plusieurs outils et à raisonner sur des problèmes multi-étapes.

La promesse d'Apple : **aucune donnée utilisateur n'est stockée ou partagée**, même avec Apple elle-même. Les requêtes envoyées au cloud sont traitées dans un environnement d'exécution sécurisé et éphémère, que des chercheurs en sécurité indépendants peuvent auditer.

---

## La collaboration Apple-Google : une alliance stratégique

Le fait qu'Apple ait co-développé AFM 3 avec Google est peut-être l'aspect le plus remarquable de cette annonce. Les deux géants — concurrents directs sur de nombreux marchés — ont uni leurs expertises pour construire une famille de modèles dédiée à l'écosystème Apple.

Cette collaboration ne se limite pas à une intégration de Gemini dans Siri (déjà annoncée à la WWDC). Elle touche à l'architecture même des modèles : les techniques d'entraînement, d'optimisation pour les puces Apple, de quantification pour le déploiement on-device. C'est un partenariat d'ingénierie profond.

Pourquoi Google a-t-il accepté ? L'accès à des milliards d'appareils Apple et à des datasets d'entraînement précieux. Pourquoi Apple ? Accélérer son retard dans la course à l'IA sans sacrifier son positionnement sur la vie privée.

---

## Ce que cela signifie pour Siri

Pendant des années, Siri a été la risée du secteur : limité, incapable de comprendre le contexte, comparé défavorablement aux assistants de Google et d'Amazon. Avec AFM 3, Apple dispose enfin de la puissance de calcul pour changer radicalement l'expérience.

**AFM 3 Core Advanced** permet à Siri de :
- Comprendre et générer de la voix avec des intonations naturelles
- Analyser des images directement (décrire une photo, extraire du texte, reconnaître des objets)
- Gérer des tâches complexes en plusieurs étapes sans perdre le contexte
- Agir de manière agentique — ouvrir des apps, remplir des formulaires, envoyer des messages — sur instruction de l'utilisateur

La dictée haute précision, longtemps inférieure à celle de Google, devrait faire un bond significatif. Apple promet également des **voix expressives** pour Siri, avec modulation naturelle des émotions — fini le ton robotique des générations précédentes.

---

## L'architecture sparse : le secret technique d'AFM 3 Core Advanced

Faire tourner un modèle de 20 milliards de paramètres sur un smartphone semblait impensable il y a encore deux ans. Apple y parvient grâce à une architecture **sparse** innovante.

Dans un modèle dense classique, l'ensemble des paramètres est sollicité pour chaque inférence. Dans AFM 3 Core Advanced, seule une fraction des 20 milliards de paramètres est activée à chaque étape — entre 1 et 4 milliards selon la complexité de la requête. Cette approche, inspirée des Mixture of Experts (MoE), réduit drastiquement la consommation mémoire et la charge de calcul.

Apple pousse l'optimisation encore plus loin avec des techniques de quantification avancées : les poids du modèle sont compressés pour tenir dans la mémoire unifiée des puces M-series et A-series haut de gamme. Le résultat : des performances comparables à des modèles bien plus grands, pour une fraction de la mémoire et de l'énergie.

C'est une prouesse d'ingénierie qui illustre la valeur de la verticalité d'Apple — concevoir à la fois le matériel et le logiciel permet d'optimiser d'une manière qu'aucun acteur purement logiciel ne peut égaler.

---

## Private Cloud Compute : la confidentialité comme avantage concurrentiel

L'infrastructure **Private Cloud Compute** (PCC) d'Apple est peut-être l'innovation la plus sous-estimée de l'écosystème Apple Intelligence. C'est une réponse directe à la méfiance croissante des utilisateurs envers le cloud IA.

Le fonctionnement est le suivant : quand une requête dépasse les capacités on-device, elle est envoyée vers des serveurs Apple dédiés. Ces serveurs fonctionnent dans un environnement d'exécution sécurisé où :

1. **La requête est traitée de manière éphémère** — aucun log conservé
2. **Apple elle-même ne peut pas accéder aux données** — grâce à une architecture cryptographique qui sépare l'opérateur (Apple) du contenu
3. **Le code est auditable** — Apple publie le code source du système PCC pour que des chercheurs indépendants puissent vérifier ses affirmations

Cette transparence est inédite dans l'industrie. OpenAI, Google et Microsoft traitent les données de leurs utilisateurs dans des infrastructures opaques. Apple fait le pari que la confiance est un avantage concurrentiel durable.

---

## Comparaison avec les concurrents

Comment AFM 3 se positionne-t-il face à l'écosystème concurrent ?

**On-device vs. cloud** : Apple est clairement le leader du traitement on-device. Google Gemini Nano sur Pixel est capable, mais AFM 3 Core Advanced le surpasse en taille et en capacités multimodales. Qualcomm et MediaTek proposent des solutions on-device pour Android, mais sans l'intégration verticale d'Apple.

**Confidentialité** : Apple est seul à proposer un cloud IA auditable avec garanties cryptographiques. C'est un différenciateur majeur face à OpenAI, Google et Microsoft.

**Performance brute** : AFM 3 Cloud Pro doit rivaliser avec GPT-5, Gemini 2.5 Pro et Claude Fable 5 sur les tâches agentiques complexes. Apple n'a pas encore publié de benchmarks comparatifs complets — ce sera l'enjeu des prochains mois.

**Multimodalité on-device** : c'est là qu'Apple prend une avance nette. Aucun autre fabricant ne propose aujourd'hui un modèle multimodal de cette envergure fonctionnant localement sur smartphone.

---

## Disponibilité et déploiement

AFM 3 sera déployé progressivement avec les prochaines mises à jour d'iOS 27, iPadOS 27 et macOS 27, attendues à l'automne 2026.

- **AFM 3 Core** : disponible sur tous les appareils éligibles à Apple Intelligence (iPhone 15 Pro et ultérieurs, iPad et Mac avec puce A17 Pro ou M-series)
- **AFM 3 Core Advanced** : réservé aux appareils avec suffisamment de mémoire unifiée (probablement 16 Go minimum, ce qui pointe vers les iPhone 17 Pro, iPad Pro M4, MacBook Pro M4 Pro/Max)
- **Modèles Cloud** : accessibles à tous les utilisateurs Apple Intelligence, quelle que soit la puissance du terminal

Les développeurs auront accès aux API d'Apple Intelligence via le framework Foundation Models d'iOS 27, déjà disponible en preview pour les membres Apple Developer Program.

---

## Les enjeux pour l'industrie

La publication des détails d'AFM 3 envoie plusieurs signaux forts à l'industrie :

**La course on-device s'accélère** : Apple démontre qu'un modèle de 20 milliards de paramètres peut fonctionner sur smartphone avec les bonnes optimisations. Cela va pousser Qualcomm, MediaTek et Google à accélérer leurs propres efforts.

**La collaboration inter-géants se normalise** : l'alliance Apple-Google pour co-développer des modèles aurait été inimaginable il y a cinq ans. Elle signale que même les plus grandes entreprises reconnaissent qu'elles ne peuvent pas tout faire seules dans la course à l'IA.

**La vie privée comme battleground** : en mettant en avant la confidentialité comme différenciateur technique — et pas seulement marketing — Apple oblige ses concurrents à se positionner sur ce terrain. La pression sur OpenAI et Google pour publier des garanties similaires va s'intensifier.

**Le hardware-software verticalement intégré gagne** : Apple prouve à nouveau que contrôler la puce, le système d'exploitation et les modèles crée des avantages impossibles à reproduire en assemblant des composants tiers.

---

## Ce qu'il faut retenir

- Apple a dévoilé **AFM 3**, une famille de cinq modèles IA développés avec Google
- Le modèle on-device phare, **AFM 3 Core Advanced**, compte 20 milliards de paramètres et est nativement multimodal
- Une architecture **sparse** permet de faire tourner ce géant sur les appareils Apple Silicon de dernière génération
- Trois modèles cloud fonctionnent dans **Private Cloud Compute**, avec des garanties cryptographiques de confidentialité auditables
- Siri bénéficie de voix expressives, de dictée haute précision et de capacités agentiques complexes
- Déploiement prévu avec **iOS 27, iPadOS 27, macOS 27** à l'automne 2026
- Apple prend une avance significative sur le **traitement IA on-device**, avec la confidentialité comme avantage concurrentiel stratégique
