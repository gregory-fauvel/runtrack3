
<html>
<head>
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
<script type="text/javascript" src="script.js"></script>
</head>
<body>
	<div id="but"></div>

		<form>
			<label>Id</label>
			<input type="text" name="id">
			<label>Nom</label>
			<input type="text" name="nom">
			<label>Race</label>
		<select name="type">
		<option>Choisir</option>
		   <option valeur="gr">Grass</option>
		   <option valeur="bug">Bug</option>
		   <option valeur="poison">Poison</option>
		   <option valeur="norm">Normal</option>
		   <option valeur="fly">Flying</option>
		   <option valeur="elect">Electric</option>
		   <option valeur="grnd">Ground</option>
		   <option valeur="figh">Fighting</option>
		   <option valeur="eau">Water</option>
		   <option valeur="norm">Normal</option>
		   <option valeur="fee">Fairy</option>
   		 </select>
		<input id="butto" type="submit"  onclick="jsonValueskey(myObj,'type')">
		</form>


</body>
</html>




