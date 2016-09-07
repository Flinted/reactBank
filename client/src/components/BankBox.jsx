var React = require('react')
var AccountList = require('./AccountList')
var AccountForm = require('./AccountForm')
var AccountDetailView = require('./AccountDetailView')
var BankNav = require('./BankNav')
var AccountSelect = require('./AccountSelect')
var InterestButton = require('./InterestButton')
var Account = require('../models/bank/account')


var BankBox = React.createClass({

  getInitialState: function(){
    return{bank: this.props.bank, accounts:[], displayAccount:null, title: "We be Bank", total: 0, average: 0}
  },

  addInterest: function(){
      console.log('click')
      this.state.bank.addInterest()
      this.refresh()
  },

  onAccountChange: function(event){
    console.log(event.target.value)
    var type = event.target.value
    var accountsOfType = this.state.bank.filteredAccounts(type)
    this.setState({accounts:accountsOfType})
  },

  addAccount: function(event){
      event.preventDefault()
      var name = event.target.name.value
      var amount = event.target.amount.value
      var type = event.target.type.value
      if(type != ('business'||'personal')){type = 'personal'}

      var account = new Account({owner: name, amount: amount, type: type})
      this.state.bank.addAccount(account)
      this.refresh()
  },

  selectedAccount: function(event){
    var account = this.state.accounts[event.target.value]
    this.setState({displayAccount: account})
  },

  componentWillMount: function(){
     this.refresh()
  },

  refresh: function(){
    console.log(this.state.bank)
    var accounts = this.state.bank.filteredAccounts()
    var total = this.state.bank.totalCash().toFixed(2)
    var average = this.state.bank.accountAverage().toFixed(2)
    this.setState({accounts: accounts, total: total, average: average})
  },

  render: function(){
   return( 
    <div id='main-window'>
        <BankNav title={this.state.title} total={this.state.total} average={this.state.average}/>
        <AccountSelect onChange={this.onAccountChange}/>
        <InterestButton addInterest={this.addInterest}/>
        <AccountList accounts={this.state.accounts} onClick={this.selectedAccount}/>
        <AccountDetailView display={this.state.displayAccount}/>
        <AccountForm add={this.addAccount}/>
    </div>
    )
 }
})


module.exports = BankBox