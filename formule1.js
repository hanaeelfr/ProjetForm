function nom(){
    let nom=document.getElementById('Nom').value;
    let regName = /^[a-zA-Z ]{3,30}$/;
    if(nom.length<= 30 && regName.test(nom)){
        document.getElementById("Nom").style.border = "5px solid green";
    }
    else{
        document.getElementById("Nom").style.border = " 5px solid red";
    }
}
function prenom(){
    let prenom = document.getElementById('Prénom').value;
    let regName = /^[a-zA-Z ]{3,30}$/;
    if( prenom.length<=30 && regName.test(prenom) ){
        document.getElementById("Prénom").style.border = "5px solid green";
    }
    else{
        document.getElementById("Prénom").style.border = " 5px solid red";
    }
}
function Email(){
    let email = document.getElementById('email').value;
    let emailRegExp = /^[a-zA-Z0-9]+(.)+[a-zA-Z0-9]+@(ofppt)(.(ma))$/;
    if(emailRegExp.test(email)===true){
        document.getElementById("email").style.border = "5px solid green";
    }
    else{
        document.getElementById("email").style.border = "5px solid  red";
    }

} 
function Phone(){
    let telephone = document.getElementById('phone').value;
    let phoneRe = /^(05|06|07)\d{8}$/;
    if(telephone.match(phoneRe)){
        document.getElementById("phone").style.border = "5px solid  green";
    }
    else{
        document.getElementById("phone").style.border = "5px solid  red";
    }
}
function radio12(){
    let groupeList = document.getElementById('radio1').checked ;
   

    if (groupeList===true){

        document.getElementById('error').innerHTML = "votre groupe est valide";
        document.getElementById('error').style.color = "green";
        document.getElementById('error').style.fontSize = "30px";
    }
    else{
        document.getElementById('error').innerHTML = "choisissez votre groupe";
    }
}






document.getElementById('loginform').addEventListener('submit',function(event){
    event.preventDefault()
})


