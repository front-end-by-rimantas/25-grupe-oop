/*
Objekto sablonas (class): Dog

Objekto savybes (parameters):
- vardas: Rexas
- kailis: rudas
- kojos: 4
- uodega: ilga
- amzius: 3

Objekto funkcionalumas (methods):
- prisistatyk
- atsisesti
- atsigulti
- begti
- sustoti
- loti

*/

class Dog {
    constructor(vardas, spalva) {
        this.name = vardas;
        this.fur = spalva;
        this.barking = false;
    }

    prisistatymas() {
        console.log(`Labas, as esu ${this.name} ir mano kailio spalva yra ${this.fur}.`);
    }

    balsas(arLoja) {
        if (typeof arLoja === 'boolean') {
            this.barking = arLoja;
        }

        console.log(`${this.name}: ${this.barking ? '' : 'ne'} loja...`);
    }
}

const rexas = new Dog('Rexas', 'rudas');
rexas.prisistatymas();

const spaikas = new Dog('Spike', 'baltas');
spaikas.prisistatymas();


rexas.balsas();
rexas.balsas();
rexas.balsas(true);
rexas.balsas();