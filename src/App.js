import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import Home from './components/home/HomeContainer';
import Budget from './components/budget/BudgetContainer'
import Income from './components/income/IncomeContainer';
import Spending from './components/spending/SpendingContainer';
import './App.css';

class App extends Component {
  state = {
    income: [
      {desc: 'lorem ipsum dolor', amount: 100000, date: '7-03-2019'},
      {desc: 'lorem ipsum dolor', amount: 100000, date: '7-03-2019'}
    ],
    spending: [
      {desc: 'lorem ipsum dolor', amount: 100000, date: '7-03-2019'}
    ],
    totalIncome: 0,
    totalSpending: 0,
    saldo: 0
  }

  componentDidMount(){
    let totalIncome = this.state.income.reduce((acc, income) => acc + income.amount, 0);
    let totalSpending = this.state.spending.reduce((acc, spending) => acc + spending.amount, 0)
    let saldo = totalIncome - totalSpending;
    this.setState({
      totalIncome: totalIncome,
      totalSpending: totalSpending,
      saldo: saldo
    });
  }

  componentDidUpdate(prevProps, prevState){
    if(prevState.income !== this.state.income || prevState.spending !== this.state.spending){
      let totalIncome = this.state.income.reduce((acc, income) => acc + income.amount, 0);
      let totalSpending = this.state.spending.reduce((acc, spending) => acc + spending.amount, 0)
      let saldo = totalIncome - totalSpending;
      this.setState({
        totalIncome: totalIncome,
        totalSpending: totalSpending,
        saldo: saldo
      });
    }
  }

  addIncome = income => {
    const newIncome  = [...this.state.income, income];
    this.setState({
      income: newIncome
    });
  }

  removeIncome = id => {
    const newIncome = this.state.income.filter((income, i) => {
      return id !== i
    });

    this.setState({
      income: newIncome
    })
  }

  addSpending = spending => {
    const newSpending = [...this.state.spending, spending];
    this.setState({
      spending: newSpending
    })
  }

  removeSpending = id => {
    const newSpending = this.state.spending.filter((spending, i) => {
      return id !== i
    });

    this.setState({
      spending: newSpending
    })
  }

  render() {
    return (
      <BrowserRouter>
        <div className="App">
            <Navbar />
          <div className="container grid">
            <Sidebar />
            <Route 
              exact path="/" 
              render={() => <Home 
              incomeData={this.state.income}
              spendingData={this.state.spending}
              totalIncome={this.state.totalIncome} 
              totalSpending={this.state.totalSpending}
              saldo={this.state.saldo}/>} 
              />

            <Route 
              exact path="/budget" 
              render={() => <Budget />} 
              />

            <Route 
              path="/income" 
              render={() => <Income 
              incomeData={this.state.income} 
              totalIncome={this.state.totalIncome}
              saldo={this.state.saldo}
              addIncome={this.addIncome}
              removeIncome={this.removeIncome}/>} />
              
            <Route 
              path="/spending" 
              render={() => <Spending 
              spendingData={this.state.spending}
              totalSpending={this.state.totalSpending}
              saldo={this.state.saldo}
              addSpending={this.addSpending}
              removeSpending={this.removeSpending}/>} />
          </div>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
