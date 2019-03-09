import React, { Component } from 'react';
import AddIncome from './AddIncome';
import ShowIncome from './ShowIncome';
import Card from '../card/DashboardCard';

import '../../App.css';

export default class IncomeContainer extends Component {
  render() {
    return (
      <div>
        <div className="flex">
          <h1>INCOME</h1>
          <Card 
            color="primary"
            title="Sisa Saldo"
            amount={this.props.saldo}
            />
        </div>

        <AddIncome 
          addIncome={this.props.addIncome}/>
        <ShowIncome 
          incomeData={this.props.incomeData}
          totalIncome={this.props.totalIncome}
          removeIncome={this.props.removeIncome}
          />
      </div>
    )
  }
}
