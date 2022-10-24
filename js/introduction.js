const tipoDeSuscripcion = 'Basic';

if (tipoDeSuscripcion == 'Free') {
    console.log("Solo puedes tomar los cursos gratis");
} else if (tipoDeSuscripcion == 'Basic') {
    console.log("Puedes tomar casi todos los cursos de Platzi durante un mes");
} else if (tipoDeSuscripcion == 'Expert') {
    console.log("Puedes tomar casi todos los cursos de platzi durante un anio");
} else if (tipoDeSuscripcion == 'ExpertDuo') {
    console.log("Tu y alguien mas pueden tomar TODOS los cursos de Platzi durante un anio");
}

// tipoDeSuscripcion();

//Listas & Arrays

//? Crea una funcion que pueda recibit cualquier array como parametro e imprimar todos sus elementos uno por uno (no se vale imprimir el array completo).



function imprimirPrimerElementoArray (arr){
    console.log(arr[1])
}

// imprimirPrimerElementoArray(['samael', 'diana', 'stella', 'ricardo', 'litul']);

function printEachOne (arr2) {
    for (let i = 0; i < arr2.length; i++) {
        console.log(arr2[i])
    }
}

// printEachOne(['samael', 'diana', 'stella', 'ricardo', 'litul']);

//? funcion que reciba cualquier objeto y lo imprima uno a uno

const obj = {
    arroz : "Integral",
    pizza: "Margarita",
    hamburguesa: "Impossible Burger",
    pasta: "Pesto",
    etc: ['muchas', 'mas', 'cosas', 'deliciosas'],
};

function printFoods (obj) {
    const objArr = Object.values(obj);
    for (let i = 0; i < objArr.length; i++) {
        console.log(objArr[i])
    }
}

printFoods(obj);

//redaccion de condicionales

function findSubscriptions (tipoDeSuscripcion) {
        if (tipoDeSuscripcion == 'Free') {
            console.log("Solo puedes tomar los cursos gratis");
            return;
        }
        if (tipoDeSuscripcion == 'Basic') {
            console.log("Puedes tomar casi todos los cursos de Platzi durante un mes");
            return;
        }
        if (tipoDeSuscripcion == 'Expert') {
            console.log("Puedes tomar casi todos los cursos de platzi durante un anio");
            return;
        }
        if (tipoDeSuscripcion == 'ExpertDuo') {
            console.log("Tu y alguien mas pueden tomar TODOS los cursos de Platzi durante un anio");
            return;
        }

        console.warn('Este tipo de suscripcion no existe')
}

// el bonus

const subscriptionTypes = {
    free: 'Solo puedes tomar los cursos gratis',
    basic: 'Puedes tomar casi todos los cursos de Platzi durante un mes',
    expert : 'Puedes tomar casi todos los cursos de platzi durante un anio',
    expertDuo: 'Tu y alguien mas pueden tomar TODOS los cursos de Platzi durante un anio',
}

function typesOfSubscription (subscripcion) {
    if (subscriptionTypes[subscription]) {
        console.log (subscriptionTypes[subscription]);
        return;
    }
    console.warn('Esta susbscripcion on existe')
}

typesOfSubscription('Free');

function findSubscriptions (tipoDeSuscripcion) {
    if (tipoDeSuscripcion == 'Free') {
        console.log("Solo puedes tomar los cursos gratis");
        return;
    }
    if (tipoDeSuscripcion == 'Basic') {
        console.log("Puedes tomar casi todos los cursos de Platzi durante un mes");
        return;
    }
    if (tipoDeSuscripcion == 'Expert') {
        console.log("Puedes tomar casi todos los cursos de platzi durante un anio");
        return;
    }
    if (tipoDeSuscripcion == 'ExpertDuo') {
        console.log("Tu y alguien mas pueden tomar TODOS los cursos de Platzi durante un anio");
        return;
    }

    console.warn('Este tipo de suscripcion no existe')
}

