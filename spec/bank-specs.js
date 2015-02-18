describe("BankAccount", function() {
  describe("deposit", function() {
    it("adds the amount to the balance", function() {
      var testBankAccount = Object.create(BankAccount);
      testBankAccount.deposit(10000);
      expect(testBankAccount.balance).to.equal(10000);
    });
  });

});
