/**
 * Utility for performing syntax highlighting.
 */
Ext.define("Docs.Syntax", {
    singleton: true,

    /**
     * Marks all code blocks with "prettyprint" class and then calls
     * the prettify library function to highlight them.
     *
     * @param {HTMLElement/Ext.core.Element} root HTML element inside
     * which to perform the highlighting.
     */
    highlight: function(root) {
        Ext.Array.forEach(Ext.query("pre > code", root.dom || root), function(el) {
            Ext.get(el).addCls("prettyprint");
        });
        prettyPrint();
    }
});
