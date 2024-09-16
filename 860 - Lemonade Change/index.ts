function lemonadeChange(bills: number[]): boolean {
    let numberOf5DollarBills = 0;
    let numberOf10DollarBills = 0;
    const lemonadeCost = 5;
    for (let bill of bills) {
        if (bill === 5) { numberOf5DollarBills++ }
        if (bill === 10) { numberOf10DollarBills++ }

        let change = bill - lemonadeCost;
        if (change == 15) {
            if (numberOf5DollarBills > 0 && numberOf10DollarBills > 0) {
                numberOf5DollarBills--;
                numberOf10DollarBills--;
            } else if (numberOf5DollarBills >= 3) { numberOf5DollarBills -= 3; }
            else { return false }
        }
        if (change == 5) {
            if (numberOf5DollarBills > 0) {
                numberOf5DollarBills--;
            } else { return false }
        }
    }

    return true;
}

console.log(lemonadeChange([5,5,5,10,20]));
console.log(lemonadeChange([5,5,10,10,20]));
console.log(lemonadeChange([5,5,10,20,5,5,5,5,5,5,5,5,5,10,5,5,20,5,20,5]));