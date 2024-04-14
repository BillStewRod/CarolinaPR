document.querySelectorAll('.card_button').forEach(function(button, index) {
    button.addEventListener('click', function(event) {
      event.preventDefault();
      document.querySelectorAll('.moreText')[index].style.display = 'block';
    });
  });