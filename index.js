function getInputValueById(id){
  return parseFloat(document.getElementById(id).value);
}

function showModal(modalId){
  const modal = document.getElementById(modalId);
  modal.showModal();
}

function updateDonation(donateInput, donateBalance, modalId, donateHistory) {
  const donate = getInputValueById(donateInput);
  const donateAmmount = document.querySelector(`.${donateBalance} span`);
  const accountAmmount = document.getElementById('account-balance');

  const balance = parseFloat(donateAmmount.innerText);
  const accountBdt = parseFloat(accountAmmount.innerText);

  if (isNaN(donate) || donate <= 0 || donate > accountBdt) {
    alert('Failed to Donate. Invalid donation amount.');
    return;
  }
  showModal(modalId);

  const newBalance = balance + donate;
  donateAmmount.innerText = newBalance;
  const newAccount = accountBdt - donate;
  accountAmmount.innerText = newAccount;

  const donateHis = document.getElementById(donateHistory).innerText;
  const historyItem = document.createElement('div');
  historyItem.className = 'border-2 border-gray-200 bg-white p-4 rounded-xl';
  historyItem.innerHTML = `
    <p class="text-md font-bold">${donate} Taka is ${donateHis}</p>
    <p class="text-sm opacity-50">Date: ${new Date().toDateString()} ${new Date().toLocaleTimeString()}</p>`;
  const historyContainer = document.getElementById('history-container');
  historyContainer.insertBefore(historyItem, historyContainer.firstChild);
}

// Event Listeners for Donate buttons
document.getElementById('noakhali-donate-add-btn').addEventListener('click', function () {
  updateDonation('noakhali-donate-input', 'noakhali-donate', 'noakhali-modal', 'donate-in-noakhali');
});

document.getElementById('feni-donate-add-btn').addEventListener('click', function () {
  updateDonation('feni-donate-input', 'feni-donate', 'feni-modal', 'donate-in-feni');
});

document.getElementById('quota-protest-donate-add-btn').addEventListener('click', function () {
  updateDonation('quota-protest-donate-input', 'quota-protest-donate', 'quota-protest-modal', 'donate-in-quota-protest');
});

// history btn tab functionality
const historyTab = document.getElementById('history-btn');
const donateTab = document.getElementById('donate-btn');

function switchBtn(activeElement, inactiveElement, showElement, hideElement){
  activeElement.classList.add('bg-lime-300', 'text-black', 'hover:bg-lime-500', 'hover:text-black');
  activeElement.classList.remove('bg-white', 'border-2', 'border-gray-200');

  inactiveElement.classList.remove('bg-lime-300', 'text-black', 'hover:bg-lime-500', 'hover:text-black');
  inactiveElement.classList.add('bg-white', 'border-2', 'border-gray-200');

  document.getElementById(showElement).classList.remove('hidden')
  document.getElementById(hideElement).classList.add('hidden')
};

historyTab.addEventListener('click', function(){
  switchBtn(historyTab, donateTab, 'history-form', 'donate-ammount-from')
});

donateTab.addEventListener('click', function(){
  switchBtn(donateTab, historyTab, 'history-form', 'donate-ammount-from')
});