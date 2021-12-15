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



