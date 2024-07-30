const express = require('express')
const path = require('path');
const date = require ('./midelware/Date')
const app = express()
//const date = require ("./")
const port = 5001


app.get('/get',(req,res)=>{
    res.send('you did first express project ')})

app.use('/static',express.static(__dirname +'/public')) 

// Serve static files from the 'public' directory
app.use(express.static(path.join(__dirname, 'public')));

// Serve the index.html file when the root URL is accessed
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.get('/homePage',(req,res)=>{
    res.sendFile(__dirname + '/index.html')
})

app.get('/servicestPage',(req,res)=>{
    res.sendFile(__dirname + '/services.html')
})
app.get('/contacttPage',(req,res)=>{
    res.sendFile(__dirname + '/contact.html')
})

app.listen(port,err=>{
err? console.log(err):console.log(`you are connected to the ${port}`)
})


const date=(req,res,next)=>{
    let date = new Date();
    let h =date.getHours()
    
    if( !(h >= 9 &&  h <= 17)    ){
    res.send('you are not welcome ')
    }
    next()
    }
    
    module.exports=date 
