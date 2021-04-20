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
            console.log(account.transactions[counter].type + '|' + account.transactions[counter].amount)
            counter = counter + 1
        }
    }
};

let withdraw = function (accountNumb, amount) {
    let account = getAccount(accountNumb)
    if (account && amount > 0 && amount <= account.balance) {
        account.balance = account.balance - amount;
        account.transactions.push({ type: 'withdrawal', amount: amount * - 1 });
        return true
    }
    return false
};
let deposit = function (accountNumb, amount) {
    let account = getAccount(accountNumb)
    if (account && amount > 0) {
        account.balance = account.balance + amount;
        account.transactions.push({ type: 'deposit', amount });
        return true
    }
    return false
};
let transfer = function (fromAccount, toAccount, amount) {
    let primeAccount = getAccount(fromAccount)
    let secAccount = getAccount(toAccount)
    if (primeAccount && secAccount && amount < primeAccount.balance) {
        primeAccount.balance = primeAccount.balance - amount,
            secAccount.balance = secAccount.balance + amount;
        primeAccount.transactions.push({ type: 'transfer', amount: amount * -1 });
        secAccount.transactions.push({ type: 'transfer', amount });
        return true
    }
    return false
};

//CLIENT

//console.log(withdraw('333333333', 10))
console.log(withdraw('222222222', 500))
console.log(deposit('222222222', 1000))
console.log(transfer('987654321', '222222222', 150))
//console.log(getAccount('333333333'))
//console.log(getAccount('222222222'))
printstatement('222222222')
printstatement('333333333')
printstatement('987654321')
 
debugger 