var React = require('react')

var AccountRow = function(props){
  return(
    <li value={props.index} onClick={props.onClick}>{props.account.owner}<br/>£{props.account.amount.toFixed(2)}<br/>{props.account.type}</li>
    )
}

module.exports = AccountRow