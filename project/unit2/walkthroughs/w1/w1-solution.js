var Person = (function () {
    function Person(name) {
        var _this = this;
        this.name = name;
        this.TAX_DEDUCTION = 500;
        this.TAX_RATE = 0.05;
        this.mafiaSpecial = function (income) {
            return income * _this.TAX_RATE - _this.TAX_DEDUCTION * 2;
        };
    }
    Person.prototype.doTaxes = function (income) {
        var yourTax = this.name != 'God Father' ? income * this.TAX_RATE - this.TAX_DEDUCTION : this.mafiaSpecial(income);

        console.log('My dear ' + this.name + ', your tax is ' + yourTax);
        return yourTax;
    };
    return Person;
})();

var p1 = new Person('John Smith');
p1.doTaxes(100000);

var p2 = new Person('God Father');
p2.doTaxes(100000);
//# sourceMappingURL=w1-solution.js.map
