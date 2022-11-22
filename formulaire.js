document.getElementById('buton').addEventListener('click', function(){
    let nom = document.getElementById('Nom').value;
    let regName = /^[a-zA-Z ]{3,30}$/;
    let prenom = document.getElementById('Prénom').value;
    let telephone = document.getElementById('phone').value;
    let phoneRe = /^(05|06|07)\d{8}$/;
    let email = document.getElementById('email').value;
    let emailRegExp = /^[a-zA-Z0-9]+(.)+[a-zA-Z0-9]+@(ofppt)(.(ma))$/;
    let groupeList = document.getElementsByName('groupe') ;
    let checkRadio = document.getElementById('radio1').checked;
    let checkRadio1 = document.getElementById('radio2').checked;
    let checkRadio2 = document.getElementById('radio3').checked;
    let checkRadio3 = document.getElementById('radio4').checked;
    let checkRadio4 = document.getElementById('radio5').checked;

    let groupesValid = false ;
    let femme = document.getElementById('femme').checked;
    let homme = document.getElementById('homme').checked;
    let club = document.getElementById('Club').value;
    if(nom.length<= 30 && regName.test(nom)){
        document.getElementById("Nom").style.borderColor = "green";
    }
    else{
        document.getElementById("Nom").style.borderColor = "red";
    }
    if(prenom.length<=30 && regName.test(prenom) ){
        document.getElementById("Prénom").style.borderColor = "green";
    }
    else{
        document.getElementById("Prénom").style.borderColor = "red";
    }
    if(telephone.match(phoneRe)){
        document.getElementById("phone").style.borderColor = "green";
    }
    else{
        document.getElementById("phone").style.borderColor = "red";
    }
   if(email.match(emailRegExp)){
    document.getElementById("email").style.borderColor = "green";
    
   }
   else{
    document.getElementById("email").style.borderColor = "red";
    
   }
   
   if(femme== false && homme == false){
    document.getElementById('erreur').innerHTML = "choisissez votre genre "

    }
    else{
        document.getElementById('erreur').innerHTML = ""
    }


    for ( i=0 ; i < groupeList.length ; i++ ){

        if (groupeList[i].checked){
            groupesValid = true ;
            document.getElementById('error').innerHTML = "";
            break ;
        }

        else{

            document.getElementById('error').innerHTML = "choisissez votre groupe";
        }
    }
    let selected = [];
    for(let option of document.getElementById('Club').options){
        if(option.selected){
            selected.push(option.value);
        }
    }
    if(selected==""){
        document.getElementById('result').innerHTML = "S'il vous plait choisez votre club(s)";
    }
    else if(selected.length<=3){
        document.getElementById('result').innerHTML = "Votre club est valide"; 
    }

    
    
    if(nom.length<=30 && prenom.length<=30 && email.match(emailRegExp) && telephone.match(phoneRe) && ((femme==true) || (homme== true)) && (checkRadio == true || checkRadio1 == true || checkRadio2 == true || checkRadio3 == true || checkRadio4 == true)&& selected.length<=3 ){
        window.open("file:///C:/Users/Solicode/Desktop/projet6/confirmermation.html" , "confirmation");
    }   
    
})
document.getElementById('loginform').addEventListener('submit',function(event){
    event.preventDefault()
})


