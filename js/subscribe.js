document.getElementById('subscribeForm').onsubmit = function(event) {
    event.preventDefault();

    // Captura o valor do campo de email
    let email = document.querySelector('.input-email').value;

    // Armazenar no LocalStorage (opcional)
    localStorage.setItem('subscriberEmail', email);

    // Confirmação
    alert('Obrigado por se inscrever!');

    // Limpar o campo de email
    document.getElementById('subscribeForm').reset();
};