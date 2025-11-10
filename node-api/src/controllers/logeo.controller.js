import e from 'express'
import {usuariosRepo} from '../repos/usuarios.repo.js'
import jwt from 'jsonwebtoken';


const Jwt_secret = process.env.JWT_SECRET
const Jwt_expires_in = process.env.JWT_EXPIRES_IN

export const login = async (req, res) =>{

     //console.log('BODY QUE LLEGÓ:', req.body);
    const {correo,contrasena} = req.body

    try{
        const result = await usuariosRepo.getall(correo)
        const usuario = result.recordset[0]  
        
        if(!usuario){
            return res.status(401).json({error:'Usuario o contraseña incorrectos'})
        }

        if(usuario.Contrasena != contrasena){
            return res.status(401).json({error:'Usuario o contraseña incorrectos'})
        }

        //aqui genero el tiken
        const a ={
            id:usuario.id,
            correo:usuario.correo,
            nombre:usuario.nombre,
            apellido:usuario.apellido
        }

        const token = jwt.sign(a,Jwt_secret,{
            expiresIn: Jwt_expires_in
        })


        return res.json({
            message: 'usuario conectado',
            token,
            usuario: {
                id: usuario.Id,
                correo: usuario.Correo,
                nombre: usuario.Nombre,
            },
        });

        
    }
    catch (error) {
  console.error('Error en login:', error);
  return res.status(500).json({
    message: 'Error interno',
    detail: error.message,
  });
}

}