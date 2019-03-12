import React, { Component } from 'react';
import ShowIncome from './ShowIncome';
import Card from '../card/DashboardCard';
import AddForm from '../form/AddForm';
import EditForm from '../form/EditForm';

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
          <EditForm 
            editTemp={this.props.editTemp}
            handleClick={this.props.editIncome}
            />
          :
          <AddForm handleClick={this.props.addIncome}/>
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
