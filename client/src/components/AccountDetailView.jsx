var React = require('react')

var AccountDetailView= function(props){
  if(!props.display){return(<h1>I am the detail view</h1>)}

  return(
    <div id='account-detail-view'>
      <h1>{props.display.owner}</h1>
      <h2>£{props.display.amount.toFixed(2)}</h2>
      <h2>Account type: {props.display.type}</h2>
      <h4>{props.display.comment}</h4>
    </div>
    )

}

module.exports = AccountDetailView