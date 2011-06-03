/**
 * @class Ext.chooser.InfoPanel
 * @extends Ext.panel.Panel
 * @author Ed Spencer
 * 
 * This panel subclass just displays information about an image. We have a simple template set via the tpl property,
 * and a single function (loadRecord) which updates the contents with information about another image.
 */
Ext.define('Ext.chooser.InfoPanel', {
    extend: 'Ext.panel.Panel',
    alias : 'widget.infopanel',
    id: 'img-detail-panel',

    width: 150,
    minWidth: 150,

    tpl: [
        '<div class="details">',
            '<tpl for=".">',
                    (!Ext.isIE6? '<img src="icons/{thumb}" />' : 
                    '<div style="width:74px;height:74px;filter:progid:DXImageTransform.Microsoft.AlphaImageLoader(src=\'icons/{thumb}\')"></div>'),
                '<div class="details-info">',
                    '<b>Example Name:</b>',
                    '<span>{name}</span>',
                    '<b>Example URL:</b>',
                    '<span><a href="http://dev.sencha.com/deploy/touch/examples/{url}" target="_blank">{url}.html</a></span>',
                    '<b>Type:</b>',
                    '<span>{type}</span>',
                '</div>',
            '</tpl>',
        '</div>'
    ],

    /**
     * Loads a given image record into the panel. Animates the newly-updated panel in from the left over 250ms.
     */
    loadRecord: function(image) {
        this.body.hide();
        this.tpl.overwrite(this.body, image.data);
        this.body.slideIn('l', {
            duration: 250
        });
    }
});