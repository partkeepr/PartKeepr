/**
 * @class Ext.ux.Exporter.Button
 * @extends Ext.Component
 * @author Nige White, with modifications from Ed Spencer, with modifications from iwiznia.
 * Specialised Button class that allows downloading of data via data: urls.
 * Internally, this is just a link.
 * Pass it either an Ext.Component subclass with a 'store' property, or just a store or nothing and it will try to grab the first parent of this button that is a grid or tree panel:
 * new Ext.ux.Exporter.Button({component: someGrid});
 * new Ext.ux.Exporter.Button({store: someStore});
 * @cfg {Ext.Component} component The component the store is bound to
 * @cfg {Ext.data.Store} store The store to export (alternatively, pass a component with a getStore method)
 */
Ext.define("Ext.ux.exporter.Button", {
    extend: "Ext.Component",
    alias: "widget.exporterbutton",
    html: '<p></p>',
    config: {
        swfPath: '/flash/downloadify.swf',
        downloadImage: '/images/ext_reports/download.png',
        width: 62,
        height: 22,
        downloadName: "download"
    },

    constructor: function(config) {
      config = config || {};

      this.initConfig();
      Ext.ux.exporter.Button.superclass.constructor.call(this, config);

      var self = this;
      this.on("afterrender", function() { // We wait for the combo to be rendered, so we can look up to grab the component containing it
          self.setComponent(self.store || self.component || self.up("gridpanel") || self.up("treepanel"), config);
      });
    },

    setComponent: function(component, config) {
        this.component = component;
        this.store = !component.is ? component : component.getStore(); // only components or stores, if it doesn't respond to is method, it's a store
        this.setDownloadify(config);
    },

    setDownloadify: function(config) {
        var self = this;
        Downloadify.create(this.el.down('p').id,{
            filename: function() {
              return self.getDownloadName() + "." + Ext.ux.exporter.Exporter.getFormatterByName(self.formatter).extension;
            },
            data: function() {
              return Ext.ux.exporter.Exporter.exportAny(self.component, self.formatter, config);
            },
            transparent: false,
            swf: this.getSwfPath(),
            downloadImage: this.getDownloadImage(),
            width: this.getWidth(),
            height: this.getHeight(),
            transparent: true,
            append: false
        });
    }
});