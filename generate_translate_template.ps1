
$data = $(Get-ChildItem -r -i *.js | Select-String 'i18n\("([\w\s]*)"\)' | ForEach-Object -Process {$_.Matches[0].Groups[1].Value} | Select-Object -Unique | Sort-Object |ForEach-Object -Process {"`n`"{0}`":`"{0}`"" -f $_})
$data2 = $data -join ','
 "{`"translation`":
    {$data2}
}" | Out-File -FilePath translation_template.json


