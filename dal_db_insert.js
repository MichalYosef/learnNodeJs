var dal = require('./dal');

dal.runQuery("INSERT INTO customers (name, address) VALUES ('mic', 'my address')", 
             function(err, rows){
                if (err) throw err;
                console.log("1 record inserted");
             });
  