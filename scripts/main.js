var submitButton=document.getElementById('submit-button');
var nomeRef=document.getElementById('input-nome');
var emailRef=document.getElementById('input-email');
var interesseRef=document.getElementById('input-interesse');

var database=firebase.database();



function writeData(id,nome,email,interesse){

    const data = new Date();
    const timezone = -2;
    var mod = 0;

    const getIP = JSON.parse(Get('https://api.ipify.org/?format=json&callback=getIP'));


    if (data.getUTCHours()-2<0){
        mod=-1;
    }

     var updates = {};
     updates['leads/' + (id+1)] = {
        
        email: email, 
        nome: nome,
        hora: data.getUTCFullYear()+'-'+data.getUTCMonth()+'-'+(data.getUTCDate()+mod)+' '+(data.getUTCHours()+timezone+mod*(-24))+':'+data.getUTCMinutes()+':'+data.getUTCSeconds(),
        ip:  getIP.ip,
        tipo: 'B2C',
        interesse: interesse

     };

     updates['meta/']={
        qtd: id+1
     }

    //  database.ref('meta/').set({
    //     qtd: id+1
    // });  

    return firebase.database().ref().update(updates);

}

function Get(yourUrl){
    var Httpreq = new XMLHttpRequest(); // a new request
    Httpreq.open("GET",yourUrl,false);
    Httpreq.send(null);
    return Httpreq.responseText;          
}

submitButton.onclick = function(){

        
    console.log(location.href);    
    console.log(location.href.lastIndexOf('/'));   
    console.log(location.href.slice(0,location.href.lastIndexOf('/')+1)+'agradecimento.html');  

    if (nomeRef.value.indexOf(' ')<1){
        console.log('nome invalido');
        alert('Nome inválido!')
    }
    else if ((emailRef.value.indexOf('@')<1)||(emailRef.value.lastIndexOf('.')<3)||(emailRef.value.lastIndexOf('.')==emailRef.value.length-1)){
        console.log('email invalido');
        alert('E-Mail inválido!')
    
    }
    else{

        return firebase.database().ref('/meta/').once('value').then(function(snapshot) {

            const qtd = snapshot.val().qtd;

            return firebase.database().ref('/leads/').once('value').then(function(snapshot) {

            var i = 0;  
            var repetido=false
            
            for (i=1;i<=qtd;i++){

                //console.log(snapshot.val()[i].email);

                if (snapshot.val()[i].email == emailRef.value){
                    repetido = true;
                    console.log('email repetido');
                    alert('O e-mail informado já está cadastrado')
                }
                if (snapshot.val()[i].nome == nomeRef.value){
                    repetido = true;
                    console.log('nome repetido');
                    alert('O nome informado já está cadastrado')
                }

            }

            if (repetido == false){

                writeData(qtd,nomeRef.value,emailRef.value,interesseRef.options[interesseRef.selectedIndex].text);
                
                location.href= location.href.slice(0,location.href.lastIndexOf('/')+1)+'agradecimento.html';

            }
    
            });   

        });
        
    }
} 
