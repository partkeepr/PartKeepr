describe("Ext.Date", function() {
    var dateSave,
        dateValue = 0,
        increment = 3;
    
    beforeEach(function() {
        dateSave = Date;

        Date = function() {
            return {
                getTime: function() {
                },
                valueOf: function() {
                    dateValue = dateValue + increment;
                    return dateValue;
                }
            };
        };   
    });
    
    afterEach(function() {
        Date = dateSave;
        increment += 16;
    });
    
    it("should get time elapsed in millisecond between date instantiation", function() {
        var dateA = new Date();
        expect(Ext.Date.getElapsed(dateA)).toEqual(3);
    });
    
    it("should get time elapsed in millisecond between two dates", function() {
        var dateA = new Date(),
            dateB = new Date();
        
        expect(Ext.Date.getElapsed(dateA)).toEqual(19);
    });    
});
