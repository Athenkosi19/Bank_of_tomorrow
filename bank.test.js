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
  beforeEach(() => {
    getAccount("123456789").balance = 100;
  });

  it("should return insufficient funds if amount > balance", () => {
    const result = withdraw("123456789", 101);
    expect(result).toBe("insufficient funds");
  });

  it("should return success if amount < balance", () => {
    const result = withdraw("123456789", 10);
    expect(result).toBe("successful");
  });

  it("should deduct balance", () => {
    const accountNumber = "123456789";
    withdraw(accountNumber, 10);
    expect(getAccount(accountNumber).balance).toBe(90);
  });

  it("should alert on invalid account number", () => {
    const result = withdraw("000000000", 10);
    expect(result).toBe("the account number does not exist");
  });
});
