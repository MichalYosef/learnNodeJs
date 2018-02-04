var dal = require('./dal');

module.exports = {

    getAll : function ( tblName, callback)
    {
        dal.runQuery("SELECT * FROM " + tblName, function(err, rows) {
            if (err) {
                callback(err);
            }
            console.log(rows)
            callback(null, rows);
        });
    }

}
            
