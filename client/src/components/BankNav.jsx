var React = require('react')

var BankNav= function(props){
  return(
    <div id='bank-nav'>
        <h1>{props.title}</h1>
        <h4>Total: £{props.total}</h4>
        <h4>Average: £{props.average}</h4>
    </div>
    )


}

module.exports = BankNav