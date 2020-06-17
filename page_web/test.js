var button = document.getElementById("bouton_bjr");
var button2 = document.getElementById("bouton2");

var titre = document.getElementById("title");

button.addEventListener("click",function(){
    console.log("bonjour");
});

button2.addEventListener("click",function(){
//test1

    /*var section = document.querySelector('section');

    const http = new XMLHttpRequest;

    var requrl = "http://10.10.187.9:8080/bonjour";

    http.open('GET', requrl);

    http.responseType = 'json';
    http.send();

    http.onload = function() {
        var bonjour = request.response;
        bonjourinfo(bonjour);
      }

    function bonjourinfo(jsonObj){

        var myDiv = document.createElement('h1');
        var mot = jsonObj['Mots'].Nom;
        myDiv.textContent = mot[0];
        section.appendChild(myDiv);

    }*/
    
//test2

    /*fetch('8080/bonjour').then(function (response){
        return response.json();
    }).then(function (obj) {
        console.log(obj);
    }).catch(function(error){
        console.error('error!');
        console.error(error);
    });*/

//test3

    async function _init(){
        
        const obj = await fetch('http://10.10.187.9:8080/bonjour')
        .then(response => response.json());
        const bjr = obj;
        console.log(bjr);

        var body = document.querySelector('body');

        var mySpan1 = document.createElement('span');
        var mySpan2 = document.createElement('span');
        var mySpan3 = document.createElement('span');

        var myArticle = document.createElement('article');

        mySpan1.textContent = 'Mot: ' + obj.Nom;
        mySpan2.textContent = 'Definition: ' + obj.Definition;
        mySpan3.textContent = 'Exemple: ' + obj.Exemple;

        var br1 = document.createElement('br');
        var br2 = document.createElement('br');

        myArticle.appendChild(mySpan1);
        myArticle.appendChild(br1);
        myArticle.appendChild(mySpan2);
        myArticle.appendChild(br2);
        myArticle.appendChild(mySpan3);


        body.appendChild(myArticle);
        

    }

    _init();

        
    

});

//alert(titre.innerHTML);