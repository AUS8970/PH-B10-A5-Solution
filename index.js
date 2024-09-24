function getInputValueById(id){
  return parseFloat(document.getElementById(id).value);
}

document.getElementById('donate-add-btn').addEventListener('click', function(){
  const donate = getInputValueById('donate-input');
  const balanceElement = document.querySelector('.noakhali-donate span');// donate-ammounts
  const accountElement = document.getElementById('account-balance');

  const balance = parseFloat(balanceElement.innerText);
  const accountBdt = parseFloat(accountElement.innerText);

  if(isNaN(donate) || donate <= 0 || donate > accountBdt){
    alert('Failed to Donate. Invalid donation amount.')
    return;
  }

  const newBalance = balance + donate;
  balanceElement.innerText = newBalance;
  const newAccount = accountBdt - donate;
  accountElement.innerText = newAccount;

  const noakhali = document.getElementById('donate-in-noakhali').innerText;
  const historyItem = document.createElement('div');
  historyItem.className = 'border-2 border-gray-200 bg-white p-4 rounded-xl';
  historyItem.innerHTML = `
  <p class="text-md font-bold">${donate} Taka is ${noakhali}</p>
  <p class="text-sm opacity-50"> Date : ${new Date().toDateString()} ${new Date().toLocaleTimeString()}</p>`;
  const historyContainer = document.getElementById('history-container');
  historyContainer.insertBefore(historyItem, historyContainer.firstChild);
});


// donate in feni 
//   donate       donate-in-noakhali      donate-input        donate-add-btn
// feni-donate      donate-in-feni      feni-donate-input   feni-donate-add-btn
document.getElementById('feni-donate-add-btn').addEventListener('click', function(){
  const donate = getInputValueById('feni-donate-input');
  const balanceElement = document.querySelector('.feni-donate span');
  const accountElement = document.getElementById('account-balance');
  
  const balance = parseFloat(balanceElement.innerText);
  const accountBdt = parseFloat(accountElement.innerText);

  if(isNaN(donate) || donate <= 0 || donate > accountBdt){
    alert('Failed to Donate. Invalid donation amount.')
    return;
  }

  const newBalance = balance + donate;
  balanceElement.innerText = newBalance;
  const newAccount = accountBdt - donate;
  accountElement.innerText = newAccount;

  const noakhali = document.getElementById('donate-in-feni').innerText;
  const historyItem = document.createElement('div');
  historyItem.className = 'border-2 border-gray-200 bg-white p-4 rounded-xl';
  historyItem.innerHTML = `
  <p class="text-md font-bold">${donate} Taka is ${noakhali}</p>
  <p class="text-sm opacity-50"> Date : ${new Date().toDateString()} ${new Date().toLocaleTimeString()}</p>`;
  const historyContainer = document.getElementById('history-container');
  historyContainer.insertBefore(historyItem, historyContainer.firstChild);
});


// donate in feni 
//        donate            donate-in-noakhali             donate-input                 donate-add-btn
//    feni-donate              donate-in-feni            feni-donate-input            feni-donate-add-btn
// quota-protest-donate   donate-in-quota-protest    quota-protest-donate-input   quota-protest-donate-add-btn
document.getElementById('quota-protest-donate-add-btn').addEventListener('click', function(){
  const donate = getInputValueById('quota-protest-donate-input');
  const balanceElement = document.querySelector('.quota-protest-donate span');
  const accountElement = document.getElementById('account-balance');
  
  const balance = parseFloat(balanceElement.innerText);
  const accountBdt = parseFloat(accountElement.innerText);

  if(isNaN(donate) || donate <= 0 || donate > accountBdt){
    alert('Failed to Donate. Invalid donation amount.')
    return;
  }

  const newBalance = balance + donate;
  balanceElement.innerText = newBalance;
  const newAccount = accountBdt - donate;
  accountElement.innerText = newAccount;

  const noakhali = document.getElementById('donate-in-quota-protest').innerText;
  const historyItem = document.createElement('div');
  historyItem.className = 'border-2 border-gray-200 bg-white p-4 rounded-xl';
  historyItem.innerHTML = `
  <p class="text-md font-bold">${donate} Taka is ${noakhali}</p>
  <p class="text-sm opacity-50"> Date : ${new Date().toDateString()} ${new Date().toLocaleTimeString()}</p>`;
  const historyContainer = document.getElementById('history-container');
  historyContainer.insertBefore(historyItem, historyContainer.firstChild);
});


// history btn tab functionality
const historyTab = document.getElementById('history-btn');
const donateTab = document.getElementById('donate-btn');
historyTab.addEventListener('click', function(){
  historyTab.classList.add('bg-lime-300', 'text-black', 'hover:bg-lime-500', 'hover:text-black');
  historyTab.classList.remove('bg-white', 'border-2', 'border-gray-200');

  donateTab.classList.remove('bg-lime-300', 'text-black', 'hover:bg-lime-500', 'hover:text-black');
  donateTab.classList.add('bg-white', 'border-2', 'border-gray-200');

  document.getElementById('donate-ammount-from').classList.add('hidden');
  document.getElementById('history-form').classList.remove('hidden');
});

// donate btn tab functionality
donateTab.addEventListener('click', function(){
  donateTab.classList.add('bg-lime-300', 'text-black', 'hover:bg-lime-500', 'hover:text-black');
  donateTab.classList.remove('bg-white', 'border-2', 'border-gray-200');

  historyTab.classList.remove('bg-lime-300', 'text-black', 'hover:bg-lime-500', 'hover:text-black');
  historyTab.classList.add('bg-white', 'border-2', 'border-gray-200');

  document.getElementById('donate-ammount-from').classList.remove('hidden');
  document.getElementById('history-form').classList.add('hidden');
});