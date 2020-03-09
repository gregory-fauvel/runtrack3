var date = new Date('01/01/2020');
var date = new Date('janvier');
var date = new Date('2020');

function jourtravaille(date){


    var jour=new Array("Dimanche", "Lundi", "Mardi", "Mercredi", "Jeudi", "Vendredi", "Samedi");
    var mois = date.getMonth()+1;
    var annee =date.getFullYear();
    const ferie = [
    new Date("01/01/2020"),
    new Date("13/04/2020"),
    new Date("01/05/2020"),
    new Date("08/05/2020"),
    new Date("21/05/2020"),
    new Date("01/06/2020"),
    new Date("14/07/2020"),
    new Date("15/08/2020"),
    new Date("01/11/2020"),
    new Date("11/11/2020"),
    new Date("25/12/2020")];

                

    for (var j = 0; j <7 ; j++) 
         {
            for(var m = 0; m <13 ; m++)
            {
                for(var f = 0; f <12 ; f++)
                {

                console.log(date[j]);
                //console.log(mois[m]);
                //console.log(ferie[f]);
            }
                
        }
    }
}

jourtravaille(date);


//var date=new Date()
//document.write("date.getDay() = "+date.getDay()+"<BR>")
var tab_jour=new Array("Dimanche", "Lundi", "Mardi", "Mercredi", "Jeudi", "Vendredi", "Samedi");
document.write("Nous sommes un "+tab_jour[date.getDay(date)])


	

