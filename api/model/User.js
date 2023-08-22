const db = require('../config')
// const {hash ,compare ,hashSync} = require('bcrypt')
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

}
module.exports = Users