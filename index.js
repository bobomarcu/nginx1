const express = require('express')
const app = express()

function getReq(req,res,next){

    console.log({'Method': req.method , 'IP': req.ip })
    next()

}

app.use(getReq);

app.get('/',(req,res)=>{

    res.send('aplicatia 1')

})

app.get('/api',(req,res)=>{

    res.send({obj:'ok'})

})

app.listen(4000,()=>{

    console.log("server is runnig")

})