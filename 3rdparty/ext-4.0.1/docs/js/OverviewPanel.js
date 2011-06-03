/**
 * Renders the whole class-documentation page.
 */
Ext.define('Docs.OverviewPanel', {
    extend: 'Ext.panel.Panel',

    id: 'doc-overview',
    cls: 'doc-tab iScroll',
    title: 'Overview',
    autoScroll: true,

    listeners: {
        afterrender: function(cmp) {
            // Expand member when clicked
            cmp.el.addListener('click', function(cmp, el) {
                Ext.get(Ext.get(el).up('.member')).toggleCls('open');
            }, this, {
                preventDefault: true,
                delegate: '.expandable'
            });
            // Do nothing when clicking on not-expandable items
            cmp.el.addListener('click', Ext.emptyFn, this, {
                preventDefault: true,
                delegate: '.not-expandable'
            });

            cmp.el.addListener('click', function(cmp, el) {
                Docs.ClassLoader.load(el.rel);
            }, this, {
                preventDefault: true,
                delegate: '.docClass'
            });
        }
    },

    /**
     * Scrolls the specified element into view
     *
     * @param {String} query  DomQuery selector string.
     */
    scrollToEl: function(query) {
        var el = Ext.get(Ext.query(query)[0]);
        if (el) {
            var isMember = el.hasCls("member");
            var scrollOffset = el.getY() - (isMember ? 170 : 160);
            var docContent = Ext.get(Ext.query('#doc-overview .x-panel-body')[0]);
            var currentScroll = docContent.getScroll()['top'];
            docContent.scrollTo('top', currentScroll + scrollOffset, true);

            if (isMember && el.down(".expandable")) {
                el.addCls('open');
            }
        }
    },

    /**
     * Renders class documentation in this panel.
     *
     * @param {Object} docClass
     */
    load: function(docClass) {
        this.docClass = docClass;
        this.removeDocked(this.toolbar, true);
        this.toolbar = Ext.create('Docs.OverviewToolbar', {
            docClass: docClass
        });
        this.addDocked(this.toolbar);

        this.update(this.renderClass(docClass));
        this.syntaxHighlight();
    },

    // Marks all code blocks with "prettyprint" class and then calls
    // the prettify library function to highlight them.
    syntaxHighlight: function() {
        Ext.Array.forEach(Ext.query("pre > code"), function(el) {
            Ext.get(el).addCls("prettyprint");
        });
        prettyPrint();
    },

    renderClass: function(cls) {
        this.classTpl = this.classTpl || new Ext.XTemplate(
            '<div class="doc-overview-content">',
                '{hierarchy}',
                '{doc}',
                '<div class="members">',
                    '{members}',
                '</div>',
            '</div>'
        );

        return this.classTpl.apply({
            doc: cls.doc,
            hierarchy: this.renderHierarchy(cls),
            members: this.renderMembers(cls)
        });
    },

    renderHierarchy: function(cls) {
        if (cls.superclasses.length === 0 && cls.allMixins.length === 0) {
            return "";
        }

        this.hierarchyTpl = this.hierarchyTpl || new Ext.XTemplate(
            '<pre class="hierarchy">',
            '<tpl if="tree">',
                '<h4>Hierarchy</h4>',
                '{tree}',
            '</tpl>',
            '<tpl if="mixins.length &gt; 0">',
                '<h4>Mixins</h4>',
                '<tpl for="mixins">',
                    '<div class="mixin">{.}</div>',
                '</tpl>',
            '</tpl>',
            '</pre>'
        );

        return this.hierarchyTpl.apply({
            tree: cls.superclasses.length ? this.renderClassTree(cls.superclasses.concat(cls.name), true) : "",
            mixins: Ext.Array.map(cls.allMixins, this.renderLink, this)
        });
    },

    renderClassTree: function(superclasses, firstChild) {
        if (superclasses.length === 0) {
            return "";
        }

        this.classTreeTpl = this.classTreeTpl || new Ext.XTemplate(
            '<div class="subclass {firstChild}">',
              '{link}',
              '{subtree}',
            '</div>'
        );

        var name = superclasses[0];
        return this.classTreeTpl.apply({
            firstChild: firstChild ? 'first-child' : '',
            link: superclasses.length > 1 ? this.renderLink(name) : '<strong>'+name+'</strong>',
            subtree: this.renderClassTree(superclasses.slice(1))
        });
    },

    renderLink: function(className) {
        return Ext.String.format('<a href="#/api/{0}" rel="{0}" class="docClass">{0}</a>', className);
    },

    renderMembers: function(cls) {
        var typeTitles = {
            cfg: "Config options",
            property: "Properties",
            method: "Methods",
            event: "Events"
        };

        // Skip rendering empty sections
        var html = [];
        for (var type in typeTitles) {
            if (cls[type].length > 0) {
                html.push(this.renderSection(cls[type], type, typeTitles[type]));
            }
        }
        return html.join("");
    },

    renderSection: function(members, type, title) {
        this.sectionTpl = this.sectionTpl || new Ext.XTemplate(
            '<div id="m-{type}">',
                '<div class="definedBy">Defined By</div>',
                '<h3 class="members-title">{title}</h3>',
                '{members}',
            '</div>'
        );

        return this.sectionTpl.apply({
            type: type,
            title: title,
            members: Ext.Array.map(members, this.renderMemberDiv, this).join("")
        });
    },

    renderMemberDiv: function(member, index) {
        this.memberTpl = this.memberTpl || new Ext.XTemplate(
            '<div id="{tagname}-{name}" class="member {firstChild} {inherited}">',
                // leftmost column: expand button
                '<a href="#" class="side {expandable}">',
                    '<span>&nbsp;</span>',
                '</a>',
                // member name and type + link to owner class and source
                '<div class="title">',
                    '<div class="meta">',
                        '<a href="#/api/{member}" rel="{member}" class="definedIn docClass">{member}</a><br/>',
                        '<a href="source/{href}" target="_blank" class="viewSource">view source</a>',
                    '</div>',
                    '<a href="#" class="name {expandable}">{name}</a>{signature}',
                '</div>',
                // short and long descriptions
                '<div class="description">',
                    '<div class="short">{[this.shortDoc(values)]}</div>',
                    '<div class="long">{longDoc}</div>',
                '</div>',
            '</div>',
            {
                // Returns contents for short documentation
                shortDoc: function(cfg) {
                    return cfg.shortDoc ? cfg.shortDoc : cfg.doc;
                }
            }
        );

        return this.memberTpl.apply(Ext.apply({
            // use classname "first-child" when it's first member in its category
            firstChild: (index === 0) ? "first-child" : "",
            // use classname "expandable" when member has shortened description
            expandable: member.shortDoc ? "expandable" : "not-expandable",
            // use classname "inherited" when member is not defined in this class
            inherited: member.member === this.docClass.name ? "not-inherited" : "inherited",
            // method params signature or property type signature
            signature: this.renderSignature(member),
            // full documentation together with optional parameters and return value
            longDoc: this.renderLongDoc(member)
        }, member));
    },

    renderSignature: function(member) {
        if (member.tagname === "cfg" || member.tagname === "property") {
            return "<span> : " + member.type + "</span>";
        }
        else {
            var ps = Ext.Array.map(member.params, this.renderShortParam, this).join(", ");
            var signature = '( <span class="pre">' + ps + "</span> )";
            if (member.tagname === "method") {
                return signature + " : " + member["return"].type;
            }
            else {
                return signature;
            }
        }
    },

    renderShortParam: function(param) {
        var p = param.type + " " + param.name;
        return param.optional ? "["+p+"]" : p;
    },

    renderLongDoc: function(member) {
        var doc = member.doc;

        if (member.params && member.params.length > 0) {
            doc += '<h3 class="pa">Parameters</h3>';
            var ps = Ext.Array.map(member.params, this.renderLongParam, this).join("");
            doc += "<ul>" + ps + "</ul>";
        }

        if (member["return"]) {
            doc += this.renderReturn(member["return"]);
        }

        return doc;
    },

    renderLongParam: function(param) {
        this.paramTpl = this.paramTpl || new Ext.XTemplate(
            '<li>',
                '<span class="pre">{name}</span> : {type}',
                '<div class="sub-desc">',
                    '{doc}',
                '</div>',
            '</li>'
        );

        return this.paramTpl.apply(param);
    },

    renderReturn: function(returnDoc) {
        this.returnTpl = this.returnTpl || new Ext.XTemplate(
            '<h3 class="pa">Returns</h3>',
            '<ul>',
                '<li>',
                    '<span class="pre">{type}</span>',
                    '<div class="sub-desc">',
                        '{doc}',
                    '</div>',
                '</li>',
            '</ul>'
        );

        return this.returnTpl.apply(returnDoc);
    }
});
