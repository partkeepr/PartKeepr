/**
 * Enhancements for Ext.tree.View:
 *
 * Ported ensureVisible and scrollIntoView from ExtJS3
 */
Ext.define("PartKeepr.tree.View", {
    override: "Ext.tree.View",

    /**
     * Expands all parent nodes so the child is visible.
     * @param {Ext.data.Model} record The record to make visible
     */
    ensureVisible: function (record)
    {
        if (!record) {
            return;
        }

        if (record.parentNode) {
            record.parentNode.expand();
            this.ensureVisible(record.parentNode);
        }
    }
});