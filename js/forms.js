document.getElementById('contactForm').onsubmit = function(event) {
    event.preventDefault();

    // Captura os valores dos campos
    let firstName = document.getElementById('firstName').value;
    let lastName = document.getElementById('lastName').value;
    let email = document.getElementById('email').value;
    let message = document.getElementById('message').value;

    // Validação simples
    if (!firstName || !lastName || !email || !message) {
        alert('Por favor, preencha todos os campos.');
        return;
    }

    // Armazenar no LocalStorage
    localStorage.setItem('firstName', firstName);
    localStorage.setItem('lastName', lastName);
    localStorage.setItem('email', email);
    localStorage.setItem('message', message);

    // Confirmação
    alert('Dados armazenados com sucesso!');

    document.getElementById('contactForm').reset();
}
