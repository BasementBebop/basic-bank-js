describe("BankAccount", function() {
  describe("deposit", function() {
    it("adds the amount to the balance", function() {
      var testBankAccount = Object.create(BankAccount);
      testBankAccount.deposit(10000);
      expect(testBankAccount.balance).to.equal(10000);
    });
  });

  describe("withdraw", function() {
    it("subtracts the amount from the balance", function() {
      var testBankAccount = Object.create(BankAccount);
      testBankAccount.withdraw(100);
      expect(testBankAccount.balance).to.equal(-100);
    });
  });

});
