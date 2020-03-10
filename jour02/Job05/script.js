window.onscroll = function() {myFunction()};

function myFunction() {
  if (document.body.scrollBottom > 300 || document.documentElement.scrollTop > 300) {
    document.getElementById("footer").className = "foot";
  } else {
    document.getElementById("footer").className = "";
  }
}


