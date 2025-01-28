const express=require('express');
const app=express();
const port=3000;
const connection=require('./db');
const mysql=require('mysql');
app.use(express.json());

app.get('/users',(req,res)=>{
    const sql='select * from nadia';
    connection.query(sql,(err,result)=>{
        if(err)err;
        res.send(result);
    })
}
);

app.get('/users/:id',(req,res)=>{
    const id=req.params.id;
    const sql='select * from nadia where id = ?';
    connection.query(sql,id,(err,result)=>{
        if(err)err;
        res.send(result);
    });
});


app.post('/users',(req,res)=>{
    const user = req.body;
    const sql='insert into nadia set ?';
    connection.query(sql,user,(err,result)=>{
        if(err)err;
        res.send('YOUR USER ADDED IS SUCCSSSFUL');
    })
}
);
app.delete('/users/:id',(req,res)=>{
    const id=req.params.id;
    const sql='delete from nadia WHERE id = ?';
    connection.query(sql,id,(err,result)=>{
        if(err)err;
        res.send('YOUR USER WAS DELETED BEFORE');
    });
});
app.put('/users/:id',(req,res)=>{
    const id=req.params.id;
    const user=req.body;
    const sql='update nadia set ? WHERE id = ?';
    connection.query(sql,[user,id],(err,result)=>{
        if(err)err;
        res.send('USER UPDATED IS SUCCSSFUL');
    });
});

app.listen(port,(req,res)=>{
    console.log(`server is running on ${port}`);
})


