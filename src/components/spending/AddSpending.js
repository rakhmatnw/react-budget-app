import React, { Component } from 'react'

export default class AddSpending extends Component {
  state = {
    desc: '',
    date: '',
    amount: 0
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
    this.props.addSpending(this.state);
    this.setState({
      desc: '',
      date: '',
      amount: 0
    })
  }


  render() {
    return (
      <div className="row mb-3">
        <div className="col">
          <input 
            type="text" 
            className="form-control" 
            placeholder="Description" 
            id="desc" 
            onChange={this.handleChange}
            value={this.state.desc}/>
        </div>
        <div className="col">
          <input 
            type="date" 
            className="form-control" 
            placeholder="Date" 
            id="date" 
            onChange={this.handleChange}
            value={this.state.date}/>
        </div>
        <div className="col">
          <input 
            type="number" 
            className="form-control" 
            placeholder="Amount" 
            id="amount" 
            onChange={this.handleChange}
            value={this.state.amount}/>
        </div>
        <div className="col">
          <button className="btn btn-success btn-block" onClick={this.handleClick}>ADD</button>
        </div>
      </div>
    )
  }
}
