Ext.define("PartKeepr.BarcodeScanner.Manager", {
    monitor: false,
    monitoredKeys: "",

    barcodeInputField: null,

    registerBarcodeScannerHotkey: function ()
    {
        this.monitor = false;
        this.runnerTask = new Ext.util.DelayedTask(function ()
        {
            this.stopKeyMonitoring();
        }, this);

        Ext.get(document).on("keydown", this.onKeyPress, this, {
            priority: 10000
        });
    },
    /**
     * Stops monitoring and executes the action found in the intercepted keys.
     */
    stopKeyMonitoring: function ()
    {
        this.monitor = false;
        this.runnerTask.cancel();

        this.executeAction(this.monitoredKeys);
        this.monitoredKeys = "";
    },
    /**
     * Starts monitoring for input events, up to a configured timeout.
     */
    startKeyMonitoring: function ()
    {
        this.monitoredKeys = "";
        this.monitor = true;
        this.runnerTask.delay(PartKeepr.getApplication().getSystemPreference("partkeepr.barcodeScanner.timeout", 500));
    },
    /**
     * Intercepts keypresses when a barcode scanner hotkey was detected up to the configured timeout.
     */
    onKeyPress: function (e)
    {
        var hotKeyPressed = false;

        var hotKey = PartKeepr.getApplication().getSystemPreference("partkeepr.barcodeScanner.key", "");

        if (hotKey === "") {
            return;
        }

        if (e.event.key === hotKey) {
            hotKeyPressed = true;
        }

        if (PartKeepr.getApplication().getSystemPreference("partkeepr.barcodeScanner.modifierCtrl", false)) {
            if (!e.ctrlKey) {
                hotKeyPressed = false;
            }
        }

        if (PartKeepr.getApplication().getSystemPreference("partkeepr.barcodeScanner.modifierShift", false)) {
            if (!e.shiftKey) {
                hotKeyPressed = false;
            }
        }

        if (PartKeepr.getApplication().getSystemPreference("partkeepr.barcodeScanner.modifierAlt", false)) {
            if (!e.altKey) {
                hotKeyPressed = false;
            }
        }

        if (hotKeyPressed) {
            this.startKeyMonitoring();
            return;
        }


        if (this.monitor) {
            if (PartKeepr.getApplication().getSystemPreference("partkeepr.barcodeScanner.enter", true)) {
                if (e.event.code == "Enter") {
                    this.stopKeyMonitoring();
                    return;
                }
            }

            if (!e.isSpecialKey()) {
                this.monitoredKeys += e.event.key;
            }
            this.runnerTask.delay(
                PartKeepr.getApplication().getSystemPreference("partkeepr.barcodeScanner.timeout", 500));
            e.stopEvent();
        }
    },
    /**
     * Returns a list of all class names which provide actions.
     *
     * @return {Array} An array of action class names
     */
    getActions: function ()
    {
        var actions = [
            "PartKeepr.BarcodeScanner.Actions.SearchPart",
            "PartKeepr.BarcodeScanner.Actions.AddRemoveStock",
            "PartKeepr.BarcodeScanner.Actions.AddPart"
        ];

        return actions;
    },
    /**
     * Executes an action by parsing the input and deciding which action to execute.
     *
     * @param {String} input The intercepted keys
     */
    executeAction: function (input)
    {
        var actions = this.getActionsByInput(input);

        for (var i = 0; i < actions.length; i++) {
            if (actions[i] !== null) {
                actions[i].execute();
            }
        }
    },
    getActionsByInput: function (input)
    {
        var i, actions = PartKeepr.getApplication().getSystemPreference("partkeepr.barcodeScanner.actions", []),
            foundActions = [];

        var barcodeScannerActionsStore = Ext.create("Ext.data.Store", {
            fields: ["code", "action", "configuration"],
            data: []
        });

        var actionStore = Ext.create("PartKeepr.Data.store.BarcodeScannerActionsStore");

        for (i = 0; i < actions.length; i++) {
            var item = actions[i];

            barcodeScannerActionsStore.add({
                code: item.code,
                action: actionStore.findRecord("action", item.action),
                configuration: item.config
            });
        }

        barcodeScannerActionsStore.sort(
            function (data1, data2)
            {
                if (data1.get("code").length == data2.get("code").length) {
                    return 0;
                }
                if (data1.get("code").length > data2.get("code").length) {
                    return -1;
                } else {
                    return 1;
                }
            }
        );

        var barcodeScannerActions = barcodeScannerActionsStore.getData();
        var code, className, config;

        for (i = 0; i < barcodeScannerActions.getCount(); i++) {
            code = barcodeScannerActions.getAt(i).get("code");

            if (input.substr(0, code.length) === code) {
                className = barcodeScannerActions.getAt(i).get("action").get("action");
                config = barcodeScannerActions.getAt(i).get("configuration");

                foundActions.push(Ext.create(className, config, input.substr(code.length)));
            }
        }

        return foundActions;
    }
});
