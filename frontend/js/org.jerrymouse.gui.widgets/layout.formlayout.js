/*
 * This file is part of the JerryMouse Framework.
 *
 * JerryMouse is free software; you can redistribute and/or modify it under the
 * terms of the GNU General Public License version 2 as published by the
 * Free Software Foundation.
 *
 * This library is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the GNU
 * Library General Public License for more details.
 *
 */
Ext.override(Ext.layout.FormLayout, {
	getTemplateArgs: function(field) {
    var noLabelSep = !field.fieldLabel || field.hideLabel;

    return {
        id            : field.id,
        label         : Ext.replaceLocaleTags(field.fieldLabel),
        itemCls       : (field.itemCls || this.container.itemCls || '') + (field.hideLabel ? ' x-hide-label' : ''),
        clearCls      : field.clearCls || 'x-form-clear-left',
        labelStyle    : this.getLabelStyle(field.labelStyle),
        elementStyle  : this.elementStyle || '',
        labelSeparator: noLabelSep ? '' : (Ext.isDefined(field.labelSeparator) ? field.labelSeparator : this.labelSeparator)
    };
}
	
});
