require('dotenv').config();
const jwt = require('jsonwebtoken');

module.exports = ( req, res, next ) => {
    try {
    //splits the header authorization from "bearer + token" to simply "token"
    const token = req.headers.authorization.split(" ")[1];
    if(token){
        const decoded = jwt.verify(token, process.env.JWT_KEY);
        req.userData = decoded;
        next();
    }else{
        return res.status(401).json({
            message: "Error"
        })
    }
    // console.log(token); <---to check if we successfully parsed the header

    } catch (error) {
        return res.status(401).json({
            message: 'Auth Failed'
        });
    }
};