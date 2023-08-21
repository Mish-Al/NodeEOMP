const express = require('express')
const bodyParser = require('body-parser')
const routes = express.Router()


// ==========User`s routes================
routes.get('/user',(req,res)=>{
    users.fetchUsers(req,res)
})

routes.get('/user/:id',(req,res)=>{
    user.fetchUser(req,res)
})

routes.post('/register',bodyParser.json(),(req,res)=>{
    users.updateUser(req,res)
})

routes.patch('/user/:id',bodyParser.json(),(req,res)=>{
    users.updateUser(req,res)
})

routes.put('/user/:id',bodyParser.json(),(req,res)=>{
    users.updateUser(req,res)
})

routes.delete('/user/:id',(res,req)=>{
    users.deteleUser(req,res)
})

routes.post('/login',bodyParser.json(),(req,res)=>{
    user.login(req,res)
})

module.exports = {
    express,
    routes
}