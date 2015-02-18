var BankAccount = {
  name: "",
  balance: 0,
  withdraw: function(amount) {
    this.balance = this.balance - amount;
  },
  deposit: function(amount) {
    this.balance = this.balance + amount;
  }
};

$(document).ready(function() {
  $("form#new-account").submit(function(event) {
    event.preventDefault()

    var newName = $("input#new-name").val();
    var initialDeposit = parseInt($("input#initial-deposit").val());

    var newAccount = Object.create(BankAccount);
    newAccount.name = newName;
    newAccount.deposit(initialDeposit);

    $(".balance").text("$ " + newAccount.balance);

    $("form#transaction").submit(function(event) {
       event.preventDefault()
       var inputtedWithdrawl = parseInt($("input#new-withdrawl").val());
       var inputtedDeposit = parseInt($("input#new-deposit").val());
       if(isNaN(inputtedWithdrawl)) {
         inputtedWithdrawl = 0;
       }
       if(isNaN(inputtedDeposit)) {
         inputtedDeposit = 0;
       }
       newAccount.withdraw(inputtedWithdrawl);
       newAccount.deposit(inputtedDeposit);
      $(".balance").text("$ " + newAccount.balance);

      $("input#new-name").val("");
      $("input#initial-deposit").val("");
      $("input#new-withdrawl").val("");
      $("input#new-deposit").val("");

    });
  });
});
