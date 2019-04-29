import React from 'react'
import Steps from './Steps'

const Response = ({response}) => {
  if (response === 0) {
    return <div></div>
  } else {
    return (
      <div className="ui grid container">
        <div className="ui row">
          <div className="three wide column">
            <Steps response={response}/>
          </div>
          <div className="thirteen wide columns">
            <div className="ui container">Hi There</div>
          </div>
        </div>
      </div>
    )
  }
}

export default Response