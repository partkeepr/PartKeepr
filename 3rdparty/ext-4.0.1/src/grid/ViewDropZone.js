Ext.define('Ext.grid.ViewDropZone', {
    extend: 'Ext.view.DropZone',

    indicatorHtml: '<div class="x-grid-drop-indicator-left"></div><div class="x-grid-drop-indicator-right"></div>',
    indicatorCls: 'x-grid-drop-indicator',

    handleNodeDrop : function(data, record, position) {
        var view = this.view,
            store = view.getStore(),
            index, records, i, len;

        // If the copy flag is set, create a copy of the Models with the same IDs
        if (data.copy) {
            records = data.records;
            data.records = [];
            for (i = 0, len = records.length; i < len; i++) {
                data.records.push(records[i].copy(records[i].getId()));
            }
        } else {
            /*
             * Remove from the source store. We do this regardless of whether the store
             * is the same bacsue the store currently doesn't handle moving records
             * within the store. In the future it should be possible to do this.
             * Here was pass the isMove parameter if we're moving to the same view.
             */
            data.view.store.remove(data.records, data.view === view);
        }

        index = store.indexOf(record);
        if (position == 'after') {
            index++;
        }
        store.insert(index, data.records);
        view.getSelectionModel().select(data.records);
    }
});