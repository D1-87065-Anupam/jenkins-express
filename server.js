const express=require('express')
  const app=express()
  app.get('/',(request,response)=>{
     response.send('Welcome to my Express App')
  })
  app.listen(4000,'0.0.0.0',()=>{
     console.log('Server started on port 4000')
  })
