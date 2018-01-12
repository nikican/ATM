const getCash = (amount, cashData, errorFunction, successFunction) => {
    let resultCash = [];
    let calculatedAmount = amount;

    // ensure that larger notes/coins are used first by sorting
    cashData.sort((a, b) => b.value - a.value)
        .forEach((cashUnit) => {
            let quotient = Math.floor(calculatedAmount / cashUnit.value);

            // amount is too small to be given in value or there are no notes/coins left
            if (quotient === 0 || cashUnit.amount === 0) {
                return;
            }

            let amountToTake = Math.min(quotient, cashUnit.amount);

            //amount left
            calculatedAmount = calculatedAmount - (amountToTake * cashUnit.value);

            //create unit which will be returned
            let resultingUnit = Object.assign({}, cashUnit);
            resultingUnit.amount = amountToTake;
            resultCash.push(resultingUnit)

            cashUnit.amount = cashUnit.amount - amountToTake;
        });

    if (calculatedAmount > 0) {
        errorFunction({
            error: "Not enough cash in the ATM. Try to withdraw smaller amount."
        });
    } else {
        successFunction({
            resultCash,
            cashData
        });
    }
}

module.exports = {
    getCash
};