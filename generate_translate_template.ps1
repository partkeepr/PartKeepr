
$case1 = $(Get-ChildItem -r -i *.js | Select-String "i18n\(`"([^`"]*?)`"\)" -AllMatches | ForEach-Object -Process {$_.Matches[0].Groups[1].Value} | Select-Object -Unique) 
$case2 = $(Get-ChildItem -r -i *.js | Select-String "i18n\(`'([^`']*?)`'\)" -AllMatches | ForEach-Object -Process {$_.Matches[0].Groups[1].Value} | Select-Object -Unique)
$all_case = $case1 + $case2

$key_pairs = $(echo $all_case |Sort-Object |ForEach-Object -Process {$x = $_ -replace "`"","\`""; "`n`"{0}`":`"{0}`"" -f $x})

$all_str = $key_pairs -join ','

"translation=
{$all_str
};" | Out-File -FilePath translation_template.js_temp


