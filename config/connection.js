var mysql = require("mysql");
if (process.env.JAWSDB_URL) {
    connection = mysql.createConnection(process.env.JAWSDB_URL)

} else {

    var connection = mysql.createConnection({
        port: 3306,
        host: "localhost",
        user: "root",
        password: "MyNewPass",
        database: "burgers_db"
    });
};

var PORT = process.env.PORT || 3306;

// Make connection.
connection.connect(function(err) {
    if (err) {
        console.error("error connecting: " + err.stack);
        return;
    }
    console.log("listeneing to port: 3003");
});


// Export connection for our ORM to use.
module.exports = connection;