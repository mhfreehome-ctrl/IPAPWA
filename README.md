# 📱 P.I.A. Mobile PWA

**Version:** 1.0.1  
**Type:** Progressive Web App  
**Orientation:** Action-First, Mobile-Optimized

---

## 🎯 Vue d'ensemble

PWA mobile ultra-simplifiée pour la **Plateforme d'Intermédiation & d'Arbitrage** (P.I.A.) dans le secteur BTP.

### ✨ Fonctionnalités

- ✅ **4 Profils utilisateurs** : Donneur d'Ordre, Artisan, Particulier B2C, Expert
- ✅ **Dashboards spécialisés** pour chaque profil
- ✅ **Upload de photos** (caméra/galerie) avec contexte
- ✅ **Questionnaire interactif** (10 questions, scoring automatique)
- ✅ **Fonctionne hors ligne** (Service Worker)
- ✅ **Installable** sur mobile (PWA)
- ✅ **Compatible Safari iOS** (fix double-tap)

---

## 📂 Structure du Projet

```
webapp/
├── public/                    # Fichiers statiques servis
│   ├── index.html             # Landing page (4 profils)
│   ├── manifest.json          # Configuration PWA
│   ├── sw.js                  # Service Worker
│   ├── static/
│   │   └── mobile.css         # CSS Mobile-First
│   ├── dashboards/
│   │   ├── artisan.html       # Dashboard Artisan
│   │   ├── b2c.html           # Dashboard Particulier
│   │   ├── do.html            # Dashboard Donneur d'Ordre
│   │   └── expert.html        # Dashboard Expert
│   ├── actions/
│   │   ├── upload-photo.html  # Interface upload photos
│   │   └── questionnaire.html # Questionnaire interactif
│   └── icons/
│       ├── icon-192.png       # Icône PWA 192x192
│       └── icon-512.png       # Icône PWA 512x512
└── README.md                  # Ce fichier
```

---

## 🚀 URLs

- **Production**: (À venir après déploiement Cloudflare Pages)
- **GitHub**: (À venir)

---

## 💾 Technologies

- **HTML5** + CSS3 (Mobile-First)
- **Vanilla JavaScript** (pas de framework)
- **PWA** (Service Worker + Manifest)
- **Material Design** (style épuré)
- **Cloudflare Pages** (hébergement)

---

## 🎨 Design

- **Gradient violet/rose** moderne
- **Gros boutons tactiles** (faciles à cliquer)
- **Animations fluides** (transitions CSS)
- **Haptic feedback** (vibrations tactiles)
- **Compatible iOS et Android**

---

## 📱 Profils Utilisateurs

### 🏢 Donneur d'Ordre
- Liste des chantiers actifs
- KPIs en temps réel
- Analytics et rapports

### 👷 Artisan
- Score P.I.A. personnel (78/100)
- Chantier actif avec progression
- Upload photos de chantier
- Questionnaire de fin de chantier

### 🏠 Particulier B2C
- Suivi simplifié du chantier
- Progression étape par étape
- Notifications importantes
- Suivi des paiements

### ⚖️ Expert
- Dossiers d'arbitrage
- Score IA d'analyse
- Synthèses automatiques
- Historique des expertises

---

## 🧪 Installation Locale

```bash
# Cloner le projet
git clone <repo-url>
cd webapp

# Lancer un serveur HTTP
python3 -m http.server 8000 --directory public

# Ouvrir dans le navigateur
open http://localhost:8000
```

---

## 📦 Déploiement

### Cloudflare Pages

```bash
# Build (aucun build nécessaire, fichiers statiques)
# Deploy
npx wrangler pages deploy public --project-name pia-mobile-pwa
```

---

## 🔧 Fonctionnalités Techniques

### Service Worker
- Cache des assets statiques
- Mode offline complet
- Stratégie Network First pour les APIs

### PWA Manifest
- Installable sur écran d'accueil
- Mode standalone (sans barre de navigateur)
- Splash screen personnalisé
- Icônes adaptatives

### Safari iOS Fix
- Double-tap prevention corrigé
- Haptic feedback optimisé
- Tap highlight visible
- Liens fonctionnels

---

## 📊 Status

✅ **Complété à 100%**

- ✅ Landing page
- ✅ 4 Dashboards
- ✅ 2 Actions (Upload + Quiz)
- ✅ Service Worker
- ✅ Documentation
- ✅ Fix Safari iOS

---

## 📝 Prochaines Étapes

1. ✅ Générer les icônes PWA
2. ✅ Déployer sur Cloudflare Pages
3. ✅ Pusher sur GitHub
4. 🔄 Connecter à une API backend (optionnel)
5. 🔄 Ajouter analytics (optionnel)

---

## 📄 License

Propriétaire - P.I.A. Platform

---

**Dernière mise à jour:** 19 Janvier 2026
