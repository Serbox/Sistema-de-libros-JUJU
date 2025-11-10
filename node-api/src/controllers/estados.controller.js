import {estadosRepo} from '../repos/estados.repo.js'

export const getEstados = async (req, res) => {
    const result = await estadosRepo.getAll()
     res.json(result.recordset)
}

export const getEstadosById = async (req, res) =>{
    const {id} = req.params
    const result = await estadosRepo.getById(id)

    if(result.recordset.length === 0){
        return res.status(404).json({message:'Estado no encontrado'})
    }
    res.json(result.recordset)
}

export const postEstados = async (req, res) =>{
    const {nombre} = req.body
    await estadosRepo.create({nombre})

    res.status(201).json({message:'Estado creado'})
}

export const putEstados = async (req, res) =>{
    const {id} = req.params
    const {nombre} = req.body

    await estadosRepo.update(id, {nombre})
    res.json({message:'Estado actualizado'})
}

export const deleteEstados = async (req, res) =>{
    const {id} = req.params
    await estadosRepo.delete(id)
    
    res.json({message:'Estado eliminado'})
}