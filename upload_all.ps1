$repo = "Martin-CRM-netizen/brick-bridge"
$branch = "main"

function Upload-File {
    param($localPath, $repoPath)
    
    $content = Get-Content $localPath -Raw
    if (-not $content) { $content = "" }
    $base64Content = [Convert]::ToBase64String([System.Text.Encoding]::UTF8.GetBytes($content))
    
    $existingFile = try { gh api repos/$repo/contents/$repoPath --jq .sha } catch { $null }
    
    $json = @{
        message = "Update $repoPath via API"
        content = $base64Content
        branch = $branch
    }
    
    if ($existingFile) {
        $json.sha = $existingFile
    }
    
    $json | ConvertTo-Json | gh api repos/$repo/contents/$repoPath -X PUT --input -
}

$files = Get-ChildItem -Recurse -File | Where-Object { 
    $_.FullName -notmatch "node_modules" -and 
    $_.FullName -notmatch "\.git" -and 
    $_.FullName -notmatch "\.next" -and
    $_.Name -ne "package-lock.json" # Skip heavy files for now
}

foreach ($file in $files) {
    $relativePath = Resolve-Path $file.FullName -Relative
    $relativePath = $relativePath -replace "^\.\\", ""
    $relativePath = $relativePath -replace "\\", "/"
    
    Write-Host "Uploading $relativePath..."
    Upload-File $file.FullName $relativePath
}
