Ext.override(Ext.grid.feature.Grouping, {
            collapseAll: function() {
                var self = this, view = self.view;
                view.el.query('.x-grid-group-hd').forEach(function (group) {
                    var group_body = Ext.fly(group.nextSibling, '_grouping');
                    self.collapse(group_body);
                });
            },

            expandAll: function() {
                var self = this, view = self.view;
                view.el.query('.x-grid-group-hd').forEach(function (group) {
                    var group_body = Ext.fly(group.nextSibling, '_grouping');
                    self.expand(group_body);
                });
            }
        });