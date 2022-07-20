const express = require("express");
const router = express.Router();
const { User, Lobby } = require("../../models");

router.get("/",(req,res)=>{
// Get all
Chat.findAll().then(ChatData=>{
    res.json(ChatData)
}).catch(err=>{
    console.log(err)
    res.status(500).json(err);
})
})

router.get("/:id",(req,res)=>{
// Get one
Chat.findByPk(req.params.id).then(ChatData=>{
    if(UserData){
        res.json(ChatData)
    } else {
        res.status(404).json(err);
    }
}).catch(err=>{
    console.log(err)
    res.status(500).json(err);
})
});

router.post("/",(req,res)=>{
// Create new chat API route 
Chat.create({
    // username:req.body.username,
    // password:req.body.password,
    // email:req.body.email
}).then(newChat=>{
    res.json(newChat);
}).catch(err=>{
    console.log(err);
    res.status(500).json({message:"User creation failed:",err:err})
})
});

router.put("/:id", (req,res)=>{
// Update chat API Route
// 
Chat.update({
    // username = req.body.username,
    // email:req.body.email,
    // TODO
    // THIS IS WHERE LOGIC TO CHATTING HAPPENS
    // Update user by id every time there is a response
},{
    where:{
        id:req.params.id
    }
})
})

router.delete("/:id",(req,res)=>{
// Delete chat
Chat.destroy({
    where:{
        id:req.params.id
    }
}).then(delChat=>{
    if(delChat){       
    res.json(delChat)}
    else {res.status(404)}

})
})

module.exports = router;