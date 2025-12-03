# Script PowerShell pour configurer Git et GitHub
# Exécutez ce script avec: .\setup-git.ps1

Write-Host "🚀 Configuration Git et GitHub pour votre Portfolio" -ForegroundColor Cyan
Write-Host ""

# Étape 1: Vérifier si Git est installé
Write-Host "📋 Étape 1: Vérification de Git..." -ForegroundColor Yellow
try {
    $gitVersion = git --version
    Write-Host "✅ Git installé: $gitVersion" -ForegroundColor Green
} catch {
    Write-Host "❌ Git n'est pas installé. Installez-le depuis: https://git-scm.com/download/win" -ForegroundColor Red
    exit 1
}

Write-Host ""

# Étape 2: Vérifier si on est dans un repo Git
Write-Host "📋 Étape 2: Initialisation du repository Git..." -ForegroundColor Yellow
if (Test-Path .git) {
    Write-Host "✅ Repository Git déjà initialisé" -ForegroundColor Green
} else {
    git init
    Write-Host "✅ Repository Git initialisé" -ForegroundColor Green
}

Write-Host ""

# Étape 3: Créer la branche main
Write-Host "📋 Étape 3: Configuration de la branche main..." -ForegroundColor Yellow
git branch -M main
Write-Host "✅ Branche main créée" -ForegroundColor Green

Write-Host ""

# Étape 4: Ajouter tous les fichiers
Write-Host "📋 Étape 4: Ajout des fichiers..." -ForegroundColor Yellow
git add .
Write-Host "✅ Fichiers ajoutés" -ForegroundColor Green

Write-Host ""

# Étape 5: Premier commit
Write-Host "📋 Étape 5: Création du premier commit..." -ForegroundColor Yellow
git commit -m "Initial commit: Portfolio Angular avec projets DevOps"
Write-Host "✅ Commit créé" -ForegroundColor Green

Write-Host ""
Write-Host "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━" -ForegroundColor Cyan
Write-Host "✅ Configuration locale terminée !" -ForegroundColor Green
Write-Host ""
Write-Host "📝 PROCHAINES ÉTAPES:" -ForegroundColor Yellow
Write-Host ""
Write-Host "1. Créez un repository sur GitHub:" -ForegroundColor White
Write-Host "   - Allez sur https://github.com/new" -ForegroundColor Gray
Write-Host "   - Nom: portfolio" -ForegroundColor Gray
Write-Host "   - Public ou Private" -ForegroundColor Gray
Write-Host "   - NE COCHEZ PAS 'Initialize with README'" -ForegroundColor Gray
Write-Host ""
Write-Host "2. Connectez le repository local à GitHub:" -ForegroundColor White
Write-Host "   git remote add origin https://github.com/vixi-max/portfolio.git" -ForegroundColor Cyan
Write-Host "   (Remplacez 'vixi-max' par votre nom d'utilisateur)" -ForegroundColor Gray
Write-Host ""
Write-Host "3. Poussez le code sur GitHub:" -ForegroundColor White
Write-Host "   git push -u origin main" -ForegroundColor Cyan
Write-Host ""
Write-Host "📚 Pour plus de détails, consultez GIT_SETUP.md" -ForegroundColor Yellow
Write-Host "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━" -ForegroundColor Cyan

