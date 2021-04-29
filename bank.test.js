const { withdraw, deposit, transfer, getAccount } = require("./bank");

/**
 *     
 * accountNumber: '123456789', 100
 accountNumber: '987654321', 200
 accountNumber: '111111111', 500
 accountNumber: '222222222', 900
 accountNumber: '333333333', 50
 */
describe("Withdraw", () => {
  const accountNumber = "123456789";
  const invalidAccountNumber = "000000000";

  beforeEach(() => {
    const account = getAccount("123456789");
    account.balance = 100;
    account.transactions = [];
  });

  it("should return insufficient funds if amount > balance", () => {
    const result = withdraw(accountNumber, 101);
    expect(result).toBe("insufficient funds");
  });

  it("should return success if amount < balance", () => {
    const result = withdraw(accountNumber, 10);
    expect(result).toBe("successful");
  });

  it("should deduct balance", () => {
    withdraw(accountNumber, 10);
    expect(getAccount(accountNumber).balance).toBe(90);
  });

  it("should alert on invalid account number", () => {
    const result = withdraw(invalidAccountNumber, 10);
    expect(result).toBe("the account number does not exist");
  });

  it("should add a transaction", () => {
    withdraw(accountNumber, 10);
    const transactions = getAccount(accountNumber).transactions;
    expect(transactions.length).toBe(1);
    expect(transactions[0]).toEqual({ amount: -10, type: "withdrawal" });
  });
});
