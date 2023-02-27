const { response } = require("express")
const express=require("express")
const router= express.Router()
const axios=require('axios')


const authorization ="JXDCHfwdJpJEz09boh60m-mXxuI6r6k4yReEpqy1dP3dv1d-cdsC3kcDBPeG8V29lp70I05VpGxuODk9pLzuLR3TqeK2EyVWORDDE6qDrNFtsIayZQwEjfvr9Oj2Y3Yx";

const r2='https://api.covidtracking.com//v1/us/current.json'

const headers={
  'Content-Type': 'application/json',
  'Authorization': `Bearer ${authorization}`
}


let data=[]

router.get('/',(req, res) => {
    res.json(data)
});


router.post("/",(req,res)=>{
  console.log("You are in post mode")
  const request_url=`https://api.yelp.com/v3/businesses/search?term=${req.body.search_service}&location=${req.body.search_city}`
  axios.get(request_url,{headers:headers})
  .then((response)=>{
      business_list=response.data.businesses;
      let container=[]
      var count=0

      const map1 = new Map();
      for(let i in response.data.businesses)
      {
        // map1.set(response.data.businesses[i].alias,i)
        container.push(response.data.businesses[i].alias)
      } 
      res.json(container)
    })







})
  // res.json(req.)body)})



// const request_url='https://api.yelp.com/v3/businesses/search?location='
// router.get('/',function(req, res, next) {
//     if (req.method === "POST" || req.method === "PUT") {
//       const { body } = req;
//       const { authorization } = req.headers;
//       req.options = {
//         url: `${request_url}/NYC`,
//         json: true,
//         body: body,
//         method: "PUT",
//         headers: {
//           authorization: authorization
//         }
//       };
//     }
  
//     next();
//   });


module.exports = router;