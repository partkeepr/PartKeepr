/**
 * Simple text field with an URL button to easily visit the entered URL.
 *
 * The getUrl function may be overridden for custom functionality.
 */
Ext.define("PartKeepr.form.field.Text", {
    extend: "Ext.form.field.Text",

    alias: 'widget.urltextfield',

    triggers: {
        url: {
            cls: 'x-form-trigger-link',
            handler: function () {
                window.open(this.getUrl(), '_blank');
            },
            scope: 'this'
        }
    },
    getUrl: function () {
        return this.getValue();
    }
});
