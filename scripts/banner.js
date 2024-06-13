// Función para verificar si hoy es lunes, martes o miércoles
function isBannerDay() {
  const today = new Date();
  const dayOfWeek = today.getDay(); // 0 para domingo, 1 para lunes, etc.
  return dayOfWeek >= 1 && dayOfWeek <= 3; // Devuelve true si es lunes, martes o miércoles
}

// Función para mostrar el banner si es lunes, martes o miércoles
function showBanner() {
  const banner = document.getElementById('banner');
  if (isBannerDay()) {
      banner.style.display = 'block';
  } else {
      banner.style.display = 'none';
  }
}

// Función para cerrar el banner
function closeBanner() {
  const banner = document.getElementById('banner');
  banner.style.display = 'none';
}

// Evento para cerrar el banner al hacer clic en el botón "Cerrar"
document.getElementById('closeBanner').addEventListener('click', closeBanner);

// Mostrar el banner al cargar la página
window.addEventListener('DOMContentLoaded', showBanner);