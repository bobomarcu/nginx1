const express = require('express')
const app = express()

app.get('/',(req,res)=>{

    res.send('aplicatia 1')

})

app.listen(4000,()=>{

    console.log("server is runnig")

})