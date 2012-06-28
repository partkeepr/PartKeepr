Ext.override(Ext.form.field.Trigger, {
	getTriggerMarkup: function() {
        var me = this,
            i = 0,
            hideTrigger = (me.readOnly || me.hideTrigger),
            triggerCls,
            triggerBaseCls = me.triggerBaseCls,
            triggerConfigs = [];

        // TODO this trigger<n>Cls API design doesn't feel clean, especially where it butts up against the
        // single triggerCls config. Should rethink this, perhaps something more structured like a list of
        // trigger config objects that hold cls, handler, etc.
        // triggerCls is a synonym for trigger1Cls, so copy it.
        if (!me.trigger1Cls) {
            me.trigger1Cls = me.triggerCls;
        }

        console.log("FOO");
        // Create as many trigger elements as we have trigger<n>Cls configs, but always at least one
        for (i = 0; (triggerCls = me['trigger' + (i + 1) + 'Cls']) || i < 1; i++) {
            triggerConfigs.push({
                tag: 'td',
                valign: 'top',
                cls: Ext.baseCSSPrefix + 'trigger-cell',
                cn: {
                    cls: [Ext.baseCSSPrefix + 'trigger-index-' + i, triggerBaseCls, triggerCls].join(' '),
                    role: 'button'
                }
            });
        }
        triggerConfigs[i - 1].cn.cls += ' ' + triggerBaseCls + '-last';

        return Ext.DomHelper.markup(triggerConfigs);
    }
});