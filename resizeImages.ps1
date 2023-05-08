$filePath = $args[0]

foreach ($size in $args[1..$args.Length]) {
    $outFile = [System.IO.Path]::GetDirectoryName($filePath) + "\" + [System.IO.Path]::GetFileNameWithoutExtension($filePath) + "@" + $size + [System.IO.Path]::GetExtension($filePath)
    magick $filePath -resize ${size}"x"${size} $outFile
}
