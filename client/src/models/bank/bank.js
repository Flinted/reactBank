var Bank = function(){
  this.accounts = [];
}

Bank.prototype = {
  addAccount: function(account){
    this.accounts.push(account);
  },
  findAccountByOwnerName:function(ownerName){
    var foundAccount = null;
    for (var account of this.accounts) {
      if(account.owner === ownerName){
        foundAccount = account;
      }
    }
    return foundAccount;
  },
  filteredAccounts: function(type){
    if(!type) return this.accounts
      var filteredAccounts = [];
    for (var account of this.accounts) {
      if(type === account.type)
        filteredAccounts.push(account);
    }
    return filteredAccounts;
  },
  totalCash:function(type){
    var total = 0;
    for (var account of this.filteredAccounts(type)) {
      total += account.amount;
    }
    return total;
  },
  
  accountAverage:function(){
     var num = this.totalCash()/this.accounts.length;
     return num;
   },

   addInterest: function() {
     for( var account of this.accounts ) {
       var num = account.amount *= 1.1; 
       num.toFixed(2);
       account.amount = parseFloat(num);
       account.comment = account.commentResult()
     }
   }
}


module.exports = Bank;
