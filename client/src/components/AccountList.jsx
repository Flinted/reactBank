var React = require('react')
var AccountRow = require('./AccountRow')

var AccountList= function(props){
  if(!props.accounts){return(<h1>I am the list</h1>)}

    var accountNodes = props.accounts.map(function(account, index){
      return(
        <AccountRow account={account} index={index} key={index} onClick={props.onClick}/>
        )
    })


  return(
    <ul id="account-list">
    {accountNodes}
    </ul>
    )
  

}

module.exports = AccountList