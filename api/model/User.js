const db = require('../config')
const {hash ,compare ,hashSync} = require('bcrypt')
const { createToken } = require('../middleware/AuthenticateUser')
class Users{
    fetchUsers(req, res){
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
        FROM Users
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
   async registerUser(req,res){
    const data  = req.body
        data.userPass = await hash(data.userPass, 15)
        // payload
        const user = {
            emailAdd: data.emailAdd,
            userPass: data.userPass
        }
        // Query
        const query = `
        INSERT INTO Users
        SET ?
        `
        db.query(query, [data],(err)=>{
            if(err) throw err
            //CReate Token
            let token = createToken(user)
            // res.cookies("LegitUser", token,
            // {
            //     maxAge: 3600000,
            //     httpOnly: true
            // })
            res.json({
                status: res.statusCode,
                msg:"you are now registered."
            })
        })
    }
    login(req,res){
        const {emailAdd, userPass} =
        req.body
        const query =
        `
        SELECT firstName , lastName , gender , userRole , emailAdd , userPass , userProfile
        FROM Users
        WHERE emailAdd = '${emailAdd}';
        `
        db.query(query,async(err, results)=>{
            if(err) throw err
            if(!results?.length){
                res.json({
                    status:res.statusCode,
                    msg : "You provided a wrong email."
                })
            }else{
                await compare(userPass, results[0].userPass,(cErr,cResults)=>{
                    if(cErr) throw cErr
                    // Create a token
                    const token = createToken({
                        emailAdd, userPass
                    })
                    // Save a token
                    // res.cookies("LegitUser",
                    // token,{
                    //     maxAge: 3600000,
                    //     httpOnly: true
                    // }
                    // )
                    if(cResults){
                        res.json({
                            msg: "logged in",
                            token,
                            results: results[0]
                        })
                    }else{
                        res.json({
                            status: statusCode,
                            msg: "Invalid password or you have not registered"
                        })
                    }
                })
            }
        })
    }
    updateUser(req, res){
        const data = req.body
        if(data.userPass){
            data.userPass = 
            hashSync(data.userPass, 15)
        }
        const query = `
        UPDATE Users SET ?
        WHERE userID = ?
        `
    }
    deleteUser(req, res){
        const query = 
        `
        DELETE FROM Users WHERE UserID = ${req.params.id};
        `
        db.query(query,(err)=>{
            if(err) throw err
            res.json({
                status:statusCode,
                msg: "A user record was deleted"
            })
        })
    }
}
module.exports = Users