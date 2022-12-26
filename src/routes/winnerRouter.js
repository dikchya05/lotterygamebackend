const {Router} = require('express')
 const Users = required('..models/winner')
 const app = Router();


app.post('/winner', async (req, res)=>{
    try{
      const data = await Winner.create(req.body)
      if(data){
          res.json({
              msg: `ticket number: ${req.body.ticketNo} color: ${req.body.color}`
          })
      }else{
          res.json({
              msg: 'You are not winner'
          })
      }
  }catch(err){
      console.log(err)
  }
  
  })
  module.export = app;