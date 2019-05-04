#/bin/sh
unzip "$HOME/.talisman/bin/talisman_html_report.zip" -d "$HOME/.talisman/bin"
mv "$HOME/.talisman/bin/talisman-html-report-0.1" "$HOME/.talisman/bin/talisman_html_report"
rm "$HOME/.talisman/bin/talisman_html_report.zip"

echo "Talisman HTML report is installed!"
