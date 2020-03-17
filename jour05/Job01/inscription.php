<!DOCTYPE html>
<html>
<head>
	<title>Inscription</title>
	<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
	<script type="text/javascript" src="script.js"></script>
</head>
<body>



	<?php
	$connexion = new PDO('mysql:host=localhost;dbname=utilisateurs', 'root', '');
	var_dump($connexion);
	if (isset($_POST['submit'])) {
		
      $nom=$_POST['nom'];
      $prenom=$_POST['prenom'];
      $email=$_POST['email'];
      $password=$_POST['password'];
		
		if (!empty($nom) && !empty($nom) && !empty($prenom) && !empty($email) && !empty($password)) {
		
		}
	}
	
	?>
	
	<form  method="post"  action="inscription.php">
		<label>Nom:</label>
		<input  type="text" name="nom" required/></br>
		<label>Prénom:</label>
		<input  type="text" name="prenom" required /></br>
		<label>Votre Mail:</label>
		<input  type="email" name="email" required /></br>
		<label>Mot de passe:</label>
		<input  type="password" name="password" required /></br>
		<input id="button" type="submit" onclick="register(document.getElementById('nom','prenom','email','password'));">
	</form>


</body>
</html>