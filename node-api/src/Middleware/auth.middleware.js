import jwt from 'jsonwebtoken'

const Jwt_secret = process.env.JWT_SECRET

export const authRequired =(req,res,next)=>{
    const authHeader = req.headers['authorization']

    if(!authHeader){
        return res.status(401).json({error:'No hay autorización'})

    }


    const token = authHeader.split(' ')[1]

    try{
        const decoded = jwt.verify(token,Jwt_secret)
        req.user = decoded
        next()
    }
    catch(error){
        return res.status(401).json({error:'No hay autorización'})
    }
}

//401 no autorizado
//403 no tiene permiso