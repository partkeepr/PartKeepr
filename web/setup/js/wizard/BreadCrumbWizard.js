/**
 * BreadCrumbWizard for ExtJS 4.x, a container that acts as wizard.
 * It also has breadcrumbs at the top to help navigating between views.
 *
 * The BreadCrumbWizard is based on the Extjs Container, so that it can be nested directly in the page or in a pop up window.
 * The child views can still be declared in the items config, and internally it will use card layout to switch between them.
 * The child views need one extra field 'breadCrumbTitle' to set the text be displayed in the bread crumb.
 *
 * The BreadCrumbWizard will fire three events {'validate','submit','close'}
 * The 'validate' event will be fired when leaving from the current view, so validation code can be put in the listener.
 * The 'submit' event will be fired when submit button in the last view is clicked, and the submit data is collected by calling getSubmitData on all child views.
 * Feel free to add/override the getSubmitData method in each view component.
 *
 * @author: twinssbc
 * @version 1.0.1
 * @requires BreadCrumbWizard.css
 * @xtype breadcrumbwizard
 */
Ext.define('Ext.ux.BreadCrumbWizard', {
    extend: 'Ext.container.Container',
    alias: ['widget.breadcrumbwizard'],
    layout: {
        type: 'vbox',
        align: 'stretch'
    },
    defaults: {
        cls: 'x-wizard-component'
    },
    initComponent: function ()
    {
        var me = this,
            breadCrumbComponents = [],
            cardItems = [],
            index,
            childView;

        me.currentIndex = 0;
        for (index = 0; index < me.items.length; index += 1) {
            childView = me.items[index];
            breadCrumbComponents.push({
                xtype: 'button',
                cls: 'x-wizard-breadcrumb',
                disabledCls: 'wizard-breadcrumb-disabled',
                overCls: 'wizard-breadcrumb-over',
                pressedCls: 'wizard-breadcrumb-pressed',
                enableToggle: true,
                toggleGroup: 'breadCrumbGroup',
                allowDepress: false,
                disabled: index !== 0,
                pressed: index === 0,
                index: index,
                text: childView.breadCrumbTitle + " » ",
                listeners: {
                    toggle: {
                        fn: function (button, pressed)
                        {
                            if (pressed) {
                                this.switchView(button.index);
                            }
                        },
                        scope: me
                    }
                }
            });
            cardItems.push(childView);
        }

        me.breadCrumbContainer = Ext.create('widget.container', {
            layout: 'hbox',
            items: breadCrumbComponents
        });
        me.cardContainer = Ext.create('widget.container', {
            layout: 'card',
            flex: 1,
            items: cardItems
        });
        me.items = [
            {
                xtype: 'container',
                layout: 'center',
                style: 'background-color: white; padding: 5px;',
                items: Ext.create('Ext.Img', {
                    height: 90,
                    width: 495,
                    src: 'images/partkeepr-setup.svg',
                    alt: 'PartKeepr'
                }),
            },
            me.breadCrumbContainer,
            me.cardContainer,
            {
                xtype: 'container',
                layout: {
                    type: 'hbox',
                    pack: 'end'
                },
                defaults: {
                    xtype: 'button',
                    cls: 'x-wizard-navigation'
                },
                items: [
                    {
                        text: 'Previous',
                        itemId: 'previousButton',
                        handler: me.onPrevious,
                        disabled: true,
                        scope: me
                    },
                    {
                        text: 'Next',
                        itemId: 'nextBtn',
                        handler: me.onNext,
                        scope: me
                    }
                ]
            }
        ];

        me.callParent();
    },
    switchView: function (index)
    {
        var nextBtn = this.down('#nextBtn'),
            previousButton = this.down('#previousButton'),
            childViewCount = this.cardContainer.items.getCount();
        if (index < childViewCount) {
            nextBtn.enable();

            this.cardContainer.getLayout().setActiveItem(index);
            this.currentIndex = index;

            if (index === 0) {
                previousButton.disable();
            } else {
                previousButton.enable();
            }

            if (index === childViewCount - 1) {
                nextBtn.setText('Submit');
            } else {
                nextBtn.setText('Next');
            }
        } else {
            throw new Error('Invalid view index: ' + index);
        }
    },
    onPrevious: function ()
    {
        var me = this,
            childViewCount = this.cardContainer.items.getCount(),
            currentIndex = me.currentIndex,
            breadCrumbButton;

        for (var i = currentIndex; i < childViewCount; i++) {
            breadCrumbButton = me.breadCrumbContainer.items.getAt(i);
            breadCrumbButton.disable();
        }
        breadCrumbButton = me.breadCrumbContainer.items.getAt(currentIndex - 1);
        breadCrumbButton.toggle();

    },
    onNext: function ()
    {
        var me = this,
            nextBreadCrumbButton,
            currentIndex = me.currentIndex,
            childViews = me.cardContainer.items,
            currentView = childViews.getAt(currentIndex);

        if (this.fireEvent('validate', me, currentView) !== false) {
            if (currentIndex < childViews.getCount() - 1) {
                nextBreadCrumbButton = me.breadCrumbContainer.items.getAt(currentIndex + 1);
                nextBreadCrumbButton.enable();
                nextBreadCrumbButton.toggle();
            } else {
                me.fireEvent('submit', me, me.getSubmitData());
            }
        }
    },
    onClose: function ()
    {
        this.fireEvent('close', this);
    },
    getSubmitData: function ()
    {
        var submitData = {};
        this.cardContainer.items.each(function (childView)
        {
            if (childView.getSubmitData) {
                Ext.merge(submitData, childView.getSubmitData());
            }
        });
        return submitData;
    }
});
