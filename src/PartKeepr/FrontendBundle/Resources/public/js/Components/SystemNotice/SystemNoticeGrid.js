/**
 * Represents the project grid
 */
Ext.define('PartKeepr.SystemNoticeGrid', {
    extend: 'PartKeepr.EditorGrid',
    alias: 'widget.SystemNoticeGrid',
    columns: [
        {header: i18n("Name"), dataIndex: 'title', flex: 1}
    ],
    enableTopToolbar: false
});
