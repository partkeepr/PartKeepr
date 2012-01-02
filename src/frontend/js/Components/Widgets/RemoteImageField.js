/**
 * @class PartKeepr.RemoteImageField
 * <p>The RemoteImageField is a form field which can be used to upload one image. It automatically
 * displays the remote image by id, assigns a temporary ID if it's a new image so the model can be
 * syncronized at once.
 * 
 */
Ext.define('PartKeepr.RemoteImageField', {
    extend:'Ext.form.field.Base',
    alias: 'widget.remoteimagefield',
    
    type: 'remoteimagefield',
    
    // Default width and height
    imageWidth: 32,
    imageHeight: 32,
    
    // The field template for rendering this field
    fieldSubTpl: [
                  '<img id="{cmpId}-imgEl" style="{size}" class="remoteimagefield"/>',
                  {
                      compiled: true,
                      disableFormats: true
                  }],
              
    /**
     * Initializes the field
   	 */          
    initComponent : function(){
    	this.minHeight = this.imageHeight;
    	this.minWidth = this.imageWidth;
    	
    	this.imageId = Ext.id("remoteimagefield");
        this.callParent();
    },
    /**
     * Return the template data for this field
     */
    getSubTplData: function() {
    	return {
    		cmpId: this.id,
            size: 'height:'+this.imageHeight+"px;width:"+this.imageWidth+"px;",
            imageid: this.imageId
    	};
    },
    /**
     * Renders this field.
     */
    onRender: function() {
        var me = this;

        me.onLabelableRender();

        me.addChildEls('imgEl');

        me.callParent(arguments);
    },
    /*onRender: function () {
    	 var me = this,
         renderSelectors = me.renderSelectors;

    	 Ext.applyIf(renderSelectors, me.getLabelableSelectors());

    	 Ext.applyIf(renderSelectors, {
    		 imgEl: 'img.remoteimagefield'
    	 });

    	 me.callParent(arguments);
    },*/
    /**
     * Applies the image URL to the element after rendering
     */
    afterRender: function () {
    	this.imgEl.dom.src = this.getImageURL();
    	
    	this.imgEl.on("click", this.onClick, this);
    },
    onClick: function () {
    	var j = Ext.create("PartKeepr.FileUploadDialog", { imageUpload: true });
    	j.on("fileUploaded", this.onFileUploaded, this);
    	j.show();
    },
    onFileUploaded: function (data) {
    	this.setValue("TMP:"+data.id);
    },
    /**
     * Returns the URL for the image field. Applies the temporary image if TMP: is
     * found within the value.
     */
    getImageURL: function () {
    	var idparam;
    	
    	if (strpos(this.value, "TMP:") !== false) {
    		idparam = "id=0&tmpId="+str_replace("TMP:","",this.value);
    	} else {
    		idparam = "id="+this.value;
    	}
    	
    	return PartKeepr.getImagePath() + "?"+idparam+"&type="+this.imageType+"&w="+this.imageWidth+"&h="+this.imageHeight+"&m=fitpadding&_dc="+Ext.Date.now();
    	
    },
    /**
     * Sets a value for the field. If the value is numeric, we call the image service
     * with the specified id and the specified type. If the value is a string and prefixed
     * with TMP:, we use the type "TempImage" and pass the id which has to be specified after TMP:.
     * 
     * Example
     * TMP:12     would retrieve the temporary image with the ID 12
     * @param {Mixed} value The value to set
     * @return {Ext.form.field.Field} this
     */
    setValue: function(value) {
    	var me = this;
    	
    	this.setRawValue(value);
    	this.value = value;
    	if (this.rendered) {
    		this.imgEl.dom.src = this.getImageURL();
    	}
        return this;
    }
});

