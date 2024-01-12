const jwt= require("jsonwebtoken")

const auth= (req, res, next)=>{
    const token= req.headers.authorization?.split(" ")[1]
    if(token){
        try{
           const decoded =jwt.verify(token, "masai")
           if(decoded){
            req.body.userId= decoded.userId
            req.body.userName= decoded.user 
            next()
           }
           else{
            res.json({msg:"You are not authorized"})
           }
        }
        catch(err){
         res.json({error:err})
        }
    }
    else{
        res.json({msg:"Please login!"})
    }
}

module.exports={
    auth
}