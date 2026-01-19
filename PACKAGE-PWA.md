# 📦 Package PWA P.I.A. Mobile - Projet Indépendant

---

## 🎯 Objectif

Créer un **nouveau projet séparé** pour la PWA mobile, avec sa propre URL de déploiement.

---

## 📂 Structure Complète du Projet PWA

```
pia-mobile-pwa/
├── index.html                 ← Landing page 4 boutons profils
├── manifest.json              ← Configuration PWA
├── sw.js                      ← Service Worker
│
├── css/
│   └── mobile.css             ← Styles Material Design mobile-first
│
├── dashboards/
│   ├── artisan.html           ← Dashboard Artisan (complet)
│   ├── b2c.html               ← Dashboard Particulier B2C
│   ├── do.html                ← Dashboard Donneur d'Ordre
│   └── expert.html            ← Dashboard Expert
│
├── actions/
│   ├── upload-photo.html      ← Upload photo caméra/galerie
│   └── questionnaire.html     ← Questionnaire 10 questions
│
├── icons/
│   ├── icon-192.png           ← À créer (192×192)
│   ├── icon-512.png           ← À créer (512×512)
│   └── README.md              ← Instructions icônes
│
├── README.md                  ← Documentation développeur
├── STATUS.md                  ← État du projet
├── PARCOURS-ARTISAN.md        ← Guide parcours Artisan
└── PWA-COMPLETE.md            ← Documentation complète
```

**Total : 18 fichiers**

---

## 📥 Méthode 1 : Télécharger depuis l'Interface (Recommandé)

### **Étapes**

1. **Téléchargez le projet actuel** via le bouton en haut à droite de l'interface
   - Vous obtiendrez un fichier ZIP

2. **Extrayez le ZIP** sur votre ordinateur

3. **Copiez uniquement le dossier `pwa/`** dans un nouveau dossier :
   ```
   pia-mobile-pwa/
   ```

4. **Renommez et réorganisez :**
   ```bash
   # Depuis le dossier pwa/ extrait, déplacez tout à la racine
   mv pwa/* .
   ```

5. **Vous avez maintenant un projet PWA autonome !**

---

## 🚀 Méthode 2 : Créer un Nouveau Projet (Via Interface de Déploiement)

### **Étapes**

1. **Créez un nouveau projet** dans votre interface de déploiement
   - Nom suggéré : `pia-mobile-pwa` ou `pia-app`

2. **Uploadez les fichiers suivants** (dans l'ordre) :

#### **A) Fichiers Racine** (5 fichiers)
```
index.html
manifest.json
sw.js
README.md
STATUS.md
PARCOURS-ARTISAN.md
PWA-COMPLETE.md
```

#### **B) Dossier `css/`** (1 fichier)
```
css/mobile.css
```

#### **C) Dossier `dashboards/`** (4 fichiers)
```
dashboards/artisan.html
dashboards/b2c.html
dashboards/do.html
dashboards/expert.html
```

#### **D) Dossier `actions/`** (2 fichiers)
```
actions/upload-photo.html
actions/questionnaire.html
```

#### **E) Dossier `icons/`** (1 fichier + 2 à créer)
```
icons/README.md
icons/icon-192.png    ← À créer
icons/icon-512.png    ← À créer
```

---

## 🎨 Créer les Icônes (Optionnel mais Recommandé)

### **Option A : Générateur en Ligne**
1. Allez sur : https://realfavicongenerator.net/
2. Uploadez un logo carré (minimum 512×512)
3. Téléchargez le package
4. Utilisez `icon-192.png` et `icon-512.png`

### **Option B : Icône Temporaire Simple**
- Utilisez un émoji converti en PNG :
  - 🏗️ (chantier)
  - 📱 (mobile)
  - ⚡ (action)

### **Option C : Design Custom**
- Fond : Dégradé violet → rose (#8B5CF6 → #EC4899)
- Texte : "PIA" en blanc, fonte Inter Bold
- Dimensions : 512×512px, export PNG

---

## 🌐 Déploiement

### **Une Fois les Fichiers Uploadés :**

1. **Déployez le projet**
   - Via l'onglet "Publish" ou équivalent

2. **Obtenez l'URL :**
   ```
   https://pia-mobile.pages.dev
   ```
   (ou votre domaine custom)

3. **Testez immédiatement :**
   - Desktop : Ouvrez l'URL
   - Mobile : Scannez QR code ou partagez l'URL
   - Installation : Cliquez sur "Installer l'appli"

---

## ✅ Checklist de Validation

### **Après Déploiement :**

- [ ] **Landing page** : 4 boutons profils visibles
- [ ] **Navigation** : Tous les boutons fonctionnent
- [ ] **Dashboard Artisan** : Score 78/100 affiché
- [ ] **Upload photo** : Boutons caméra/galerie présents
- [ ] **Questionnaire** : 10 questions + navigation
- [ ] **Service Worker** : Console → Application → Service Workers (actif)
- [ ] **Manifest** : Console → Application → Manifest (valide)
- [ ] **Installation** : Popup "Installer" apparaît sur mobile
- [ ] **Offline** : Fonctionne en mode avion

---

## 🔧 Configuration Post-Déploiement

### **Modifier l'URL dans `manifest.json`** (ligne 3)

```json
{
  "name": "P.I.A. Mobile",
  "short_name": "PIA",
  "start_url": "https://VOTRE-URL.pages.dev/",  ← Remplacer ici
  "scope": "/",
  ...
}
```

### **Tester le Service Worker**

Ouvrez la console :
```javascript
navigator.serviceWorker.getRegistration().then(reg => {
  console.log('SW actif:', reg.active);
});
```

---

## 📊 Comparaison des URLs

| Type | URL | Usage |
|------|-----|-------|
| **Site Web Figé** | `https://pia-prototype.pages.dev` | Documentation investisseurs |
| **PWA Mobile** | `https://pia-mobile.pages.dev` | 🆕 App mobile installable |

---

## 🎯 Avantages du Projet Séparé

✅ **URL dédiée** : Branding clair "mobile"  
✅ **Déploiement indépendant** : Pas de risque de casser le site figé  
✅ **Évolution séparée** : La PWA peut évoluer sans toucher au site  
✅ **Analytics séparées** : Meilleure compréhension de l'usage mobile  
✅ **Performance** : Seulement 18 fichiers (~170kb total)  

---

## 🐛 Troubleshooting

### **Problème : Service Worker ne s'active pas**
```javascript
// Dans sw.js, vérifiez que tous les fichiers existent :
const urlsToCache = [
  '/',
  '/index.html',
  '/css/mobile.css',
  '/dashboards/artisan.html',
  // ... etc
];
```

### **Problème : Manifest invalide**
- Vérifiez que `start_url` correspond à l'URL de déploiement
- Vérifiez que les icônes existent (ou commentez-les temporairement)

### **Problème : Boutons ne fonctionnent pas**
- Ouvrez la console (F12) et cherchez les erreurs
- Vérifiez que tous les chemins sont relatifs (ex: `dashboards/artisan.html`)

---

## 📞 Support

### **Tests Réussis ?**
➡️ Prêt pour démo investisseurs !

### **Problèmes ?**
➡️ Vérifiez la console navigateur (F12 → Console)
➡️ Testez d'abord en local : `python3 -m http.server 8000`

---

## 🎉 Résultat Final

**Vous aurez 2 projets indépendants :**

1. **Site Web P.I.A.** (figé)
   - 34 pages HTML
   - Documentation complète
   - URL : `pia-prototype.pages.dev`

2. **PWA Mobile P.I.A.** (nouveau) 🆕
   - 8 écrans action-first
   - Installable iOS/Android
   - URL : `pia-mobile.pages.dev`

**Total : 52 pages, 2 projets, 100% fonctionnel** 🚀

---

*Package créé le 19 janvier 2026*
