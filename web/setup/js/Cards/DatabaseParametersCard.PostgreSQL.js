/**
 * This card displays the database parameters for the PostgreSQL database.
 */
Ext.define('PartKeeprSetup.DatabaseParametersCard.PostgreSQL', {
    extend: 'Ext.panel.Panel',

    /*
     * Various style settings
     */
    border: false,
    layout: 'column',
    bodyStyle: {
        background: "none"
    },
    defaults: {
        labelWidth: 120
    },

    /**
     * Initializes the component and creates the various fields
     */
    initComponent: function ()
    {
        this.createHintTemplate = Ext.create("Ext.Template", [
            "<code>CREATE USER {user} WITH UNENCRYPTED PASSWORD '{password}'; CREATE DATABASE {dbname} OWNER {user};<br/><br/></code>"
        ]);

        this.masterTemplate = Ext.create("Ext.Template",
            ["The database must be manually created prior installation.<br/><br/><b>POSTGRES IS UNSUPPORTED; PROCEED AT YOUR OWN RISK</b>"]);

        this.hostname = Ext.create("Ext.form.field.Text", {
            fieldLabel: 'Database Hostname',
            labelWidth: this.defaults.labelWidth
        });

        this.hostname.on("change", this.onUpdateParameters, this);

        this.username = Ext.create("Ext.form.field.Text", {
            fieldLabel: 'Database Username',
            labelWidth: this.defaults.labelWidth
        });

        this.username.on("change", this.onUpdateParameters, this);

        this.password = Ext.create("Ext.form.field.Text", {
            fieldLabel: 'Database Password',
            inputType: "password",
            labelWidth: this.defaults.labelWidth
        });

        this.password.on("change", this.onUpdateParameters, this);

        this.databaseName = Ext.create("Ext.form.field.Text", {
            fieldLabel: 'Database Name',
            labelWidth: this.defaults.labelWidth
        });

        this.databaseName.on("change", this.onUpdateParameters, this);

        this.port = Ext.create("Ext.form.field.Number", {
            minValue: 0,
            flex: 1,
            disabled: true,
            value: '5432',
            labelWidth: this.defaults.labelWidth,
            validateOnBlur: true,
            validateOnChange: false,
            validator: function (value)
            {
                if (value === "" || value === 0) {
                    this.setValue(5432);
                }
                return true;
            }
        });

        this.portDefault = Ext.create("Ext.form.field.Checkbox", {
            boxLabel: 'Default',
            flex: 1,
            checked: true,
            listeners: {
                change: function (field)
                {
                    if (field.getValue()) {
                        this.port.disable();
                        this.port.setValue(5432);
                    } else {
                        this.port.enable();
                    }
                },
                scope: this
            }
        });

        this.showHintCheckbox = Ext.create("Ext.form.field.Checkbox", {
            xtype: 'checkboxfield',
            boxLabel: 'Show commands to create the database',
            listeners: {
                change: this.onUpdateParameters,
                scope: this
            }
        });

        this.items = [
            {
                xtype: 'panel',
                border: false,
                width: "300px",
                bodyStyle: {
                    background: "none"
                },
                items: [
                    this.hostname,
                    this.databaseName,
                    this.username,
                    this.password,
                    {
                        xtype: 'fieldcontainer',
                        labelWidth: this.defaults.labelWidth,
                        layout: 'hbox',
                        width: 300,
                        fieldLabel: 'Database Port',
                        items: [this.port, this.portDefault]
                    }

                ]
            }, {
                xtype: 'panel',
                border: false,
                bodyStyle: {
                    background: "none"
                },
                items: [
                    this.showHintCheckbox,
                    {
                        xtype: 'container',
                        border: false,
                        style: 'overflow: auto;',
                        width: "450px",
                        height: "100px",
                        autoScroll: true,
                        layout: 'fit',
                        id: 'postgresql-parameters-hint',
                        html: "&nbsp"
                    }
                ]
            }
        ];

        this.callParent();

        this.on("activate", this.onUpdateParameters, this);
    },
    /**
     * This method gets fired as soon as something in the form was changed.
     *
     * We do this because of the real-time update of the "hints" message, which
     * assists the user with commands to execute on the database.
     */
    onUpdateParameters: function ()
    {
        if (this.showHintCheckbox.checked) {
            var host;

            if (this.hostname.getValue() == "localhost" || this.hostname.getValue() == "127.0.0.1") {
                host = this.hostname.getValue();
            } else {
                host = "&lt;YOUR-CONNECTING-IP&gt;";
            }

            this.createHintTemplate.overwrite(Ext.getCmp("postgresql-parameters-hint").getEl(), {
                localhost: host,
                user: this.username.getValue(),
                password: this.password.getValue(),
                name: this.databaseName.getValue()
            });

            this.masterTemplate.append(Ext.getCmp("postgresql-parameters-hint").getEl());
        } else {
            this.masterTemplate.overwrite(Ext.getCmp("postgresql-parameters-hint").getEl());
        }

        if (this.hostname.getValue() !== "" && this.username.getValue() !== "" && this.password.getValue() !== "" &&
            this.databaseName.getValue() !== "") {

            Ext.ComponentQuery.query('#nextBtn')[0].enable();
        }

        var config = PartKeeprSetup.getApplication().getSetupConfig();

        Ext.merge(config, {
            values: {
                database_driver: 'pdo_pgsql',
                database_host: this.hostname.getValue(),
                database_user: this.username.getValue(),
                database_password: this.password.getValue(),
                database_name: this.databaseName.getValue(),
                database_port: this.port.getValue()
            }
        });
    }
});
