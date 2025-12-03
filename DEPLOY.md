# 🚀 Guide de Déploiement du Portfolio

Ce guide vous explique comment déployer votre portfolio Angular pour qu'il soit accessible publiquement avec un domaine personnalisé (comme `.app` ou `.com`).

## 📋 Prérequis

1. Avoir un compte GitHub (pour versionner votre code)
2. Avoir Node.js installé (version 18 ou supérieure)
3. Avoir Git installé

## 🎯 Options de Déploiement Gratuites

### Option 1 : Netlify (⭐ Recommandé - Le plus simple)

**Avantages :**
- ✅ Gratuit
- ✅ Déploiement automatique depuis GitHub
- ✅ Support des domaines personnalisés (gratuit)
- ✅ HTTPS automatique
- ✅ CDN global
- ✅ Très facile à configurer

**Étapes :**

1. **Préparer votre code :**
   ```bash
   # Assurez-vous que votre code est sur GitHub
   git add .
   git commit -m "Ready for deployment"
   git push origin main
   ```

2. **Créer un compte Netlify :**
   - Allez sur [netlify.com](https://www.netlify.com)
   - Cliquez sur "Sign up" et connectez-vous avec GitHub

3. **Déployer :**
   - Cliquez sur "Add new site" → "Import an existing project"
   - Sélectionnez votre repository GitHub
   - Configuration automatique :
     - Build command: `npm run build`
     - Publish directory: `dist/portfolio/browser`
   - Cliquez sur "Deploy site"

4. **Configurer un domaine personnalisé :**
   - Dans votre site Netlify, allez dans "Domain settings"
   - Cliquez sur "Add custom domain"
   - Entrez votre domaine (ex: `votreportfolio.app`)
   - Suivez les instructions pour configurer les DNS

**Résultat :** Votre portfolio sera accessible sur `votreportfolio.netlify.app` (gratuit) ou votre domaine personnalisé.

---

### Option 2 : Vercel (⭐ Excellent pour Angular)

**Avantages :**
- ✅ Gratuit
- ✅ Déploiement ultra-rapide
- ✅ Support Angular natif
- ✅ Domaines personnalisés gratuits
- ✅ HTTPS automatique

**Étapes :**

1. **Installer Vercel CLI :**
   ```bash
   npm install -g vercel
   ```

2. **Déployer :**
   ```bash
   # Dans le dossier portfolio
   vercel
   ```
   - Suivez les instructions
   - Votre site sera déployé automatiquement

3. **Ou via l'interface web :**
   - Allez sur [vercel.com](https://vercel.com)
   - Connectez-vous avec GitHub
   - Importez votre repository
   - Vercel détectera automatiquement Angular

**Résultat :** Votre portfolio sera accessible sur `votreportfolio.vercel.app` ou votre domaine personnalisé.

---

### Option 3 : GitHub Pages (Gratuit)

**Avantages :**
- ✅ Gratuit
- ✅ Intégration GitHub native
- ✅ Déploiement automatique via GitHub Actions

**Étapes :**

1. **Activer GitHub Pages :**
   - Allez dans Settings de votre repository GitHub
   - Section "Pages"
   - Source: "GitHub Actions"

2. **Le workflow est déjà configuré** (fichier `.github/workflows/deploy.yml`)

3. **Push votre code :**
   ```bash
   git add .
   git commit -m "Deploy to GitHub Pages"
   git push origin main
   ```

4. **Attendre le déploiement :**
   - Allez dans l'onglet "Actions" de votre repository
   - Le workflow se lancera automatiquement

**Résultat :** Votre portfolio sera accessible sur `votreusername.github.io/portfolio`

---

### Option 4 : Firebase Hosting (Google)

**Avantages :**
- ✅ Gratuit (10 GB de stockage)
- ✅ CDN global
- ✅ Support des domaines personnalisés

**Étapes :**

1. **Installer Firebase CLI :**
   ```bash
   npm install -g firebase-tools
   ```

2. **Initialiser Firebase :**
   ```bash
   firebase login
   firebase init hosting
   ```
   - Sélectionnez "Use an existing project" ou créez-en un
   - Public directory: `dist/portfolio/browser`
   - Configure as single-page app: **Yes**
   - Set up automatic builds: **No**

3. **Déployer :**
   ```bash
   npm run build
   firebase deploy
   ```

**Résultat :** Votre portfolio sera accessible sur `votreportfolio.web.app`

---

## 🌐 Acheter un Domaine .app

Pour avoir un domaine `.app` personnalisé :

1. **Registrars recommandés :**
   - [Google Domains](https://domains.google) - ~$12/an
   - [Namecheap](https://www.namecheap.com) - ~$15/an
   - [Cloudflare](https://www.cloudflare.com/products/registrar/) - Prix au coût

2. **Configurer le domaine :**
   - Achetez votre domaine (ex: `imane-portfolio.app`)
   - Dans votre plateforme de déploiement (Netlify/Vercel), ajoutez le domaine
   - Configurez les DNS selon les instructions
   - Attendez la propagation DNS (peut prendre jusqu'à 48h)

---

## 🔧 Build Local (Test avant déploiement)

Pour tester votre build localement :

```bash
# Installer les dépendances
npm install

# Build de production
npm run build

# Tester le build (optionnel - nécessite un serveur HTTP)
npx http-server dist/portfolio/browser -p 8080
```

---

## 📝 Notes Importantes

1. **Base Href :** Si vous déployez sur un sous-dossier (comme GitHub Pages), vous devrez peut-être modifier le `base href` dans `angular.json`

2. **Variables d'environnement :** Si vous utilisez des variables d'environnement, configurez-les dans votre plateforme de déploiement

3. **HTTPS :** Toutes les plateformes mentionnées fournissent HTTPS automatiquement

4. **Mises à jour :** Après chaque push sur GitHub, votre site sera automatiquement redéployé (si configuré)

---

## 🆘 Dépannage

**Problème : Routes Angular ne fonctionnent pas**
- Solution : Vérifiez que le fichier `_redirects` ou la configuration de redirection est correcte

**Problème : Assets ne se chargent pas**
- Solution : Vérifiez que le `base href` est correct dans `angular.json`

**Problème : Build échoue**
- Solution : Vérifiez que toutes les dépendances sont dans `package.json` et non dans `node_modules` seulement

---

## 📞 Support

Pour toute question, consultez la documentation officielle :
- [Netlify Docs](https://docs.netlify.com)
- [Vercel Docs](https://vercel.com/docs)
- [GitHub Pages Docs](https://docs.github.com/pages)
- [Firebase Hosting Docs](https://firebase.google.com/docs/hosting)

---

**Bonne chance avec votre déploiement ! 🎉**

