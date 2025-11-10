//import {getConnection} from '../database/connection.js'
import {LibrosRepo} from '../repos/libro.repo.js'


export const getLibros = async (req, res) => {
  const pag = parseInt(req.query.pag) || 1

  const buscar = (req.query.buscar || '').trim();
  const estado = (req.query.estado || '').trim();
  const ano = (req.query.ano || '').trim();

  const datos = parseInt(req.query.datos) || 10

  const result = await LibrosRepo.getAll(pag,datos,buscar,estado,ano)
  const libros = result.recordset

   
   const resulttotal = await LibrosRepo.count(buscar); 
   const total = resulttotal.recordset[0].total

  res.json({
    libros,
    total
  }
  )
}

//a controlador para traer un libro por su id
export const getLibro = async (req, res) => {
  const { id } = req.params
  const result = await LibrosRepo.getById(id);

  if (result.recordset.length === 0) {
    return res.status(404).json({ message: 'Libro no encontrado' })
  }

  res.json(result.recordset[0])
}


export const postLibro = async (req, res) => {
  await LibrosRepo.create(req.body)
  res.status(201).json({ message: 'Libro creado' })
}

export const putLibro = async (req, res) => {
  const id = req.params.id;
  const { Titulo, Autor, Ano_public, estado } = req.body

  if ( Titulo === undefined && Autor === undefined && Ano_public === undefined && estado === undefined
  ) {
    return res.status(400).json({ message: 'No hay datos para actualizar' })

  }

  try {

    await LibrosRepo.update(id, Titulo, Autor, Ano_public, estado)
    return res.json({ message: 'Libro actualizado' })

  } catch (err) {

    console.error(err)

    return res.status(500).json({ message: 'Error al actualizar' })

}}


export const deleteLibro = async (req, res) => {
  const { id } = req.params

  await LibrosRepo.delete(id)

  res.json({ message: 'Libro eliminado' })
}
