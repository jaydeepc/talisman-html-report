<div style="display: flex; justify-content: center;">
	<h1 align="center">
		<img class=logo align=bottom width="5%" height="5%" src="https://thoughtworks.github.io/talisman/logo.svg" />
		Talisman HTML Report</h1>
</div>

## Table of Contents
- [What is Talisman HTML Report?](#what-is-talisman-html-report)
- [Installation](#installation)

# What is Talisman HTML Report?
Talisman HTML Report provides you with a dashboard to monitor the status of your reporsitory.
You will need to have Talisman installed on your machine to generate the scan report of your repository (Please refer [Talisman documentation](https://github.com/thoughtworks/talisman) to understand how Talisman works.

# Installation

``` curl https://github.com/jaydeepc/talisman-html-report/archive/v1.1.zip  -o ~/.talisman/bin/talisman_html_report.zip -J -L && cd ~/.talisman/bin && unzip talisman_html_report.zip -d . && mv talisman-html-report-1.2 talisman_html_report && rm talisman_html_report.zip ```

Please download the source code with the above command and start a HTTP server in the directory where the code has been downloaded. Below is a recommended approach to start a HTTP server:

``` python3 -m http.server```

Once the server is up, you can access [localhost](localhost:8000) to view the dashboard.
