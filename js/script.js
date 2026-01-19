// js/script.js
const form = document.getElementById('contactForm');
const successMessage = document.getElementById('successMessage');
const errorMessage = document.getElementById('errorMessage');
const phoneInput = document.getElementById('phone');

// Formulier verzenden
form.addEventListener('submit', function (e) {
    e.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const question = document.getElementById('question').value;
    console.log('Naam:', name);
    console.log('Email:', email);
    console.log('Telefoonnummer:', phone);
    console.log('Vraag:', question);

    // Toon foutmelding bij indienen
    successMessage.style.display = 'none';
    errorMessage.style.display = 'block';
    form.reset();

    setTimeout(() => {
        errorMessage.style.display = 'none';
    }, 5000);
});

// Alleen toegestane tekens in het telefoonnummerveld
phoneInput.addEventListener('input', function () {
    this.value = this.value.replace(/[^0-9+()\-\s]/g, '');
});
