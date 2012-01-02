/**
 * This is a hackish bugfix for ExtJS 4.0.7. According to sencha, this has been fixed in EXTJSIV-4312. Remove this
 * as soon as a newer version as ExtJS 4.0.7 is out and fixes this bug.
 */
Ext.override(Ext.selection.RowModel, {
	onLastFocusChanged: function(oldFocused, newFocused, supressFocus) {
		if (this.views && this.views.length) {
			this.callOverridden(arguments);
		}
	},
	onSelectChange: function(record, isSelected, suppressEvent, commitFn) {
		if (this.views && this.views.length) {
			this.callOverridden(arguments);
		}
	}
	
});