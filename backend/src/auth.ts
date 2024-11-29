import jwt from 'jsonwebtoken';


const userAuth = (req:any,res:any,next:any) => {

    const token = req.headers.authorization;

    if(!token){
        res.status(401).json({message:"Session Expired! Please login again"});
    }

    try{
        const decoded = jwt.verify(token,process.env.JWT_SECRET as string);
        if(decoded){
            req.userId = (decoded as jwt.JwtPayload).userId;
            next();
        }
    } catch (error){
        res.status(401).json({message:"Session Expired! Please login again"});
    }
}

export {userAuth};