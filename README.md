
<i>Powered by 		<img class=logo align=bottom width="20%" height="20%" src="https://github.com/jaydeepc/talisman-html-report/raw/master/img/logo_reportmine.png" /><a href="https://jaydeepc.github.io/report-mine-website/" /> </i>

## Table of Contents
- [What is Talisman HTML Report?](#what-is-talisman-html-report)
- [Installation](#installation)

# What is Talisman HTML Report?
Talisman HTML Report provides you with a dashboard to monitor the status of your reporsitory.
You will need to have Talisman installed on your machine to generate the scan report of your repository (Please refer [Talisman documentation](https://github.com/thoughtworks/talisman) to understand how Talisman works.

# Installation

**Prerequisite**
Before running the below command, make sure you have installed [Talisman](https://github.com/thoughtworks/talisman), by going through the Talisman README.


``` curl https://github.com/jaydeepc/talisman-html-report/archive/v1.3.zip  -o ~/.talisman/bin/talisman_html_report.zip -J -L && cd ~/.talisman/bin && unzip talisman_html_report.zip -d . && mv talisman-html-report-1.3 talisman_html_report && rm talisman_html_report.zip ```

Please download the source code with the above command and start a HTTP server in the directory where the code has been downloaded. Below is a recommended approach to start a HTTP server:

``` python -m SimpleHTTPServer <port> (Eg: 8000)```

Once the server is up, you can access [localhost](localhost:8000) to view the dashboard.

## Sample Screenshots

* Welcome

<img width="100%" height="70%" src="https://github.com/jaydeepc/talisman-html-report/raw/master/sample/summary.png" />

* Summary

<img width="100%" height="70%" src="https://github.com/jaydeepc/talisman-html-report/raw/master/sample/execution-summary.png" />

* Detailed Report

<img width="100%" height="70%" src="https://github.com/jaydeepc/talisman-html-report/raw/master/sample/detailed.png" />

* Error Report

<img width="100%" height="70%" src="https://github.com/jaydeepc/talisman-html-report/raw/master/sample/error-report.png" />

<i> **Note**: You don't have to start a server if you are running Talisman in CI or any other hosted environment </i>
