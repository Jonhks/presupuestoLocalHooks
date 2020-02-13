import React, { useState } from 'react'
import PropTypes from 'prop-types'
import Error from './Error'


const Pregunta = (props) => {

  const [cantidad, setCantidad] = useState(0)
  const [error, setError] = useState(false)

  const { setRestante, setPresupuesto, setShowPregunta } = props

  const definirPresupuesto = e => setCantidad(parseInt(e.target.value, 10))
  
  
  // submit para declarar presupuesto 

  const addPresupuesto = e => {
    e.preventDefault()

    // Validar
    if(cantidad < 1 ||isNaN(cantidad) ) {
      setError(true)
      return
    }
    setError(false)
    // si pasa la  validacion
    setPresupuesto(cantidad)
    setRestante(cantidad)
    setShowPregunta(false)

  }

  return (
    <>
      <h2>Coloca tu presupuesto</h2>
        {error ? <Error mensaje={'El presupuesto es incorrecto'} /> : null }
      <form onSubmit={addPresupuesto}>
        <input 
          type="number"
          className="u-full-width"
          placeholder="Coloca tu presupuesto"
          onChange={definirPresupuesto}
        />

        <input 
          type="submit"
          className="button-primary u-full-width"
          value="Definir presupuesto"
        />
      </form>
    </>
  )
}


Pregunta.propTypes = {
  setShowPregunta: PropTypes.func.isRequired,
  setPresupuesto: PropTypes.func.isRequired,
  setRestante: PropTypes.func.isRequired
}

export default Pregunta