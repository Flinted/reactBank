var React = require('react')

var AccountSelect= function(props){
    return(
      <select id='account-select' onChange={props.onChange}>
          <option value="">All</option>
          <option value="business">Business</option>
          <option value="personal">Personal</option>
      </select>
    )


}

module.exports = AccountSelect