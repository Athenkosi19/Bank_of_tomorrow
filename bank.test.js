const { withdraw, deposit, transfer } = require("./bank");

/**
 *     
 * accountNumber: '123456789', 100
    accountNumber: '987654321', 200
    accountNumber: '111111111', 500
    accountNumber: '222222222', 900
    accountNumber: '333333333', 50
 */
describe("Withdraw", () => {
  it("should return insufficient funds if amount > balance", () => {
    const result = withdraw("123456789", 101);
    expect(result).toBe("insufficient funds");
  });
});
