var React = require('react')
var ReactDOM = require('react-dom')
var Bank = require('./models/bank/bank')
var Account = require('./models/bank/account')
var BankBox = require('./components/BankBox')

window.onload = function(){
  var bank = new Bank()
  var account1 = new Account({owner: "Steve", amount:50.00, type:"personal"})
  var account2 = new Account({owner: "Dave", amount:790.00, type:"personal"})
  var account3= new Account({owner: "Bob", amount:50000.00, type:"business"})
  var account4= new Account({owner: "Jeff", amount:5.00, type:"business"})

  bank.addAccount(account1)
  bank.addAccount(account2)
  bank.addAccount(account3)
  bank.addAccount(account4)

  ReactDOM.render(
    <BankBox bank={bank}/>,
    document.getElementById('app')
    )

};
