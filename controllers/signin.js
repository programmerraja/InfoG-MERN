//node modules
const passport = require("passport");
//util
const {
    AppError
} = require("../util/util");



//handling POST /signin
async function post(req, res, next) {
    passport.authenticate('local', function (err, user, info) {
        if (err) {
            return next(new AppError(err, 500));
        }
        //if no user show the error.
        if (!user) {
            return res.json({"status":"Failure",
                error_msg: info.message
            });
        }
        //if user sucessfully login we need to call manually the signin function
        req.logIn(user, function (err) {
            if (err) {
                return next(new AppError(err, 500));
            }
            return res.json({"status":"Sucess",user:user})
        });
    })(req, res, next);
}


module.exports = {
    post
};