function setCamepon(vCampeon){

    this.campeon = vCampeon;

}
   
function setRol(vRol){

    this.rol= vRol;

}

function rellenar(){

    //Array de Objetos
    

    /*La intención de estos array era utilizarlo para insertar objetos y runas aleatorios pero me han dado errores por todos lados a la hora de utilizarlos*/ 
    
    var arrayItems = new Array(20);

    arrayItems[0]="<img id=\"Bastón de Arcángel\" src=\"img/items/arcangel.png\">";
    arrayItems[1]="<img id=\"Incensario Ardiente\" src=\"img/items/ardent.png\">";
    arrayItems[2]="<img id=\"Velo del Hada\" src=\"img/items/banshee.png\">";
    arrayItems[3]="<img id=\"Cuchilla Negra\" src=\"img/items/bc.png\">";
    arrayItems[4]="<img id=\"Hoja del Rey Arruinado\" src=\"img/items/botrk.png\">";
    arrayItems[5]="<img id=\"La Sanguinaria\" src=\"img/items/bt.png\">";
    arrayItems[6]="<img id=\"Eclipse\" src=\"img/items/eclipse.png\">";
    arrayItems[7]="<img id=\"Filo Infinito\" src=\"img/items/filo.png\">";
    arrayItems[8]="<img id=\"Galeforce\" src=\"img/items/galeforce.png\">";
    arrayItems[9]="<img id=\"Goredrinker\" src=\"img/items/goredrinker.png\">";
    arrayItems[10]="<img id=\"Espadafuria de Guinsoo\" src=\"img/items/guinso.png\">";
    arrayItems[11]="<img id=\"Hidra Voraz\" src=\"img/items/hidra.png\">";
    arrayItems[12]="<img id=\"Verdugo de Krakens\" src=\"img/items/kraken.png\">";
    arrayItems[13]="<img id=\"Desconsuelo de Liandry\" src=\"img/items/liandri.png\">";
    arrayItems[14]="<img id=\"Éco de Lúden\" src=\"img/items/luden.png\">";
    arrayItems[15]="<img id=\"Últimas Palabras\" src=\"img/items/lw.png\">";
    arrayItems[16]="<img id=\"Morellonomicón\" src=\"img/items/morelo.png\">";
    arrayItems[17]="<img id=\"Protocinturón Hextech\" src=\"img/items/protobelt.png\">";
    arrayItems[18]="<img id=\"Arcoscudo Inmortal\" src=\"img/items/qwer.png\">";
    arrayItems[19]="<img id=\"Yelmo Adaptativo\" src=\"img/items/yelmo.png\">";

    //Array de Runas

    arrayRunas = new Array(5);
    
    arrayRunas[0]="<img id=\"Dominación\" src=\"img/runas/domination.png\">";
    arrayRunas[1]="<img id=\"Inspiración\" src=\"img/runas/inspiracion.png\">";
    arrayRunas[2]="<img id=\"Precisión\" src=\"img/runas/precision.png\">";
    arrayRunas[3]="<img id=\"Valor\" src=\"img/runas/resolve.png\">";
    arrayRunas[4]="<img id=\"Brujería\" src=\"img/runas/sorcery.png\">";

    //Randomizar array

    function shuffleArray(array) {
        for (var i = array.length - 1; i > 0; i--) {
            var j = Math.floor(Math.random() * (i + 1));
            var temp = array[i];
            array[i] = array[j];
            array[j] = temp;
        }
    }

    arrayRunas=shuffleArray(arrayRunas);

    arrayItems=shuffleArray(arrayItems);
    
    var campeon="<p>Campeon</p><img src=\"img/champs/ahri.png\"></br></br>";
    var rol = "<p>Rol</p><img src=\"img/roles/mid.jpg\"></br></br>";
    /*He intentado hacerlo de la siguiente forma, pero me daba fallos que no he sabido arreglar. */ 
    //var sItems = "<p>Items</p>"+arrayItems[0]+arrayItems[1]+arrayItems[2]+arrayItems[3]+arrayItems[4]"</br></br>";
    var sItems = "<p>Items</p><img id=\"Morellonomicón\" src=\"img/items/morelo.png\"><img id=\"Arcoscudo Inmortal\" src=\"img/items/qwer.png\"><img id=\"Eclipse\" src=\"img/items/eclipse.png\"><img id=\"Velo del Hada\" src=\"img/items/banshee.png\"><img id=\"Protocinturón Hextech\" src=\"img/items/protobelt.png\"></br></br>";
    //var sRunas = "<p>Runas</p>"+arrayRunas[0]+""+arrayRunas[1]+"";
    var sRunas = "<p>Runas</p><img src=\"img/runas/inspiracion.png\"><img src=\"img/runas/resolve.png\">";
    document.getElementById("champ").innerHTML = campeon;
    document.getElementById("rol").innerHTML = rol;    
    document.getElementById("items").innerHTML = sItems;  
    document.getElementById("runas").innerHTML = sRunas;
}