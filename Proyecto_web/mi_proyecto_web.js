const url = "https://gabo98698463643.github.io/mi_proyecto_web/Proyecto_web/mi_proyecto_web.json";


function buscar(){

    var entidad=document.getElementById("buscador").value;
    console.log("ID:"+entidad);





fetch(url)
    .then(function(response){
        return response.json();    
    })

    .then(function(data){
        long=data.figures.length;
        console.log("lenght:"+long);
        console.log(data.figures);
        entidad=parseInt(entidad);

        var res=data.figures.filter(item=>item.id===entidad);
        console.log(res);

        var nom=document.getElementById("nombre");
        nom.innerHTML="<b> </b>"+res.nombre;

    })


        .catch(function(error){
            console.log(error);           
        });
        
        function adjuntar(padre,hijo){
            return padre.appendChild(hijo);
        }




/*
    var nom=document.getElementById("nombre");
    nom.innerHTML="<b> </b>"+res.nombre;


    var desc=document.getElementById("descripcion");
    desc.innerHTML="<b>Descripción: </b>"+res[0].descripcion;


    var vida=document.getElementById("hp");
    vida.innerHTML="<b>Descripción: </b>"+res[0].hp;


    var dano=document.getElementById("atk");
    dano.innerHTML="<b>Descripción: </b>"+res[0].atk;


    var foto=document.getElementById("imagen");
    foto.src=res.imagen;


    

}










/*
imagen.src=res[0].figure;



  p5.innerHTML="<b>Descripción: </b>"+res[0].des;



var audio = document.getElementById(jun);
audio.volume = 0.000001;


.then(function(buscar){
    fetch(url)
    .then(function(response){
    return response.json();

var idp= 1
var awa = document.getElementById("buscador");
awa.addEventListener("change", function() {
    idp = (awa.value)
   console.log (idp)

var awa = document.getElementById("buscador");
awa.addEventListener("change", function() {
   console.log(awa.value)
});



then(function(data){
    console.log(data.figures);
    long=data.figures.length;
    console.log("lenght:"+ long);

    var y= data.figures.filter(item=>item.id===idp);
    console.log(y);
    var foto=document.getElementById('imagen');
    foto.src=y[0].imagen;
    var nom=document.getElementById('nombre');
    nom.innerHTML=y[0].nombre;
    var des=document.getElementById('descripcion');
    des.innerHTML=y[0].descripcion;
    var vid=document.getElementById('hp');
    vid.innerHTML=y[0].hp;
    var at=document.getElementById('atk');
    at.innerHTML=y[0].atk+"dmg";
 })
    


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
*/}