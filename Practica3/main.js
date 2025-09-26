import {restar} from './utils.js';

function Pruebas() {
    let resultado1 = restar(10, 50);
    console.log("Primera prueba: 10 - 50 =", resultado1);

    let resultado2 = restar(500, 100);
    console.log("Segunda prueba: 500 - 100 =", resultado2);
}

Pruebas();