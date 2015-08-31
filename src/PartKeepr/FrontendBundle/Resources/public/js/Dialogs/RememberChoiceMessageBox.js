/**
 * Implementation of a message box which supports a "remember choice" checkbox.
 */
Ext.define('PartKeepr.RememberChoiceMessageBox', {
    extend: 'Ext.window.MessageBox',

    escButtonAction: null,

    /**
     * The user preference to set when "remember choice" is selected
     * @var string
     */
    dontAskAgainProperty: null,

    /**
     * The value to set the user preference to
     */
    dontAskAgainValue: false,

    initComponent: function ()
    {
        this.callParent();

        this.rememberChoiceCheckbox = Ext.create("Ext.form.field.Checkbox", {
            boxLabel: i18n("Don't ask again"),
            margin: {
                top: 10
            }
        });

        this.promptContainer.add(this.rememberChoiceCheckbox);

    },
    onEsc: function ()
    {
        if (this.escButtonAction !== null) {
            var btnIdx;

            switch (this.escButtonAction) {
                case "ok":
                    btnIdx = 0;
                    break;
                case "yes":
                    btnIdx = 1;
                    break;
                case "no":
                    btnIdx = 2;
                    break;
                case "cancel":
                    btnIdx = 3;
                    break;
                default:
                    btnIdx = 3;
                    break;
            }

            this.btnCallback(this.msgButtons[btnIdx]);
        } else {
            this.callParent();
        }
    },
    btnCallback: function (btn, event)
    {
        this.callParent(arguments);

        if (btn === "ok") {
            PartKeepr.getApplication().setUserPreference(this.dontAskAgainProperty, this.dontAskAgainValue);
        }

    }
});