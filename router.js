const express = require('express');
const router = express();
const connection = require ('../database/nadia');
const mysql = require('mysql');
router.get('/users',(req,res)=>{
    connection.require(sql,(err,result)=>{
        if(err)err;
        res.send(result)
})
})