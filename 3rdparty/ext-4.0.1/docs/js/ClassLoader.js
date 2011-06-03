/**
 * Manages the loading of class documentation.
 */
Ext.define("Docs.ClassLoader", {
    singleton: true,
    cache: {},

    /**
     * Loads class.
     *
     * @param {String} clsUrl  name of the class + optionally name of the method, separated with dash.
     * @param {Boolean} noHistory  true to disable adding entry to browser history
     */
    load: function(clsUrl, noHistory) {
        var cls = clsUrl;
        var member;

        // separate class and member name
        var matches = clsUrl.match(/^(.*?)(?:-(.*))?$/);
        if (matches) {
            cls = matches[1];
            member = matches[2];
        }

        if (!noHistory) {
            Docs.History.push("/api/" + clsUrl);
        }

        Docs.App.setClassMode();
        var docTabPanel = Ext.getCmp('docTabPanel');
        if (docTabPanel) {
            Ext.getCmp('docTabPanel').setActiveTab(0);
        }

        if (this.cache[cls]) {
            this.showClass(this.cache[cls], member);
        } else {
            if (docTabPanel) {
                Ext.getCmp('doc-overview').setLoading(true);
            }

            Ext.data.JsonP.request({
                url: Docs.App.getBaseUrl() + '/output/' + cls + '.js',
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
        var docTabPanel = Ext.getCmp('docTabPanel');
        if (!docTabPanel) {
            Ext.create('Docs.ClassPanel');
        }

        Ext.get('docTabPanel').show();
        var pageContent = Ext.get('pageContent');
        if (pageContent) {
            pageContent.setVisibilityMode(Ext.core.Element.DISPLAY).hide();
        }

        Ext.getCmp('treePanelCmp').selectClass(cls.name);
        Docs.PageHeader.load(cls);

        var docOverviewTab = Ext.getCmp('doc-overview');
        docOverviewTab.load(cls);
        docOverviewTab.setLoading(false);

        if (anchor) {
            Ext.getCmp('doc-overview').scrollToEl("#" + anchor);
        } else {
            var docContent = Ext.get(Ext.query('#doc-overview .x-panel-body')[0]);
            docContent.scrollTo('top', 0);
        }
    }
});

