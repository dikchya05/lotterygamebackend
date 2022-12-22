const express = require('express')
const app = express()
const port = 3000
const cors = require('cors')
app.use(cors())

const mongoose = require('mongoose')
const { Schema } = mongoose;

const usersSchema = new Schema({
  name : {type:String, required:true},
  ticketNo: Number,
  phoneNumber: Number
},
{collection:'users'});

const Users = mongoose.model('Users', usersSchema)

const winnerSchema = new Schema({
  color : {type:String},
  ticketNo: Number
  
}, {collection:'winner'});
const Winner = mongoose.model('Winner', winnerSchema)

const connect=async()=>{
    try{
        mongoose.set('strictQuery',false).connect('mongodb://127.0.0.1:27017/winTicket', {useNewUrlParser: true, useUnifiedTopology: true});
        console.log("connected to mongodb");
    }catch(error){
        console.error(error);
    }
  }

  
const bodyParser = require('body-parser')
app.use(bodyParser.json())

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

app.post('/tickets/:ticketNo', (req, res) => {
  console.log(req.params.ticketNo)
})
app.get('/users/',async(req,res)=>{
 const usersList = await Users.findOne({name: req.query.name})
 const searchWinColor = await Winner.findOne({ticketNo: req.query.ticketNo})
    if(searchWinColor?.color , req.query.color & usersList){
        res.json({
            msg: 'you are winner'
        })
    }else{
        if(!usersList){
            res.json({
                msg: 'you are not register'
            }) 
    }else{
        res.json({
            msg: 'you lost the game'
        })
    }
}
})


app.post('/register',async(req, res)=> {
  try{
      const usersList = await Users.findOne({name: req.body.name})
      if(usersList){
          res.json({
              msg: 'User Name already exist'
          })
      }else{
  
      const data = await Users.create(req.body)
      if(data){
          res.json({
              msg: 'user registered'
          })
      }else{
          res.json({
              msg: 'registration failed'
          })
      }
      }

  }catch(err){
      console.log(err)
  }

})


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
  connect()
})


