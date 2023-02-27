// Using Routing feature which help us to bundle together all similiar routes: 
    //Example /api/members   ,  /api/members/privilage ,  /api/members/:id 

    // As you can see they have common paths: api/members , so we can bundle them together...



const express=require("express")
// const app=express()
const members=  require('../../Members.json') // ..=outside of the route folder/..=outside of the api folder
const uuid= require("uuid")
const router=express.Router();


// app.get('/api/members',(req,respond)=>{respond.json({members})});



// Get All member
router.get('/',(req,respond)=> respond.json({members}));

// app.get('/api/members/:id',(req,res)=>{
//     const found=members.some(member=>member.id ===parseInt(req.params.id) )

//     if (found)
//     {
//         res.json(members.filter(memeber =>memeber.id === parseInt(req.params.id) ))

//     }
//     else
//     {
//         res.status(400).json({msg: `No member with the id of ${req.params.id}`})
//     }
// })








// Get One Member


router.get('/:id',(req,res)=>{
    const found=members.some(member=>member.id ===parseInt(req.params.id) )

    if (found)
    {
        res.json(members.filter(memeber =>memeber.id === parseInt(req.params.id) ))

    }
    else
    {
        res.status(400).json({msg: `No member with the id of ${req.params.id}`})
    }
})


// Create Member
router.post('/',(req,res)=>{
    const newMember={
        id: uuid.v4(),
        name: req.body.name,
        email:req.body.email,
        status:'active'
    }

    if(!newMember.name || !newMember.email)
    {
        return res.status(400).json({msg:'Please include a name and email'})
    }
    members.push(newMember);
    // res.json(members);
    res.redirect('/')
})




// Update Member
router.put('/:id',(req,res)=>{
    const found=members.some(member=>member.id ===parseInt(req.params.id) )

    if (found)
    {
        const updMember=req.body;
        members.forEach(member =>{
            if(member.id === parseInt(req.params.id)){
                member.name= updMember.name ? updMember.name : member.name;
                member.email= updMember.email ? updMember.email : member.email;



                res.json({msg:'Member updated',member})
            }



        })
        res.json(members.filter(memeber =>memeber.id === parseInt(req.params.id) ))

    }
    else
    {
        res.status(400).json({msg: `No member with the id of ${req.params.id}`})
    }
})


// Delete Member
router.delete('/:id',(req,res)=>{
    const found=members.some(member=>member.id ===parseInt(req.params.id) )

    if (found)
    {
        res.json({
            msg:'Member deleted',
            members:members.filter(memeber =>memeber.id !== parseInt(req.params.id) )})

    }
    else
    {
        res.status(400).json({msg: `No member with the id of ${req.params.id}`})
    }
})










module.exports = router;