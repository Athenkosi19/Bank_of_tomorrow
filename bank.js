"use strict"

let accounts = [{
    accountNumber: '123456789',
    balance: 100,
    transactions: []
},
{
    accountNumber: '987654321',
    balance: 200,
    transactions: []
},
{
    accountNumber: '111111111',
    balance: 500,
    transactions: []
},
{
    accountNumber: '222222222',
    balance: 900,
    transactions: []
},
{
    accountNumber: '333333333',
    balance: 50,
    transactions: []
}]

let getAccount = function (accountNumb) {
    let counter = 0
    while (counter < accounts.length) {
        let matchingAccount = accounts[counter].accountNumber == accountNumb
        if (matchingAccount) {
            return accounts[counter]
        }
        counter = counter + 1
    }
};

let printstatement = function (accountNumb) {
    let account = getAccount(accountNumb)
    if (account) {
        let counter = 0
        while (counter < account.transactions.length) {
            console.log(account.transactions[counter].type + '|' + account.transactions[counter].amount.toFixed(2))
            counter = counter + 1
        }
    }
};

let withdraw = function (accountNumb, amount) {
    let account = getAccount(accountNumb)
    if (account == undefined) {
        return 'the account number does not exist'
    }
    if (amount <= 0) { return 'cannot withdraw an amount smaller or equal to zero' }
    if (amount > account.balance) {return 'insufficient funds'}
        account.balance = account.balance - amount;
        account.transactions.push({ type: 'withdrawal', amount: amount * - 1 });
        return 'successful'
};
let deposit = function (accountNumb, amount) {
    let account = getAccount(accountNumb)
    if (account == undefined) {
        return 'the account number does not exist'
    }
    if (amount <= 0) { return 'cannot deposit an amount smaller or equal to zero' }
        account.balance = account.balance + amount;
        account.transactions.push({ type: 'deposit', amount });
        return 'successful'
};
let transfer = function (fromAccount, toAccount, amount) {
    let primeAccount = getAccount(fromAccount)
    let secAccount = getAccount(toAccount)
    if (primeAccount == undefined) {
        return 'account number_' + fromAccount + '_is incorrect'
    }
    if (secAccount == undefined) {
        return 'account number_' + toAccount + '_is incorrect'
    }
    if (amount <= 0) { return 'cannot transfer an amount smaller or equal to zero' }
    if(primeAccount.balance < amount){return 'insufficient funds'}
        primeAccount.balance = primeAccount.balance - amount,
            secAccount.balance = secAccount.balance + amount;
        primeAccount.transactions.push({ type: 'transfer', amount: amount * -1 });
        secAccount.transactions.push({ type: 'transfer', amount });
        return 'successful'
};

module.exports = { withdraw, deposit, transfer, getAccount };

//CLIENT

//console.log(withdraw('333333333', 10))
console.log(withdraw('222222222', 1000))
//console.log(deposit('2222222220', -900))
console.log(transfer('987654321', '222222222', 1050))
//console.log(getAccount('333333333'))
//console.log(getAccount('222222222'))
printstatement('222222222')
//printstatement('333333333')
//printstatement('987654321')
debugger 