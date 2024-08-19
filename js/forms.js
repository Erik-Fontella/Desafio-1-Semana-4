document.getElementById('contactForm').onsubmit = function(event) {
    event.preventDefault();

    let firstName = document.getElementById('firstName').value;
    let lastName = document.getElementById('lastName').value;
    let email = document.getElementById('email').value;
    let message = document.getElementById('message').value;

    if (!firstName || !lastName || !email || !message) {
        alert('Por favor, preencha todos os campos.');
        return;
    }

    localStorage.setItem('firstName', firstName);
    localStorage.setItem('lastName', lastName);
    localStorage.setItem('email', email);
    localStorage.setItem('message', message);

    alert('Dados armazenados com sucesso!');

    document.getElementById('contactForm').reset();
}
