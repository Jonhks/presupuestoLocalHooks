import React, { useState } from'react'
import PropTypes from 'prop-types'
import shortid from 'shortid'
import Error from './Error'

const Formulario = ({setGasto, setCrearGasto}) => {

  const [nombre, setNombre] = useState('')
  const [cantidad, setCantidad] = useState('')
  const [error, setError] = useState(false)

  const agregarGasto = e => {
    e.preventDefault()

    // validar
    if(cantidad < 1 || isNaN(cantidad) || nombre.trim() === '' ){
      setError(true)
      return 
    }
    setError(false)

    // construir el gasto
    const gasto = {
      nombre,
      cantidad,
      id: shortid.generate()
    }
    // pasarel gasto al componetne principal
    setGasto(gasto)
    setCrearGasto(true)
    // resetear el form 
    setNombre('')
    setCantidad('')

  }

  return (
    <form
      onSubmit={agregarGasto}
    >
      <h2>Agrega tus gastos aquí</h2>
      {error ? <Error mensaje="Ambos campos son obligatorios o presupuesto no valido" /> : null}
      <div className="campo">
        <label>Nombre del gasto</label>
        <input 
          type="text"
          className="u-full-width"
          placeholder="Ej. Transporte"
          value={nombre}
          onChange={e => setNombre(e.target.value)}
        />
      </div>
      <div className="campo">
        <label>Cantidad del gasto</label>
        <input 
          type="number"
          className="u-full-width"
          placeholder="Ej. 300"
          value={cantidad}
          onChange={e => setCantidad(parseInt(e.target.value, 10))}
        />
      </div>
      <input 
        type="submit"
        className="button-primary u-full-width"
        value="Agregar Gasto"
      />
    </form>
  )
}

Formulario.propTypes = {
  setGasto: PropTypes.func.isRequired,
  setCrearGasto: PropTypes.func.isRequired
}

export default Formulario