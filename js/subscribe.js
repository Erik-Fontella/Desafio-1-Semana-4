document.getElementById('subscribeForm').onsubmit = function (event) {
    event.preventDefault();

    let email = document.querySelector('.input-email').value;

    localStorage.setItem('subscriberEmail', email);

    alert('Obrigado por se inscrever!');

    document.getElementById('subscribeForm').reset();
};