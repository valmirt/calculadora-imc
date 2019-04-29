import React from 'react'
import './IMCForm.css'

class IMCForm extends React.Component {
  state = {
    weight: {
      value: 0,
      status: ''
    },
    height: {
      value: 0,
      status: ''
    },
    name: '',
    status: ''
  }

  onButtonClick = _ => {
    const weight = this.state.weight.value
    const height = this.state.height.value

    if (this.checkupValues(weight, height)) {
      const name = this.state.name
      this.setState({status: ''})
      //Set to parent component the inputs
      this.props.onTermSubmit(weight, height, name)
    } else this.setState({status: 'error'})
  }

  onInputChange = (val, type) => {
    if (!isNaN(val)) {
      if (type === 1) {
        this.setState({weight: {value: val, status: ''}})
      } else this.setState({height: {value: val, status: ''}})
    } else {
      if (type === 1) {
        this.setState({weight: {value: 0, status: 'error'}})
      } else this.setState({height: {value: 0, status: 'error'}})
    }
  }

  checkupValues = (weight, height) => {
    return ((!isNaN(weight) && weight !== 0) && (!isNaN(height) && height !== 0))
  }

  render() {
    const color = this.props.color
    return (
      <div className={`ui form ${this.state.status}`}>
        <div className="three fields">
          <div className={`ui required field ${this.state.weight.status}`}>
            <label>Peso</label>
            <div className="ui right labeled input">
              <input 
                type="number" 
                min="0" 
                max="500" 
                placeholder="0"
                onChange={e => this.onInputChange(parseInt(e.target.value), 1)}
              />
              <div className="ui basic label">kg</div>
            </div>
          </div>
          <div className={`ui required field ${this.state.height.status}`}>
            <label>Altura</label>
            <div className="ui right labeled input">
              <input 
                type="number" 
                min="0" 
                max="500" 
                placeholder="0"
                onChange={e => this.onInputChange(parseInt(e.target.value), 2)}
              />
              <div className="ui basic label">cm</div>
            </div>
          </div>
          <div className="field">
            <label>Nome</label>
            <input 
              type="text" 
              placeholder="Nome"
              onChange={e => this.setState({name: e.target.value})}/>
          </div>
        </div>
        <div className="ui error message">
          <div className="header">Valores Incorretos</div>
          <p>Informe os valores corretamente para ser efetuado o cálculo.</p>
        </div>
        <div className="ui center aligned container">
          <button 
            className={`button huge ${color} ui button`} 
            type="submit"
            onClick={this.onButtonClick}
          >
            Calcular IMC
          </button>
        </div>
      </div>
    )
  }
}

export default IMCForm