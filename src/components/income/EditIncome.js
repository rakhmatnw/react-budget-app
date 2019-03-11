import React, { Component } from 'react'

export default class EditIncome extends Component {
  state = {
    desc: '',
    date: '',
    amount: 0
  }

  componentDidMount(){
    this.setState({
      desc: this.props.editTemp.desc,
      date: this.props.editTemp.date,
      amount: this.props.editTemp.amount
    })
  }

  handleChange = e => {
    let key =  e.target.id;
    let val = '';

    if(key === 'amount'){
      val = parseInt(e.target.value)
    } else {
      val = e.target.value;
    }

    this.setState({
      [key]: val 
    })
  }

  handleClick = e => {
    e.preventDefault();
    this.props.editIncome(this.state, this.props.editTemp.index);
    this.setState({
      desc: '',
      date: '',
      amount: 0
    })
  }

  render() {
    return (
      <div className="row mb-3">
        <div className="col-md-3 col-sm-12 mb-2">
          <input 
            type="text" 
            className="form-control" 
            placeholder="Description" 
            id="desc" 
            onChange={this.handleChange}
            value={this.state.desc}/>
        </div>
        <div className="col-md-3 col-sm-12 mb-2">
          <input 
            type="date" 
            className="form-control" 
            placeholder="Date" 
            id="date" 
            onChange={this.handleChange}
            value={this.state.date}/>
        </div>
        <div className="col-md-3 col-sm-12 mb-2">
          <input 
            type="number" 
            step="1" 
            className="form-control" 
            placeholder="Amount" 
            id="amount" 
            onChange={this.handleChange}
            value={this.state.amount}/>
        </div>
        <div className="col-md-3 col-sm-12">
          <button 
            className="btn btn-success btn-block" 
            onClick={this.handleClick}>SAVE</button>
        </div>
      </div>
    )
  }
}
