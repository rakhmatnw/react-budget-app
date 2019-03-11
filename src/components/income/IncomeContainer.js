import React, { Component } from 'react';
import AddIncome from './AddIncome';
import ShowIncome from './ShowIncome';
import EditIncome from './EditIncome';
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

        {this.props.wantToEdit ?
          <EditIncome 
            editTemp={this.props.editTemp}
            editIncome={this.props.editIncome}
            />
          :
          <AddIncome 
            addIncome={this.props.addIncome}
            />
        }

        
        <ShowIncome 
          incomeData={this.props.incomeData}
          totalIncome={this.props.totalIncome}
          removeIncome={this.props.removeIncome}
          handleEditClick={this.props.handleEditClick}
          />
      </div>
    )
  }
}
