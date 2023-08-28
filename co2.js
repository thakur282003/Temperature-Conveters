let celsius = document.getElementById('celsius');
let fahrenheit = document.getElementById('fahrenheit');
let kelvin = document.getElementById('kelvin');

celsius.oninput = () => {
    let output = (parseFloat(celsius.value))*9/5+32;
    let k=(parseFloat(celsius.value)+273.15);
    fahrenheit.value = parseFloat(output.toFixed(2));
    kelvin.value = parseFloat(k.toFixed(2));
};
fahrenheit.oninput = () => {
    let output = (parseFloat(fahrenheit.value)-32)*5/9;
    let out = ((parseFloat(fahrenheit.value)-32)/1.8)+273.15
    celsius.value = parseFloat(output.toFixed(2));
    kelvin.value = parseFloat(out.toFixed(2));
};
kelvin.oninput = () => {
    let output = ((parseFloat(kelvin.value)-273.15)*1.8)+32;
    let ou = (parseFloat(kelvin.value)-273.15);
    celsius.value = parseFloat(output.toFixed(2));
    fahrenheit.value = parseFloat(ou.toFixed(2));
};

