import React from 'react'
import './Steps.css'

const Steps = ({response}) => {
  let under = ''
  let normal = ''
  let over = ''
  let obesity = ''

  under = normal = over = obesity = 'disabled'

  if (response <= 18.5) {
    under = 'active'
  } else if (response <= 25) {
    normal = 'active'
  } else if (response <= 30) {
    over = 'active'
  } else {
    obesity = 'active'
  }

  return (
    <div className="ui vertical steps">
      <div className={`${under} step`}>
        <div className="content">
          <div className="title">Abaixo do peso</div>
        </div>
      </div>
      <div className={`${normal} step`}>
        <div className="content">
          <div className="title">Peso normal</div>
        </div>
      </div>
      <div className={`${over} step`}>
        <div className="content">
          <div className="title">Sobrepeso</div>
        </div>
      </div>
      <div className={`${obesity} step`}>
        <div className="content">
          <div className="title">Obesidade</div>
        </div>
      </div>
    </div>
  )
}

export default Steps