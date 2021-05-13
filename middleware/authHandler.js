const path=require("path");

function authHandler(req, res, next) {
    if (req.user) {	
        next()
        return
    }
    else{
    	res.redirect("/signin");
    }

}

module.exports = authHandler;