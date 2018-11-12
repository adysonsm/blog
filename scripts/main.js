var submitButton=document.getElementById('submit-button');
var nomeRef=document.getElementById('input-nome');
var emailRef=document.getElementById('input-email');

var database=firebase.database();


function writeData(id,nome,email){

    const data = new Date();
    const timezone = -2;
    var mod = 0;

    const getIP = JSON.parse(Get('https://api.ipify.org/?format=json&callback=getIP'));


    if (data.getUTCHours()-2<0){
        mod=-1;
    }

    database.ref('meta/').set({
        qtd: id+1
    });  

     var updates = {};
     updates['leads/' + (id+1)] = {
        
        email: email, 
        nome: nome,
        hora: data.getUTCFullYear()+'-'+data.getUTCMonth()+'-'+(data.getUTCDate()+mod)+' '+(data.getUTCHours()+timezone+mod*(-24))+':'+data.getUTCMinutes()+':'+data.getUTCSeconds(),
        ip:  getIP.ip

     };
     

    return firebase.database().ref().update(updates);

}

function Get(yourUrl){
    var Httpreq = new XMLHttpRequest(); // a new request
    Httpreq.open("GET",yourUrl,false);
    Httpreq.send(null);
    return Httpreq.responseText;          
}

submitButton.onclick = function(){

    
    if (nomeRef.value.indexOf(' ')<1){
        console.log('nome invalido');
        alert('Nome inválido!')
    }
    else if ((emailRef.value.indexOf('@')<1)||(emailRef.value.indexOf('.')<3)||(emailRef.value.indexOf('.')==emailRef.value.length-1)){
        console.log('email invalido');
        alert('E-Mail inválido!')
    
    }
    else{
        return firebase.database().ref('/meta/').once('value').then(function(snapshot) {
            
            writeData(Number(snapshot.val().qtd),nomeRef.value,emailRef.value);

        });
        }
    
}




