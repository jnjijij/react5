// Save to localStorage
localStorage.setItem('userPreferences', JSON.stringify(userPreferences));

// Retrieve from localStorage
const savedPreferences = JSON.parse(localStorage.getItem('userPreferences'));
