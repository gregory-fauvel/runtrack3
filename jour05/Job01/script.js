function user_register()
{
  $connexion = new PDO('mysql:host=localhost;dbname=utilisateurs', 'root', '');
  return 'INSERT INTO utilisateurs (nom, prenom, email, password) VALUES ('$nom', '$prenom', '$email', '$password')';

}

$(document).ready(function(){
  $('#form_register').submit(function(e){
    e.preventDefault();
    $.post(
      $(this).serialize(),
      function(data){
        if (data==true) 
        {
          $('#form_register')[0].reset();
          $('#info').html("<p class='succes'>Brabo vous etes maintenant enregistré.</p>");
        }
        else
        {
          $('#info').html(data);         
        }
      }
      );
  });

});


function register_user()
{
  $connexion = new PDO('mysql:host=localhost;dbname=utilisateurs', 'root', '');
  $nom =$_POST['nom'];
  $prenom =$_POST['prenom'];
  $email =$_POST['email'];
  $password = sha1($_POST['password']);
  $query = $connexion execute(user_register());
  $tableau =array(
    'nom'=>$nom,
    'prenom'=>$prenom,
    'email'=>$email,
    'password'=>$password,
    );
  if ($query->execute($tableau)) 
  {
    $resultat=true;
  }
  else{
    $resultat=false;
  }
  echo ($resultat);

}
register_user();



 

       







