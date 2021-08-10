const mysql = require('mysql');

// Create connection
const db = mysql.createConnection({
    host     : 'localhost',
    user     : 'rs_admin',
    password : '$2y$10$HMDtf9GFqim7bJr3kJZsDeKZGVIioBKf2mdt3obrT8V/ZN.1dtzIe',
    database : 'f_rs_dev'
});

exports.createTest = (req, res) => {
    let sql = 'CREATE TABLE testing(id INT AUTO_INCREMENT, title VARCHAR(255), body VARCHAR(255), PRIMARY KEY(id))';
    db.query(sql, (err, result) => {
        if (err) throw err;
        console.log(result);
        res.send('Testing created');
    })
};

exports.updateTest = (req, res) => {
    let update = {
        title: 'New Tiiiiiitle',
        body: 'A new teeeeext'
    }
    let sql = 'INSERT INTO testing SET ?';
    db.query(sql, update, (err, result) => {
        if (err) throw err;
        console.log(result);
        res.send('Testing updateeeeed');
    })
    .then(() => res.status(201).json({ message: 'Update' }))
    .catch(error => res.status(400).json({ error }))
};