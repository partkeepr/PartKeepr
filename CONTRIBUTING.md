# Reporting Bugs

Use the [GitHub issue tracker](https://github.com/partkeepr/PartKeepr) for bugs and feature requests. Please do NOT post usage or installation questions there, it is not a forum!

Guidelines:

 * Create __one issue per bug or feature request__
 * __Do not mix__ multiple bugs or feature requests into a single issue
 * __Search the issue tracker__ if the issue has already been reported
 * Ensure you are running the latest version of PartKeepr
 * Try to reproduce the problem on [demo.partkeepr.org](https://demo.partkeepr.org) prior reporting the issue and indicate in the issue that you have done so
 * Report your __browser type and version__, any __JavaScript errors in the console__ and any other details like __server operating system__, __php version__, __SQL Server type and version__ etc.
* Check your logs, especially your __Web Server Log__ as well as __app/logs/partkeepr.log__
* Only attach the parts of the logs which are __relevant__ to the problem.
* Make sure the problem is __reproducible__. If it only happened one time, you have to find out on how to reproduce it.
* Explain, in simple words, __when__ the issue occurred. For example: Don't write "I can't create a part". Rather write: "I clicked on Add Part, entered a Part Name, then I clicked the save button, then nothing happens. There were no JavaScript errors in the console, and no HTTP Request was sent."
* Try to limit your bug report to only __essential__ steps on how to reproduce the issue.
* In short, help the volunteers maintaining the project to spend as little effort as possible on the issue, so that we can have more time adding features and fixing bugs more easily.

For further reading have a look at https://www.softwaretestinghelp.com/how-to-write-good-bug-report/ on how to write good bug reports.


Use the dedicated mailing list or IRC for general questions as described on the [PartKeepr Support Page](https://www.partkeepr.org/support/).

# Contributing Code

Create a pull request on GitHub to contribute new features and bugfixes.

Guidelines:

 * Use the [PSR-2](https://github.com/php-fig/fig-standards/blob/master/accepted/PSR-2-coding-style-guide.md) code style standard
 * You can use the [php-cs-fixer](http://cs.sensiolabs.org/) to fix the code style
 * Ensure all unit tests pass after your change! [Read on how to run unit tests](https://wiki.partkeepr.org/wiki/Developers/Unit_Testing)
 * Contribute unit tests for new features and bugfixes if possible
