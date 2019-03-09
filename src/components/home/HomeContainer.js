import React from 'react';
import DashboardCard from '../card/DashboardCard';

export default function HomeContainer({incomeData, spendingData, totalIncome, totalSpending, saldo}){

  const allData = [...incomeData, ...spendingData];
  console.log(allData);
  
  return (
    <div>
      <h1>DASHBOARD</h1>
      <div className="row">
        <div className="col-sm-4">
          <DashboardCard color="success" title="Total Income" amount={totalIncome} />
        </div>
        <div className="col-sm-4">
          <DashboardCard color="danger" title="Total Spending" amount={totalSpending} />
        </div>
        <div className="col-sm-4">
          <DashboardCard color="primary" title="Saldo" amount={saldo} />
        </div>
        
      </div>

      <table className="table">
        <thead>
          <tr>
            <th>#</th>
            <th>Description</th>
            <th>Date</th>
            <th>Amount</th>
          </tr>
        </thead>
        <tbody>
          
        </tbody>
      </table>
    </div>
  )
}
