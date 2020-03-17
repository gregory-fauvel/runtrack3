
$(document).ready(function(){
	$("#butto").click(function(){
		$.ajax({
		url:'pokemon.json',
		method:'post',
		data:{id:""},
		success : function(data){  
			$("#id").value=data;
       
			function jsonValueskey(myJSON,id,nom,type){
			var myJSON = '{"id":"1", "nom":"Bulbizarre", "type":"Grass"}';
			const myObj = JSON.parse(myJSON);
			console.log(myJSON.id);
				
				$("#but").html("id");
		 			return myJSON[type];    
 						}     
            	 }
         	 });       
		});
	});




