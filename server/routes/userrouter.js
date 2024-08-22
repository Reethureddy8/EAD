const express = require('express')
const router = express.Router()
const Usermodel = require('../models/usermodel')


router.get('/', async(req,res) => 
{
    try
    {
           const userrouter = await Usermodel.find()
           res.json(userrouter)
    }
    catch(err)
    {
        res.send('Error ' + err)
    }
})

router.get('/:id', async(req,res) => 
{
    try
    {
           const usermodel = await Usermodel.findById(req.params.id)
           res.json(usermodel)
    }

catch(err)
{
        res.send('Error ' + err)
    }
})


router.post('/', async(req,res) => 
{
    const usermodel = new Usermodel
   ({
        name: req.body.name,
        id:req.body.id,
        tech: req.body.tech,
        sub: req.body.sub
    })

    try
   {
        const a1 =  await usermodel.save() 
        res.json(a1)
    }
catch(err)
   {
        res.send('Error')
    }
})

router.patch('/:id',async(req,res)=> 
{
    try
   {
        const usermodel = await Usermodel.findById(req.params.id) 
        usermodel.sub = req.body.sub
        const a1 = await usermodel.save()
        res.json(a1)   
    }
catch(err)
   {
        res.send('Error')
    }

})

module.exports = router










