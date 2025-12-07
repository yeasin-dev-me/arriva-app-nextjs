# Enable GitHub Pages via API
# Usage: Run this script to enable GitHub Pages for the repository

$owner = "yeasin-dev-me"
$repo = "arriva-app-nextjs"

Write-Host "`nEnabling GitHub Pages for $owner/$repo..." -ForegroundColor Yellow
Write-Host "`nYou have two options:`n" -ForegroundColor Cyan

Write-Host "Option 1: Manual (Recommended - Easiest)" -ForegroundColor Green
Write-Host "==========================================" -ForegroundColor Green
Write-Host "1. Open: https://github.com/$owner/$repo/settings/pages" -ForegroundColor White
Write-Host "2. Under 'Build and deployment' section:" -ForegroundColor White
Write-Host "   - Source: Select 'GitHub Actions'" -ForegroundColor Yellow
Write-Host "3. Click 'Save'" -ForegroundColor White
Write-Host "4. The workflow will automatically re-run" -ForegroundColor White

Write-Host "`nOption 2: Using GitHub CLI" -ForegroundColor Green
Write-Host "==========================================" -ForegroundColor Green
Write-Host "Run these commands:" -ForegroundColor White
Write-Host ""
Write-Host "gh auth login" -ForegroundColor Cyan
Write-Host "gh api --method POST /repos/$owner/$repo/pages -f build_type=workflow" -ForegroundColor Cyan

Write-Host "`nAfter enabling, monitor deployment:" -ForegroundColor Yellow
Write-Host "https://github.com/$owner/$repo/actions" -ForegroundColor Cyan
Write-Host ""
