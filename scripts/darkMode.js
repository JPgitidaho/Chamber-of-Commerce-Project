function activateDarkMode() {
    const body = document.body;
    body.classList.add('dark-mode');
  }
  
  function deactivateDarkMode() {
    const body = document.body;
    body.classList.remove('dark-mode');
  }
  
  function toggleDarkMode() {
    const body = document.body;
    body.classList.toggle('dark-mode');
    const darkModeEnabled = body.classList.contains('dark-mode');
    localStorage.setItem('darkModeEnabled', darkModeEnabled);
  }
  
  document.addEventListener('DOMContentLoaded', function() {
    const darkModeEnabled = localStorage.getItem('darkModeEnabled') === 'true';
    if (darkModeEnabled) {
      activateDarkMode();
    }
  });
  