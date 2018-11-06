// JavaScript source code
let xhr = new XMLHttpRequest();
xhr.open("GET", "https://swapi.co/api/planets/1/");
xhr.onreadystatechange = function () {
    if (xhr.readyState === 4 && xhr.status === 200) {
        let personas = JSON.parse(xhr.response).residents;
        pedirPersonas(personas);
    }
};
xhr.send();

function pedirPersonas(personas) {
    let index = 0;
    let xhrPersonas = new XMLHttpRequest();
    xhrPersonas.open("GET", personas[index]);
    xhrPersonas.onreadystatechange = function () {
        if (this.readyState === 4 && this.status === 200) {
            console.log(JSON.parse(this.response).name);
            index++;
            if (index < personas.length) {
                xhrPersonas.open("GET", personas[index]);
                xhrPersonas.send();
            }
        }
    };
    xhrPersonas.send();
}