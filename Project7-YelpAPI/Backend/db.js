const { Pool } = require('pg');

const pool=new Pool({
    user:"postgres",
    host:"localhost",
    database:"business_review",
    password:"123456",
    port:5432,
})


module.exports=pool