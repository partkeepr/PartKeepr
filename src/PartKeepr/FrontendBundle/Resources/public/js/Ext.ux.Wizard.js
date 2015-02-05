Ext.define('Ext.ux.Wizard', {
    extend: 'Ext.window.Window',
    // layout: 'Ext.ux.wizard.CardLayout',
    layout: 'fit',
    loadMaskConfig: {
        'default': '',
        'saving': 'Saving...',
        'checking': 'Checking...'
    },
    autoRender: true,

    /**
    * @cfg {Number} height The height of the dialog. Defaults to "400".
    */
    height: 650,

    /**
    * @cfg {Number} width The width of the dialog. Defaults to "540".
    */
    width: 800,

    /**
    * @cfg {Boolean} closable Wether the dialog is closable. Defaults to "true".
    * This property will be changed by the "switchDialogState"-method, which will
    * enable/disable controls based on the passed argument. Thus, this config property
    * serves two purposes: Tell the init config to render a "close"-tool, and create a
    * "beforeclose"-listener which will either return true or false, indicating if the
    * dialog may be closed.
    */
    closable: true,

    /**
    * @cfg {Boolean} resizable Wether the dialog is resizable. Defaults to "false".
    */
    resizable: false,

    /**
    * @cfg {Boolean} resizable Wether the dialog is modal. Defaults to "true".
    */
    modal: true,

    /**
    * @cfg {Array} cards A numeric array with the configured {@link Ext.ux.Wiz.Card}s.
    * The index of the cards in the array represent the order in which they get displayed
    * in the wizard (i.e. card at index 0 gets displayed in the first step, card at index 1 gets
    * displayed in the second step and so on).
    */
    cards: [],

    /**
    * @cfg {String} previousButtonText The text to render the previous-button with.
    * Defaults to "&lt; Back" (< Back)
    */
    previousButtonText: '&lt; Previous',

    /**
    * @cfg {String} nextButtonText The text to render the next-button with.
    * Defaults to "Next &gt;" (Next >)
    */
    nextButtonText: 'Next &gt;',

    /**
    * @cfg {String} cancelButtonText The text to render the cancel-button with.
    * Defaults to "Cancel"
    */
    cancelButtonText: 'Cancel',

    /**
    * @cfg {String} finishButtonText The text to render the next-button with when the last
    * step of the wizard is reached. Defaults to "Finish"
    */
    finishButtonText: 'Finish',

    /**
    * @cfg {Object} headerConfig A config-object to use with {@link Ext.ux.Wiz.Header}.
    * If not present, it defaults to an empty object.
    */
    headConfig: null,

    /**
    * @cfg {Object} sideConfig A config-object to use with {@link Ext.ux.Wizard}.
    * If not present, it defaults to an empty object.
    */
    sideConfig: null,

    /**
    * @cfg {Object} cardPanelConfig A config-object to use with {@link Ext.Panel}, which
    * represents the card-panel in this dialog.
    * If not present, it defaults to an empty object
    */
    cardPanelConfig: {},

    /**
    * @param {Ext.Button} The window-button for paging to the previous card.
    * @private
    */
    previousButton: null,

    /**
    * @param {Ext.Button} The window-button for paging to the next card. When the
    * last card is reached, the event fired by and the text rendered to this button
    * will change.
    * @private
    */
    nextButton: null,

    /**
    * @param {Ext.Button} The window-button for canceling the wizard. The event
    * fired by this button will usually close the dialog.
    * @private
    */
    cancelButton: null,

    /**
    * @param {Ex.Panel} The card-panel that holds the various wizard cards
    * ({@link Ext.ux.Wiz.Card}). The card-panel itself uses the custom
    * {@link Ext.ux.layout.CardLayout}, which needs to be accessible by this class.
    * You can get it at {@link http://www.siteartwork.de/cardlayout}.
    * @private
    */
    cardPanel: null,

    /**
    * @param {Number} currentCard The current {@link Ext.ux.Wiz.Card} displayed.
    * Defaults to 0.
    * @private
    */
    currentCard: 0,

    /**
    * @param {Ext.ux.Wiz.Header} The header-panel of the wizard.
    * @private
    */
    headPanel: null,

    /**
    * @param {Number} cardCount Helper for storing the number of cards used
    * by this wizard. Defaults to 0 (inherits "cards.length" later on).
    * @private
    */
    cardCount: 0,

    /**
    * Inits this component with the specified config-properties and automatically
    * creates its components.
    */
    initComponent: function () {

        var c = this.initialConfig, sregion, hregion;

        if (!this.sideConfig) this.sideConfig = {};
        if (!this.headConfig) this.headConfig = {};

        if (c.sideConfig && c.sideConfig.position == 'right') { sregion = 'east'; } else { sregion = 'west'; }
        if (c.headConfig && c.headConfig.position == 'bottom') { hregion = 'south'; } else { hregion = 'north'; }

        Ext.applyIf(this.cardPanelConfig, { region: 'center', items: (this.cards || [{}]), layout: new Ext.ux.wizard.CardLayout(), border: false, activeItem: 0, baseCls: 'ux-wizard-cardpanel' });
        Ext.applyIf(this.sideConfig, { region: sregion, width: 150, layout: 'fit', xtype: 'wizardheader', headerPosition: 'side', steps: this.cards.length, hidden: !(c.sideConfig) });
        Ext.applyIf(this.headConfig, { region: hregion, height: 150, layout: 'fit', xtype: 'wizardheader', headerPosition: 'top', steps: this.cards.length, hidden: !(c.headConfig) });

        this.initButtons();
        this.initPanels();

        var title = this.title || this.headConfig.title;
        title = title || "";

        var items = [];

        items.push(this.sidePanel);
        items.push(this.headPanel);
        items.push(this.cardPanel);

        Ext.apply(this, {
            title: title,
            layout: 'border',
            cardCount: this.cards.length,
            dockedItems: [{
                xtype: 'toolbar',
                dock: 'bottom',
                ui: 'footer',
                defaults: { minWidth: 60 },
                items: [
                    { xtype: 'component', flex: 1 },
                    this.previousButton,
                    this.nextButton,
                    this.cancelButton
                ]
            }],
            items: items
        });

        this.callParent();
    },

    // -------- helper
    /**
    * Returns the form-data of all cards in this wizard. The first index is the
    * id of the card in this wizard,
    * and the values are objects containing key/value pairs in the form of
    * fieldName : fieldValue.
    *
    * @return {Array}
    */
    getWizardData: function () {
        var formValues = {};
        var cards = this.cards;
        for (var i = 0, len = cards.length; i < len; i++) {
            if (cards[i].form) {
                formValues[cards[i].id] = cards[i].form.getValues(false);
            } else {
                formValues[cards[i].id] = {};
            }
        }

        return formValues;
    },

    /**
    * Switches the state of this wizard between disabled/enabled.
    * A disabled dialog will have a {@link Ext.LoadMask} covering the card-panel
    * to prevent user input, and the buttons will be rendered disabled/enabled.
    * If the dialog is closable, the close-tool will be masked, too, and the dialog will not
    * be closable by clicking the "close" tool.
    *
    * @param {Boolean} enabled "false" to prevent user input and mask the elements,
    * otherwise true.
    * @param {String} type The type of msg for the {@Ext.LoadMask} covering
    * the cardPanel, as defined in the cfg property "loadMaskConfig"
    */
    switchDialogState: function (enabled, type) {
        this.showLoadMask(!enabled, type);

        this.previousButton.setDisabled(!enabled);
        this.nextButton.setDisabled(!enabled);
        this.cancelButton.setDisabled(!enabled);

        var ct = this.tools['close'];

        if (ct) {
            switch (enabled) {
                case true:
                    this.tools['close'].unmask();
                    break;

                default:
                    this.tools['close'].mask();
                    break;
            }
        }

        this.closable = enabled;
    },

    /**
    * Shows the load mask for this wizard. By default, the cardPanel's body
    * will be masked.
    *
    * @param {Boolean} show true to show the load mask, otherwise false.
    * @param {String} type The type of message for the {@Ext.LoadMask} covering
    * the cardPanel, as defined in the cfg property "loadMaskConfig"
    */
    showLoadMask: function (show, type) {
        if (!type) {
            type = 'default';
        }

        if (show) {
            if (this.loadMask == null) {
                this.loadMask = new Ext.LoadMask(this.body);
            }
            this.loadMask.msg = this.loadMaskConfig[type];
            this.loadMask.show();
        } else {
            if (this.loadMask) {
                this.loadMask.hide();
            }
        }
    },


    /**
    * show the side panel
    * 
    */
    showSidePanel: function () {
        this.sidePanel.show();
    },


    /**
    * show the side panel
    * 
    */
    showHeadPanel: function () {
        this.headPanel.show();
    },


    /**
    * hide the side panel
    * 
    */
    showSidePanel: function () {
        this.sidePanel.hide();
    },


    /**
    * hide the head panel
    * 
    */
    hideHeadPanel: function () {
        this.headPanel.hide();
    },




    /**
    * Inits the listener for the various {@link Ext.ux.Wiz.Card}s used
    * by this component.
    */
    initEvents: function () {
        this.callParent();

        this.on('beforeclose', this.onBeforeClose, this);
    },

    /**
    * Creates the head- and the card-panel.
    * Be sure to have the custom {@link Ext.ux.layout.CardLayout} available
    * in order to make the card-panel work as expected by this component
    * ({@link http://www.siteartwork.de/cardlayout}).
    */
    initPanels: function () {
        var cards = this.cards;
        var cardPanelConfig = this.cardPanelConfig;

        Ext.apply(this.headConfig, {
            steps: this.cards.length
        });

        this.headPanel = Ext.create('Ext.ux.wizard.Header', this.headConfig);

        this.sidePanel = Ext.create('Ext.ux.wizard.Header', this.sideConfig);

        Ext.apply(cardPanelConfig, {
            layout: 'card', // new Ext.ux.wizard.CardLayout(),
            items: cards
        });

        Ext.applyIf(cardPanelConfig, {
            region: 'center',
            border: false,
            activeItem: 0
        });

        // var cards = this.cards;

        for (var i = 0, len = cards.length; i < len; i++) {
            cards[i].on('beforeactivate', this.onCardShow, this);
            cards[i].on('clientvalidation', this.onClientValidation, this);
        }

        this.cardPanel = Ext.create('Ext.panel.Panel', cardPanelConfig);
    },

    /**
    * Creates the instances for the the window buttons.
    */
    initButtons: function () {
        this.previousButton = new Ext.Button({
            text: this.previousButtonText,
            id: 'wizard-move-prev',
            disabled: true,
            minWidth: 75,
            handler: this.onPreviousClick,
            scope: this
        });

        this.nextButton = new Ext.Button({
            text: this.nextButtonText,
            id: 'wizard-move-next',
            minWidth: 75,
            handler: this.onNextClick,
            scope: this
        });

        this.cancelButton = new Ext.Button({
            text: this.cancelButtonText,
            handler: this.onCancelClick,
            scope: this,
            minWidth: 75
        });
    },

    // -------- listeners

    /**
    * Listener for the beforeclose event.
    * This listener will return true or false based on the "closable"
    * property by this component. This property will be changed by the "switchDialogState"
    * method, indicating if there is currently any process running that should prevent
    * this dialog from being closed.
    *
    * @param {Ext.Panel} panel The panel being closed
    *
    * @return {Boolean}
    */
    onBeforeClose: function (panel) {
        return this.closable;
    },

    /**
    * By default, the card firing this event monitors user input in a frequent
    * interval and fires the 'clientvalidation'-event along with it. This listener
    * will enable/disable the next/finish-button in accordance with it, based upon
    * the parameter isValid. isValid" will be set by the form validation and depends
    * on the validators you are using for the different input-elemnts in your form.
    * If the card does not contain any forms, this listener will never be called by the
    * card itself.
    *
    * @param {Ext.ux.Wiz.Card} The card that triggered the event.
    * @param {Boolean} isValid "true", if the user input was valid, otherwise
    * "false"
    */
    onClientValidation: function (card, isValid) {
        if (!isValid) {
            console.log("setting disabled in onClientValidation");
            this.nextButton.setDisabled(true);
        } else {
            this.nextButton.setDisabled(false);
        }
    },

    /**
    * Listener for the "show" event of the card that gets shown in the card-panel.
    * Renders the next/previous buttons based on the position of the card in the wizard
    * and updates the head-panel accordingly.
    *
    * @param {Ext.ux.Wiz.Card} The card being shown.
    */
    onCardShow: function (card) {
        var parent = card.ownerCt;

        var items = parent.items;

        for (var i = 0, len = items.length; i < len; i++) {
            if (items.get(i).id == card.id) {
                break;
            }
        }

        this.currentCard = i;
        this.headPanel.updateStep(i, card.carTitle);
        this.sidePanel.updateStep(i, card.carTitle);

        if (i == len - 1) {
            this.nextButton.setText(this.finishButtonText);
        } else {
            this.nextButton.setText(this.nextButtonText);
        }

        if (card.isValid()) {
            this.nextButton.setDisabled(false);
        }

        if (i == 0) {
            this.previousButton.setDisabled(true);
        } else {
            this.previousButton.setDisabled(false);
        }

    },


    /**
    * Fires the 'cancel'-event. Closes this dialog if the return value of the
    * listeners does not equal to "false".
    */
    onCancelClick: function () {
        if (this.fireEvent('cancel', this, this.getWizardData()) !== false) {
            this.closable = true;
            this.close();
        }
    },

    /**
    * Fires the 'finish'-event. Closes this dialog if the return value of the
    * listeners does not equal to "false".
    */
    onFinish: function () {
        if (this.fireEvent('finish', this, this.getWizardData()) !== false) {
            this.closable = true;
            this.close();
        }
    },

    /**
    * Listener for the previous-button.
    * Switches to the previous displayed {@link Ext.ux.Wiz.Card}.
    */
    onPreviousClick: function (btn) {
        if (this.currentCard > 0) {
            // this.cardPanel.getLayout().setActiveItem(this.currentCard - 1);
            var mywiz = btn.up('panel').cardPanel;
            this.navigate(mywiz, 'prev');
        }
    },

    /**
    * Listener for the next-button. Switches to the next {@link Ext.ux.Wiz.Card}
    * if the 'beforehide'-method of it did not return false. The functionality
    * for this is implemented in {@link Ext.ux.layout.CardLayout}, which is needed
    * as the layout for the card-panel of this component.
    */
    onNextClick: function (btn) {
        if (this.currentCard == this.cardCount - 1) {
            this.onFinish();
        } else {
            // this.cardPanel.getLayout().setActiveItem(this.currentCard + 1);
            var p = this.cardPanel.items.items[this.currentCard];

            if (p) {
                f = p.getForm();
                if (f.isValid()) {
                    this.navigate(btn.up('panel').cardPanel, "next");
                } else {
                    p.items.items[0].el.frame("#ff0000");
                }
            }
        }
    },
    navigate: function (panel, direction) {
        // This routine could contain business logic required to manage the navigation steps.
        // It would call setActiveItem as needed, manage navigation button state, handle any
        // branching logic that might be required, handle alternate actions like cancellation
        // or finalization, etc.  A complete wizard implementation could get pretty
        // sophisticated depending on the complexity required, and should probably be
        // done as a subclass of CardLayout in a real-world implementation.
        var layout = panel.getLayout();
        layout[direction]();
        Ext.getCmp('wizard-move-prev').setDisabled(!layout.getPrev());
        // Ext.getCmp('wizard-move-next').setDisabled(!layout.getNext());
    },
    afterRender: function () {
        this.callParent();

        var ly = this.cardPanel.getLayout();
    }
});