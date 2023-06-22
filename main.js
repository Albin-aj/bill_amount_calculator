export class myclass {
    constructor(unit, element, actual) {
        this.unit = unit
        this.space = element
        this.actual = actual
    }


    calculate() {
        // console.log("hii fist");
        if (this.unit >= 0 && this.unit <= 350) {
            const price = this.unit * 6.65
            this.amount = Math.floor(price)
            console.log(this.amount);
        }
        else if (this.unit > 350 && this.unit <= 400) {
            const price = this.unit * 6.90
            this.amount = Math.floor(price)
            console.log(this.amount);
        }
        else if (this.unit > 400 && this.unit < 500) {
            this.price = this.unit * 7
            this.amount = Math.floor(price)
            // console.log(this.amount);
        }
        else {
            const price = this.unit * 7.10
            this.amount = Math.floor(price)
            // console.log("hiii else");

        }
    }
    render() {
        this.actual.innerText = `₹ ${this.amount}`
    }
}






