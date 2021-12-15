// Elements pour lesquels vous créerez des datasets directement dans le code HTML.
let p1 = document.getElementById('p1');
let p2 = document.getElementById('p2');
let p3 = document.getElementById('p3');
let p4 = document.getElementById('p4');

// Elements pour lesquels vous créerez des datasets depuis JavaScript.
let p5 = document.getElementById('p5');
let p6 = document.getElementById('p6');
let p7 = document.getElementById('p7');
let p8 = document.getElementById('p8');

let number = p1.dataset.number;
p1.innerHTML = (Number.parseInt(number) + 10).toString()

let chaine = p2.dataset.string;
p2.innerHTML = chaine.length.toString();

let tableau = p3.dataset.liste.split(',');
for (let elem of tableau) {
    p3.innerHTML += "<br>" + elem.trim();
}

let boolean = p4.dataset.boolean;
boolean = boolean.toLocaleLowerCase() === "true";
if (boolean) {
    p4.innerHTML = "la valeur est true";
}
else {
    p4.innerHTML = "la valeur est false";
}

let number2 = p5.dataset.number2 = '42';
p5.innerHTML = (Number.parseInt(number2) + 10).toString();

let chaine2 = p6.dataset.chaine2 = 'ma chaine simple';
p6.innerHTML = chaine2.length.toString();

let tableau2 = p7.dataset.tableau2 = '[4,5,6,8]'.split(',');
for (let elemm of tableau2) {
    p7.innerHTML += "<br>" + elemm.trim()
}

let boolean2 = p8.dataset.boolean2 = "true";
boolean2 = boolean2.toLocaleLowerCase() === "false";
if (boolean2) {
    p8.innerHTML = "La valeur est true";
}
else {
    p8.innerHTML = "La valeur est false";
}






