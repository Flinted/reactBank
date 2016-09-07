var Account = function(params){
  this.owner = params.owner;
  this.amount = params.amount;
  this.type = params.type;
  this.comment = this.commentResult()
};

Account.prototype={
  commentResult: function(){
      if(this.amount >=50000){
        return "This dick has loadsa money"
      }

      if(this.amount >=25000){
        return "This dick has money"
      }

      if(this.amount <=50){
        return "This dick has no money"
      }

      return "No comment"
  }
}

module.exports = Account;
