import React, { Component } from 'react';
import AddSpending from './AddSpending';
import ShowSpending from './ShowSpending';
import EditSpending from './EditSpending';
import Card from '../card/DashboardCard';

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
          <EditSpending 
            editTemp={this.props.editTemp}
            editSpending={this.props.editSpending}
            />
          :
          <AddSpending 
            addSpending={this.props.addSpending}
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
