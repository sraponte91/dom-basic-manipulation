//This is like css
// h1 {color: red}

const h1 = document.querySelector('h1');
const input1 = document.querySelector('#calculo1');
const input2 = document.querySelector('#calculo2');
const btn = document.querySelector('#btnPlus');
const resultado = document.querySelector('#resultado');
const form = document.querySelector('#form');



/* Re-escribir con Js
console.log(input.value);

console.log({
    h1,
    p,
    parrafito,
    pid,
    input,
});


h1.innerHTML = 'Hello World <br> This is a Website';
h1.getAttribute('pantalla');

h1.classList.add('rojo');
h1.classList.remove('title');

input.value = ('123');

const img = document.createElement('img');

img.setAttribute('src', 'https://images.wsj.net/im-641907?width=860&size=1.5005861664712778&pixel_ratio=1.5');
console.log(img);

pid.innerHTML = '';
pid.append(img);
*/

// Escuchando eventos con Js

form.addEventListener('submit', sumarInputValues);

function sumarInputValues (event) {
    console.log({event});
    event.preventDefault();
    const suma = input1.value + input2.value;
    resultado.innerHTML = 'El resultado de esta suma es ' + parseInt(suma);
}

