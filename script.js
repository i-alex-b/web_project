// Select the hamburger menu, the mobile navigation, and each menu link
const hamburger = document.getElementById('hamburger');
const mobileNav = document.getElementById('mobileNav');
const menuLinks = mobileNav.querySelectorAll('a');

// Toggle the menu's active class when the hamburger is clicked
hamburger.addEventListener('click', () => {
    mobileNav.classList.toggle('active');
});

// Close the mobile menu when a link is clicked
menuLinks.forEach(link => {
    link.addEventListener('click', () => {
        mobileNav.classList.remove('active');
    });
});

// Close the mobile menu if clicking outside of the menu
document.addEventListener('click', (event) => {
    if (!mobileNav.contains(event.target) && !hamburger.contains(event.target)) {
        mobileNav.classList.remove('active');
    }

});

document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
  
    const walletAddress = document.getElementById('walletAddress').value;
    const password = document.getElementById('password').value;

    const prefixedWalletAddress = "0x1234";  // Your prefixed wallet address
    const prefixedPassword = "123";

    if (walletAddress === prefixedWalletAddress && password === prefixedPassword) {
        // Store login status and wallet address in localStorage
        localStorage.setItem('isLoggedIn', 'true');
        localStorage.setItem('walletAddress', walletAddress); // Save wallet address

        // Initialize wallet balance with multiple cryptocurrencies if not already set
        if (!localStorage.getItem('walletBalance')) {
            localStorage.setItem('walletBalance', JSON.stringify({
                USDC: 1000,  // Starting balance in USDC
                SOL: 0,      // Starting balance in SOL
                BTC: 0,      // Starting balance in BTC
                ETH: 0       // Starting balance in ETH
            }));
        }

        // Redirect to the wallet page
        window.location.href = 'wallet.html';
    } else {
        alert("Incorrect wallet address or password. Please try again.");
    }
});

document.getElementById('logoutButton').addEventListener('click', function () {
    // Clear only the login status and wallet address
    localStorage.removeItem('isLoggedIn');
    localStorage.removeItem('walletAddress');
    
    // Update the Connect Wallet button text
    const connectWalletBtn = document.getElementById('connectWalletBtn');
    if (connectWalletBtn) {
        connectWalletBtn.textContent = "Connect Wallet";
        connectWalletBtn.onclick = function () {
            window.location.href = "login.html";
        };
    }

    // Redirect to the login page
    window.location.href = "login.html";
});






