 const {Router} = require('express')
 const Users = required('..models/users')
 const app = Router();
app.get('/ticket', async (req, res) => {
    try{
      const data =  await Users.find()
      res.json({
        ticketList: data,
        
    })
    }catch(err){
      console.log(err)
  
    } 
  })
  app.post('/tickets/:ticketNo', (req, res) => {
    console.log(req.params.ticketNo)
  })
  module.export = app;