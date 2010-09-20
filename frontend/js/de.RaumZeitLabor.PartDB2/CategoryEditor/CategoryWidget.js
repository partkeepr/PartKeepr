Ext.ns("de.RaumZeitLabor.PartDB2.CategoryEditor");

de.RaumZeitLabor.PartDB2.CategoryEditor.CategoryWidget = Ext.extend(Ext.tree.TreePanel,	{
					initComponent : function() {
						
						new Ext.tree.TreeSorter(this, {
						    folderSort: false,
						    dir: "asc"
						});
						
						Ext.apply(this, {
							border: false,
							animate: false,
							autoScroll: true,
							root : new Ext.tree.TreeNode( {
								id : 0
							}),
							rootVisible : true
						});

						de.RaumZeitLabor.PartDB2.PartsManagerTree.superclass.initComponent
								.call(this);

						/*this.getSelectionModel().on("selectionchange",
								this.onSelectionChange.createDelegate(this));*/
						this.loadTree();

					},
					loadTree : function() {
						var call = new org.jerrymouse.service.Call(
								"de.RaumZeitLabor.PartDB2.Category.CategoryManagerService",
								"getAllCategories");
						call
								.setLoadMessage('$[de.RaumZeitLabor.PartDB2.CategoryEditor.loadCategories]');
						call.setHandler(this.onCategoriesLoaded
								.createDelegate(this))
						call.doCall();
					},
					onCategoriesLoaded: function (result) {
						this.getRootNode().removeAll(true);
						
						var node = this.buildCategoryTree(result);
						
						this.setRootNode(node);
						
					},

					buildCategoryTree : function(data) {

						var node = new Ext.tree.TreeNode( {
							id : data.id,
							text : data.name,
							tooltip : data.description
						});

						for ( var i = 0; i < data.children.length; i++) {
							node.appendChild(this
									.buildCategoryTree(data.children[i]));
						}

						return node;
					}
				});