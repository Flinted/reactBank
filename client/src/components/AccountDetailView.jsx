var React = require('react')

var AccountDetailView= function(props){
  if(!props.display){return(
    <div id="placeholder">
    <h1 className='sub-head'>please select an account for more information</h1>
    <img id="logo" src="/images/logo.png"/>
    </div>
    )}
    var amountToShow = props.display.amount
    var displayAmount= amountToShow.toLocaleString('en-GB', {style:'currency', currency:'GBP'})
  return(
    <div id='account-detail-view'>
      <h1>{props.display.owner}</h1>
      <h2>{displayAmount}</h2>
      <h2>Account type: {props.display.type}</h2>
      <h4>{props.display.comment}</h4>
      <button id="add-interest-to-one" onClick={props.addInterest}>Add interest</button>
    </div>
    )

}

module.exports = AccountDetailView