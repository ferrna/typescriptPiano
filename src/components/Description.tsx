import { FC } from 'react'
import './Description.css'

const Description: FC = () => {

  return (
    <div className="Description">
        <div>
        Para comenzar a tocar un acorde:<br/>
        1. Seleccioná el modo "piano" del panel<br/>
        2. Haz click sobre las notas del acorde<br/>
        3. Haz click en "play" para empezar<br/>
        4. Haz click en "stop" para terminar
        </div>
        <div>
        Tocar de manera libre:<br/>
        1. Seleccioná el modo "normal" del panel<br/>
        </div>
    </div>
  )
}

export default Description
