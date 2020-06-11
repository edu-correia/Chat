const express = require('express');
const cors = require('cors');
const mysql = require('mysql');

const app = express();

const connection = mysql.createConnection({
    host: '143.106.241.3',
    user: 'cl19120',
    password: 'cl*23012004',
    database: 'cl19120'
})

connection.connect(err => {
    if(err) {
        return err;
    }
});

app.use(cors());

app.get('/messages', (req, res) => {
    connection.query("select * from messages", (err, results) => {
        if(err){
            return res.send(err);
        }else{
            return res.json({
                data: results
            })
        }
    });
});

app.get('/add', (req, res) => {
    const {msg, user} = req.query;
    connection.query(`insert into messages(msg, user) values ("${msg}","${user}")`, (err, results) => {
        if(err){
            return res.send(err)
        }else{
            return res.send("Adicionado")
        }
    })
})

app.listen(3335);