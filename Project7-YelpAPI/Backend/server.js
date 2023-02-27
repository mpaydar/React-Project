const express=require("express")
const path = require('path')
const cors = require("cors");
const logger= require("./middleware/logger")
var { engine }   = require('express-handlebars');
const members=require("./Members.json")
const bodyParser = require("body-parser")

const app = express()
var phpExpress = require('php-express')({
    binPath: 'php'
});

app.use(cors());


app.engine('php', phpExpress.engine);
app.all(/.+\.php$/, phpExpress.router);








// initilizing engine
app.engine('handlebars', engine({extname: 'handlebars'}));
app.set('view engine', 'handlebars');


// Homepage Route : passing down the array so express can pass the express result work on the page : member is the array 
app.get('/',(req,res)=>{
    res.render('server',{
    title:"Memebr App",
    members
})})








app.get('/login',(req,res)=>{
    res.render('login')})











// creating my own middleware
app.use(logger);


// Body Parser MiddleWare : is used to extract http request body when it is a post request
app.use(express.json())
app.use(express.urlencoded({extended:false}))  // this help us to handle url encoded data...


app.post('/',(req,res)=>{
    console.log(req.body)
    // app.use('/yelpAPI',require(`./routes/api/yelpAPI`))
    
})






// using static folder feeature
app.use(express.static(path.join(__dirname,'public')));



// Members 
// Routing feature 
app.use('/api/members',require('./routes/api/members'))

app.use('/yelpAPI',require('./routes/api/yelpAPI'))




// Not Effiecient - Use static folder feature of express

// app.get("/",(req,res)=>{
//     res.sendFile(path.join(__dirname,'public','index.html'))
// })

const PORT = process.env.PORT || 5000;









app.listen(PORT)