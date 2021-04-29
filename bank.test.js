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

  it("should not allow withdrawals of 0", () => {
    const result = withdraw(accountNumber, 0);
    expect(result).not.toBe("successful");
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

describe("Deposit", () => {
  const accountNumber = "123456789";
  const invalidAccountNumber = "000000000";

  beforeEach(() => {
    const account = getAccount("123456789");
    account.balance = 100;
    account.transactions = [];
  });

  it("should not allow deposits of 0", () => {
    const result = deposit(accountNumber, 0);
    expect(result).not.toBe("successful");
  });

  it("should not allow a deposit of less than 0", () => {
    const result = deposit(accountNumber, -1000000);
    // TODO: fix message so it is meaningful
    expect(result).toBe("insufficient funds");
  });

  it("should return success if amount > 0", () => {
    const result = deposit(accountNumber, 10);
    expect(result).toBe("successful");
  });

  it("should add to balance", () => {
    deposit(accountNumber, 100);
    expect(getAccount(accountNumber).balance).toBe(200);
  });

  it("should alert on invalid account number", () => {
    const result = deposit(invalidAccountNumber, 10);
    expect(result).toBe("the account number does not exist");
  });

  it("should add a transaction", () => {
    deposit(accountNumber, 100);
    const transactions = getAccount(accountNumber).transactions;
    expect(transactions.length).toBe(1);
    expect(transactions[0]).toEqual({ amount: 100, type: "deposit" });
  });
});
