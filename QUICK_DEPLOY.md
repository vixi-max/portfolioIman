# ⚡ Déploiement Rapide - Guide Express

## 🎯 Méthode la Plus Simple : Netlify (5 minutes)

### Étape 1 : Préparer votre code
```bash
# Assurez-vous que tout est commité
git add .
git commit -m "Ready for deployment"
git push origin main
```

### Étape 2 : Déployer sur Netlify

1. **Allez sur [netlify.com](https://www.netlify.com)**
2. **Cliquez sur "Sign up"** → Connectez-vous avec GitHub
3. **Cliquez sur "Add new site"** → "Import an existing project"
4. **Sélectionnez votre repository** (portfolio)
5. **Configuration :**
   - Build command: `npm run build`
   - Publish directory: `dist/portfolio/browser`
6. **Cliquez sur "Deploy site"**

✅ **C'est tout !** Votre portfolio sera accessible sur `votreportfolio.netlify.app`

---

## 🌐 Ajouter un Domaine Personnalisé (.app)

### Option A : Via Netlify (Recommandé)

1. Dans votre site Netlify → **Domain settings**
2. Cliquez sur **"Add custom domain"**
3. Entrez votre domaine (ex: `imane-portfolio.app`)
4. Suivez les instructions DNS

### Option B : Acheter un Domaine .app

**Où acheter :**
- [Google Domains](https://domains.google) - ~$12/an
- [Namecheap](https://www.namecheap.com) - ~$15/an

**Puis :**
- Configurez les DNS dans Netlify selon les instructions

---

## 🚀 Alternative : Vercel (Aussi Simple)

```bash
# Installer Vercel CLI
npm install -g vercel

# Dans le dossier portfolio
vercel
```

Ou via [vercel.com](https://vercel.com) → Importez votre repo GitHub

---

## 📝 Commandes Utiles

```bash
# Build local pour tester
npm run build

# Voir le résultat
npx http-server dist/portfolio/browser -p 8080
```

---

## ❓ Problèmes Courants

**Routes ne fonctionnent pas ?**
- ✅ Le fichier `netlify.toml` est déjà configuré
- ✅ Le fichier `_redirects` est déjà créé

**Build échoue ?**
- Vérifiez que Node.js version 18+ est installé
- Exécutez `npm install` avant le build

---

**Besoin d'aide ?** Consultez `DEPLOY.md` pour plus de détails.

