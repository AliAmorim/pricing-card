// Seleciona todas as opções
const options = document.querySelectorAll('.plan-option');

options.forEach(option => {
  option.addEventListener('click', () => {
    // Remove "selected" de todas
    options.forEach(o => o.classList.remove('selected'));
    // Adiciona "selected" apenas na clicada
    option.classList.add('selected');
  });
});