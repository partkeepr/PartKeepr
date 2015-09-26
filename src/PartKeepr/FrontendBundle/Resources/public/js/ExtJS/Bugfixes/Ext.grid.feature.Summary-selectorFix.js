/**
 * Fixeds an issue where the summaryRowSelector is null
 */
Ext.define('PartKeepr.grid.feature.Summary', {
    override: 'Ext.grid.feature.Summary',

    fullSummaryTpl: [
        '{%',
        'var me = this.summaryFeature,',
        '    record = me.summaryRecord,',
        '    view = values.view,',
        '    bufferedRenderer = view.bufferedRenderer;',
        'this.nextTpl.applyOut(values, out, parent);',
        'if (!me.disabled && me.showSummaryRow && view.store.isLast(values.record)) {',
        'if (bufferedRenderer) {',
        '    bufferedRenderer.variableRowHeight = true;',
        '}',
        'me.outputSummaryRecord((record && record.isModel) ? record : me.createSummaryRecord(view), values, out, parent);',
        '}',
        '%}',
        {
            priority: 300,
            beginRowSync: function (rowSync)
            {
                rowSync.add('fullSummary', this.summaryFeature.summaryRowSelector);
            },
            syncContent: function (destRow, sourceRow, columnsToUpdate)
            {
                destRow = Ext.fly(destRow, 'syncDest');
                sourceRow = Ext.fly(sourceRow, 'sycSrc');
                var selector = this.summaryFeature.summaryRowSelector;

                var
                    destSummaryRow = destRow.down(selector, true),
                    sourceSummaryRow = sourceRow.down(selector, true);
                // Sync just the updated columns in the summary row.
                if (destSummaryRow && sourceSummaryRow) {
                    // If we were passed a column set, only update those, otherwise do the entire row
                    if (columnsToUpdate) {
                        this.summaryFeature.view.updateColumns(destSummaryRow, sourceSummaryRow, columnsToUpdate);
                    } else {
                        Ext.fly(destSummaryRow).syncContent(sourceSummaryRow);
                    }
                }
            }
        }
    ],
});
