const db = require('../config')
const {hash ,compare ,hashSync} = require('bcrypt')

class User{
    fetchUsers(req,res){
        const query = `
        SELECT userID, firstName ,lastName,userAge,userRole,emailAdd,userPass,userProfile
        FROM Users;
        `
        db.query(query,(err,results)=>{
            if(err) throw err
            res.json({
                status: res.statusCode,
                results
            })
        })
    }
    fetchUser(req, res){
        const query = `
        SELECT userID ,firstName, lastName, gender, userRole, emailAdd, userPass, userProfile
        FROM USER
        WHERE userID = ${req.params.id};
        `
        db.query(query,(err,results)=>{
            if(err) throw err
            res.json({
                status: res.statusCode,
                results
            })
        })
    }
    login(req,res){
        const {emailAdd, userPass} =
        req.body
        // 
        const query = `
        SELECT firstName , lastName , gender ,userRole , emailAdd ,userPass , userProfile
        FROM Users
        WHERE emailAdd = '${emailAdd}';
        `
        db.query(query, async(err,results)=>{
            if(err) throw err
            if(!results?.length){
                res.json({
                    status: res.statusCode,
                    msg: "The email you provided is incorrect"
                })
            }else{
                await compare(userPass,results[0].userPass,(cErr,cResults)=>{
                    if(cErr) throw cErr
                    const token = createToken({
                        emailAdd,userPass
                    })
                })
            }
        })
    }