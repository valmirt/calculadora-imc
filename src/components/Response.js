import React from 'react'
import Steps from './Steps'

const Response = ({response, color}) => {
  if (response === 0) {
    return <div></div>
  } else {
    return (
      <div className="ui container">
        <Steps response={response}/>
      </div>
    )
  }
}

export default Response