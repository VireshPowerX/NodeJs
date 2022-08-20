const express = require('express');
const bodyparser = require('body-parser');
const cors = require('cors');
const mysql = require('mysql');

const app = express();

app.use(cors());
app.use(bodyparser.json());

const db = mysql.createConnection({
        host:'localhost',
        user:'root',
        password:'',
        database:'Hello',
        port:3306
});

db.connect(err=>{
    if(err) {console.lof(err,'dberr');}
    console.log('Database...Connected...');
})

app.get('/product',(req,res)=>{
    let qr = `select * from product`;

    db.query(qr,(err,result)=>{

        if(err)
        {
            console.log(err,'errs');
        }
        if(result.length>0)
        {
            res.send({
                message:'Show...All...Product...Data...',
                data:result
            });
        }
    });
});

app.get('/product/:ProductId',(req,res)=>{

    let gID = req.params.ProductId;

   let qr = `select * from product where ProductId = ${gID}`;

    db.query(qr,(err,result)=>{

        if(err) {console.log(err);}

        if(result.length>0)
        {
            res.send({
                message:'Show...Single..Data...',
                data:result
            });
        }
        else
        {
            res.send({
                message:'Data...Not...Found...Something...Wrong...Please...Check...ProductId'
            });
        }
    });
});

app.post('/product',(req,res)=>{
   console.log(req.body,'Created New Data');

   let pid = req.body.ProductId;
   let pnm = req.body.ProductName;
   let cid = req.body.CategoryId;
   let cnm = req.body.CategoryName;

let qr = `insert into product(ProductId,ProductName,CategoryId,CategoryName)
values('${pid}','${pnm}','${cid}','${cnm}')`;
db.query(qr,(err,result)=>{
    if(err){console.log(err);}
    console.log(result,'result')
    res.send({
        message:'New...Data...Inserted...'
    });
});
});

app.put('/product/:ProductId',(req,res)=>{
    console.log(req.body,'Update Old Data');
    let gID = req.params.ProductId;
    let pnm = req.body.ProductName;
    let cid = req.body.CategoryId;
    let cnm = req.body.CategoryName; 

    let qr = `update product set ProductName = '${pnm}', CategoryId = '${cid}', CategoryName = '${cnm}'
    where ProductId = ${gID}`;
    db.query(qr,(err,result)=>{
        if(err){console.log(err);}
        res.send({
            message:'Updated...Old...Data...'
        });
    });
});

app.delete('/product/:ProductId',(req,res)=>{
    console.log(req.body,'Data was Deleted');
    let qID = req.params.ProductId;
    let qr = `delete from product where ProductId = '${qID}'`;
    db.query(qr,(err,result)=>{
        if(err) {console.log(err);}
        res.send(
            {
                message:'Deleted...A...Data...'
            }
        )
    });
});

app.listen(3000,()=>{
    console.log('Server...Running...Continues...');
});