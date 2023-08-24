const express = require('express')
const bodyParser = require('body-parser')
const {verifyAToken} = require('../middleware/AuthenticateUser')
const routes = express.Router()
const {users, products} = require('../model')


// ==========User`s routes================
routes.get('/users',(req,res)=>{
    users.fetchUsers(req,res)
})

routes.get('/user/:id',(req,res)=>{
    users.fetchUser(req,res)
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
    users.login(req,res)
})
// ==========Product`s routes==========
routes.get('/products',(req,res)=>{
    products.fetchProducts(req,res)
})

routes.get('/products/:id',(req,res)=>{
    products.fetchProduct(req,res)
})

routes.post('/register',bodyParser.json(),(req,res)=>{
    products.fetchProducts(req,res)
})

routes.put('/products/:id',bodyParser.json(),(req,res)=>{
    products.fetchProducts(req,res)
})

routes.patch('/products/:id',bodyParser.json(),(res,req)=>{
    products.fetchProduct(req,res)
})

routes.delete('/products/:id',bodyParser.json(),(req,res)=>{
    products.fetchProduct(req,res)
})

module.exports = {
    express,
    routes,
    verifyAToken
}