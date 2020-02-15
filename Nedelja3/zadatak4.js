function dozivotnoSnadbevanje(pica, godine) {
    let krajZivota = 100;
    return (krajZivota - godine) * (pica * 12);
}
console.log(dozivotnoSnadbevanje(5, 19));
