function getInputValueById(id) {
  return parseFloat(document.getElementById(id).value);
}

function showModal(modalId) {
  const modal = document.getElementById(modalId);
  modal.showModal();
}

function updateDonation(donateInputId, donateDisplayClass, modalId, donateForId) {
  const donate = getInputValueById(donateInputId);
  const balanceElement = document.querySelector(`.${donateDisplayClass} span`);
  const accountElement = document.getElementById('account-balance');

  const balance = parseFloat(balanceElement.innerText);
  const accountBdt = parseFloat(accountElement.innerText);

  if (isNaN(donate) || donate <= 0 || donate > accountBdt) {
    alert('Failed to Donate. Invalid donation amount.');
    return;
  }

  showModal(modalId);

  const newBalance = balance + donate;
  balanceElement.innerText = newBalance;

  const newAccount = accountBdt - donate;
  accountElement.innerText = newAccount;

  const donateFor = document.getElementById(donateForId).innerText;
  const historyItem = document.createElement('div');
  historyItem.className = 'border-2 border-gray-200 bg-white p-4 rounded-xl';
  historyItem.innerHTML = `
    <p class="text-md font-bold">${donate} Taka is ${donateFor}</p>
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

// Tab functionality
const historyTab = document.getElementById('history-btn');
const donateTab = document.getElementById('donate-btn');

function switchTab(activeTab, inactiveTab, showElementId, hideElementId) {
  activeTab.classList.add('bg-lime-300', 'text-black', 'hover:bg-lime-500', 'hover:text-black');
  activeTab.classList.remove('bg-white', 'border-2', 'border-gray-200');

  inactiveTab.classList.remove('bg-lime-300', 'text-black', 'hover:bg-lime-500', 'hover:text-black');
  inactiveTab.classList.add('bg-white', 'border-2', 'border-gray-200');

  document.getElementById(showElementId).classList.remove('hidden');
  document.getElementById(hideElementId).classList.add('hidden');
}

function switchBtn(activeElement, inactiveElement, showElement, hideElement){
  activeElement.classList.add('bg-lime-300', 'text-black', 'hover:bg-lime-500', 'hover:text-black');
  activeElement.classList.remove('bg-white', 'border-2', 'border-gray-200');

  inactiveElement.classList.remove('bg-lime-300', 'text-black', 'hover:bg-lime-500', 'hover:text-black');
  inactiveElement.classList.add('bg-white', 'border-2', 'border-gray-200');

  document.getElementById(showElement).classList.remove('hidden')
  document.getElementById(hideElement).classList.add('hidden')
};





historyTab.addEventListener('click', function () {
  switchTab(historyTab, donateTab, 'history-form', 'donate-ammount-from');
});

donateTab.addEventListener('click', function () {
  switchTab(donateTab, historyTab, 'donate-ammount-from', 'history-form');
});



historyTab.addEventListener('click', function(){
  switchBtn(historyTab, donateTab, 'history-form', 'donate-ammount-from')
});

donateTab.addEventListener('click', function(){
  switchBtn(donateTab, historyTab, 'donate-ammount-from', 'history-form')
});

// getInputValueById(id):
// এই ফাংশনটি একটি input ফিল্ডের মানকে সংখ্যা হিসেবে ফেরত দেয়।


// showModal(modalId):
// এই ফাংশনটি নির্দিষ্ট modalId এর মাধ্যমে একটি মডালকে প্রদর্শন করে।


// updateDonation(donateInputId, donateDisplayClass, modalId, donateForId):
// এই ফাংশনটি ডোনেশনের মূল প্রক্রিয়া পরিচালনা করে। এটি ডোনেশনের ইনপুট, ব্যালান্স আপডেট, মডাল দেখানো এবং ইতিহাসে ডোনেশনের তথ্য সংরক্ষণ করে।
// এটি ডোনেশনের জন্য প্রয়োজনীয় ভিন্ন ভিন্ন inputId, balanceElement, modalId, এবং donateForId গ্রহণ করে কাজ করে।


// switchTab(activeTab, inactiveTab, showElementId, hideElementId):
// ট্যাব পরিবর্তনের জন্য এই ফাংশনটি ব্যবহৃত হয়। এটি দুইটি ট্যাবের মধ্যে পরিবর্তন করে এবং সেই অনুযায়ী প্রদর্শনযোগ্য অংশকে পরিচালনা করে।