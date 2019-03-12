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
    income: [],
    spending: [],
    totalIncome: 0,
    totalSpending: 0,
    saldo: 0,
    wantToEdit: false,
    editTemp: {
      index: 0,
      desc: '',
      amount: 0,
      date: ''
    }
  }

  componentDidMount(){
    localStorage.getItem('budget-app') === null ? localStorage.setItem('budget-app', JSON.stringify(this.state)) : this.setState(JSON.parse(localStorage.getItem('budget-app')));
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
      localStorage.setItem('budget-app', JSON.stringify(this.state));
    }
  }

  handleEditClick = (data,i) => {
    this.setState({
      wantToEdit: true,
      editTemp: {
        index: i,
        desc: data.desc,
        amount: data.amount,
        date: data.date
      }
    })
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

  editIncome = (income,i) => {
    // console.log(income,i);
    const newIncome = [...this.state.income];
    newIncome[i] = income;
    this.setState({
      income: newIncome,
      wantToEdit: false,
      editTemp: {
        index: 0,
        desc: '',
        amount: 0,
        date: ''
      }
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

  editSpending = (spending, i) => {
    const newSpending = [...this.state.spending];
    newSpending[i] = spending;
    this.setState({
      spending: newSpending,
      wantToEdit: false,
      editTemp: {
        index: 0,
        desc: '',
        amount: 0,
        date: ''
      }
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
              removeIncome={this.removeIncome}
              wantToEdit={this.state.wantToEdit}
              handleEditClick={this.handleEditClick}
              editTemp={this.state.editTemp}
              editIncome={this.editIncome}
              />} />
              
            <Route 
              path="/spending" 
              render={() => <Spending 
              spendingData={this.state.spending}
              totalSpending={this.state.totalSpending}
              saldo={this.state.saldo}
              addSpending={this.addSpending}
              removeSpending={this.removeSpending}
              handleEditClick={this.handleEditClick}
              wantToEdit={this.state.wantToEdit}
              editTemp={this.state.editTemp}
              editSpending={this.editSpending}/>} />
          </div>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
