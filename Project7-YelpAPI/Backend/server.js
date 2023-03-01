const express=require("express")
const path = require('path')
const cors = require("cors");
const logger= require("./middleware/logger")
var { engine }   = require('express-handlebars');
const members=require("./Members.json")
const pool =require("./db")




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
app.use(express.json())   // using this middleware , you can use express to view the body: example: req.body
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



// Creating Routes for database interactions

// Create a dish and rate it

app.post("/makedish", async (req, res) => {
    console.log("You in this route");
    
    try {
      const { name, review } = req.body;
      const data = { name: `${name}`, review: `${review}` };
      const query = "INSERT INTO food (name, review) VALUES ($1, $2) RETURNING *";
      const values = [data.name, data.review];
      try {
        const wow=await pool.query(query, values);
        console.log("Data inserted successfully");
        res.json(wow)
      } catch (error) {
        console.error("Error inserting data", error.message);
      }
    } catch (error) {
      console.error(error.message);
    }
  });











// Not Effiecient - Use static folder feature of express

// app.get("/",(req,res)=>{
//     res.sendFile(path.join(__dirname,'public','index.html'))
// })

const PORT = 5000;









app.listen(PORT)