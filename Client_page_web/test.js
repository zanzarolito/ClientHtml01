var button = document.getElementById("bouton_bjr");
var button2 = document.getElementById("bouton2");

var titre = document.getElementById("title");

document.getElementById("demo").innerHTML = "Page hostname is " + window.location.hostname; 

button.addEventListener("click",function(){
    console.log("bonjour");
});

button2.addEventListener("click",function(){

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