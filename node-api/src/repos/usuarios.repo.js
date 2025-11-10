import { getConnection } from '../database/connection.js';

export const usuariosRepo = {
    getall: (Correo)=>{

        return getConnection('SELECT * FROM Usuarios WHERE Correo = @Correo', {Correo});
    }
}