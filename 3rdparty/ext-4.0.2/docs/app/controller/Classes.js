/**
 * Listeners should be defined here instead of in the view classes
 */
Ext.define('Docs.controller.Classes', {
    extend: 'Ext.app.Controller',

    requires: [
        'Docs.History',
        'Docs.Syntax',
        'Docs.view.cls.Overview'
    ],

    stores: [
        'Favorites',
        'History',
        'Settings'
    ],

    models: [
        'Favorite',
        'History',
        'Setting'
    ],

    refs: [
        {
            ref: 'header',
            selector: 'classheader'
        },
        {
            ref: 'tabPanel',
            selector: 'classtabpanel'
        },
        {
            ref: 'tree',
            selector: 'classtree'
        }
    ],

    init: function() {
        this.addEvents(
            /**
             * @event showClass
             * Fired after class shown. Used for analytics event tracking.
             * @param {String} cls  name of the class.
             */
            "showClass",
            /**
             * @event showMember
             * Fired after class member scrolled to view. Used for analytics event tracking.
             * @param {String} cls  name of the class.
             * @param {String} anchor  name of the member in form type-name like "method-bind".
             */
            "showMember",
            /**
             * @event showGuide
             * Fired after guide shown. Used for analytics event tracking.
             * @param {String} guide  name of the guide.
             */
            "showGuide"
        );

        Ext.getBody().addListener('click', function(cmp, el) {
            this.loadClass(el.rel);
        }, this, {
            preventDefault: true,
            delegate: '.docClass'
        });

        this.control({
            'classtree': {
                // Can't simply assign the loadClass function as event
                // handler, because an extra event options object is
                // appended to the event arguments, which we don't
                // want to give to the loadClass, as this would render
                // the noHistory parameter to true.
                classclick: function(cls) {
                    this.loadClass(cls);
                }
            },

            'indexcontainer': {
                afterrender: function(cmp) {
                    cmp.el.addListener('click', function(cmp, el) {
                        this.showGuide(el.rel);
                    }, this, {
                        preventDefault: true,
                        delegate: '.guide'
                    });
                }
            },

            'classoverview': {
                afterrender: function(cmp) {
                    // Expand member when clicked
                    cmp.el.addListener('click', function(cmp, el) {
                        Ext.get(Ext.get(el).up('.member')).toggleCls('open');
                    }, this, {
                        preventDefault: true,
                        delegate: '.expandable'
                    });

                    // Do nothing when clicking on not-expandable items
                    cmp.el.addListener('click', Ext.emptyFn, this, {
                        preventDefault: true,
                        delegate: '.not-expandable'
                    });
                }
            }
        });
    },

    cache: {},

    /**
     * Loads class.
     *
     * @param {String} clsUrl  name of the class + optionally name of the method, separated with dash.
     * @param {Boolean} noHistory  true to disable adding entry to browser history
     */
    loadClass: function(clsUrl, noHistory) {
        var cls = clsUrl;
        var member;

        Ext.getCmp('container').layout.setActiveItem(1);

        // separate class and member name
        var matches = clsUrl.match(/^(.*?)(?:-(.*))?$/);
        if (matches) {
            cls = matches[1];
            member = matches[2];
        }

        if (!noHistory) {
            Docs.History.push("/api/" + clsUrl);
        }

        if (this.cache[cls]) {
            this.showClass(this.cache[cls], member);
        } else {
            if (this.getTabPanel()) {
                this.getTabPanel().setLoading(true);
            }

            Ext.data.JsonP.request({
                url: this.getBaseUrl() + '/output/' + cls + '.js',
                callbackName: cls.replace(/\./g, '_'),
                success: function(json, opts) {
                    this.cache[cls] = json;
                    this.showClass(json, member);
                },
                failure : function(response, opts) {
                    console.log('Fail');
                },
                scope: this
            });
        }
    },

    showClass: function(cls, anchor) {
        var classOverview = this.getTabPanel().down('classoverview');

        if (this.currentCls != cls) {
            this.getHeader().load(cls);

            // Init overview tab if not already available
            if (!classOverview) {
                classOverview = Ext.create('Docs.view.cls.Overview');
                this.getTabPanel().add(classOverview);
                this.getTabPanel().setActiveTab(0);
            }
            classOverview.load(cls);

            this.getTabPanel().setLoading(false);

            this.getTree().selectClass(cls.name);
            this.fireEvent('showClass', cls.name);
        }

        if (anchor) {
            classOverview.scrollToEl("#" + anchor);
            this.fireEvent('showMember', cls.name, anchor);
        } else {
            classOverview.getEl().down('.x-panel-body').scrollTo('top', 0);
        }

        this.currentCls = cls;
    },

    showGuide: function(name, noHistory) {
        noHistory || Docs.History.push("/guide/" + name);

        Ext.data.JsonP.request({
            url: this.getBaseUrl() + "/guides/" + name + "/README.js",
            callbackName: name,
            success: function(json) {
                Ext.getCmp("guide").update(json.guide);
                Ext.getCmp('container').layout.setActiveItem(2);
                Docs.Syntax.highlight(Ext.get("guide"));
                this.fireEvent('showGuide', name);
            },
            scope: this
        });
    },

    /**
     * Returns base URL used for making AJAX requests.
     * @return {String} URL
     */
    getBaseUrl: function() {
        return document.location.href.replace(/#.*/, "").replace(/index.html/, "");
    }

});
