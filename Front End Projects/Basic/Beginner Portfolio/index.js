var quote1 = "Don't do unto others what you don't want done unto you. - Confucious";
var quote2 = "The best preparation for tomorrow is doing your best today. - H. Jackson Brown Jr."
var quotes = [quote1, quote2];

function getQuote() {
  var index = Math.floor((Math.random() * quotes.length));
  document.getElementById("quote-text").innerHTML = quotes[index];
}

function goToProject(x){
  switch(x) {
    case "alanturning":
        window.open('https://codepen.io/yuelchen/full/LyzGEM/', '_blank');
        break;
  }
}

setInterval(function(){
  var $notice = $('#contact-notice');
  $notice.fadeIn(2000).delay(500).fadeOut(2000);
}, 5000);

function openContact(){
  document.getElementById("contact-cover").style.display = "block";
  document.getElementById("contact-div-form").style.display = "block";
}

function closeContact(){
  document.getElementById("contact-cover").style.display = "none";
  document.getElementById("contact-div-form").style.display = "none";
}
