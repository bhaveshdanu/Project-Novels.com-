const express=require('express')
const mongoose=require('mongoose')
const cors=require('cors')
const port=1000;
const app=express();
app.use(cors());
app.use(express.json());

const empcoll=require('./Schemas/empSchema.js');

app.post('/register',async (req,resp)=>
{
    let body=req.body;
    try{
        await empcoll.insertMany(body);
        resp.send({status:300,msg:"user created"})

    }catch(err)
    {
        resp.send({status:300,msg:"user cannot added due to "+err})
    }

})

app.post('/login',async(req,resp)=>
{
    let body=req.body;
    const user=await empcoll.findOne({email:body.email});
    if(user)
    {
        resp.send(user)
    }
    else{
        resp.send("user not found")
    }
    
})

const booksColl=require('./Schemas/bookSchema.js');

app.post('/book/upload',async(req,resp)=>
{
    let body=req.body;
    try{
        await booksColl.insertMany(body);
        resp.send({status:300,msg:"book Uploaded"});


    }catch(e)
    {
        resp.send(e);
    }
})
app.get('/books/all',async(req,resp)=>{
    try
    {
        const allbooks=await booksColl.find()
        resp.send(allbooks)
    }catch(e){resp.send({status:300,msg:"Nothing"})}
})

app.get('/books/:id',async(req,resp)=>{
    let result=await booksColl.find({_id:req.params.id},{description:1,_id:0});
    resp.send(result);
})


















try{
    app.listen(port);
    console.log("Connected to port"+port);
}catch(err)
{
    console.log("cannot cannot to port due to error:" +err);
}
try{
    mongoose.connect('mongodb://localhost:27017/whatsappClone');
    console.log("Connected to mongodb");
    
}
catch(err)
{
    console.log("cannot cannot to port due to error:" +err);
}