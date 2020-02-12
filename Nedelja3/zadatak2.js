
function cenaPice(r, cena) {
    let cena2 = cena / (r*r*Math.PI);
    return `Cena pice po kvadratnom metru iznosi ${cena2}`;

}

console.log(cenaPice(1, 2));