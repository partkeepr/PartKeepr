Ext.define('PartKeepr.CategoryEditorWindow', {
    extend: 'Ext.window.Window',
    border: false,
    width: 400,
    categoryModel: null,
    layout: 'fit',
    items: [
        {
            xtype: "CategoryEditorForm"
        }
    ],
    initComponent: function ()
    {
        this.buttons = [
            {
                text: i18n("Save"),
                handler: Ext.bind(this.onSave, this)
            }, {
                text: i18n("Cancel"),
                handler: Ext.bind(this.onCancel, this)
            }
        ];

        this.callParent();

        if (!this.record.phantom) {
            this.setTitle(i18n("Edit Category"));
        } else {
            this.record.set("parent", this.parentRecord.getId());
            this.setTitle(i18n("Add Category"));
        }

        this.down("CategoryEditorForm").loadRecord(this.record);

        this.down("textfield[name=name]").on("keypress", this.onEnter, this);
        this.down("textfield[name=description]").on("keypress", this.onEnter, this);

        this.on("show", Ext.bind(this._onShow, this));
    },
    onEnter: function (field, e)
    {
        if (e.getKey() == e.ENTER) {
            this.onSave();
        }
    },
    _onShow: function () {
        this.down("CategoryEditorForm").items.first().focus();
    },
    onSave: function ()
    {
        this.down("CategoryEditorForm").updateRecord(this.record);

        this.record.save({
            success: Ext.bind(function (response)
            {
                this.fireEvent("save", response);
                this.destroy();
            }, this)
        });
    },
    onCancel: function ()
    {
        this.destroy();
    }
});
