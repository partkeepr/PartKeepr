/**
 * Enhancements for Ext.layout.component.field.Trigger:
 * 
 * Adjust the rendering so our custom theme works pretty.
 */
Ext.override(Ext.layout.component.field.Trigger, {
    sizeBodyContents: function(width, height) {
        var me = this,
            owner = me.owner,
            inputEl = owner.inputEl,
            triggerWrap = owner.triggerWrap,
            triggerWidth = owner.getTriggerWidth();

        // If we or our ancestor is hidden, we can get a triggerWidth calculation
        // of 0.  We don't want to resize in this case.
        if (owner.hideTrigger || owner.readOnly || triggerWidth > 0) {
            // Decrease the field's width by the width of the triggers. Both the field and the triggerWrap
            // are floated left in CSS so they'll stack up side by side.
            me.setElementSize(inputEl, Ext.isNumber(width) ? width  : width);
    
            inputEl.dom.style.paddingRight = (triggerWidth+2)+"px";
            // Explicitly set the triggerWrap's width, to prevent wrapping
            triggerWrap.setWidth(triggerWidth);
        }
    }
});
