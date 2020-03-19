<!DOCTYPE html>
<html>
<head>
	<title>Inscription</title>
	<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
	<script type="text/javascript" src="script.js"></script>
</head>
<body>
<h2>Inscription</h2>

	<form id="form_register">
	<label>Votre Nom</label>
	<input type="text" name="nom" required/></br>
	<label>Votre Prénom</label>
	<input type="text" name="prenom" required/></br>
	<label>Votre Email</label>
	<input type="email" name="email" required/></br>
	<label>Votre Mot de passe</label>
	<input type="password" name="password" required/></br>
	<input type="submit" name="submit_register" value="S'inscrire" onclick="user_register()">
	</form>
	


</body>
</html>