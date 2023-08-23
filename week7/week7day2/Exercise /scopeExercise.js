// PREDICTIONS:
// The value of a will be 
// in funcone (1) = if condition is true so that would change it from the assigned 5 to be 3
// so a = 3
// in functwo (2) = it would be 5 
// in functhree (3) = it would be changing from 0 to 5 ?
// in funcfour (4) = I am unsure
// in funcfive (5) = Due to the window. a it would be 'hello'
// in funcsix (6) = A difference between global and local a value

// EXERCISE 2
function winBattle(){
    return true;
}

const winBattle = () => true;

const experiencePoints = winBattle() ? 10 : 1;
console.log(experiencePoints);

// EXERCISE 3 The hello would be true and the numbers false right.?

const isString = value => typeof value === 'string';

console.log(isString('hello'));
console.log(isString([1,2,4,0]));

// EXERCISE 4

const colors = ["Blue", "Green", "Red", "Orange","Violet", "Indigo", "Yellow"];

colors.forEach((color, index) => {
    console.log('${index + 1}# choice is ${color},');

    if (colors.insludes("Violet")) {
        console.log("Yeah");
    } else {
        console.log("No..")
    }
}
)

// EXERCISE 5 idk this is repitious at this point yo
const ordinal = ["th","st", "nd", "rd"];

colors.forEach((color, index) => {
    const suffixIndex = index >= 1 && index <= 3 ? index : 0;
    const suffix = ordinal[suffixIndex];
    console.log('${index + 1}${suffix} choice is ${color},');

}
)

// EXERCISE 6 

let bankAmount = 5000;


const vatPercentage = 0.17;


const expenses = ["+200", "-100", "+146", "+167", "-2900"];


function calculateExpensesWithTaxes(expenses, vatPercentage) {
    const newExpenses = expenses.map(expense => {
        const amount = parseInt(expense);
        if (isNaN(amount)) {
            return expense;        }
        const taxAmount = amount * vatPercentage;
        const newAmount = amount + taxAmount;
        return newAmount > 0 ? `+${newAmount.toFixed(2)}` : newAmount.toFixed(2);
    });
    return newExpenses;
}


const expensesWithTaxes = calculateExpensesWithTaxes(expenses, vatPercentage);


const totalIncome = expensesWithTaxes.filter(expense => expense.charAt(0) === '+')
                                      .reduce((sum, expense) => sum + parseFloat(expense), 0);
const totalExpenses = expensesWithTaxes.filter(expense => expense.charAt(0) === '-')
                                       .reduce((sum, expense) => sum + parseFloat(expense), 0);


const balance = bankAmount + totalIncome - totalExpenses;


console.log(`Bank account balance at the end of the month: $${balance.toFixed(2)}`);

