const accountInput = document.querySelector('#accountNumber');
const checkBalanceButton = document.querySelector('#checkBalance');
const displayBalance = document.querySelector('#balance');
const sendButton = document.querySelector('#sendTx');
const toAccountInput = document.querySelector('#toAccountNumber');
const valueInput = document.querySelector('#amount');
let transactionList = document.querySelector('#transactions');

// const provider = new ethers.providers.JsonRpcProvider('https://mainnet.infura.io/v3/5916f34e944548f3b1f0e03e9ed15583');
// const provider = new ethers.providers.JsonRpcProvider('https://sepolia.infura.io/v3/5916f34e944548f3b1f0e03e9ed15583');

const web3 = new Web3('HTTP://127.0.0.1:7545');
let signer;
let account;

function initApp() {
  console.log(web3);
}

async function checkBalance() {
  account = accountInput.value;

  const balance = await web3.eth.getBalance(account);
  displayBalance.innerHTML = web3.utils.fromWei(balance, 'ether');

  // Get latest block...
  const block = await web3.eth.getBlock('latest');
  console.log(block);
  const transactions = block.transactions;

  if (block !== null && transactions !== null) {
    displayHistory(transactions);
  }
}

async function displayHistory(transactions) {
  for (let hash of transactions) {
    console.log('Hash', hash);

    let trx = await web3.eth.getTransaction(hash);
    console.log('from: ' + trx.from + ' to: ' + trx.to + ' value: ' + trx.value);
    createTransactionList(trx);
  }
}

function createTransactionList(transaction) {
  transactionList.innerHTML = '';
  transactionList.innerHTML += `  
    <span>${transaction.from}</span>
    <span>${transaction.to}</span>
    <span>${web3.utils.fromWei(transaction.value, 'ether')} ETH</span>`;
}

async function sendTransaction() {
  const toAddress = toAccountInput.value;
  const value = valueInput.value;

  try {
    const trx = await web3.eth.sendTransaction({
      from: account,
      to: toAddress,
      value: web3.utils.toWei(value, 'ether'),
    });

    console.log(trx);
  } catch (error) {
    console.log(error);
  }
}

// Event handlers...
document.addEventListener('DOMContentLoaded', initApp);
checkBalanceButton.addEventListener('click', checkBalance);
sendButton.addEventListener('click', sendTransaction);
