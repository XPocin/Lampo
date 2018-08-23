function tempConv(temp)
{
    var valinta = document.getElementById('valinta').value;
    var tulos = 0;

    console.log(valinta);
    
    switch(valinta) {
        case "celsiustofahrenheit":
            tulos = c2f(temp);
            break;

        default:
            tulos = "jotain muuta";
    }

    console.log(tulos);
    document.getElementById('output').innerHTML = tulos;
}


function c2f(c){
    return (c*1.8)+32;
}

function c2k(){
var lampo = document.getElementById('arvo').value;

}

function f2c(){
var lampo = document.getElementById('arvo').value;

}

function f2k(){
var lampo = document.getElementById('arvo').value;

}

function k2c(){
var lampo = document.getElementById('arvo').value;

}

function k2f(){
var lampo = document.getElementById('arvo').value;    

}
// 1 fahrenheit = -17,22222 celsius //
// 1 celsius = 33,8 fahrenheit //
// 1 kelvin = -272,15 celsius  //
// 1 celsius = -457,87 fahrenheit
