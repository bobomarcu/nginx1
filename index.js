const express = require('express')
const app = express()

function getReq(req,res,next){

    console.log(
        {
        'Method': req.method ,
        'url': req.originalUrl, 
        'IP': req.headers['x-forwarded-for'] || req.socket.remoteAddress
        }
    )
    next()

}

app.use(getReq);
app.use(express.json())
app.use(cors())
app.set('trust proxy', true)

app.get('/',(req,res)=>{

    res.send('aplicatia 1')

})

app.get('/api',(req,res)=>{

    res.send("aplicatia 1")

})

app.listen(4000,()=>{

    console.log("server is runnig")

})