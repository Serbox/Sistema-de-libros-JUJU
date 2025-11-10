import { getConnection } from '../database/connection.js';

export const estadosRepo = {
    getAll: ()=>{
        return getConnection('SELECT *FROM Estados');
    },
    getById: (id)=>{
        return getConnection('SELECT * FROM Estados WHERE Id = @id', {id});
    },
    create: (estado)=>{
        return getConnection('INSERT INTO Estados (Nombre, FechaCreacion) VALUES (@nombre, GETDATE())', {nombre: estado.nombre});
    },
    update: (id, estado)=>{
        return getConnection('UPDATE Estados SET Nombre = @nombre WHERE Id = @id', {id, nombre: estado.nombre});
    },
    delete: (id)=>{
        return getConnection('DELETE FROM Estados WHERE Id = @id', {id});
    }


}