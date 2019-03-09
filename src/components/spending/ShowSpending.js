import React from 'react'

export default function ShowSpending({ spendingData, totalSpending, removeSpending }) {

  const spendingDataList = spendingData.map((spending, i) => {
    return(
      <tr key={i}>
        <td>{i}</td>
        <td>{spending.desc}</td>
        <td>{spending.date}</td>
        <td>{spending.amount}</td>
        <td>
          <button className="btn btn-primary mr-1">edit</button>
          <button className="btn btn-danger" onClick={() => removeSpending(i)}>delete</button>
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
        { spendingDataList }
        <tr className="bg-dark text-white">
          <th colSpan="3">TOTAL</th>
          <th colSpan="2">{ totalSpending }</th>
        </tr>
      </tbody>
    </table>
  )
}
