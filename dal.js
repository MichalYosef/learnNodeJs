var mysql = require('mysql');

function runQuery(query, callback) {

    var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "mydb"
    });

    // con.connect(function(err) {
    // if (err) throw err;
    // var sql = "INSERT INTO customers (name, address) VALUES ('Michelle', 'Blue Village 1')";
    // con.query(sql, function (err, result) {
    //     if (err) throw err;
    //     console.log("1 record inserted, ID: " + result.insertId);
    // });
    // });

    
    con.connect(function(err) {
        if (err) {
            console.log("Error connecting to DB:" + err);
            return;
        }
        console.log("Connected");
    });

    
    con.query(query, function(err, rows) {
        if (err) {
            callback(err);
        } else {
            callback(null, rows);
            /*rows.forEach(function (row) {
                arr.push(row);
            });*/
        }
    });
    con.end();
}

module.exports.runQuery = runQuery;