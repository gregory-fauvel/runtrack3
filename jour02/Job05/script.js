window.onscroll = function() {myFunction()};

function myFunction() {
  if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
    document.getElementById("footer").className = "footer";
  } else {
    document.getElementById("footer").className = "foot";
  }
}


