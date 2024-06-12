const partyDate = new Date('2024-09-13T20:00:00');

// Función para actualizar la cuenta regresiva
function refreshCount() {
  const now = new Date();
  const diferency = partyDate - now;

  const days = Math.floor(diferency / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diferency % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((diferency % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((diferency % (1000 * 60)) / 1000);

  document.getElementById('days').textContent = days;
  document.getElementById('hours').textContent = hours;
  document.getElementById('minutes').textContent = minutes;
  document.getElementById('seconds').textContent = seconds;

  // Si la cuenta regresiva llega a cero, mostrar un mensaje
  if (diferency <= 0) {
    clearInterval(interval);
    document.getElementsByClassName('time').innerHTML = "¡La fiesta ha comezado!";
  }
}

// Llamar a la función por primera vez para evitar un retraso inicial
refreshCount();

// Actualizar la cuenta regresiva cada segundo
const interval = setInterval(refreshCount, 1000);

document.addEventListener('DOMContentLoaded', function() {
  var loungeDiv = document.querySelector('.lounge');
  var imagenes = ['salon1.jfif', 'salon2.jfif', 'salon3.webp'];
  var index = 0;

  function cambiarFondo() {
    loungeDiv.style.backgroundImage = 'url(' + imagenes[index] + ')';
    index = (index + 1) % imagenes.length;
  }

  cambiarFondo(); // Cambiar el fondo inicial
  setInterval(cambiarFondo, 3000); // Cambiar el fondo cada 3 segundos
});



