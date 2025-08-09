let BTC = document.querySelector('.buttonTrocaCor');
BTC.addEventListener('click', () => {
     let linkEstilo = document.querySelector('.stylesheet'); // Seleciona o link do CSS atual
     linkEstilo.href = linkEstilo.href.includes('styler.css') ? 'blanck.css' : 'styler.css';
});