
jQuery(document).ready(function(){
   $("#button").click(function(){
     function register($nom,$prenom,$email,$password) 
    {
      $connexion = new PDO('mysql:host=localhost;dbname=utilisateurs', 'root', '');
      $nom = $_POST['nom'];
      $prenom = $_POST['prenom'];
      $email = $_POST['email'];
      $password = $_POST['password'];
      $reponse = $connexion->query("INSERT INTO utilisateurs (nom,prenom,email,password) VALUES ('$nom','$prenom','$email','$password')");
      return array($nom,$prenom,$email,$password)
          
    }

    })

   })


 

       







