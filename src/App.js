import React, { useState, useEffect } from 'react'
import Pregunta from './Components/Pregunta'
import Formulario from './Components/Formulario'
import Listado from './Components/Listado'
import ControlPresupuesto from './Components/ControlPresupuesto'

function App() {

  const [presupuesto, setPresupuesto] = useState(0)
  const [restante, setRestante] = useState(0)
  const [showPregunta, setShowPregunta] = useState(true)
  const [gastos, setGastos] = useState([])
  const [gasto, setGasto] = useState({})
  const [crearGasto, setCrearGasto] = useState(false)



  // Actualizando el restante
  useEffect(() => {
    if(crearGasto) {
      // agrega el nuevo presupuesto 
      setGastos([
        ...gastos,
        gasto
      ])
      // restar del presupuesto
      const presupuestoRestante = restante - gasto.cantidad
      setRestante(presupuestoRestante)
      // resetear a false 
      setCrearGasto(false)
    }
  }, [gasto,gastos, crearGasto, restante])

  // Cuando se genere un nuevo gasto
  // const addNewGasto = gasto => {
    
  // }

  return (
    <div className="container">
      <header>
        <h1>Gasto semanal</h1>
        <div className="contenido-principal contenido">
          {showPregunta ? (
          <Pregunta 
            setPresupuesto={setPresupuesto}
            setRestante={setRestante}
            setShowPregunta={setShowPregunta}
          />
          ):( 
          <div className="row">
            <div className="one-half column">
              <Formulario
                setGasto={setGasto}
                setCrearGasto={setCrearGasto}
              />
            </div>
            <div className="one-half column">
              <Listado 
                gastos={gastos} 
              />
              <ControlPresupuesto 
                presupuesto={presupuesto}
                restante={restante}
              />
            </div>
          </div>
          )}
        </div>
      </header>
    </div>
  )
}

export default App;