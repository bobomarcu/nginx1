const express = require('express')
const cors = require('cors')
const db = require('./db')
const bcrypt = require('bcrypt')
const app = express()

const saltRounds = 10;

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
app.use(cors(
    {origin:['http://192.168.7.150:3000', '*']}
))
app.set('trust proxy', true)

app.get('/',(req,res)=>{

    res.send('aplicatia 1')

})

app.get('/login/:username-:password',(req,res)=>{




})

app.get('/register/:username-:password',(req,res)=>{

    const username = req.params.username
    const password = req.params.password

    bcrypt.hash(password, saltRounds, function(err, hash) {

        db.query(`INSERT INTO (id,username,password) VALUES (0,${username},${hash})`,(err,result)=>{

            if(err) throw err
            res.send('ok')

        })

    });


})

app.get('/api/:procesor-:os-:ip-:numeAdmin',(req,res)=>{

    const procesor = req.params.procesor
    const os = req.params.os
    const ip = req.params.ip
    const numeAdmin = req.params.numeAdmin

    var pc = {

        procesor: procesor,
        os: os,
        ip: ip,
        numeAdmin: numeAdmin

    }
    db.query('SELECT * FROM user_data', (err,result)=>{

        if (err) throw err
        console.log(result[0])
        res.send(pc + result[0])

    })


} )

app.listen(4000,()=>{

    console.log("server is runnig")

})