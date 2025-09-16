import jwt from "jsonwebtoken";

export const shouldbeLoggedIn=async ()=>{
    const token=req.cookies.token;

    if(!token) return res.status(401).json({message:"Not Authenticated!"});

    jwt.verify(token,process.env.JWT_SECRET_KEY,async (err,payload)=>{
        if(err) return res.status(403).json({message:"Token is Not Valid!"});
 
    });
    res.status(200).json({message:"You are Authenticated"});
};
export const shouldbeadmin=async ()=>{

    const token=req.cookies.token;

    if(!token) return res.status(401).json({message:"Not Authenticated!"});

    jwt.verify(token,process.env.JWT_SECRET_KEY,async (err,payload)=>{
        if(err) return res.status(403).json({message:"Token is Not Valid!"});
        if(!payload.isAdmin){
            return res.status(401).json({message:"Not Authorized!"});
        }
    });
    res.status(200).json({message:"You are Authenticated"});

};