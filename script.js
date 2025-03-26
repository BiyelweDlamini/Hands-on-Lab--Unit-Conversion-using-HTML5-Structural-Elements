//To convert celsius to farenheit
//(Celcius * 9/5) + 32

function temperature(){
    
    var c = document.getElementById("Celsius").value;
    var f = (c * 9/5) + 32
    document.getElementById("Fahrenheit").value = f
}

//To convert kilograms to pounds
//kilograms * 2.2

function weight(){

    var kg = document.getElementById("kg").value;
    //var lbs = document.getElementById("Pounds").value;

    var lbs = kg * 2.2;
    document.getElementById("lbs").value = lbs;

}

//To convert kilometers to miles
//kilometers * 0.62137

function distance(){
    var km = document.getElementById("km").value;

    var m = km * 0.62137
    document.getElementById("m").value = m;
}