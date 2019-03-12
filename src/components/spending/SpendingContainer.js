import React, { Component } from 'react';
import ShowSpending from './ShowSpending';
import Card from '../card/DashboardCard';
import AddForm from '../form/AddForm';
import EditForm from '../form/EditForm';

import '../../App.css';

export default class SpendingContainer extends Component {
  render() {
    return (
      <div>
        <div className="flex">
          <h1>SPENDING</h1>
          <Card 
            color="primary"
            title="Sisa Saldo"
            amount={this.props.saldo}
            />
        </div>

        {this.props.wantToEdit ?
          <EditForm 
            editTemp={this.props.editTemp}
            handleClick={this.props.editSpending}
            />
          :
          <AddForm 
            handleClick={this.props.addSpending}
            />
        }

        <ShowSpending 
          spendingData={this.props.spendingData}
          totalSpending={this.props.totalSpending}
          removeSpending={this.props.removeSpending}
          handleEditClick={this.props.handleEditClick}/>
      </div>
    )
  }
}
