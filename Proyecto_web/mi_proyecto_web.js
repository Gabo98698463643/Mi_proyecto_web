var idp= document.getElementById(buscador.value)

const url = "https://gabo98698463643.github.io/mi_proyecto_web/Proyecto_web/mi_proyecto_web.json";

function buscar(){
    fetch(url)
    .then(function(response){
    return response.json();
}

 .then(function(data){
    console.log(data.figures);
    long=data.figures.length;
    console.log("lenght:"+ long);

    var res= data.figures.filter(item=>item.id===idp);
    console.log(res);
    var foto=document.getElementById('IMAGEN');
    foto.src=res[0].figure;
    var N=document.getElementById('NOMBRE');
    N.innerHTML="<b>Nombre: </b>"+res[0].NOMBRE;
    var D=document.getElementById('DESCRIPCIÓN');
    D.innerHTML="<b>Descripción: </b>"+res[0].DESCRIPCIÓN;
    var H=document.getElementById('hp');
    H.innerHTML="<b>Vida: </b>"+res[0].hp;
    var A=document.getElementById('atk');
    A.innerHTML="<b>Ataque: </b>"+res[0].atk;
 }))}
    








/*

var awa = document.getElementById("buscador");
awa.addEventListener("change", function() {
   console.log(awa.value)
});



var idp=1

const url = "https://gabo98698463643.github.io/mi_proyecto_web/Proyecto_web/mi_proyecto_web.json"

function añadir(){

    fetch(url)
     .then(function(response){
         return response.json();
     })

     .then(function(data){
         console.log(data.figures)
         console.log(id)

         var idp=document.getElementById(buscador.value)

         var id=idp         

         var cont1=document.getElementById(figures.id.NOMBRE)
         cont1.innerHTML="<b>Nombre: </b>"+NOMBRE;
     }
    
    
    ,)}}

var lul = document.getElementById("buscador");
lul.addEventListener("change", function() {
    console.log(data.figures);
        long=data.figures.length;
        console.log("lenght:"+ long);

var a= lul.value
     var b= json(id=a)
     console.log(b)
 then(function(data){
     var p1=document.getElementById('NOMBRE');
     p1.innerHTML="<b> </b>"+res[0].NOMBRE; 
     }) 


    console.log(data.figures);
        long=data.figures.length;
        console.log("lenght:"+ long);

    var cont= data.figures.filter(item=>item.id===idp);
    console.log(res);
    var name=dacument.getElementById('npc')
    name.innerHTML="<b> </b>"+name[0].npc
    },

)



function buscar(){
    
    fetch(url)
    .then(function(response){
        return response.json();    
    })

    .then(function(data){
        console.log(data.figures);
        long=data.figures.length;
        console.log("lenght:"+ long);
    
        var res= data.figures.filter(item=>item.id===idp);
        console.log(res);
        var imagen=document.getElementById('pkm-img');
        imagen.src=res[0].figure;
        var p1=document.getElementById('NOMBRE');
        p1.innerHTML="<b> </b>"+res[0].NOMBRE;
        var p2=document.getElementById('type');
        p2.innerHTML="<b>Tipo: </b>"+res[0].type;
        var p3=document.getElementById('height');
        p3.innerHTML="<b>Altura: </b>"+res[0].height+"cms.";
        var p4=document.getElementById('weight');
        p4.innerHTML="<b>Peso: </b>"+res[0].weight+"kg.";
        var p5=document.getElementById('des');
        p5.innerHTML="<b>Descripción: </b>"+res[0].des;
    })
}
*/