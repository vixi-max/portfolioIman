# 🚀 Guide de Configuration Git et GitHub - PowerShell

## ✅ Étape 1 : Git est déjà initialisé !

Le repository Git local est maintenant initialisé.

---

## 📋 Étape 2 : Créer le Repository sur GitHub

### Option A : Via l'interface GitHub (Recommandé)

1. **Allez sur [github.com](https://github.com)**
2. **Connectez-vous** à votre compte (vixi-max)
3. **Cliquez sur le "+" en haut à droite** → "New repository"
4. **Remplissez les informations :**
   - Repository name: `portfolio` (ou un autre nom)
   - Description: "Mon portfolio professionnel - Angular"
   - **Public** (pour GitHub Pages gratuit) ou **Private**
   - **NE COCHEZ PAS** "Initialize with README" (on a déjà les fichiers)
5. **Cliquez sur "Create repository"**

### Option B : Via GitHub CLI (si installé)

```powershell
gh repo create portfolio --public --source=. --remote=origin --push
```

---

## 🔗 Étape 3 : Connecter le Repository Local à GitHub

**Remplacez `vixi-max` par votre nom d'utilisateur GitHub si différent :**

```powershell
# Ajouter le remote GitHub
git remote add origin https://github.com/vixi-max/portfolio.git

# Vérifier que c'est bien connecté
git remote -v
```

**Si vous avez déjà un remote, supprimez-le d'abord :**
```powershell
git remote remove origin
git remote add origin https://github.com/vixi-max/portfolio.git
```

---

## 📝 Étape 4 : Ajouter tous les fichiers et faire le premier commit

```powershell
# Vérifier les fichiers à ajouter
git status

# Ajouter tous les fichiers
git add .

# Faire le premier commit
git commit -m "Initial commit: Portfolio Angular avec projets DevOps"

# Vérifier que tout est bien commité
git status
```

---

## 🌿 Étape 5 : Créer et basculer sur la branche main

```powershell
# Créer la branche main (si pas déjà créée)
git branch -M main

# Vérifier la branche actuelle
git branch
```

---

## ⬆️ Étape 6 : Pousser le code sur GitHub

```powershell
# Pousser sur GitHub (première fois)
git push -u origin main
```

**Si vous êtes demandé de vous authentifier :**
- Utilisez un **Personal Access Token** (pas votre mot de passe)
- Créez-en un ici : [github.com/settings/tokens](https://github.com/settings/tokens)
- Scopes nécessaires : `repo` (toutes les permissions repo)

---

## ✅ Vérification

1. **Allez sur votre repository GitHub** : `https://github.com/vixi-max/portfolio`
2. **Vérifiez que tous vos fichiers sont présents**

---

## 🔄 Commandes pour les prochaines mises à jour

```powershell
# Ajouter les modifications
git add .

# Commit avec un message
git commit -m "Description de vos modifications"

# Pousser sur GitHub
git push origin main
```

---

## 🆘 Dépannage

### Erreur : "remote origin already exists"
```powershell
git remote remove origin
git remote add origin https://github.com/vixi-max/portfolio.git
```

### Erreur : "authentication failed"
- Créez un Personal Access Token sur GitHub
- Utilisez-le comme mot de passe lors du push

### Erreur : "branch 'main' does not exist"
```powershell
git checkout -b main
git add .
git commit -m "Initial commit"
git push -u origin main
```

---

## 📚 Prochaines Étapes

Une fois le code sur GitHub, vous pouvez :
1. **Déployer sur Netlify** (voir `QUICK_DEPLOY.md`)
2. **Activer GitHub Pages** (voir `DEPLOY.md`)
3. **Déployer sur Vercel** (voir `DEPLOY.md`)

---

**Besoin d'aide ?** Consultez la documentation GitHub : [docs.github.com](https://docs.github.com)

