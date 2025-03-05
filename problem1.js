function calculateTax( income, expense){
    if(typeof income !== "number" || income < 0 
    || typeof expense !=="number" || income < 0 ){
        return "invalid intput"
    }

    let taxableAmount=  income - expense;
    console.log(taxableAmount)

    let tax = taxableAmount * .2;
    return tax;
}
const result =calculateTax(20000, 3000)
console.log(result)


// 20*7000
// --------
// 100