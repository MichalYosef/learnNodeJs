var bl = require('./bl');

bl.getAll( 'customers', function(err, rows){
    if (err) {
        console.log(err);
        throw err;
    }

    console.log("Got it: ");
    console.log(rows)
    
});

// to get field names 
// https://www.w3schools.com/nodejs/nodejs_mysql_select.asp
    