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
    return{bank: this.props.bank, accounts:[], displayAccount:null, title: "We Be Bank WBB", total: 0, average: 0}
  },

  addInterest: function(){
      console.log('click')
      this.state.bank.addInterest()
      this.refresh()
  },

  addInterestToOne: function(){
      var account = this.state.displayAccount
      this.state.bank.addInterestToOne(account)
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
      var stringAmount = event.target.amount.value
      var amount = parseInt(stringAmount)
      var type = event.target.type.value
      var account = new Account({owner: name, amount: amount, type: type})
      this.state.bank.addAccount(account)
      this.clearForm(event)
      this.refresh()
  },

  clearForm: function(event){
    event.target.name.value = ''
    event.target.amount.value=''
  },

  selectedAccount: function(event){
    var account = this.state.accounts[event.target.value]
    this.setState({displayAccount: account})
  },

  componentWillMount: function(){
     this.refresh()
  },

  refresh: function(){
    var accounts = this.state.bank.filteredAccounts()
    var subTotal = this.state.bank.totalCash()
    var total = subTotal.toLocaleString('en-GB', {style:'currency', currency:'GBP'})
    var subAverage = this.state.bank.accountAverage()
    var average = subAverage.toLocaleString('en-GB', {style:'currency', currency:'GBP'})
    this.setState({accounts: accounts, total: total, average: average})
  },

  render: function(){
    console.log("rendering main...")
   return( 
    <div id='main-window'>
        <BankNav title={this.state.title} total={this.state.total} average={this.state.average}/>
        <AccountForm add={this.addAccount}/>
        <AccountSelect onChange={this.onAccountChange}/>
        <InterestButton addInterest={this.addInterest}/>
        <AccountList accounts={this.state.accounts} onClick={this.selectedAccount}/>
        <AccountDetailView display={this.state.displayAccount} addInterest={this.addInterestToOne}/>
    </div>
    )
 }
})


module.exports = BankBox