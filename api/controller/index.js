const express = require('express')
const bodyParser = require('body-parser')
const {verifyAToken} = require('../middleware/AuthenticateUser')
const routes = express.Router()
const {users, products, orders} = require('../model')


// ==========User`s routes================
routes.get('/users',(req,res)=>{
    users.fetchUsers(req,res)
})

routes.get('/user/:id',(req,res)=>{
    user.fetchUser(req,res)
})

routes.post('/register',bodyParser.json(),(req,res)=>{
    users.registerUser(req,res)
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
    routes,
    verifyAToken
}