$(document).ready(function(){

      $("#button").click(function(){

    var parent = $("#melangees");
    var divs = parent.children();
    while (divs.length) {
        parent.append(divs.splice(Math.floor(Math.random() * divs.length), 1)[0]);
    }
})

  		$("img").click(function(){
  		$(this).appendTo($("#rangees"));
  	  	});

      

});




