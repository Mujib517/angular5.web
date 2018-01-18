//SRP: there no should nt more than one reason
class Bread {
    constructor(type: number, size: number) { }  //wheat italian
}

class Veggies {
    constructor(count: number, extra: boolean) { }
}

class Sauce {
    constructor() { }
}

class SubwayWrap {

    //dependency injection
    //constructor injection
    constructor(bread: Bread, veg: Veggies, s: Sauce) {
        console.log('kadjfkdaj');
        console.log('adjfkadjf');
    }
}