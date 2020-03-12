
$(function(){
	$("#button").click(function(){
  		$.ajax({
         method: "POST",
         url: "expression.txt",
         datatype:'text',
         error:function(msg){
                  // message en cas d'erreur :
                  alert( "Error !: " + msg );
                  },
         success:function(data){
                  // affiche le contenu du fichier dans le conteneur dédié :
                  $('#commentaires').text(data);
                  }


         });
	});
});
   







