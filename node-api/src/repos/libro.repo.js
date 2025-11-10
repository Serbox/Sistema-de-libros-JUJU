import { getConnection } from '../database/connection.js';

export const LibrosRepo = {
  getAll: (pag, datos,buscar,estado,ano) => {
    const offset = (pag - 1) * datos;


    const filtros = [];

    if(buscar){
      filtros.push(`Titulo LIKE '%${buscar}%' OR Autor LIKE '%${buscar}%'`);
    }
    if(estado){
      filtros.push(`L.estado = ${estado}`);
    }
    if(ano){
      filtros.push(`L.Ano_public like '%${ano}%'`);
    }

    const where = filtros.length > 0 ? `WHERE ${filtros.join(' AND ')}` : '';

    return getConnection(`SELECT L.Id, L.Titulo, L.Autor, L.Ano_public, L.FechaCreacion, L.FechaModificacion, L.estado AS EstadoId, E.Nombre AS Estado , COUNT(*) OVER() AS TotalRegistros FROM Libros AS L LEFT OUTER JOIN Estados AS E ON L.estado = E.Id ${where} ORDER BY L.FechaCreacion DESC OFFSET ${offset} ROWS FETCH NEXT ${datos} ROWS ONLY `);
  },



  count: (buscar = '') => {
    const where = buscar ? `WHERE Titulo LIKE '%${buscar}%' OR Autor LIKE '%${buscar}%'` : ''
    const query = ` SELECT COUNT(*) AS total FROM Libros ${where} `

    return getConnection(query)
  },

  getById: (id) => {
    return getConnection('SELECT * FROM Libros WHERE Id = @id', { id });
  },

  create: (libro) => {
    return getConnection(
      `INSERT INTO Libros (Titulo, Autor, Ano_public, FechaCreacion, FechaModificacion)
       VALUES (@titulo, @autor, @ano_public, GETDATE(), GETDATE())`,
      {
        titulo: libro.titulo,
        autor: libro.autor,
        ano_public: libro.ano_public,
      }
    );
  },

update: async (id, Titulo, Autor, Ano_public, estado) => {
    const campos = []

    if (Titulo !== undefined) {
      campos.push(`Titulo = '${Titulo}'`)
    }

    if (Autor !== undefined) {
      campos.push(`Autor = '${Autor}'`)
    }
    if (Ano_public !== undefined) {
      campos.push(`Ano_public = '${Ano_public}'`)
    }


    if (estado !== undefined) {
      campos.push(`estado = ${estado}`)
    }

    const query = `UPDATE Libros SET ${campos.join(', ')} WHERE Id = ${id} `;


    return getConnection(query);
  },


  delete: (id) => {
    return getConnection('DELETE FROM Libros WHERE Id = @id', { id });
  },
};
