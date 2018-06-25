/**
 * Tests if the web server can handle pathInfo
 */
Ext.define('PartKeeprSetup.WebserverTest', {
    extend: 'PartKeeprSetup.AbstractTest',
    action: 'webserverTest',
    name: "PHP",
    message: "Testing webserver settings",
    onFailure: function (response) {
        this.success = false;
        this.resultMessage = "Web Server misconfiguration";
        this.errors = ['Web Server Configuration error. Please read our <a href="https://wiki.partkeepr.org/wiki/KB00005:Web_Server_Configuration" target="_blank">wiki about the proper web server configuration</a>', response.responseText];
        this.errors.push('Error 1: Tried to send a POST request to setup/webserverTest and it did not succeed.');
        if (this.callback) {
            this.callback.appendTestResult(this);
        }

        if (this.success) {
            this.fireEvent("complete", this);
        }
    }
});
