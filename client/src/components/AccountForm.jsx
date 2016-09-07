var React = require('react')

var AccountForm = function(props){
  return(
    <div>
      <form id='account-form' onSubmit={props.add}>
        <input type='text' id="name" required='true' placeholder='Name...'/>
        <input type='number' id= "amount" required='true' placeholder='Amount'/>
        <select id="type">
        <option>business</option>
        <option>personal</option>
        </select>
        <input type='submit' id="submit" value= "Add Account"/>
      </form>
      </div>
    )


}


module.exports = AccountForm