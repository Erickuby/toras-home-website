Add-Type -AssemblyName System.Drawing
$inPath = "C:\Users\ericc\Downloads\code-sprouts-main\code-sprouts-main\src\assets\gallery\new-gallery-09.jpeg"
$outPath = "C:\Users\ericc\Downloads\code-sprouts-main\code-sprouts-main\src\assets\gallery\new-gallery-09-fixed.jpeg"
try {
    $img = [System.Drawing.Image]::FromFile($inPath)
    $img.RotateFlip([System.Drawing.RotateFlipType]::Rotate90FlipNone)
    $img.Save($outPath, [System.Drawing.Imaging.ImageFormat]::Jpeg)
    $img.Dispose()
    Write-Host "SUCCESS"
} catch {
    Write-Host "ERROR: $_"
}
