require('dotenv').config();
const express = require('express');
var mysql = require('mysql');
const cors = require('cors');
const app = express();
const port = process.env.PORT;

app.use(express.urlencoded({extended: true}));
app.use(cors());
app.use(express.json());

var pool  = mysql.createPool({
    connectionLimit : 10,
    host            : process.env.DBHOST,
    user            : process.env.DBUSER,
    password        : process.env.DBPASS,
    database        : process.env.DBNAME
});

app.get('/:plants', (req, res)=>{
    pool.query(`SELECT * FROM plants`,  (err, results)=>{
        sendResults(res, err, results);
    });
});

app.get('/:plants/:id', (req, res)=>{

    pool.query(`SELECT * FROM plants WHERE id`,  (err, results)=>{
       sendResults(res, err, results);
    });
});

app.post('/:plants', (req, res)=>{
    let fields = Object.keys(req.body).join(',');
    let values = "'" + Object.values(req.body).join("','") + "'";
    pool.query(`INSERT INTO plants (${fields}) VALUES(${values})`, (err, results)=>{
        sendResults(res, err, results);
    });
});

app.patch('/:plants/:id', (req, res)=>{
    let fields = Object.keys(req.body);
    let values = Object.values(req.body);
    let updates = [];
    for (let i = 0; i < fields.length; i++) {
        updates.push(`${fields[i]}='${values[i]}'`);
    }
    let str = updates.join(',');    
    pool.query(`UPDATE plants SET ${str} WHERE id`, (err, results)=>{
        sendResults(res, err, results);
    });
});

app.delete('/:plants/:id', (req, res)=>{
    pool.query(`DELETE FROM plants WHERE id`,  (err, results)=>{
       sendResults(res, err, results);
    });
});

app.get('/:watering_logs/:id', (req, res)=>{

    pool.query(`SELECT * FROM watering_logs WHERE id`,  (err, results)=>{
       sendResults(res, err, results);
    });
});

app.delete('/:watering_logs/:id', (req, res)=>{
    pool.query(`DELETE FROM watering_logs WHERE id`,  (err, results)=>{
       sendResults(res, err, results);
    });
});


app.post('/:watering_logs', (req, res)=>{
    let fields = Object.keys(req.body).join(',');
    let values = "'" + Object.values(req.body).join("','") + "'";
    pool.query(`INSERT INTO watering_logs (${fields}) VALUES(${values})`, (err, results)=>{
        sendResults(res, err, results);
    });
});

function sendResults(res, err, results){
    if (err){
        res.status(500).send(err);
        return
    }
    res.status(200).send(results);
}

app.listen(port, () => {
    console.log(`Server listening on http://localhost:${port}`);
});