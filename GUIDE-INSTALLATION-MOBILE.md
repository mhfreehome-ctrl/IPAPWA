# 📱 GUIDE D'INSTALLATION MOBILE - P.I.A. PWA

**URL de votre application :** https://pia-mobile-pwa.pages.dev

---

## 🎯 3 Méthodes d'Installation

### **Méthode 1 : URL Directe (La Plus Simple)**
### **Méthode 2 : QR Code**
### **Méthode 3 : Installation Manuelle**

---

## 📲 MÉTHODE 1 : URL DIRECTE

### **Sur iPhone (iOS/Safari)**

1. **Ouvrir Safari** sur votre iPhone
2. **Taper dans la barre d'adresse :**
   ```
   pia-mobile-pwa.pages.dev
   ```
3. **Appuyer sur "Entrée"**
4. ✅ La page s'ouvre !

### **Sur Android (Chrome)**

1. **Ouvrir Chrome** sur votre Android
2. **Taper dans la barre d'adresse :**
   ```
   pia-mobile-pwa.pages.dev
   ```
3. **Appuyer sur "Entrée"**
4. ✅ La page s'ouvre !

---

## 🔲 MÉTHODE 2 : SCANNER LE QR CODE

### **Étapes :**

1. **Sur votre PC** : Affichez ce document ou ouvrez l'image QR code
2. **Sur votre mobile** : Ouvrez l'appareil photo
3. **Pointez** vers le QR code ci-dessous
4. **Tapez sur la notification** qui apparaît
5. ✅ Le site s'ouvre automatiquement !

### **QR Code :**

![QR Code P.I.A. Mobile](https://www.genspark.ai/api/files/s/NCOiXxF5)

**Ou téléchargez le QR code :** `/tmp/pia-qrcode.png`

---

## 📥 INSTALLER COMME APPLICATION NATIVE

### **📱 Sur iPhone (iOS/Safari)**

**Une fois le site ouvert dans Safari :**

1. **Appuyer sur le bouton "Partager"** 
   - C'est l'icône carré avec une flèche vers le haut ⎙
   - Située en bas de l'écran (ou en haut selon iOS)

2. **Scroller vers le bas** dans le menu

3. **Appuyer sur "Sur l'écran d'accueil"** ou **"Add to Home Screen"**

4. **Modifier le nom** si vous voulez (par défaut "P.I.A.")

5. **Appuyer sur "Ajouter"** en haut à droite

✅ **L'icône P.I.A. apparaît maintenant sur votre écran d'accueil !**

### **📱 Sur Android (Chrome/Edge)**

**Une fois le site ouvert dans Chrome :**

#### **Option A : Bannière Automatique (Recommandé)**

1. **Attendre 2-3 secondes** après l'ouverture du site
2. Une **bannière apparaît en bas** : "Installer l'application P.I.A."
3. **Appuyer sur "Installer"**
4. **Confirmer** dans la popup

✅ **L'app s'installe automatiquement !**

#### **Option B : Installation Manuelle**

1. **Appuyer sur le menu** (⋮ trois points verticaux en haut à droite)
2. **Appuyer sur "Ajouter à l'écran d'accueil"** ou **"Install app"**
3. **Appuyer sur "Ajouter"** pour confirmer

✅ **L'icône P.I.A. apparaît sur votre écran d'accueil !**

---

## 🎨 **À Quoi Ressemble l'Icône ?**

L'icône est **gradient violet-rose** avec le texte **"P.I.A."** en blanc sur un cercle blanc.

Couleurs :
- Gradient violet (#667eea) → rose (#764ba2)
- Cercle blanc au centre
- Texte "P.I.A." en violet

---

## ✨ **Avantages de l'Installation**

Une fois installée, votre PWA P.I.A. :

✅ **S'ouvre comme une vraie app** (plein écran, sans barre d'adresse)
✅ **Icône sur l'écran d'accueil** (comme toute autre app)
✅ **Fonctionne hors ligne** (grâce au Service Worker)
✅ **Chargement rapide** (cache automatique)
✅ **Notifications possibles** (si vous ajoutez cette feature)
✅ **Mises à jour automatiques** (dès que vous redéployez)

---

## 🧪 **Tester les Fonctionnalités**

### **Parcours Complet de Test :**

1. **Landing Page**
   - Vous voyez 4 gros boutons : DO, Artisan, Particulier, Expert
   - Design gradient violet/rose moderne

2. **Choisir un Profil** (ex: Artisan 👷)
   - Tap sur le bouton "Artisan"
   - Vous arrivez sur le dashboard

3. **Dashboard Artisan**
   - Score P.I.A. : 78/100
   - Chantier actif "Toiture Résidence"
   - Progression : 60%
   - Bouton "📷 Ajouter photos"
   - Bouton "✅ Questionnaire"

4. **Tester Upload Photos**
   - Tap "📷 Ajouter photos"
   - Choisir "Prendre une photo" ou "Galerie"
   - Ajouter contexte (Lot, Zone, Note)
   - Valider

5. **Tester Questionnaire**
   - Tap "✅ Questionnaire"
   - Répondre aux 10 questions (Oui/Non)
   - Voir la progression 10% → 100%
   - Voir le score final
   - Envoyer

6. **Tester les Autres Profils**
   - Retour landing page (bouton ← en haut)
   - Essayer B2C, DO, Expert

---

## 🔧 **Dépannage**

### **Le site ne charge pas ?**
- Vérifier votre connexion Internet
- Essayer en navigation privée
- Vider le cache : Safari > Réglages > Effacer historique

### **L'option "Ajouter à l'écran d'accueil" n'apparaît pas ?**
- **iOS** : Vérifier que vous utilisez **Safari** (pas Chrome)
- **Android** : Vérifier que vous utilisez **Chrome** (pas Samsung Internet)
- Rafraîchir la page

### **L'icône est moche ou générique ?**
- Les icônes PWA mettent parfois 1-2 minutes à se charger
- Supprimer l'app et réinstaller

### **Les liens ne fonctionnent pas ?**
- Sur iOS : Le fix Safari est déjà intégré
- Forcer le rechargement : Tirer vers le bas sur la page

---

## 📊 **Statistiques de l'Application**

| Caractéristique | Valeur |
|----------------|--------|
| **Taille totale** | ~170 KB |
| **Pages** | 7 pages HTML |
| **Dashboards** | 4 profils complets |
| **Actions** | 2 fonctionnalités |
| **Mode offline** | ✅ Oui (Service Worker) |
| **Installable** | ✅ Oui (PWA) |
| **Compatible** | iOS 14+ / Android 8+ |

---

## 🌐 **URLs de Test Direct**

Si vous voulez tester directement une page spécifique :

- **Landing** : https://pia-mobile-pwa.pages.dev/
- **Artisan** : https://pia-mobile-pwa.pages.dev/dashboards/artisan.html
- **B2C** : https://pia-mobile-pwa.pages.dev/dashboards/b2c.html
- **DO** : https://pia-mobile-pwa.pages.dev/dashboards/do.html
- **Expert** : https://pia-mobile-pwa.pages.dev/dashboards/expert.html
- **Upload** : https://pia-mobile-pwa.pages.dev/actions/upload-photo.html
- **Quiz** : https://pia-mobile-pwa.pages.dev/actions/questionnaire.html

---

## 📸 **Envoyer le Lien à Quelqu'un**

### **Par SMS/WhatsApp/Email :**

Copiez-collez simplement :
```
Teste l'app P.I.A. Mobile :
https://pia-mobile-pwa.pages.dev

Tu peux l'installer sur ton écran d'accueil !
```

### **Ou envoyez le QR Code**

Image disponible ici : https://www.genspark.ai/api/files/s/NCOiXxF5

---

## ✅ **Checklist de Test**

Cochez au fur et à mesure :

- [ ] J'ai ouvert le site sur mon mobile
- [ ] Je vois la landing page avec 4 boutons
- [ ] J'ai cliqué sur un profil (ex: Artisan)
- [ ] Le dashboard s'affiche correctement
- [ ] J'ai testé "Ajouter photos"
- [ ] J'ai testé "Questionnaire"
- [ ] J'ai installé l'app sur l'écran d'accueil
- [ ] L'icône P.I.A. apparaît correctement
- [ ] L'app s'ouvre en plein écran
- [ ] La navigation fonctionne bien
- [ ] Les boutons sont réactifs (haptic feedback)

---

## 🎉 **Profitez de Votre App !**

Votre PWA P.I.A. Mobile est maintenant :
- ✅ Accessible depuis n'importe quel mobile
- ✅ Installable comme une app native
- ✅ Rapide et fluide
- ✅ Fonctionne hors ligne
- ✅ Mise à jour automatiquement

**Bon test ! 🚀📱**

---

**Dernière mise à jour :** 19 Janvier 2026
