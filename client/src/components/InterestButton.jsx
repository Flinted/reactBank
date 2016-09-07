var React = require('react')

var InterestButton = function(props){

  return(
      <button id='interest-button' onClick={props.addInterest}>Add Interest</button>
    )
}

module.exports = InterestButton