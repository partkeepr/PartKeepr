/**
 * Tests if the web server can handle rewrites
 */
Ext.define('PartKeeprSetup.WebserverRewriteTest', {
    extend: 'PartKeeprSetup.AbstractTest',
    url: 'webserver-test',
    name: "PHP",
    method: 'GET',
    message: "Testing webserver rewrite capability",
    onFailure: function (response) {
        this.success = false;
        this.resultMessage = "Web Server misconfiguration";
        this.errors = ['Web Server Configuration error. Please read our <a href="https://wiki.partkeepr.org/wiki/KB00005:Web_Server_Configuration" target="_blank">wiki about the proper web server configuration</a>', response.responseText];

        if (this.callback) {
            this.callback.appendTestResult(this);
        }

        if (this.success) {
            this.fireEvent("complete", this);
        }
    }
});
