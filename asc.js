// const { request } = require('express');
// const express = require('express');
// const app = express();
// const port = 3000;
// var cors = require('cors')

// app.use(cors())


// const arr =[123,234, 2456, 444]
// const user = ['dikshya','shyam', 'gita', 'anil', 'sita']
// app.get('/numbers', (req, res) => {
//      const removeUsers = user.filter(item=>{
//         return item !== req.query.filteruser
//      })
//      if(req.query.order === 'des'){
//       removeUsers.sort()
//       removeUsers.reverse()
      
//      }else{
//       removeUsers.sort()

//      }

//      res.json({removeUsers})
// })
      
// app.get('/users', (req, res) => {
//   const sortList = arr.sort((a,b)=>{
//     return req.query.order === 'asc' ? a-b :b-a
//   })
//     res.json(sortList)

//     }

// )
// app.listen(port, () => {
//   console.log(`Example app listening on port ${port}`);
// })

// const e = require('express')
// const express = require('express')
// const app = express()
// const port = 3000
// const cors = require('cors')
// app.use(cors())

// const arr = [213,231,11,22,999,111 ]


// app.get('/users', (req, res) => {
//   const users = ['ram','hari','shyam','geeta']
//   if(req.query.order === 'desc'){
//     users.sort()
//     users.reverse()
//   }
//   else if(req.query.order === 'asc'){
//     users.sort()
//   }
//   else{
//     users
//   }
//   res.json({
//      usersList: users
//   })
// })

// app.listen(port, () => {
//   console.log(`Example app listening on port ${port}`)
// })