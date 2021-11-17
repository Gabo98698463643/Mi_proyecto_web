var idp= 1

const url = "https://gabo98698463643.github.io/mi_proyecto_web/Proyecto_web/mi_proyecto_web.json";


var awa = document.getElementById("buscador");
awa.addEventListener("change", function() {
    idp = (awa.value)
   console.log (idp)
   
function buscar(){
    fetch(url)
    .then(function(response){1
    return response.json();
}

) .then(function(data){
    console.log(data.figures);
    long=data.figures.length;
    console.log("lenght:"+ long);

    var res= data.figures.filter(item=>item.id===idp);
    console.log(res);
    var foto=document.getElementById('imagen');
    foto.src=res[0].figure;
    var nom=document.getElementById('nombre');
    nom.innerHTML=res[0].NOMBRE;
    var des=document.getElementById('descripcion');
    des.innerHTML=res[0].DESCRIPCIÓN;
    var vid=document.getElementById('hp');
    vid.innerHTML=res[0].hp;
    var at=document.getElementById('atk');
    at.innerHTML=res[0].atk+"dmg";
 })}})
    








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