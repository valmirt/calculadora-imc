import React from 'react'
import Header from './Header'
import IMCForm from './IMCForm'
import Response from './Response'

const BASE_COLOR = 'green'

class App extends React.Component {
  state = {
    imc: 0
  }

  onTermSubmit = (weight, height, name) => {
    if (name === '') name = 'Usuário'

    const imc = (weight / ((height / 100) * (height / 100))).toFixed(2)
    this.setState({imc: imc})

    //TODO - setar na tela a resposta
  }
  
  render() {
    return (
      <div className="ui segment">
        <div className="ui container">
          <div className="ui vertical segment">
            <Header
              title="Calculadora de IMC"
              description="Calcule o seu índice de massa corporal"
              icon="weight"
              color={BASE_COLOR}
            />
          </div>
          <div className="ui vertical segment">
            <IMCForm
              onTermSubmit={this.onTermSubmit}
              color={BASE_COLOR}
            />
          </div>
          <div className="ui vertical segment">
            <Response response={this.state.imc} />
          </div>
        </div>
      </div>
    )
  }
}

export default App