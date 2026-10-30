const express=require('express');
const app=express();
const port=3000;
app.set('view engine','ejs');
app.set('views',__dirname+'/views');
app.get('/',(req,res)=>{
    const myName='express';
    res.render('index',{
        name:myName+'Ejs',
        messages:['owlman','2026-10-29']
    })
})
app.listen(port,()=>{
    console.log(`请访问https://localhost:${port}/,"按Ctrl+C"终止服务`);
})