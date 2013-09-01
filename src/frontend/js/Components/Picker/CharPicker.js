Ext.define('PartKeepr.picker.Char', {
    extend: 'Ext.picker.Color',
    alias: 'widget.charpicker',

    /**
     * @cfg {String} [componentCls='x-char-picker']
     * The CSS class to apply to the containing element.
     */
    componentCls : Ext.baseCSSPrefix + 'char-picker',

    /**
     * @cfg {String} [selectedCls='x-char-picker-selected']
     * The CSS class to apply to the selected element
     */
    selectedCls: Ext.baseCSSPrefix + 'char-picker-selected',

    /**
     * @cfg {String} value
     * The initial char to highlight.
     */
    value : null,

    /**
     * @cfg {String} clickEvent
     * The DOM event that will cause a char to be selected. This can be any valid event name (dblclick, contextmenu).
     */
    clickEvent :'click',

    /**
     * @cfg {Boolean} allowReselect
     * If set to true then reselecting a char that is already selected fires the {@link #select} event
     */
    allowReselect : true,

    /**
     * @property {String[]} chars
     */
    chars : [
        ' ', '&', '"', '¢', '€', '£', '¥', '©', '®', '™', '‰', 'µ', '·', '•', '…', '′', '″', '§', '¶', 'ß',
        '‹', '›', '«', '»', '‘', '’', '“', '”', '‚', '„', '<', '>', '≤', '≥', '–', '—', '¯', '‾', '¤', '¦',
        '¨', '¡', '¿', 'ˆ', '˜', '°', '−', '±', '÷', '⁄', '×', '¹', '²', '³', '¼', '½', '¾', 'ƒ', '∫', '∑',
        '∞', '√', '≈', '≠', '≡', '∏', '¬', '∩', '∂', '´', '¸', 'ª', 'º', '†', '‡', 'À', 'Á', 'Â', 'Ã', 'Ä',
        'Å', 'Æ', 'Ç', 'È', 'É', 'Ê', 'Ë', 'Ì', 'Í', 'Î', 'Ï', 'Ð', 'Ñ', 'Ò', 'Ó', 'Ô', 'Õ', 'Ö', 'Ø', 'Œ',
        'Š', 'Ù', 'Ú', 'Û', 'Ü', 'Ý', 'Ÿ', 'Þ', 'à', 'á', 'â', 'ã', 'ä', 'å', 'æ', 'ç', 'è', 'é', 'ê', 'ë',
        'ì', 'í', 'î', 'ï', 'ð', 'ñ', 'ò', 'ó', 'ô', 'õ', 'ö', 'ø', 'œ', 'š', 'ù', 'ú', 'û', 'ü', 'ý', 'þ',
        'ÿ', 'Α', 'Β', 'Γ', 'Δ', 'Ε', 'Ζ', 'Η', 'Θ', 'Ι', 'Κ', 'Λ', 'Μ', 'Ν', 'Ξ', 'Ο', 'Π', 'Ρ', 'Σ', 'Τ',
        'Υ', 'Φ', 'Χ', 'Ψ', 'Ω', 'α', 'β', 'γ', 'δ', 'ε', 'ζ', 'η', 'θ', 'ι', 'κ', 'λ', 'μ', 'ν', 'ξ', 'ο',
        'π', 'ρ', 'ς', 'σ', 'τ', 'υ', 'φ', 'χ', 'ψ', 'ω', '←', '↑', '→', '↓', '↔', '◊', '♠', '♣', '♥', '♦',
        '⌀', '∅'
    ],

    /**
     * @cfg {Function} handler
     * A function that will handle the select event of this picker. The handler is passed the following parameters:
     *
     * - `picker` : CharPicker
     *
     * - `char` : String
     */

    /**
     * @cfg {Object} scope
     * The scope (`this` reference) in which the `{@link #handler}` function will be called. Defaults to this
     * Char picker instance.
     */

    renderTpl: [
        '<tpl for="chars">',
            '<a href="#" hidefocus="on">',
                '<em><span unselectable="on">{.}</span></em>',
            '</a>',
        '</tpl>'
    ],

    // private
    initRenderData : function(){
        var me = this;
        return Ext.apply(me.callParent(), {
            iitemCls: me.itemCls,
            chars: me.chars
        });
    },

    // private
    handleClick : function(event, target){
        var me = this;

        event.stopEvent();
        if (!me.disabled) {
        	var el = Ext.get(target);
        	me.select(el.down("span").dom.textContent);
        }
    },

    /**
     * Selects the specified char in the picker (fires the {@link #select} event)
     * @param {String} char The char
     * @param {Boolean} suppressEvent (optional) True to stop the select event from firing. Defaults to false.
     */
    select : function(chr, suppressEvent){

        var me = this,
            selectedCls = me.selectedCls,
            value = me.value,
            el;

        if (!me.rendered) {
            me.value = chr;
            return;
        }


        if (chr != value || me.allowReselect) {
            me.value = chr;
            if (suppressEvent !== true) {
                me.fireEvent('select', me, chr);
            }
        }
    }
});