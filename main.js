const btnNatureza = document.getElementById('btn-natureza');
const btnMatematica = document.getElementById('btn-matematica');
const btnHumanas = document.getElementById('btn-humanas');
const btnLinguagens = document.getElementById('btn-linguagens');
const btnTecnico = document.getElementById('btn-tecnico');
const btnModelagem = document.getElementById('btn-modelagem');
const btnIot = document.getElementById('btn-iot');
const btnBanco = document.getElementById('btn-banco');
const logo = document.getElementById('logo');

addEventListener('click', (event) => {
    if (event.target === btnNatureza) {
        window.location.href = 'natureza.html';
    } else if (event.target === btnMatematica) {
        window.location.href = 'matematica.html';
    } else if (event.target === btnHumanas) {
        window.location.href = 'humanas.html';
    } else if (event.target === btnLinguagens) {
        window.location.href = 'linguagens.html';
    } else if (event.target === btnTecnico) {
        window.location.href = 'tecnico.html';
    } else if (event.target === btnModelagem) {
        window.location.href = 'modelagem.html';
    } else if (event.target === btnIot) {
        window.location.href = 'iot.html';
    } else if (event.target === btnBanco) {
        window.location.href = 'banco.html';
    }
});  

addEventListener('click', (event) => {
    if (event.target === logo) {
        window.location.href = 'index.html';
    }
});