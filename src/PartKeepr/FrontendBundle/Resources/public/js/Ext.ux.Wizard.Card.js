/**
 * Licensed under GNU LESSER GENERAL PUBLIC LICENSE Version 3
 *
 * @author Thorsten Suckow-Homberg <ts@siteartwork.de>
 * @url http://www.siteartwork.de/wizardcomponent
 */

/**
 * @class Ext.ux.Wiz.Card
 * @extends Ext.FormPanel
 *
 * A specific {@link Ext.FormPanel} that can be used as a card in a
 * {@link Ext.ux.Wiz}-component. An instance of this card does only work properly
 * if used in a panel that uses a {@see Ext.layout.CardLayout}-layout.
 *
 * @constructor
 * @param {Object} config The config object
 */
Ext.define('Ext.ux.wizard.Card', {
    extend: 'Ext.form.Panel',
    cardTitle: '',
    cls: 'ux-wiz-card',

    /**
    * @cfg {Boolean} header "True" to create the header element. Defaults to
    * "false". See {@link Ext.form.FormPanel#header}
    */
    header: false,

    /**
    * @cfg {Strting} hideMode Hidemode of this component. Defaults to "offsets".
    * See {@link Ext.form.FormPanel#hideMode}
    */
    hideMode: 'display',

    initComponent: function () {

        this.cardTitle = this.title;
        this.title = (this.showTitle ? '<span style="' + this.titleStyle + '" class="' + this.titleCls + '" >' + this.title + '</span>' : '');

        if (this.showTitle) {
            this.header = true;
        }

        this.dockedItems = [{
            xtype: 'container',
            xtype: 'toolbar',
            dock: 'bottom',
            ui: 'footer',
            layout: {
                type: 'hbox',
                align: 'middle'
            },
            padding: '10 10 5',

            items: [{
                xtype: 'component',
                // id: 'formErrorState',
                errorpanel: true,
                baseCls: 'form-error-state',
                flex: 1,
                validText: this.validText,
                invalidText: this.invalidText || 'Error/s detected. Please modify...',
                tipTpl: Ext.create('Ext.XTemplate', '<ul><tpl for="."><li><span class="field-name">{name}</span>: <span class="error">{error}</span></li></tpl></ul>'),

                getTip: function () {
                    var tip = this.tip;
                    if (!tip) {
                        tip = this.tip = Ext.widget('tooltip', {
                            target: this.el,
                            title: 'Error Details:',
                            autoHide: true,
                            anchor: 'top',
                            mouseOffset: [-11, -2],
                            closable: true,
                            constrainPosition: false,
                            cls: 'errors-tip'
                        });
                        tip.show();
                    }
                    return tip;
                },

                setErrors: function (errors) {
                    var me = this,
                        baseCls = me.baseCls,
                        tip = me.getTip();

                    errors = Ext.Array.from(errors);

                    // Update CSS class and tooltip content
                    if (errors.length) {
                        me.addCls(baseCls + '-invalid');
                        me.removeCls(baseCls + '-valid');
                        me.update(me.invalidText);
                        tip.setDisabled(false);
                        tip.update(me.tipTpl.apply(errors));
                        tip.show();
                    } else {
                        me.addCls(baseCls + '-valid');
                        me.removeCls(baseCls + '-invalid');
                        me.update(me.validText);
                        tip.setDisabled(true);
                        tip.hide();
                    }
                }
            }]
        }];

        this.callParent();

    },

    // -------- helper
    isValid: function () {

        return !this.getForm().isDirty();
    },

    // -------- overrides

    /**
    * Overrides parent implementation since we allow to add any element
    * in this component which must not be neccessarily be a form-element.
    * So before a call to "isValid()" is about to be made, this implementation
    * checks first if the specific item sitting in this component has a method "isValid" - if it
    * does not exists, it will be added on the fly.
    */
    bindHandler: function () {

        Ext.each(this.form.items, function (f) {
            if (!f.isValid) {
                f.isValid = Ext.emptyFn;
            }
        });
    },

    /*
    * Listen for validity change on the entire form and update the combined error icon
    */
    listeners: {
        fieldvaliditychange: function () {
            this.updateErrorState();
        },
        fielderrorchange: function () {
            this.updateErrorState();
        }
    },

    updateErrorState: function () {
        var me = this,
                errorCmp, fields, errors;

        if (me.hasBeenDirty || me.getForm().isDirty()) { //prevents showing global error when form first loads
            errorCmp = me.down('component[errorpanel]');
            fields = me.getForm().getFields();
            errors = [];
            fields.each(function (field) {
                Ext.Array.forEach(field.getErrors(), function (error) {
                    errors.push({ name: field.getFieldLabel(), error: error });
                });
            });
            errorCmp.setErrors(errors);
            me.hasBeenDirty = true;
        }
    },

    /**
    * Overrides parent implementation. This is needed because in case
    * this method uses "monitorValid=true", the method "startMonitoring" must
    * not be called, until the "show"-event of this card fires.
    */
    initEvents: function () {
        var old = this.monitorValid;
        this.monitorValid = false;
        this.callParent();
        this.monitorValid = old;
    },

    // -------- listener
    /**
    * Checks wether the beforecardhide-event may be triggered.
    */
    bubbleBeforeHideEvent: function () {
        var ly = this.ownerCt.layout;
        var activeItem = ly.activeItem;

        if (activeItem && activeItem.id === this.id) {
            //return this.fireEvent('beforedeactivate', this);
        }

        return true;
    },

    /**
    * Stops monitoring the form elements in this component when the
    * 'hide'-event gets fired.
    */
    onCardHide: function () {
        if (this.monitorValid) {
            this.stopMonitoring();
        }
    },

    /**
    * Starts monitoring the form elements in this component when the
    * 'show'-event gets fired.
    */
    onCardShow: function () {
        if (this.monitorValid) {
            this.startMonitoring();
        }
    },


    /**
    * startMonitoring he form elements
    *
    */
    startMonitoring: function () {
        this.startPolling();
    },


    /**
    * startMonitoring he form elements
    *
    */
    stopMonitoring: function () {
        this.stopPolling();
    }

});