function tempConv(temp)
{
    var valinta = document.getElementById('valinta').value;
    var tulos = 0;

    console.log(valinta);
    
    switch(valinta) {
        case "celsiustofahrenheit":
            tulos = c2f(temp);
            break;

        case "celsiustokelvin":
            tulos = c2k(temp);
            break;

        case "fahrenheittocelsius":
            tulos = f2c(temp);
            break;

        case "fahrenheittokelvin":
            tulos = f2k(temp);
            break;

        case "kelvintocelsius":
            tulos = k2c(temp);
            break;

        case "kelvintofahrenheit":
            tulos = k2f(temp);
            break;
    }

    console.log(tulos);
    document.getElementById('output').innerHTML = tulos.toFixed(2);
}


function c2f(c){
    return (c*1.8)+32;
}

function c2k(c){
    return (c*1)+273.15;
}

function f2c(c){
    return (c-32)/1.8;
}

function f2k(c){
    return ((c-32)/1.8)+273.15;
}

function k2c(c){
    return c-273.15;
}

function k2f(c){
    return ((c-273.15)*1.8)+32;
}