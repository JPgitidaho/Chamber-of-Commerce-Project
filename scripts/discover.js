document.addEventListener('DOMContentLoaded', function () {
    displayWelcomeMessage();
    storeVisitTimestamp();
  });
  
  function displayWelcomeMessage() {
    var lastVisitTimestamp = localStorage.getItem('lastVisitTimestamp');
    if (!lastVisitTimestamp) {
      displayMessage("Welcome! Feel free to ask if you have any questions.");
    } else {
      var daysDifference = calculateDaysDifference(lastVisitTimestamp);
      if (daysDifference < 1) {
        displayMessage("Come back soon! Awesome!");
      } else {
        var message = "You were last visited " + daysDifference + " " + (daysDifference === 1 ? "day" : "days") + " ago.";
        displayMessage(message);
      }
    }
  }
  
  function calculateDaysDifference(lastVisitTimestamp) {
    var currentTimestamp = Date.now();
    var timeDifference = currentTimestamp - parseInt(lastVisitTimestamp);
    return Math.floor(timeDifference / (1000 * 60 * 60 * 24));
  }
  
  function displayMessage(message) {
    document.getElementById('message-container').innerHTML = message;
  }
  
  function storeVisitTimestamp() {
    localStorage.setItem('lastVisitTimestamp', Date.now().toString());
  }
  document.addEventListener('DOMContentLoaded', function () {
    var iframe = document.querySelector('iframe');

    // Check if the 'loading' attribute is supported
    if ('loading' in HTMLIFrameElement.prototype) {
      iframe.loading = 'lazy';
    } else {
      
      iframe.loading = 'lazy';
    }
  });
  document.addEventListener("DOMContentLoaded", function () {
    const images = document.querySelectorAll('.main-area1 img, .main-area2 img');
  
    images.forEach(image => {
      image.addEventListener('click', function() {
        if (!image.classList.contains('clicked')) {
          image.classList.add('clicked');
        } else {
          image.classList.remove('clicked');
        }
      });
    });
  });
  