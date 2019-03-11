import React from 'react';
import DashboardCard from '../card/DashboardCard';

export default function HomeContainer({incomeData, spendingData, totalIncome, totalSpending, saldo}){

  incomeData.forEach(data => data.type = 'income');
  spendingData.forEach(data => data.type = 'spending');
  const allData = [...incomeData, ...spendingData];
  const allDataList = allData.map((data, i) => {
    return(
      <tr key={i} className={data.type==='income' ? `bg-success` : `bg-danger`}>
        <td>{i}</td>
        <td>{data.desc}</td>
        <td>{data.date}</td>
        <td>{data.amount}</td>
      </tr>
    )
  })

  return (
    <div>
      <h1>DASHBOARD</h1>
      <div className="row mb-3">
        <div className="col-sm-12 col-md-4 mb-2">
          <DashboardCard color="success" title="Total Income" amount={totalIncome} />
        </div>
        <div className="col-sm-12 col-md-4 mb-2">
          <DashboardCard color="danger" title="Total Spending" amount={totalSpending} />
        </div>
        <div className="col-sm-12 col-md-4">
          <DashboardCard color="primary" title="Saldo" amount={saldo} />
        </div>
        
      </div>

      <table className="table borderless">
        <thead>
          <tr>
            <th>#</th>
            <th>Description</th>
            <th>Date</th>
            <th>Amount</th>
          </tr>
        </thead>
        <tbody>
          { allDataList }
        </tbody>
      </table>
    </div>
  )
}
