# 🎯 Étapes pour Créer le Repository sur GitHub

## ✅ Étape 1 : Git est déjà configuré localement !

Votre code est déjà commité sur la branche `main`. ✅

---

## 📋 Étape 2 : Créer le Repository sur GitHub

### Via l'interface web (Recommandé)

1. **Allez sur [github.com](https://github.com)** et connectez-vous
2. **Cliquez sur le "+" en haut à droite** → **"New repository"**
3. **Remplissez le formulaire :**
   ```
   Repository name: portfolio
   Description: Mon portfolio professionnel - Angular avec projets DevOps
   Publicité: Public (ou Private selon votre choix)
   ⚠️ NE COCHEZ PAS "Add a README file"
   ⚠️ NE COCHEZ PAS "Add .gitignore"
   ⚠️ NE COCHEZ PAS "Choose a license"
   ```
4. **Cliquez sur "Create repository"**

---

## 🔗 Étape 3 : Connecter le Local à GitHub

**Ouvrez PowerShell dans le dossier `portfolio` et exécutez :**

```powershell
# Remplacez 'vixi-max' par votre nom d'utilisateur GitHub si différent
git remote add origin https://github.com/vixi-max/portfolio.git

# Vérifier que c'est bien connecté
git remote -v
```

**Vous devriez voir :**
```
origin  https://github.com/vixi-max/portfolio.git (fetch)
origin  https://github.com/vixi-max/portfolio.git (push)
```

---

## ⬆️ Étape 4 : Pousser le Code sur GitHub

```powershell
git push -u origin main
```

**Si vous êtes demandé de vous authentifier :**

### Option A : Personal Access Token (Recommandé)

1. **Créez un token :**
   - Allez sur [github.com/settings/tokens](https://github.com/settings/tokens)
   - Cliquez sur **"Generate new token"** → **"Generate new token (classic)"**
   - Nom: `Portfolio Deploy`
   - Expiration: `90 days` (ou plus)
   - Scopes: Cochez **`repo`** (toutes les permissions)
   - Cliquez sur **"Generate token"**
   - **COPIEZ LE TOKEN** (vous ne le reverrez plus !)

2. **Lors du push :**
   - Username: `vixi-max` (votre nom d'utilisateur)
   - Password: **Collez le token** (pas votre mot de passe GitHub)

### Option B : GitHub CLI

```powershell
# Installer GitHub CLI (si pas déjà installé)
winget install --id GitHub.cli

# S'authentifier
gh auth login

# Pousser le code
git push -u origin main
```

---

## ✅ Étape 5 : Vérification

1. **Allez sur votre repository :** `https://github.com/vixi-max/portfolio`
2. **Vérifiez que tous vos fichiers sont présents**
3. **Vous devriez voir :**
   - Tous vos fichiers source
   - Le README.md
   - Les fichiers de configuration (netlify.toml, vercel.json, etc.)

---

## 🚀 Prochaines Étapes

Une fois le code sur GitHub, vous pouvez :

1. **Déployer sur Netlify** (le plus simple) :
   - Allez sur [netlify.com](https://www.netlify.com)
   - Importez votre repository GitHub
   - Voir `QUICK_DEPLOY.md` pour les détails

2. **Activer GitHub Pages** :
   - Settings → Pages → Source: GitHub Actions
   - Voir `DEPLOY.md` pour les détails

---

## 🆘 Dépannage

### Erreur : "remote origin already exists"
```powershell
git remote remove origin
git remote add origin https://github.com/vixi-max/portfolio.git
```

### Erreur : "authentication failed"
- Utilisez un **Personal Access Token** (pas votre mot de passe)
- Voir l'Option A ci-dessus

### Erreur : "repository not found"
- Vérifiez que le repository existe sur GitHub
- Vérifiez que le nom d'utilisateur est correct
- Vérifiez que vous avez les permissions (repository public ou accès au private)

---

**Besoin d'aide ?** Consultez `GIT_SETUP.md` pour plus de détails.

