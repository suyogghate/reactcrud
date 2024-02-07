import express  from "express";
import mysql from 'mysql';
import cors from 'cors';

const app = express();
app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: "root1234",
    database: 'planemgt'
})

app.get('/', (req,res)=>{
    const sql = "SELECT * FROM airports";
    db.query(sql, (err,result)=>{
        if(err) return res.json({Message: "Error inside server"});
        return res.json(result);
    })
});

app.post('/airport', (req,res)=>{
    const sql = "INSERT INTO airports (`category`,`close_time`,`code`,`location`,`name`,`no_of_ports`,`open_time`) VALUES (?)";
    const values = [
        req.body.category,
        req.body.close_time,
        req.body.code,
        req.body.location,
        req.body.name,
        req.body.no_of_ports,
        req.body.open_time
    ]
    db.query(sql, [values], (err,result) =>{
        if(err) return res.json(err);
        return res.json(result)
    })
})

app.get('/read/:id', (req,res)=>{
    const sql = "SELECT * FROM airports WHERE ID = ?";
    const id = req.params.id;

    db.query(sql, [id], (err,result)=>{
        if(err) return res.json({Message: "Error inside server"});
        return res.json(result);
    })
});

app.put('/update/:id', (req,res) => {
    const sql = 'UPDATE airports SET `category`=?, `close_time` = ?, `code` = ?, `location` = ?, `name` = ?, `no_of_ports` = ?, `open_time` = ? WHERE id = ?';
    const id = req.params.id;
    db.query(sql, [req.body.category, req.body.close_time, req.body.code, req.body.location, req.body.name, req.body.no_of_ports, req,body.open_time, id], (err, result) => {
        if(err) return res.json({Message: "Error inside server"});
        return res.json(result);
    })
})

app.delete('/delete/:id', (req,res) => {
    const sql = "DELETE FROM airports WHERE id = ?";
    const id = req.params.id;

    db.query(sql, [id], (err, result) => {
        if(err) return res.json({Message: "Error inside server"});
        return res.json(result);
    })
})

app.listen(8081,()=>{
    console.log("server listening on port 8081");
})