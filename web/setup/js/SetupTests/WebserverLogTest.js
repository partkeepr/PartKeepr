/**
 * Tests if the web server can handle pathInfo
 */
Ext.define('PartKeeprSetup.WebserverLogDirectoryTest', {
    extend: 'PartKeeprSetup.AbstractTest',
    url: '../../app/logs/ignore.json',
    method: 'GET',
    name: "PHP",
    message: "app/logs access check",
    onSuccess: function (response) {
        try {
            var responseObj = Ext.decode(response.responseText);
        } catch (e) {
            var responseObj = {};
        }

        if (responseObj.message && responseObj.message === "readable") {
            this.success = false;
            this.resultMessage = "Web Server misconfiguration";
            this.errors = ['Your <code>app/logs</code> directory is readable. Please either move your web server\'s document root to the web/ directory or configure <code>app/logs</code> to disallow access. For further information please read <a href="https://wiki.partkeepr.org/wiki/KB00007:Prevent_Access_to_the_logs_directory" target="_blank">wiki about how to prevent access to the logs directory</a>'];

            if (this.callback) {
                this.callback.appendTestResult(this);
            }

            if (this.success) {
                this.fireEvent("complete", this);
            }
        } else {
            this.onFailure();
        }
    },
    /**
     * This method is being called when a 404 or 500 error is returned - which indicates that the logs directory is
     * not readable.
     */
    onFailure: function () {
        this.success = true;
        this.resultMessage = "app/logs not readable";

        if (this.callback) {
            this.callback.appendTestResult(this);
        }

        if (this.success) {
            this.fireEvent("complete", this);
        }


    }
});
