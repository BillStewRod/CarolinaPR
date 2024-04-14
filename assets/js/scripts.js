window.onload = function() {
  let text = document.getElementById('animated-text').innerText;
  document.getElementById('animated-text').innerText = '';
  let words = text.split(' '); // split the text into words
  for (let i = 0; i < words.length; i++) {
    let wordSpan = "<span class='word' style='animation-delay:" + (i * 0.1) + "s'>"; // Each word starts 0.1 seconds after the previous one
    for (let j = 0; j < words[i].length; j++) {
      wordSpan += "<span class='letter'>" + words[i][j] + "</span>";
    }
    wordSpan += "</span>&nbsp;"; // end the word span and add a space
    document.getElementById('animated-text').innerHTML += wordSpan;
  }
};

document.querySelectorAll('.card_button').forEach(function(button, index) {
    button.addEventListener('click', function(event) {
      event.preventDefault();
      document.querySelectorAll('.moreText')[index].style.display = 'block';
    });
  });