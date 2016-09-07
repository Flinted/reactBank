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
  var account4= new Account({owner: "Claire", amount:5.00, type:"business"})
  var account5= new Account({owner: "Alan", amount:5039.00, type:"personal"})
  var account6= new Account({owner: "Sally", amount:400.00, type:"business"})
  var account7= new Account({owner: "Mike", amount:9000.00, type:"personal"})
  var account8= new Account({owner: "Heidi", amount:677.00, type:"business"})
  var account9= new Account({owner: "Maximus", amount:677000.00, type:"corporate"})
  var account10= new Account({owner: "Sue", amount:2000000.00, type:"corporate"})

  bank.addAccount(account1)
  bank.addAccount(account2)
  bank.addAccount(account3)
  bank.addAccount(account4)
  bank.addAccount(account5)
  bank.addAccount(account6)
  bank.addAccount(account7)
  bank.addAccount(account8)
  bank.addAccount(account9)
  bank.addAccount(account10)

  ReactDOM.render(
    <BankBox bank={bank}/>,
    document.getElementById('app')
    )

};
