form.addEventListener('submit', function (e) {
    e.preventDefault();

    const question = document.getElementById('question').value;
    console.log('Vraag:', question);

    successMessage.style.display = 'block';
    form.reset();

    setTimeout(() => {
        successMessage.style.display = 'none';
    }, 5000);
});