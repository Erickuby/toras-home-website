Add-Type -AssemblyName System.Drawing
$images = Get-ChildItem "src/assets/gallery/*.jp*"
foreach ($img in $images) {
    $bmp = [System.Drawing.Image]::FromFile($img.FullName)
    Write-Host "$($img.Name) - $($bmp.Width)x$($bmp.Height)"
    $bmp.Dispose()
}
