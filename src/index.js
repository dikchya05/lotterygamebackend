const app = require('express')()
require('dotenv').config()
const port = process.env.PORT
const cors = require('cors')
const bodyParser = require('body-parser')
app.use(bodyParser.json())
app.use(cors())
const Connect = require('./db/connect')
const Users = require('./models/users')
const Winner = require('./models/winner')
Connect()
app.use(ticket)

//const ticket = require('./src/routes/ticketRouter.js')

app.put('/register', async(req, res) => {
    try{
      const updateUser =await Users.findOneAndUpdate(req.body)
      if(updateUser){
        res.json({
          msg: 'user updated'
        })
      }else{
        msg:"error"
      }
    }
    catch(e){
      console.log(e)
    }
  })


app.get('/users/',async(req,res)=>{
 const usersList = await Users.findOne({name: req.query.name})
 const searchWinColor = await Winner.findOne({ticketNo: req.query.ticketNo})
    if(searchWinColor?.color === req.query.color && usersList){
        res.json({
            errMsg: 'you are winner'
        })
    }else{
        if(!usersList){
            res.json({
                errMsg: 'you are not register'
            }) 
    }else{
        res.json({
            msg: 'you lost the game'
        })
    }
}
})


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
  
})


