class Matematika {
    suma(a, b) {
        return console.log(a + b);
    }

    didziausias(a, b) {
        return console.log(a > b ? a : b);
    }
}

const m = new Matematika();

m.suma(8, 5);
m.suma(8, 55);
m.didziausias(8, 55);
m.didziausias(8, 5);