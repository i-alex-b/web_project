// Obsługa funkcjonalności menu hamburgerowego
const hamburger = document.getElementById('hamburger');
const mobileNav = document.getElementById('mobileNav');
const menuLinks = mobileNav.querySelectorAll('a');

// Przełączanie widoczności menu mobilnego po kliknięciu w hamburgera
hamburger.addEventListener('click', () => {
    mobileNav.classList.toggle('active');
});

// Zamknięcie menu mobilnego po kliknięciu w dowolny link
menuLinks.forEach(link => {
    link.addEventListener('click', () => {
        mobileNav.classList.remove('active');
    });
});

// Zamknięcie menu mobilnego po kliknięciu poza obszarem menu
document.addEventListener('click', (event) => {
    if (!mobileNav.contains(event.target) && !hamburger.contains(event.target)) {
        mobileNav.classList.remove('active');
    }
});

// Obsługa przesyłania formularza logowania
document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Zatrzymaj domyślne zachowanie formularza
  
    const walletAddress = document.getElementById('walletAddress').value;
    const password = document.getElementById('password').value;

    const prefixedWalletAddress = "0x1234";  // Poprawny adres portfela
    const prefixedPassword = "123";         // Poprawne hasło

    // Sprawdź dane logowania i zaloguj, jeśli są poprawne
    if (walletAddress === prefixedWalletAddress && password === prefixedPassword) {
        localStorage.setItem('isLoggedIn', 'true'); // Zapisz status logowania
        localStorage.setItem('walletAddress', walletAddress); // Zapisz adres portfela

        // Zainicjuj saldo portfela, jeśli jeszcze nie istnieje
        if (!localStorage.getItem('walletBalance')) {
            localStorage.setItem('walletBalance', JSON.stringify({
                USDC: 1000,  // Początkowe saldo USDC
                SOL: 0,      // Początkowe saldo SOL
                BTC: 0,      // Początkowe saldo BTC
                ETH: 0       // Początkowe saldo ETH
            }));
        }

        // Przekierowanie na stronę portfela
        window.location.href = 'wallet.html';
    } else {
        // Wyświetlenie komunikatu o błędzie dla niepoprawnych danych logowania
        alert("Nieprawidłowy adres portfela lub hasło. Spróbuj ponownie.");
    }
});

// Obsługa funkcji wylogowania
document.getElementById('logoutButton').addEventListener('click', function () {
    // Usuń status logowania i adres portfela z localStorage
    localStorage.removeItem('isLoggedIn');
    localStorage.removeItem('walletAddress');
    
    // Zaktualizuj tekst przycisku "Connect Wallet" i jego funkcjonalność
    const connectWalletBtn = document.getElementById('connectWalletBtn');
    if (connectWalletBtn) {
        connectWalletBtn.textContent = "Connect Wallet";
        connectWalletBtn.onclick = function () {
            window.location.href = "login.html";
        };
    }

    // Przekierowanie na stronę logowania
    window.location.href = "login.html";
});
