var React = require('react')

var AccountForm = function(props){
  return(
    <div>
      <form id='account-form' onSubmit={props.add}>
        <input type='text' id="name" placeholder='Name...'/>
        <input type='number' id= "amount" placeholder='Amount'/>
        <input type='text' id="type" placeholder='Business or Personal'/>
        <input type='submit' value= "Add Account"/>
      </form>
      </div>
    )


}


module.exports = AccountForm