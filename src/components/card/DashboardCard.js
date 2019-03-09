import React from 'react';

export default function DarshboardCard({color, title, amount}) {
  return (
    <div className={`card mr-1 border-${color}`}>
      <div className="card-header">{title}</div>
      <div className="card-body">
        <h4 className="card-title">{`Rp. ${amount}`}</h4>
      </div>
    </div>
  )
}
