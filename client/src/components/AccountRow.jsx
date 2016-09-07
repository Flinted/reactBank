var React = require('react')

var AccountRow = function(props){
  var img ="/images/" + props.account.type +".png"
  var amountToShow = props.account.amount
  var displayAmount= amountToShow.toLocaleString('en-GB', {style:'currency', currency:'GBP'})
  
  return(
  
    <li value={props.index} className="account-row" onClick={props.onClick}><p>{props.account.owner}</p><p>{displayAmount}</p><p>{props.account.type}</p><img className="account-image" src={img}/></li>
    )
}

module.exports = AccountRow