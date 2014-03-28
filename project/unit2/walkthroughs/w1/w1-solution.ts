class Person {
    private TAX_DEDUCTION: number = 500;
    private TAX_RATE: number = 0.05;

    constructor(public name: string) {
    }

    private mafiaSpecial = (income: number) =>
        income * this.TAX_RATE - this.TAX_DEDUCTION * 2;

    doTaxes(income: number): number {
        var yourTax = this.name != 'God Father'
            ? income * this.TAX_RATE - this.TAX_DEDUCTION
            : this.mafiaSpecial(income);

        console.log('My dear ' + this.name + ', your tax is ' + yourTax);
        return yourTax;
    }
}


var p1 = new Person('John Smith');
p1.doTaxes(100000);

var p2= new Person('God Father');
p2.doTaxes(100000);
