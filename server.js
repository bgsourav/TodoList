const express = require('express');
const cors = require('cors');
const { MongoDBNamespace } = require('mongodb');
const app = express();
const PORT = 3000;

app.use(express.static('public'));
app.use(express.json())
app.use(cors({origin: 'http://localhost:3001'}))
app.get('/',(req,res)=>{
    res.sendFile(__dirname+'/public/index.html')
})
//Bunch of middle ware
app.post('/contactform.html',(req,res)=>{
    console.log(req.body.name); 
    var MongoClient = require('mongodb').MongoClient; 
    var url = "mongodb://localhost:27017/mydb";
    MongoClient.connect(url, function(err, db) {
        
        if (err) throw err;
        // console.log("Database created!");
        var dbo = db.db("th");
       // This is commented as for successive runnings the collection is already created and results in an error// 
        // dbo.createCollection("Logdata", function(err, res) {
        // if (err) throw err;
        //     console.log("Collection created!");
        // });
        var logobj = [{username:req.body.name,useremail:req.body.email}];
        dbo.collection("LogData").insertMany(logobj, function(err, res) {
            if (err) throw err;
            // console.log("Doc-contents" + myobj);
            console.log("Number of documents inserted: " + res.insertedCount);
        });
        // var query = {stat:1}; 
        // dbo.collection("LogData").find(query).toArray(function(err,result){
        //     if (err) throw err;
        //     console.log(result);
            
        //     // db.close();

        // });
    });
    res.sendFile(__dirname+'/public/index.html');
})
app.post('/',(req,res)=>{
    console.log(req.body);
    const transporter = nodemailer.createTransport({
        service:"gmail",
        auth:{
            user:'trialreactproj@gmail.com',
            pass:'trialtrial1'
        }
    })
    const mailOptions = {
        from:req.body.email,
        to:'bgsouravbg@gmail.com',
        subject:`Message from ${req.body.name}`,
        text:`Email-id: ${req.body.email}
        Message: ${req.body.message}`
    }
    var MongoClient = require('mongodb').MongoClient; 
    var url = "mongodb://localhost:27017/mydb";
    MongoClient.connect(url, function(err, db) {
        
        if (err) throw err;
        // console.log("Database created!");
        var dbo = db.db("th");
       // This is commented as for successive runnings the collection is already created and results in an error// 
        // dbo.createCollection("FinData", function(err, res) {
        // if (err) throw err;
        //     console.log("Collection created!");
        // });
        var myobj = [{name:req.body.name,from:req.body.email,stat:1}];
        dbo.collection("FinData").insertMany(myobj, function(err, res) {
            if (err) throw err;
            // console.log("Doc-contents" + myobj);
            console.log("Number of documents inserted: " + res.insertedCount);
        });
        // var query = {stat:1}; 
        // dbo.collection("FinData").find(query).toArray(function(err,result){
        //     if (err) throw err;
        //     console.log(result);
            
        //     // db.close();

        // });
    });
    transporter.sendMail(mailOptions,(error, info)=>{
        if(error)
        {
            console.log(error);
            res.send('error');
        }else{
            console.log('Email sent:' + info.response);
            res.send('success');
        }
    })
})
app.listen(PORT,()=>{
    console.log(`server running on port ${PORT}`)
})