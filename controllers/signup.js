//node modules
const mongoose = require("mongoose");
const bcrypt = require('bcrypt');
var validator = require('validator');
//model
const usermodel = require("../models/User");
//util
const {
    generateToken,
    forgetPassword,
    AppError,
    verfiyMail,
    dbErrorHandler
} = require("../util/util");



//handling POST /signup
async function post(req, res) {

    let {
        name,
        email,
        password
    } = req.body;
    if (name && email && password) {

        if (!validator.isEmail(email)) {
            res.json( {
                error_msg: "Invalid Email"
            });
            return
        }

        let hash = bcrypt.hashSync(password, 2);
        let new_user = new usermodel({
            name,
            email,
            password: hash
        });
        new_user = await new_user.save()
            .catch((err) => {
                let error_msg = dbErrorHandler(err);
                res.json( {
                    error_msg: error_msg
                });
            });
        if (new_user) {
            let link = req.protocol + "://" + req.get("host") + "/user/verifiy/email/" + new_user._id;
            let msg = await verfiyMail(new_user.email, new_user.name, link);

            if (msg) {
                res.json({"status":"sucess","msg":"Account created sucessfully"});
            } else {
                //need to remove user from database  if mail not send sucessfully
                await usermodel.deleteOne({
                        _id: new_user._id
                    })
                    .catch((err) => {
                        let error_msg = dbErrorHandler(err)
                        res.json({status:"Failed",
                            error_msg: error_msg
                        });
                    });
                res.json({status:"Failed",
                        error_msg: "Sorry Something went wrong. Please try again"
                });
            }
        }
    }
    else{
       res.json({status:"Failed",
                        error_msg: "Please enter all the detail's."
                }); 
    }
}

module.exports = {
    post
};