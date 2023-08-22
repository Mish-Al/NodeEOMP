const db = require('../config')
const {hash ,compare ,hashSync} = require('bcrypt')

class Users{
    fetchUsers(req,res){
        const query = `
        SELECT userID, firstName ,lastName , userAge, userRole, emailAdd, userPass, userProfile
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
                    msg: "The email you provided is incorrect."
                })
            }else{
                await compare(userPass,results[0].userPass,(cErr,cResults)=>{
                    if(cErr) throw cErr
                    const token = createToken({
                        emailAdd,userPass
                    })
                    res.cookies("LegitUser",
                    token, {
                        maxAge: 86400,
                        httpOnly: true
                    }
                    )
                    if(cResults){
                        res.json({
                            msg: "Logged in",
                            token,
                            results: results[0]
                        })
                    }else{
                        res.json({
                            status: statusCode,
                            msg : "Invaild password or email has been entered"
                        })
                    }
                })
            }
        })
    }
    async register(req,res){
        const info = req.body
        // encrypt password (check for new method)
        info.userPass = await hash(info.userPass,15)
        // payload
        const user = {
            emailAdd: info.emailAdd,
            userPass: info.userPass
        }
        // Query
        const query = `
        INSERT INTO Users
        SET ?
        `
        db.query(query,[info],(err)=>{
            if(err) throw err 
            res.cookies("LegitUser",token,
            {
                maxAge: 86400,
                httpOnly: true
            })
            res.json({
                status: res.statusCode,
                msg: "You are now registered"
            })
        })
    }
    updateUser(req,res){
        const info = req.body
        if(info.userPass){
            info.userPass =
            hashSync(info.userPass,15)
        }
        const query =`
        UPDATE Users SET ?
        WHERE userID = ?
        `
    }
    updateUser(req,res){
        const query =  `
        UPDATE Users SET ?
        WHERE userID = ?
        `
        db.query(query,
            [req.body,req.paramas.id],
            (err)=>{
                if(err) throw err
                res.json({
                    status: statusCode,
                    msg : " The User record has been updated."
                })
            })
    }
    deleteUser(req,res){
        const query = `
        DELETE FROM User WHERE userID = ${req.paramas.id};
        `
        db.query(query, (err)=>{
            if(err) throw err
            res.json({
                status: statusCode,
                msg: "A User was removed."
            })
        })
    }

}
module.exports = Users