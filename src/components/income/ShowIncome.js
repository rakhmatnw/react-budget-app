import React from 'react'

export default function ShowIncome({ incomeData, totalIncome, removeIncome}) {

  const incomeDataList = incomeData.map((income, i) => {
    return(
      <tr key={i}>
        <td>{i}</td>
        <td>{income.desc}</td>
        <td>{income.date}</td>
        <td>{income.amount}</td>
        <td>
          <button className="btn btn-primary mr-1">edit</button>
          <button className="btn btn-danger" onClick={() => removeIncome(i)}>delete</button>
        </td>
      </tr>
    )
  })

  return (
    <table className="table table-striped">
      <thead>
        <tr>
          <th>#</th>
          <th>Description</th>
          <th>Date</th>
          <th>Amount</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        { incomeDataList }
        <tr className="bg-dark text-white">
          <th colSpan="3">TOTAL</th>
          <th colSpan="2">{ totalIncome }</th>
        </tr>
      </tbody>
    </table>
  )
}
