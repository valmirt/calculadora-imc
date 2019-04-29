import React from 'react'
import Steps from './Steps'
import './Response.css'

const Response = ({response, name}) => {
  if (response === 0) {
    return <div></div>
  } else {
    return (
      <div className="ui grid container">
        <div className="ui row">
          <div className="seven wide column">
            <Steps response={response}/>
          </div>
          <div className="nine wide column">
            <div className="ui container">
              <h3 className="ui header">{`IMC do(a) ${name} é: `}</h3>
              <div className="td ui center aligned container">
                <div className="title main-color">{response}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Response