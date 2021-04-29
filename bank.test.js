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

  it("should not allow withdrawals of amount < 0", () => {
    const result = withdraw(accountNumber, -10000);
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

describe("Transfer", () => {
  const fromAccountNumber = "123456789";
  const toAccountNumber = "987654321";

  beforeEach(() => {
    const source = getAccount(fromAccountNumber);
    source.balance = 100;
    source.transactions = [];

    const destination = getAccount(toAccountNumber);
    destination.balance = 50;
    destination.transactions = [];
  });

  it("should not allow transfers of 0", () => {
    const result = transfer(fromAccountNumber, toAccountNumber, 0);
    expect(result).not.toBe("successful");
  });

  it("should not allow transfers of amount < 0", () => {
    const result = transfer(fromAccountNumber, toAccountNumber, -1000000);
    expect(result).not.toBe("successful");
  });

  it("should alert on invalid from account", () => {
    const result = transfer('00000000', toAccountNumber, 0);
    expect(result).toBe("account number_00000000_is incorrect");
  });

  it("should alert on invalid to account", () => {
    const result = transfer(fromAccountNumber, '00000000', 0);
    expect(result).toBe("account number_00000000_is incorrect");
  });

  it("should return insufficient funds if amount > source.balance", () => {
    const result = transfer(fromAccountNumber, toAccountNumber, 110);
    expect(result).toBe("insufficient funds");
  });

  it("should return success if amount < source.balance", () => {
    const result = transfer(fromAccountNumber, toAccountNumber, 99);
    expect(result).toBe("successful");
  });

  it("should return success if amount = source.balance", () => {
    const result = transfer(fromAccountNumber, toAccountNumber, 100);
    expect(result).toBe("successful");
  });

  it("should return success if amount = source.balance", () => {
    const result = transfer(fromAccountNumber, toAccountNumber, 100);
    expect(result).toBe("successful");
  });

  it("should update source.balance", () => {
    transfer(fromAccountNumber, toAccountNumber, 100);
    const account = getAccount(fromAccountNumber);
    expect(account.balance).toBe(0);
  });

  it("should update destination.balance", () => {
    transfer(fromAccountNumber, toAccountNumber, 100);
    const account = getAccount(toAccountNumber);
    expect(account.balance).toBe(150);
  });

  it("should add transaction to source", () => {
    transfer(fromAccountNumber, toAccountNumber, 100);
    const account = getAccount(fromAccountNumber);
    expect(account.transactions.length).toBe(1);
    expect(account.transactions[0]).toEqual({ amount: -100, type: "transfer" });
  });

  it("should add transaction to destination", () => {
    transfer(fromAccountNumber, toAccountNumber, 100);
    const account = getAccount(toAccountNumber);
    expect(account.transactions.length).toBe(1);
    expect(account.transactions[0]).toEqual({ amount: 100, type: "transfer" });
  });
});
