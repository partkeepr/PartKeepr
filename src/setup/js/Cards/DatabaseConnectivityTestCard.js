/**
 * This card tests the database connectivity for the MySQL database.
 * 
 * Basically this submits all connection settings to a special PHP script,
 * which then attempts to establish the database connection.
 */
Ext.define('PartKeeprSetup.DatabaseConnectivityTestCard', {
	extend: 'PartKeeprSetup.AbstractTestCard',
	
	cardMessage: "Setup tests if the database is reachable. Please note that this may take a minute or two to display a status if your database is not reachable.",
	
	/**
	 * Sets up the tests
	 */
	setupTests: function () {
		var j = Ext.create("PartKeeprSetup.DatabaseConnectivityTest");
    	j.callback = this.testResultPanel;
    	this.tests.push(j);
	}
});
